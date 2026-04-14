export default function RightPanel({ design }) {
  return (
    <div className="w-80 border-l p-3 space-y-4">

      <div>
        <h3 className="text-xs font-semibold mb-2">AI Insight</h3>

        <div className="text-sm text-gray-600 border p-2 rounded">
          {design
            ? `Generated a ${design.theme} layout with ${design.objects.length} objects.`
            : "No design generated yet."}
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold mb-2">Design Stats</h3>

        <div className="border p-2 rounded text-sm">
          {design ? (
            <>
              Objects: {design.objects.length}
              <br />
              Canvas: {design.canvas.width} x {design.canvas.height}
            </>
          ) : (
            "—"
          )}
        </div>
      </div>

    </div>
  );
}