import { NextResponse } from "next/server";

const MAX_TEXT_LENGTH = 8000;
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;
const requestWindows = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const key = request.headers.get("x-real-ip") ?? forwardedFor ?? "unknown";
  const now = Date.now();
  if (requestWindows.size > 1000) {
    for (const [ip, entry] of requestWindows) {
      if (now >= entry.resetAt) requestWindows.delete(ip);
    }
  }
  const window = requestWindows.get(key);
  if (!window || now >= window.resetAt) {
    requestWindows.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  window.count += 1;
  return window.count > RATE_LIMIT;
}

export async function POST(req: Request) {
  try {
    const contentLength = Number(req.headers.get("content-length") ?? 0);
    if (contentLength > 32_768) {
      return NextResponse.json({ error: "The request is too large." }, { status: 413 });
    }
    if (isRateLimited(req)) {
      return NextResponse.json(
        { error: "Too many rewrite requests. Please wait a minute and try again." },
        { status: 429, headers: { "Retry-After": "60" } }
      );
    }
    let body: unknown;

    try {
      const rawBody = await req.text();
      if (new TextEncoder().encode(rawBody).byteLength > 32_768) {
        return NextResponse.json({ error: "The request is too large." }, { status: 413 });
      }
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json({ error: "Please send valid text to rewrite." }, { status: 400 });
    }

    if (!body || typeof body !== "object" || !("text" in body) || typeof body.text !== "string") {
      return NextResponse.json({ error: "Please enter the text you want to improve." }, { status: 400 });
    }

    const text = body.text.trim();

    if (!text) {
      return NextResponse.json({ error: "Please enter the text you want to improve." }, { status: 400 });
    }

    if (text.length > MAX_TEXT_LENGTH) {
      return NextResponse.json(
        { error: `Please keep your text under ${MAX_TEXT_LENGTH.toLocaleString()} characters. For longer content, rewrite it in smaller sections.` },
        { status: 413 }
      );
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      console.error("AI rewrite is unavailable because OPENROUTER_API_KEY is not configured.");
      return NextResponse.json(
        { error: "The AI text improver is temporarily unavailable. Please try again later." },
        { status: 503 }
      );
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openrouter/auto",
        messages: [
          {
            role: "user",
            content: `Rewrite the following text in a professional and clear way. Keep its intended meaning, but do not add facts. Only return the rewritten text, nothing else:\n\n${text}`,
          },
        ],
      }),
      signal: AbortSignal.timeout(25000),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter request failed:", response.status, errorText.slice(0, 500));
      return NextResponse.json(
        { error: "The rewrite service could not complete your request. Please try again shortly." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const result = data.choices?.[0]?.message?.content;

    if (typeof result !== "string" || !result.trim()) {
      console.error("OpenRouter returned an empty or unexpected response.");
      return NextResponse.json(
        { error: "The rewrite service returned no text. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ result: result.trim() });
  } catch (error) {
    console.error("AI rewrite request failed:", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { error: "The rewrite service is temporarily unavailable. Please try again." },
      { status: 500 }
    );
  }
}
