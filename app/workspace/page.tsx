"use client";

import { useState } from "react";

export default function Workspace() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  return (
    <div style={{ padding: 20 }}>
      <h2>NWD Workspace</h2>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "100%", height: 100 }}
      />

      <button onClick={() => setOutput("NWD AI: " + input)}>
        Generate
      </button>

      <pre>{output}</pre>
    </div>
  );
}