import { create } from "zustand";

export const useAccordionStore = create((set) => ({
  active: 0,
  setActive: (index) => set(() => ({ active: index })),
}));
