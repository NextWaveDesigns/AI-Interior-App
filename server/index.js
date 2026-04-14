import express from "express";
import cors from "cors";

const app = express();

// -------------------- MIDDLEWARE --------------------
app.use(cors());
app.use(express.json());

// -------------------- HEALTH CHECK --------------------
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    service: "NextWave AI Server",
    version: "1.0.0"
  });
});

// -------------------- AI DESIGN ENGINE (MOCK) --------------------
app.post("/generate", (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({
      error: "Prompt is required"
    });
  }

  // Simple mock AI layout generator
  const generateLayout = (input) => {
    const baseLayout = [
      { id: 1, label: "Bed", x: 80, y: 90 },
      { id: 2, label: "Desk", x: 260, y: 140 },
      { id: 3, label: "Storage Wall", x: 140, y: 260 }
    ];

    // lightweight "intelligence" based on keywords
    if (input.toLowerCase().includes("office")) {
      baseLayout[0].label = "Chair";
      baseLayout[1].label = "Work Desk";
    }

    if (input.toLowerCase().includes("studio")) {
      baseLayout.push({ id: 4, label: "Sofa Bed", x: 300, y: 60 });
    }

    if (input.toLowerCase().includes("minimal")) {
      baseLayout.pop();
    }

    return baseLayout;
  };

  const layout = generateLayout(prompt);

  res.json({
    id: Date.now(),
    prompt,
    design: {
      title: "NextWave AI Design",
      description: `Generated layout from: ${prompt}`,
      layout
    }
  });
});

// -------------------- START SERVER --------------------
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});