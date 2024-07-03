export type SelectItemType = {
  value: string;
  label: string;
};

export type SelectType = "select" | "expand" | undefined;
export type SelectDataType = {
  title: string;
  list: SelectItemType[];
  isShowContent: boolean;
  field: string;
  type: string;
  fn: (item: SelectItemType) => void;
};
