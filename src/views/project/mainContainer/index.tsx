import React from "react";
import Left from "./components/left";
import Right from "./components/right";
import { TabsType } from "./type";
import { ListDataItemType } from "../../test/data";
import { BtnListType } from "../../test";

export interface MainContextProps {
  getTabItem?: (tabItem: TabsType<number>) => void;
  getSearchValue?: (value: string) => void;
  tabs?: TabsType<number>[];
  listData?: ListDataItemType[];
  btnList?: BtnListType[];
  handleBtn?: (e: any, itemBtn: BtnListType, item: ListDataItemType) => void;
  getClickItem?: (item: ListDataItemType) => void;
}

const MainContext: React.FC<MainContextProps> = (props) => {
  return (
    <div className=" flex m-3">
      <div className=" w-70%">
        <Left {...props} />
      </div>
      <div className=" w-30%">
        <Right />
      </div>
    </div>
  );
};
export default MainContext;
