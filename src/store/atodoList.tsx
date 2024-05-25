import { create } from "zustand";

interface LfetItemType {
  id: number;
  content: string;
  cur: number;
}
export interface LeftListTYpe {
  leftList: LfetItemType[];
}
export const useTodoListStore = create<LeftListTYpe>(() => ({
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
}));
