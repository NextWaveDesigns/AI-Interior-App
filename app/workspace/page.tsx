"use client";

import { useState } from "react";

// Layout Components
import TopBar from "../components/TopBar";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import CanvasArea from "../components/CanvasArea";

// Canvas Logic
import { useCanvasBuilder } from "../components/canvasBuilder";

export default function Workspace() {
  // AI STATE
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  // CANVAS STATE
  const {
    items,
    addItem,
    updatePosition,
    setSelectedId
  } = useCanvasBuilder();

  // AI GENERATE FUNCTION
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
          prompt: input
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
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* TOP BAR */}
      <TopBar />

      {/* MAIN LAYOUT */}
      <div style={{ display: "flex", flex: 1 }}>

        {/* LEFT PANEL */}
        <LeftPanel addItem={addItem} />

        {/* CANVAS AREA */}
        <CanvasArea
          items={items}
          updatePosition={updatePosition}
          setSelectedId={setSelectedId}
        />

        {/* RIGHT PANEL (AI) */}
        <RightPanel
          input={input}
          setInput={setInput}
          generate={handleGenerate}
          output={output}
          loading={loading}
        />

      </div>
    </div>
  );
}