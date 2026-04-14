"use client";

import { useState } from "react";
import { generateLayout } from "@/lib/api";

type Item = {
  id: number;
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

export default function WorkspacePage() {
  const [prompt, setPrompt] = useState("");
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    try {
      setLoading(true);
      const data = await generateLayout(prompt);
      setItems(data.layout);
    } catch (err) {
      console.error(err);
      alert("Failed to generate layout");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      
      {/* TOP BAR */}
      <div style={styles.topbar}>
        <div>NextWave AI</div>
        <div>Workspace</div>
      </div>

      {/* INPUT */}
      <div style={styles.controls}>
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your room (e.g. modern office)"
          style={styles.input}
        />
        <button onClick={handleGenerate} style={styles.button}>
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>

      {/* CANVAS */}
      <div style={styles.canvas}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              position: "absolute",
              left: item.x,
              top: item.y,
              width: item.width,
              height: item.height,
              background: "#0ea5e9",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 6,
              fontSize: 12
            }}
          >
            {item.type}
          </div>
        ))}
      </div>

    </div>
  );
}

const styles = {
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  topbar: {
    height: "60px",
    background: "#111827",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 16px"
  },
  controls: {
    padding: 16,
    display: "flex",
    gap: 10,
    borderBottom: "1px solid #e5e7eb"
  },
  input: {
    padding: 10,
    width: 300,
    border: "1px solid #ccc",
    borderRadius: 6
  },
  button: {
    padding: "10px 16px",
    background: "#0ea5e9",
    color: "white",
    border: "none",
    borderRadius: 6,
    cursor: "pointer"
  },
  canvas: {
    flex: 1,
    position: "relative",
    background: "#f8fafc"
  }
};