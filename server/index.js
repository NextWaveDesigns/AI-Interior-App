import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// MOCK AI DESIGN ENGINE
app.post("/generate", (req, res) => {
  const { prompt } = req.body;

  // fake "AI response"
  const result = {
    id: Date.now(),
    prompt,
    design: {
      title: "AI Generated Space",
      description: `Design created from: ${prompt}`,
      layout: "modern-minimal",
      colors: ["#0ea5e9", "#111827", "#f8fafc"],
      elements: [
        "smart storage wall",
        "floating desk",
        "ambient lighting"
      ]
    }
  };

  res.json(result);
});

app.listen(5001, () => {
  console.log("Server running on http://localhost:5001");
});