export async function POST(req) {
  const { prompt } = await req.json();

  // Simulate slight delay (feels like real AI)
  await new Promise((resolve) => setTimeout(resolve, 800));

  return Response.json({
    result: `✨ Mock AI Response:\n\nYou said: "${prompt}"\n\nHere’s a generated idea based on your input:\n- Clean modern layout\n- Smart automation flow\n- Responsive design optimized for users\n\n(Upgrade to real AI later)`
  });
}