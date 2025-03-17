import { create } from "zustand";

interface Item {
  name: string;
  age: number;
}

interface State {
  listData: Item[];
}

interface Action {
  del?: () => {};
  changeItem?: (item: Item[]) => void;
}

const useToDoListStore = create<State & Action>((set) => ({
  listData: [
    {
      name: "jack",
      age: 20,
    },
    {
      name: "rose",
      age: 18,
    },
    {
      name: "lucy",
      age: 20,
    },
  ],
  changeItem: (item) =>
    set((state) => {
      return { listData: [...item, ...state.listData] };
    }),
}));

export default useToDoListStore;
