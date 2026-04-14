"use client";

import { useState } from "react";

type Item = {
  id: number;
  x: number;
  y: number;
};

export default function CanvasBuilder() {
  const [items, setItems] = useState<Item[]>([]);
  const [draggingId, setDraggingId] = useState<number | null>(null);

  const addItem = () => {
    setItems([
      ...items,
      { id: Date.now(), x: 50, y: 50 }
    ]);
  };

  const startDrag = (id: number) => {
    setDraggingId(id);
  };

  const stopDrag = () => {
    setDraggingId(null);
  };

  const onMove = (e: React.MouseEvent) => {
    if (draggingId === null) return;

    setItems((prev) =>
      prev.map((item) =>
        item.id === draggingId
          ? { ...item, x: e.clientX - 50, y: e.clientY - 50 }
          : item
      )
    );
  };

  return (
    <div>
      <button onClick={addItem} style={{ marginBottom: 10 }}>
        + Add Furniture
      </button>

      <div
        onMouseMove={onMove}
        onMouseUp={stopDrag}
        style={{
          width: "100%",
          height: 400,
          background: "#e2e8f0",
          position: "relative",
          borderRadius: 8
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            onMouseDown={() => startDrag(item.id)}
            style={{
              width: 100,
              height: 100,
              background: "#3b82f6",
              position: "absolute",
              left: item.x,
              top: item.y,
              cursor: "grab",
              borderRadius: 6
            }}
          />
        ))}
      </div>
    </div>
  );
}