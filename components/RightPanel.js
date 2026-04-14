export default function RightPanel() {
  return (
    <div className="w-80 border-l p-3 space-y-4">

      <div>
        <h3 className="text-xs font-semibold mb-2">AI Insight</h3>
        <div className="text-sm text-gray-600 border p-2 rounded">
          No design generated yet.
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold mb-2">Selected Object</h3>
        <div className="border p-2 rounded text-sm">
          None selected
        </div>
      </div>

      <button className="w-full bg-black text-white py-2 rounded">
        Improve Design
      </button>

    </div>
  );
}