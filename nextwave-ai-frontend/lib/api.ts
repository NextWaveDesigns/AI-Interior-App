export async function generateLayout(prompt: string) {
  const res = await fetch("https://YOUR-BACKEND-URL/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  });

  if (!res.ok) {
    throw new Error("Failed to generate layout");
  }

  return res.json();
}