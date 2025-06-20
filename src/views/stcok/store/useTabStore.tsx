import { create } from "zustand";

export interface TabItemType {
  lable: string;
  isSelected: boolean;
}

export interface State {
  tab: TabItemType[];
}

export interface Action {
  changeTabItem: (idx: number) => void;
}

const useTabStore = create<State & Action>((set) => ({
  tab: [
    {
      lable: "all",
      isSelected: false,
    },
    {
      lable: "default account",
      isSelected: true,
    },
  ],
  changeTabItem: (idx: number) => {
    return set((state) => {
      state.tab.forEach((item, index) => {
        if (idx === index) {
          item.isSelected = true;
        } else {
          item.isSelected = false;
        }
      });
      return { tab: state.tab };
    });
  },
}));

export default useTabStore;
