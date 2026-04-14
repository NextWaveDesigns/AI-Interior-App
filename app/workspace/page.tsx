"use client";

import { useState } from "react";
import AIOutput from "../components/AIOutput";
import CanvasBuilder from "./canvas";
import TopBar from "../components/TopBar";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import CanvasArea from "../components/CanvasArea";
import { useCanvasBuilder } from "../components/canvasBuilder";

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
      setOutput("Error generating design.");
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
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: 28 }}>NWD Design Workspace</h1>
        <p style={{ opacity: 0.6 }}>
          NextWave AI Design Studio
        </p>
      </div>

      {/* TOP CONTROLS */}
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
        placeholder="Describe your space (size, problems, goals...)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          height: 100,
          padding: 10,
          borderRadius: 6,
          border: "none",
          marginBottom: 10
        }}
      />

      {/* BUTTON */}
      <button
        onClick={handleGenerate}
        style={{
          padding: "10px 20px",
          background: "#22c55e",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        {loading ? "Designing..." : "Generate AI Design"}
      </button>

      {/* MAIN LAYOUT */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          marginTop: 30
        }}
      >
        {/* AI OUTPUT */}
        <div>
          <AIOutput text={output} />
        </div>

        {/* CANVAS */}
        <div>
          <h2 style={{ marginBottom: 10 }}>Design Canvas</h2>
          <CanvasBuilder />
        </div>
      </div>
    </div>
  );
}