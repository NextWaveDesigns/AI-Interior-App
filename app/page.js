import CanvasEngine from "@/components/CanvasEngine";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">AI + 2D Engine</h1>

      <CanvasEngine />
    </div>
  );
}