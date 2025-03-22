export interface SearchItemListType {
  value: string;
  subTitle: string;
  isChoose?: boolean;
}
export interface SearchItemType {
  title: string;
  field: string;
  type: string;
  showType?: string;
  list: SearchItemListType[];
}
