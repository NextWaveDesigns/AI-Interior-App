import { create } from "zustand";

export const useWorkspaceStore = create((set, get) => ({
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
      response: `NWD AI (${style}): ${prompt}`
    });
  }
}));