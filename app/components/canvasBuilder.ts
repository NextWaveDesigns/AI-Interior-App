/**
 * NextWave Canvas Builder Engine
 * Pure logic (NO JSX)
 */

export type CanvasItem = {
  id: number;
  type: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

export function createLayout(prompt: string): CanvasItem[] {
  const layout: CanvasItem[] = [
    { id: 1, type: "bed", x: 80, y: 100, width: 120, height: 80 },
    { id: 2, type: "desk", x: 260, y: 140, width: 100, height: 60 },
    { id: 3, type: "storage", x: 140, y: 260, width: 140, height: 70 }
  ];

  const p = prompt.toLowerCase();

  if (p.includes("office")) {
    layout[0].type = "chair";
    layout[1].type = "work desk";
  }

  if (p.includes("studio")) {
    layout.push({
      id: 4,
      type: "sofa bed",
      x: 320,
      y: 80,
      width: 140,
      height: 70
    });
  }

  if (p.includes("minimal")) {
    layout.pop();
  }

  return layout;
}

// snap to grid
export function snap(value: number, grid = 20): number {
  return Math.round(value / grid) * grid;
}

// collision detection
export function isOverlapping(a: CanvasItem, b: CanvasItem): boolean {
  return !(
    a.x + a.width < b.x ||
    a.x > b.x + b.width ||
    a.y + a.height < b.y ||
    a.y > b.y + b.height
  );
}