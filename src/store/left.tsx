import { create } from "zustand";

interface LeftEachItemType {
  tabItem?: Record<string, any> | undefined;
  changeItem: (item: Record<string, any>) => void;
}

export const useLeftStore = create<LeftEachItemType>((set) => ({
  tabItem: undefined,
  changeItem: (item) => set({ tabItem: item }),
}));
