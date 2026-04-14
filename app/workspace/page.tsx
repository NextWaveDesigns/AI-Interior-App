"use client";

import { useState } from "react";

export default function Workspace() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [style, setStyle] = useState("modern");
  const [room, setRoom] = useState("living room");

  const handleGenerate = async () => {
    if (!input) return;

    setLoading(true);
    setOutput("");

    try {
      const res = await fetch("/api/design", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt: `
Design a ${room} in ${style} style.

User description:
${input}
          `
        })
      });

      const data = await res.json();
      setOutput(data.result);
    } catch (err) {
      setOutput("Error generating design. Try again.");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: 20,
        fontFamily: "sans-serif"
      }}
    >
      {/* HEADER */}
      <div style={{ marginBottom: 30 }}>
        <h1 style={{ fontSize: 32 }}>NWD Design</h1>
        <p style={{ opacity: 0.7 }}>NextWave AI Design Studio</p>
      </div>

      {/* CONTROLS */}
      <div
        style={{
          display: "flex",
          gap: 10,
          marginBottom: 15,
          flexWrap: "wrap"
        }}
      >
        <select
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          style={{ padding: 10 }}
        >
          <option>living room</option>
          <option>bedroom</option>
          <option>kitchen</option>
          <option>office</option>
        </select>

        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          style={{ padding: 10 }}
        >
          <option>modern</option>
          <option>coastal</option>
          <option>luxury</option>
          <option>minimalist</option>
        </select>
      </div>

      {/* INPUT */}
      <textarea
        placeholder="Describe your space (size, vibe, problems, goals...)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          height: 120,
          padding: 12,
          borderRadius: 6,
          border: "none",
          marginBottom: 15
        }}
      />

      {/* BUTTON */}
      <button
        onClick={handleGenerate}
        style={{
          padding: "12px 20px",
          background: "#22c55e",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        {loading ? "Designing..." : "Generate AI Design"}
      </button>

      {/* OUTPUT */}
      {output && (
        <div
          style={{
            marginTop: 30,
            padding: 20,
            background: "#1e293b",
            borderRadius: 10,
            lineHeight: 1.6
          }}
        >
          <h3 style={{ marginBottom: 10 }}>AI Design Plan</h3>
          <div style={{ whiteSpace: "pre-wrap" }}>{output}</div>
        </div>
      )}
    </div>
  );
}