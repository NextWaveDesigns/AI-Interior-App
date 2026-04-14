"use client";

import { useState } from "react";
import TopBar from "@/components/TopBar";
import LeftPanel from "@/components/LeftPanel";
import RightPanel from "@/components/RightPanel";
import CanvasArea from "@/components/CanvasArea";

export default function Workspace() {
  const [prompt, setPrompt] = useState("");
  const [design, setDesign] = useState(null);
  const [loading, setLoading] = useState(false);

  async function generateDesign() {
    setLoading(true);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();

    setDesign(data.design);
    setLoading(false);
  }

  return (
    <div className="h-screen flex flex-col">

      <TopBar />

      <div className="flex flex-1 overflow-hidden">

        <LeftPanel
          prompt={prompt}
          setPrompt={setPrompt}
          onGenerate={generateDesign}
          loading={loading}
        />

        <CanvasArea design={design} />

        <RightPanel design={design} />

      </div>

    </div>
  );
}