import { create } from "zustand";

interface LfetItemType {
  id: number;
  content: string;
  cur: number;
}
export interface LeftListTYpe {
  leftList: LfetItemType[];
  activeNum: number;
  changeNum: (num: number) => void;
}
export const useTodoListStore = create<LeftListTYpe>((set) => ({
  leftList: [
    {
      id: 1,
      content: "待学",
      cur: 0,
    },
    {
      id: 2,
      content: "已学",
      cur: 1,
    },
    {
      id: 3,
      content: "计划中",
      cur: 2,
    },
  ],
  activeNum: 0,
  changeNum: (num) => set({ activeNum: num }),
}));
