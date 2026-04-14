import { useState } from "react";

export type CanvasItem = {
  id: number;
  type: string;
  x: number;
  y: number;
};

export function useCanvasBuilder() {
  const [items, setItems] = useState<CanvasItem[]>([]);

  const addItem = (type: string, x = 100, y = 100) => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        type,
        x,
        y
      }
    ]);
  };

  const updatePosition = (id: number, x: number, y: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, x, y } : item
      )
    );
  };

  return {
    items,
    addItem,
    updatePosition
  };
}