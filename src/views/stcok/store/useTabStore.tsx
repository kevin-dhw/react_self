import { create } from "zustand";

export interface TabItemType {
  lable: string;
  isSelected: boolean;
  isShow: boolean;
}

export interface State {
  tab: TabItemType[];
}

export interface Action {
  changeTabItem: (idx: number) => void;
  handleAddTab: (item: TabItemType) => void;
  handleDelTab: (idx: number) => void;
  handleIsShowAll: () => void;
}

const useTabStore = create<State & Action>((set) => ({
  tab: [
    {
      lable: "all",
      isSelected: false,
      isShow: true,
    },
    {
      lable: "account",
      isSelected: true,
      isShow: true,
    },
    {
      lable: "account2",
      isSelected: false,
      isShow: true,
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
  handleIsShowAll: () => {
    return set((state) => {
      state.tab[0].isShow = !state.tab[0].isShow;
      return { tab: state.tab };
    });
  },
}));

export default useTabStore;
