export type TabType = {
  value: string;
  label: string;
};

// dragList的类型
export type InnerItemTYpe = {
  value: string;
};

export type ItemType = {
  todo: InnerItemTYpe[];
  doing: InnerItemTYpe[];
  done: InnerItemTYpe[];
};

export type ListType = {
  list: ItemType[];
};
