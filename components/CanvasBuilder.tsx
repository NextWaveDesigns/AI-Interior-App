"use client";

import { Stage, Layer, Rect, Text } from "react-konva";

export default function CanvasBuilder() {
  return (
    <Stage width={800} height={500}>
      <Layer>
        <Rect x={0} y={0} width={800} height={500} fill="#f8fafc" />
        <Text text="Canvas Ready" x={20} y={20} />
      </Layer>
    </Stage>
  );
}