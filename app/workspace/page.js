import TopBar from "@/components/TopBar";
import LeftPanel from "@/components/LeftPanel";
import RightPanel from "@/components/RightPanel";
import CanvasArea from "@/components/CanvasArea";

export default function Workspace() {
  return (
    <div className="h-screen flex flex-col">

      <TopBar />

      <div className="flex flex-1 overflow-hidden">

        <LeftPanel />

        <CanvasArea />

        <RightPanel />

      </div>

    </div>
  );
}