import { create } from "zustand";

export interface State {
  totalData: {
    assets: number;
    currentIncome: number;
  };
}

export interface Action {
  changeAssets: (num: number) => void;
}

const useAssetsStore = create<State & Action>((set) => ({
  totalData: {
    assets: 1232248.45,
    currentIncome: 274.78,
  },
  changeAssets: (num: number) => {
    return set((state) => {
      state.totalData.assets = num;
      return { totalData: state.totalData };
    });
  },
  changeCurIncome: (num: number) => {
    return set((state) => {
      state.totalData.currentIncome = num;
      return { totalData: state.totalData };
    });
  },
}));

export default useAssetsStore;
