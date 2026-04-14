"use client";

import { Stage, Layer, Rect, Text, Group } from "react-konva";
import { useState } from "react";

export default function CanvasBuilder({ design }) {
  const [items, setItems] = useState([
    { id: 1, x: 50, y: 60, label: "Bed" },
    { id: 2, x: 200, y: 120, label: "Desk" },
    { id: 3, x: 120, y: 220, label: "Storage Wall" }
  ]);

  const handleDrag = (id, x, y) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, x, y } : item
      )
    );
  };

  return (
    <Stage width={800} height={500} style={{ border: "1px solid #ccc" }}>
      <Layer>
        {/* Room background */}
        <Rect
          x={0}
          y={0}
          width={800}
          height={500}
          fill="#f8fafc"
        />

        {items.map((item) => (
          <Group
            key={item.id}
            draggable
            x={item.x}
            y={item.y}
            onDragEnd={(e) =>
              handleDrag(item.id, e.target.x(), e.target.y())
            }
          >
            <Rect
              width={120}
              height={60}
              fill="#0ea5e9"
              cornerRadius={8}
              shadowBlur={5}
            />
            <Text
              text={item.label}
              fontSize={14}
              fill="white"
              x={10}
              y={20}
            />
          </Group>
        ))}
      </Layer>
    </Stage>
  );
}