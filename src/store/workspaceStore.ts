import { create } from "zustand";

export const useWorkspaceStore = create((set, get) => ({
  prompt: "",
  response: "",

  setPrompt: (prompt) => set({ prompt }),

  generateAI: () => {
    const { prompt } = get();
    set({
      response: "NWD AI response: " + prompt
    });
  }
}));