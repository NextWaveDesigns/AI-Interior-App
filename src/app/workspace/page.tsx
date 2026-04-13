"use client";

import { useWorkspaceStore } from "../../store/workspaceStore";

export default function Workspace() {
  const { prompt, setPrompt, generateAI, response } = useWorkspaceStore();

  return (
    <div style={{ padding: 20 }}>
      <h2>NWD Workspace</h2>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: "100%", height: 100 }}
      />

      <button onClick={generateAI}>Generate</button>

      <pre>{response}</pre>
    </div>
  );
}