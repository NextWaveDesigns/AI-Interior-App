"use client";

import { useState } from "react";

import TopBar from "../components/TopBar";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import CanvasArea from "../components/CanvasArea";

import { useCanvasBuilder } from "../components/canvasBuilder";

export default function Workspace() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const { items, addItem, updatePosition } = useCanvasBuilder();

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
        body: JSON.stringify({ prompt: input })
      });

      const data = await res.json();

      console.log("RAW AI RESPONSE:", data.result);

      let parsed;

      try {
        parsed = JSON.parse(data.result);
      } catch (err) {
        setOutput("❌ AI did not return valid JSON.\n\n" + data.result);
        setLoading(false);
        return;
      }

      // Show readable plan
      setOutput(JSON.stringify(parsed.plan, null, 2));

      // Clear old items first (optional reset behavior)
      // NOTE: comment this out if you want stacking designs
      // items.length = 0;

      // Add AI items to canvas
      if (parsed.items && Array.isArray(parsed.items)) {
        parsed.items.forEach((item: any) => {
          addItem(item.type, item.x, item.y);
        });
      }

    } catch (err: any) {
      setOutput("❌ Server error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      
      <TopBar />

      <div style={{ display: "flex", flex: 1 }}>
        
        <LeftPanel addItem={addItem} />

        <CanvasArea
          items={items}
          updatePosition={updatePosition}
        />

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