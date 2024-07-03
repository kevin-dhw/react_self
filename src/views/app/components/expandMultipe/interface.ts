export type SelectItemType = {
  value: string;
  label: string;
};

export interface dataType {
  list: SelectItemType[];
  field: string;
  type: string;
  subTitle: string;
  fn: (item: SelectItemType) => void;
}
export type SelectDataType = {
  field: string;
  type: string;
  subTitle: string;
  value: string;
  list: SelectItemType[];
  fn: (item: SelectItemType) => void;
};
