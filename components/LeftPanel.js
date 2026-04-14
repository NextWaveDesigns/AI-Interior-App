export default function LeftPanel({ prompt, setPrompt, onGenerate, loading }) {
  return (
    <div className="w-72 border-r p-3 space-y-4">

      <textarea
        className="w-full border p-2 text-sm rounded h-24"
        placeholder="Describe your design..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={onGenerate}
        className="w-full bg-black text-white py-2 rounded"
      >
        {loading ? "Generating..." : "Generate Design"}
      </button>

      <div className="text-xs text-gray-500">
        AI converts your text into a spatial layout
      </div>

    </div>
  );
}