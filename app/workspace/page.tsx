"use client";

import { useState } from "react";
import CanvasBuilder from "../components/CanvasBuilder";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [design, setDesign] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateDesign = async () => {
    setLoading(true);

    const res = await fetch("http://localhost:5001/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();

    setDesign(data.design);
    setLoading(false);
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>NextWave AI 2D Builder</h1>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your space..."
        style={{ width: "100%", height: 100 }}
      />

      <button onClick={generateDesign}>
        {loading ? "Generating..." : "Generate AI Layout"}
      </button>

      <div style={{ marginTop: 20 }}>
        <CanvasBuilder design={design} />
      </div>
    </main>
  );
}