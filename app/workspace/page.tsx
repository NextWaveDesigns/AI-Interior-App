"use client";

import TopBar from "@/components/TopBar";
import LeftPanel from "@/components/LeftPanel";
import RightPanel from "@/components/RightPanel";
import CanvasArea from "@/components/CanvasArea";

export default function WorkspacePage() {
  return (
    <div className="workspace">
      {/* TOP BAR */}
      <div className="topbar">
        <TopBar />
      </div>

      {/* MAIN LAYOUT */}
      <div className="main">
        {/* LEFT PANEL */}
        <aside className="left">
          <LeftPanel />
        </aside>

        {/* CANVAS */}
        <section className="canvas">
          <CanvasArea />
        </section>

        {/* RIGHT PANEL */}
        <aside className="right">
          <RightPanel />
        </aside>
      </div>

      <style jsx>{`
        .workspace {
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: #0b0f19;
        }

        .topbar {
          height: 60px;
          flex-shrink: 0;
          border-bottom: 1px solid #1f2937;
          background: #111827;
          display: flex;
          align-items: center;
        }

        .main {
          display: flex;
          flex: 1;
          overflow: hidden;
        }

        .left {
          width: 260px;
          background: #111827;
          border-right: 1px solid #1f2937;
          overflow-y: auto;
        }

        .canvas {
          flex: 1;
          background: #0b0f19;
          overflow: hidden;
        }

        .right {
          width: 300px;
          background: #111827;
          border-left: 1px solid #1f2937;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
}