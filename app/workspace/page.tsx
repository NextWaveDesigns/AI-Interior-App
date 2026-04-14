"use client";

import { useState } from "react";

export default function Workspace() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    if (!input) return;

    setLoading(true);

    setTimeout(() => {
      setOutput(
        `NWD AI Design Suggestion:

• Layout: Open flow with better spacing
• Style: Modern luxury finish
• Furniture: Add sectional sofa, center table, accent lighting
• Colors: Neutral base with bold accents

Based on: "${input}"`
      );
      setLoading(false);
    }, 1200);
  };

  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "auto" }}>
      <h1>NWD Design</h1>
      <p>NextWave AI Design Studio</p>

      <textarea
        placeholder="Describe your room (e.g. small living room, coastal style)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          height: 120,
          padding: 10,
          marginTop: 20
        }}
      />

      <button
        onClick={handleGenerate}
        style={{
          marginTop: 15,
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        {loading ? "Designing..." : "Generate Design"}
      </button>

      {output && (
        <div
          style={{
            marginTop: 30,
            padding: 20,
            background: "#f5f5f5",
            borderRadius: 8
          }}
        >
          <pre style={{ whiteSpace: "pre-wrap" }}>{output}</pre>
        </div>
      )}
    </div>
  );
}