import { create } from "zustand";

export type State = {
  num: number;
};

export type Action = {
  addNum: (num: number) => void;
  reduceNum: (num: number) => void;
};

const useNumStore = create<State & Action>((set) => ({
  num: 10,
  addNum: (num: number) => {
    set((state) => {
      return { num: state.num + num };
    });
  },
  reduceNum: (num: number) => {
    set((state) => {
      return { num: state.num - num };
    });
  },
}));

export default useNumStore;
