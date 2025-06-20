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
  handleAddTab: (item: TabItemType) => void;
}

const useTabStore = create<State & Action>((set) => ({
  tab: [
    {
      lable: "all",
      isSelected: false,
    },
    {
      lable: "account",
      isSelected: true,
    },
    {
      lable: "account2",
      isSelected: false,
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
  handleAddTab: (item: TabItemType) => {
    return set((state) => {
      return { tab: [...state.tab, item] };
    });
  },
  handleDelTab: (idx: number) => {
    return set((state) => {
      state.tab.splice(idx, 1);
      return { tab: [...state.tab] };
    });
  },
}));

export default useTabStore;
