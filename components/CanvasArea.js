export default function CanvasArea({ design }) {
  return (
    <div className="flex-1 bg-gray-100 relative overflow-hidden">

      {/* GRID */}
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
        <div className="w-[900px] h-[600px] bg-white shadow-lg rounded-lg relative">

          {!design && (
            <div className="text-gray-400 text-sm flex items-center justify-center h-full">
              No design yet — generate one
            </div>
          )}

          {design?.objects?.map((obj) => (
            <div
              key={obj.id}
              className="absolute"
              style={{
                left: obj.x,
                top: obj.y,
                width: obj.width,
                height: obj.height,
                backgroundColor:
                  obj.type === "sofa"
                    ? "#38bdf8"
                    : obj.type === "table"
                    ? "#fbbf24"
                    : "#334155",
              }}
            />
          ))}

        </div>
      </div>

    </div>
  );
}