import { create } from "zustand";

export interface timeItemType {
  time: string;
  isSelected: boolean;
}
export interface State {
  curTimeItem: timeItemType;
  timeList: timeItemType[];
}
export interface Action {
  setTimeItem: (item: timeItemType) => void;
}

const useTimeStore = create<State & Action>((set) => ({
  curTimeItem: {
    time: "本月",
    isSelected: true,
  },
  timeList: [
    {
      time: "本周",
      isSelected: false,
    },
    {
      time: "本月",
      isSelected: true,
    },
    {
      time: "本季",
      isSelected: false,
    },
    {
      time: "本年",
      isSelected: false,
    },
  ],
  setTimeItem: (item: timeItemType) => {
    return set(() => {
      return { curTimeItem: item };
    });
  },
}));

export default useTimeStore;
