export async function POST(req) {
  const { prompt } = await req.json();

  await new Promise((r) => setTimeout(r, 600));

  // AI DESIGN ENGINE OUTPUT (structured)
  return Response.json({
    design: {
      theme: "modern_ai_space",
      canvas: {
        width: 800,
        height: 500
      },
      objects: [
        {
          id: "obj_1",
          type: "wall",
          x: 0,
          y: 0,
          width: 800,
          height: 20
        },
        {
          id: "obj_2",
          type: "sofa",
          x: 100,
          y: 300,
          width: 120,
          height: 60
        },
        {
          id: "obj_3",
          type: "table",
          x: 300,
          y: 280,
          width: 80,
          height: 50
        }
      ],
      prompt
    }
  });
}