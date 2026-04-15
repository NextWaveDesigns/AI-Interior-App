"use client";

import { CanvasItem } from "./canvasBuilder";

type Props = {
  items: CanvasItem[];
  updatePosition: (id: number, x: number, y: number) => void;
};

export default function CanvasArea({ items, updatePosition }: Props) {
  const handleDrag = (e: any, id: number) => {
    updatePosition(id, e.clientX - 50, e.clientY - 50);
  };

  return (
    <div style={{ flex: 1, position: "relative", background: "#e2e8f0" }}>
      {items.map((item) => (
        <div
          key={item.id}
          onMouseDown={(e) => handleDrag(e, item.id)}
          style={{
            position: "absolute",
            left: item.x,
            top: item.y,
            width: 100,
            height: 100,
            background: "#3b82f6",
            borderRadius: 8
          }}
        />
      ))}
    </div>
  );
}