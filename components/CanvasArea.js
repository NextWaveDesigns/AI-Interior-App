export default function CanvasArea() {
  return (
    <div className="flex-1 bg-gray-100 relative overflow-hidden">

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* CANVAS */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[900px] h-[600px] bg-white shadow-lg rounded-lg">
          {/* AI Engine renders here later */}
        </div>
      </div>

    </div>
  );
}