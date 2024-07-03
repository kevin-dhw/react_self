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
  list: SelectItemType[];
  value: string;
  fn: (item: SelectItemType) => void;
};
