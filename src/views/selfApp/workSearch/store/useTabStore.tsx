import { create } from "zustand";
import List1 from "../components/list/list1";
import List2 from "../components/list/list2";
import List3 from "../components/list/list3";
import List4 from "../components/list/list4";

export interface tabItemType {
  name: string;
  isSelected: boolean;
  component: any;
}

export interface State {
  tabList: tabItemType[];
  curTab: tabItemType;
}

export interface Action {
  setCurTab: (item: tabItemType) => void;
}

const useTabStore = create<State & Action>((set) => ({
  tabList: [
    {
      name: "第一",
      isSelected: true,
      component: List1,
    },
    {
      name: "第二",
      isSelected: false,
      component: List2,
    },
    {
      name: "第三",
      isSelected: false,
      component: List3,
    },
    {
      name: "第四",
      isSelected: false,
      component: List4,
    },
  ],
  curTab: {
    name: "第一",
    isSelected: true,
    component: List1,
  },
  setCurTab: (item: tabItemType) => {
    return set(() => {
      return { curTab: item };
    });
  },
}));

export default useTabStore;
