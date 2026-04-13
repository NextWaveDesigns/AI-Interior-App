'use client';

import { useWorkspaceStore } from "@/store/workspaceStore";

export default function Workspace() {
  const mode = useWorkspaceStore((s) => s.mode);
  const style = useWorkspaceStore((s) => s.style);
  const setMode = useWorkspaceStore((s) => s.setMode);
  const setStyle = useWorkspaceStore((s) => s.setStyle);

  const prompt = useWorkspaceStore((s) => s.prompt);
  const setPrompt = useWorkspaceStore((s) => s.setPrompt);

  const generateAI = useWorkspaceStore((s) => s.generateAI);
  const response = useWorkspaceStore((s) => s.response);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: 250, padding: 20, background: "#111", color: "#fff" }}>
        <h3>Controls</h3>

        <label>Mode</label>
        <select value={mode} onChange={(e) => setMode(e.target.value as any)}>
          <option>AUTO</option>
          <option>MANUAL</option>
          <option>HYBRID</option>
        </select>

        <br /><br />

        <label>Style</label>
        <select value={style} onChange={(e) => setStyle(e.target.value as any)}>
          <option>modern</option>
          <option>coastal</option>
          <option>luxury</option>
        </select>
      </div>

      <div style={{ flex: 1, padding: 20, background: "#eee" }}>
        <h2>2D / 3D Canvas (Placeholder)</h2>
      </div>

      <div style={{ width: 300, padding: 20, background: "#222", color: "#fff" }}>
        <h3>AI Designer</h3>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          style={{ width: "100%", height: 100 }}
        />

        <button onClick={generateAI} style={{ marginTop: 10, width: "100%" }}>
          Generate
        </button>

        <p style={{ whiteSpace: "pre-wrap" }}>{response}</p>
      </div>
    </div>
  );
}