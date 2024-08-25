import { create } from "zustand";
import { TabType, ListType } from "../interface";
import { tabData, dragListData } from "../data";

type State = {
  tabData: TabType[];
  curTab: number | undefined;
  dragListData: ListType[];
};
type Action = {
  setTabData: (data: TabType[]) => void;
  setCurTab: (num: number) => void;
};

const useToDoListStore = create<State & Action>((set) => ({
  tabData: tabData,
  //   curTab: undefined,
  curTab: 0,
  dragListData: dragListData,
  setTabData: (data: TabType[]) => {
    set((state) => {
      return {
        ...state,
        tabData: [...state.tabData, ...data],
      };
    });
  },
  setCurTab: (num: number) => {
    set((state) => {
      return {
        ...state,
        curTab: num,
      };
    });
  },
}));

export default useToDoListStore;
