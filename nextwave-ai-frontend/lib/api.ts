export async function generateLayout(prompt: string) {
  const res = await fetch(
    "https://ai-interior-app-backend.onrender.com/api/generate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    }
  );

  if (!res.ok) {
    throw new Error("API request failed");
  }

  return res.json();
}