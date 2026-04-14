"use client";

import TopBar from "@/components/TopBar";
import LeftPanel from "@/components/LeftPanel";
import RightPanel from "@/components/RightPanel";
import CanvasArea from "@/components/CanvasArea";

export default function WorkspacePage() {
  return (
    <div style={styles.container}>
      {/* TOP BAR */}
      <div style={styles.topBar}>
        <TopBar />
      </div>

      {/* MAIN WORKSPACE */}
      <div style={styles.main}>
        {/* LEFT PANEL */}
        <div style={styles.left}>
          <LeftPanel />
        </div>

        {/* CANVAS AREA (CENTER) */}
        <div style={styles.canvas}>
          <CanvasArea />
        </div>

        {/* RIGHT PANEL */}
        <div style={styles.right}>
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif"
  },
  topBar: {
    height: "60px",
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    alignItems: "center",
    padding: "0 12px",
    background: "#111827",
    color: "white"
  },
  main: {
    display: "flex",
    flex: 1,
    overflow: "hidden"
  },
  left: {
    width: "240px",
    borderRight: "1px solid #e5e7eb",
    background: "#f3f4f6",
    overflowY: "auto"
  },
  canvas: {
    flex: 1,
    background: "#f9fafb",
    overflow: "hidden"
  },
  right: {
    width: "280px",
    borderLeft: "1px solid #e5e7eb",
    background: "#f3f4f6",
    overflowY: "auto"
  }
};