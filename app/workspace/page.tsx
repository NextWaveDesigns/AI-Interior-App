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

      const parsed = JSON.parse(data.result);

      setOutput(JSON.stringify(parsed.plan, null, 2));

      parsed.items.forEach((item: any) => {
        addItem(item.type, item.x, item.y);
      });

    } catch (err) {
      setOutput("Error parsing AI response.");
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