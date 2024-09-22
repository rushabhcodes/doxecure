import { create } from "zustand";

type Doc = {
    docs: []|undefined;
    hash: string;
    addDoc: (doc: any) => void;
    removeDoc: (doc: any) => void;
    clearDocs: () => void;
    };

export const useDocStore = create(<Doc>(set) => ({
  docs: [],
  addDoc: (doc) => set((state) => ({ docs: [...state.docs, doc] })),
  removeDoc: (doc) => set((state) => ({ docs: state.docs.filter((d) => d !== doc) })),
  clearDocs: () => set({ docs: [] }),
}));
