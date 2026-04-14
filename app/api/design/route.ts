export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt } = body;

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return Response.json({ result: "Missing API Key" });
    }

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
You are an AI interior designer.

Return ONLY valid JSON:

{
  "plan": {
    "layout": "...",
    "furniture": "...",
    "colors": "...",
    "lighting": "...",
    "tips": "..."
  },
  "items": [
    { "type": "sofa", "x": 100, "y": 120 },
    { "type": "table", "x": 220, "y": 200 }
  ]
}

Rules:
- Always include at least 2 items
- Coordinates between 0–500
- No extra text
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
      result: data.choices?.[0]?.message?.content || ""
    });

  } catch (error: any) {
    return Response.json({
      result: "Server error: " + error.message
    });
  }
}