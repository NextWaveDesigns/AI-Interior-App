export async function POST(req) {
  const { prompt } = await req.json();

  return Response.json({
    design: {
      theme: "nextwave_modern",
      canvas: { width: 900, height: 600 },
      objects: [
        {
          id: "1",
          type: "wall",
          x: 0,
          y: 0,
          width: 900,
          height: 20,
        },
        {
          id: "2",
          type: "sofa",
          x: 120,
          y: 300,
          width: 140,
          height: 60,
        },
        {
          id: "3",
          type: "table",
          x: 320,
          y: 260,
          width: 90,
          height: 50,
        },
      ],
      prompt,
    },
  });
}