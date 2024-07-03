export interface OptionItemType {
  label: string;
  value: string;
}

export interface ListType {
  subTitle: string;
  value: string;
  field: string;
  type: string;
  option?: OptionItemType[];
}
export interface MainDataType {
  title: string;
  list: ListType[];
}
