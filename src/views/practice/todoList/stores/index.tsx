import { create } from "zustand";

export interface ListItem {
  id: string;
  status: "todo" | "done";
  content: string;
}

type State = {
  list: ListItem[];
};

type Action = {
  addItem: (item: ListItem, id?: string) => void;
  deleteItem: (id: string) => void;
  updateItem: (item: ListItem) => void;
};
// <State & Action>
export const useTodoListStore = create<State & Action>((set) => ({
  list: [],
  addItem: (item: ListItem, id?: string) => {
    set((state) => {
      if (!id) {
        return {
          list: [...state.list, item],
        };
      }
      // 哪里放入就插入哪里
      const newList = [...state.list];
      const index = newList.findIndex((item) => item.id === id);
      newList.splice(index, 0, item);
    

      return { list: newList };
    });
  },
  deleteItem: (id) => {
    set((state) => {
      return {
        list: state.list.filter((item) => item.id != id),
      };
    });
  },
  updateItem: (item: ListItem) => {
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
