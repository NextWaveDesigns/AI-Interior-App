"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const generateDesign = async () => {
    setLoading(true);

    const res = await fetch("http://localhost:5001/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>NextWave AI Design Engine</h1>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your space..."
        style={{ width: "100%", height: 120, marginTop: 20 }}
      />

      <button onClick={generateDesign} style={{ marginTop: 10 }}>
        {loading ? "Generating..." : "Generate Design"}
      </button>

      {result && (
        <div style={{ marginTop: 30 }}>
          <h2>{result.design.title}</h2>
          <p>{result.design.description}</p>

          <h3>Elements:</h3>
          <ul>
            {result.design.elements.map((el, i) => (
              <li key={i}>{el}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}