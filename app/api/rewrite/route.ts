import { NextResponse } from "next/server";

const MAX_TEXT_LENGTH = 8000;

export async function POST(req: Request) {
  try {
    let body: unknown;

    try {
      body = await req.json();
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
