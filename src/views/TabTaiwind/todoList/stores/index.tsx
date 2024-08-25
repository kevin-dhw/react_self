import { create } from "zustand";
import { ItemType } from "../interface";

type State = {
  list: ItemType[];
};

type Action = {
  addItem: (item: ItemType, id: string | undefined) => void;
  delItem: (id: string) => void;
  updateItem: (item: ItemType) => void;
};

const useToDoListStore = create<State & Action>((set) => ({
  list: [
    {
      id: Math.random().toString().slice(2, 8),
      status: "todo",
      content: "待办事项" + Math.random().toString().slice(2, 8),
    },
    {
      id: Math.random().toString().slice(2, 8),
      status: "done",
      content: "待办事项" + Math.random().toString().slice(2, 8),
    },
  ],
  addItem: (item: ItemType, id?: string) => {
    set((state) => {
      if (!id) {
        return {
          list: [...state.list, item],
        };
      }
      const newList = [...state.list];
      const index = newList.findIndex((item) => item.id === id);
      newList.splice(index, 0, item);
      return { list: newList };
    });
  },
  delItem: (id) => {
    set((state) => {
      return {
        list: state.list.filter((item) => item.id !== id),
      };
    });
  },
  updateItem: (item: ItemType) => {
    set((state) => {
      return {
        list: state.list.map((ele) => {
          if (ele.id === item.id) {
            return item;
          }
          return ele;
        }),
      };
    });
  },
}));

export default useToDoListStore;
