import { create } from "zustand";

export interface State {
  num: number;
}

export interface Action {
  handleDecrement: (num: number) => void;
}

const useTestStore = create<State & Action>((set) => ({
  num: 10,
  handleDecrement: (num: number) => {
    return set((state) => {
      return { num: state.num - num };
    });
  },
}));

export default useTestStore;
