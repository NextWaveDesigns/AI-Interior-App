"use client";

import { useState } from "react";
import DesignEngine from "@/components/DesignEngine";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [design, setDesign] = useState(null);
  const [loading, setLoading] = useState(false);

  async function generateDesign() {
    setLoading(true);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    setDesign(data.design);

    setLoading(false);
  }

  return (
    <div className="p-6 space-y-4">

      <input
        className="border p-2 w-full"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your design..."
      />

      <button
        onClick={generateDesign}
        className="bg-black text-white px-4 py-2 rounded"
      >
        {loading ? "Generating..." : "Generate Design"}
      </button>

      <DesignEngine design={design} />

    </div>
  );
}