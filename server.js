import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/generate", (req, res) => {
  const { prompt } = req.body;

  const layout = [
    { id: 1, type: "bed", x: 80, y: 100, width: 120, height: 80 },
    { id: 2, type: "desk", x: 260, y: 140, width: 100, height: 60 },
    { id: 3, type: "storage", x: 140, y: 260, width: 140, height: 70 }
  ];

  if (prompt?.includes("office")) {
    layout[0].type = "chair";
    layout[1].type = "work desk";
  }

  if (prompt?.includes("studio")) {
    layout.push({
      id: 4,
      type: "sofa bed",
      x: 320,
      y: 80,
      width: 140,
      height: 70
    });
  }

  res.json({ layout });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("AI Backend running on port", PORT);
});
app.get("/", (req, res) => {
  res.send("Backend is running");
});