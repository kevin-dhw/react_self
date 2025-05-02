import { create } from "zustand";

export interface tabListItem {
  isSelected: boolean;
  label: string;
}
export interface TabItem {
  title: string;
  isExpand: boolean;
  list: tabListItem[];
}
export interface State {
  TabData: TabItem[];
}
export interface Action {
  setExpandItem: (index: number) => void;
  setActiveItem?: () => void;
}

const useTabStore = create<State & Action>((set) => ({
  TabData: [
    {
      title: "概览",
      isExpand: true,
      list: [
        {
          label: "广告概览",
          isSelected: true,
        },
      ],
    },
    {
      title: "报表",
      isExpand: false,
      list: [
        {
          label: "广告报表",
          isSelected: false,
        },
      ],
    },
  ],
  setExpandItem: (index: number) => {
    return set((state) => {
      state.TabData.forEach((item, idx) => {
        if (idx === index) {
          item.isExpand = !item.isExpand;
        }
      });
      return { TabData: state.TabData };
    });
  },
}));

export default useTabStore;
