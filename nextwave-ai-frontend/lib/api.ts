export async function generateLayout(prompt: string) {
  const res = await fetch("https://YOUR-BACKEND-URL/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prompt })
  });

  return res.json();
}