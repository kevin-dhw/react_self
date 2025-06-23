import { create } from "zustand";

export interface TabItemType {
  lable: string;
  isSelected: boolean;
  isShow: boolean;
}

export interface State {
  tab: TabItemType[];
  curIdx: number;
}

export interface Action {
  changeTabItem: (idx: number) => void;
  handleAddTab: (item: TabItemType) => void;
  handleDelTab: (idx: number) => void;
  handleIsShowAll: () => void;
  setCurIdx: (idx: number) => void;
  handleChangeTabName: (lable: string) => void;
  handleUpTab: () => void;
  handleDownTab: () => void;
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
    // {
    //   lable: "account3",
    //   isSelected: false,
    //   isShow: true,
    // },
  ],
  curIdx: 0,
  changeTabItem: (idx: number) => {
    return set((state) => {
      state.tab.forEach((item, index) => {
        if (idx === index) {
          item.isSelected = true;
        } else {
          item.isSelected = false;
        }
      });
      console.log(state.tab, "state.tab");
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
  setCurIdx: (idx: number) => {
    return set(() => {
      return { curIdx: idx };
    });
  },
  handleChangeTabName: (lable: string) => {
    return set((state) => {
      state.tab[state.curIdx].lable = lable;
      return { tab: state.tab };
    });
  },
  handleUpTab: () => {
    return set((state) => {
      const curItem = state.tab[state.curIdx];
      const upItem = state.tab[state.curIdx - 1];
      state.tab.splice(state.curIdx - 1, 2, ...[curItem, upItem]);
      return { tab: state.tab };
    });
  },
  handleDownTab: () => {
    return set((state) => {
      const curItem = state.tab[state.curIdx];
      const downItem = state.tab[state.curIdx + 1];

      state.tab.splice(state.curIdx, 2, ...[downItem, curItem]);
      return { tab: state.tab };
    });
  },
}));

export default useTabStore;
