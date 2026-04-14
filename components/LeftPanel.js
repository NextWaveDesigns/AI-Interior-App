export default function LeftPanel() {
  return (
    <div className="w-72 border-r p-3 space-y-4">

      <textarea
        className="w-full border p-2 text-sm rounded h-24"
        placeholder="Describe your design..."
      />

      <button className="w-full bg-black text-white py-2 rounded">
        Generate Design
      </button>

      <div>
        <h3 className="text-xs font-semibold mb-2">Tools</h3>

        <div className="space-y-2 text-sm">
          <button className="w-full border p-2 rounded">Wall</button>
          <button className="w-full border p-2 rounded">Furniture</button>
          <button className="w-full border p-2 rounded">Move</button>
          <button className="w-full border p-2 rounded">Erase</button>
        </div>

      </div>

    </div>
  );
}