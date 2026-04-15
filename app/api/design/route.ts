export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prompt } = body;

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return Response.json({
        result: JSON.stringify({
          plan: {
            layout: "Missing API Key",
            furniture: "",
            colors: "",
            lighting: "",
            tips: ""
          },
          items: []
        })
      });
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.7,
        messages: [
          {
            role: "system",
            content: `
You are an AI interior designer.

You MUST return ONLY valid JSON.
NO text before or after.
NO markdown.
NO explanations.

FORMAT:

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
    { "type": "table", "x": 200, "y": 200 }
  ]
}

RULES:
- Always include at least 2 items
- Coordinates must be between 50–500
- Types: sofa, table, bed, chair
- Return ONLY JSON
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

    let content = data.choices?.[0]?.message?.content || "";

    // 🔧 CLEAN RESPONSE (REMOVE MARKDOWN / EXTRA TEXT)
    content = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // 🔧 TRY PARSE
    try {
      const parsed = JSON.parse(content);

      return Response.json({
        result: JSON.stringify(parsed)
      });
    } catch (err) {
      // 🚨 FALLBACK SAFE RESPONSE
      return Response.json({
        result: JSON.stringify({
          plan: {
            layout: "AI response formatting issue",
            furniture: "Try again",
            colors: "Try again",
            lighting: "Try again",
            tips: "AI returned invalid format"
          },
          items: [
            { type: "sofa", x: 100, y: 120 },
            { type: "table", x: 220, y: 200 }
          ]
        })
      });
    }

  } catch (error: any) {
    return Response.json({
      result: JSON.stringify({
        plan: {
          layout: "Server error",
          furniture: error.message,
          colors: "",
          lighting: "",
          tips: ""
        },
        items: []
      })
    });
  }
}