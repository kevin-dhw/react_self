import React from "react";
import Tab from "./components/tab";
import { TabItemType, DataItemType } from "./interface";
import Bottom from "./components/bottom";

export interface SelectPopProps {
  tabList?: TabItemType[];
  leftData?: DataItemType[];
  rightData?: DataItemType[];
  getCurRightItem?: (item: DataItemType, index: number) => void;
  getCurLeftItem?: (item: DataItemType, index: number) => void;
}

const SelectPop: React.FC<SelectPopProps> = (props) => {
  return (
    <div className=" flex flex-col relative">
      <div>
        <Tab {...props} />
      </div>
      <div className=" h-48"></div>
      <div>
        <Bottom {...props}></Bottom>
      </div>
    </div>
  );
};

export default SelectPop;
