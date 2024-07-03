import React from "react";
import Tab from "./components/tab";
import type { TabType, PickType, MainDataType, BtnType } from "./interface";
import Pick from "./components/pick";
import MainContent from "./components/mianContent";

export interface ContentProps {
  tabData: TabType[];
  getTabValue: (item: TabType) => void;
  pickData: PickType[];
  getPickValue: (item: PickType) => void;
  mainData: MainDataType[];
  handleBtn: (item: BtnType) => void;
  isShowPick?: boolean;
}

const Content: React.FC<ContentProps> = (props) => {
  const { isShowPick } = props;
  return (
    <div className=" m-4">
      <Tab {...props} />
      <div className=" flex justify-between">
        <div className=" flex-1">
          <MainContent {...props} />
        </div>
        <div className=" mt-3">{isShowPick && <Pick {...props} />}</div>
      </div>
    </div>
  );
};

export default Content;
