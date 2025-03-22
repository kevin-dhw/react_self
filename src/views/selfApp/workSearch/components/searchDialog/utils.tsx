import { SearchItemListType, SearchItemType } from "../../interface";

export const hanldeData = (data: SearchItemType[]) => {
  data.forEach((item: SearchItemType) => {
    item.list.forEach((ele: SearchItemListType) => {
      ele.isChoose = false;
    });
  });
  return data;
};
