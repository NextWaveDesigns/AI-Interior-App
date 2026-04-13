import { create } from "zustand";

type Mode = "AUTO" | "MANUAL" | "HYBRID";
type Style = "coastal" | "modern" | "luxury";

type WorkspaceState = {
  mode: Mode;
  style: Style;
  prompt: string;
  response: string;

  setMode: (mode: Mode) => void;
  setStyle: (style: Style) => void;
  setPrompt: (prompt: string) => void;
  generateAI: () => void;
};

export const useWorkspaceStore = create<WorkspaceState>()((set, get) => ({
  mode: "HYBRID",
  style: "modern",
  prompt: "",
  response: "",

  setMode: (mode) => set({ mode }),
  setStyle: (style) => set({ style }),
  setPrompt: (prompt) => set({ prompt }),

  generateAI: () => {
    const { prompt, style } = get();
    set({
      response: `AI (${style}) redesigning: "${prompt}".
- Adjusted layout
- Improved flow
- Applied ${style} style`,
    });
  },
}));