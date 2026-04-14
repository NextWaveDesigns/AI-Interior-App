"use client";

import { useEffect, useRef } from "react";

export default function CanvasEngine() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = 400;

    let x = 50;
    let speed = 2;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // background
      ctx.fillStyle = "#0f172a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // moving object
      ctx.fillStyle = "#38bdf8";
      ctx.beginPath();
      ctx.arc(x, 200, 20, 0, Math.PI * 2);
      ctx.fill();

      x += speed;

      if (x > canvas.width || x < 0) speed *= -1;

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full rounded-lg shadow-lg"
    />
  );
}