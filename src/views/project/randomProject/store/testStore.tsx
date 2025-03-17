import { create } from "zustand";

export interface State {
  num: number;
  str: string;
}

export interface Action {
  changeNum: (num: number) => void;
  changeStr?: (str: number) => void;
}

const useTestStore = create<State & Action>((set) => ({
  num: 10,
  str: "string",
  changeNum: (num: number) => {
    return set((state) => {
      return { num: state.num + num };
    });
  },
}));

export default useTestStore;
