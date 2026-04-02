import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { text } = await req.json();

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "Rewrite the text in a more professional and clear way.",
      },
      {
        role: "user",
        content: text,
      },
    ],
  });

  return Response.json({
    result: response.choices[0].message.content,
  });
}