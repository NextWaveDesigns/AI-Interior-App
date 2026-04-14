export async function POST(req: Request) {
  const body = await req.json();
  const { prompt } = body;

  const apiKey = process.env.OPENAI_API_KEY;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are an elite interior designer AI.

Always return:
- Layout suggestions
- Furniture recommendations
- Color palette
- Lighting ideas
- Space optimization tips

Keep it clean and structured.
`
        },
        {
          role: "user",
          content: prompt
        }
      ]
    })
  });

  const data = await response.json();

  return Response.json({
    result: data.choices?.[0]?.message?.content || "No response"
  });
}