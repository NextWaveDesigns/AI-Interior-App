export default function TopBar() {
  return (
    <div className="h-14 border-b flex items-center justify-between px-4 bg-white">

      <input
        className="font-semibold text-sm outline-none"
        defaultValue="NextWave Project"
      />

      <div className="flex gap-2 items-center">

        <span className="text-xs text-gray-400">Auto-saving...</span>

        <button className="px-3 py-1 text-sm border rounded">
          Export
        </button>

        <button className="px-3 py-1 text-sm bg-black text-white rounded">
          Share
        </button>

      </div>

    </div>
  );
}