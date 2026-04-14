"use client";

import { useEffect, useRef } from "react";

export default function DesignEngine({ design }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!design) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = design.canvas.width;
    canvas.height = design.canvas.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    design.objects.forEach((obj) => {
      ctx.fillStyle = "#94a3b8";

      if (obj.type === "wall") ctx.fillStyle = "#334155";
      if (obj.type === "sofa") ctx.fillStyle = "#38bdf8";
      if (obj.type === "table") ctx.fillStyle = "#fbbf24";

      ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
    });
  }, [design]);

  return (
    <canvas className="border rounded-lg w-full" ref={canvasRef} />
  );
}