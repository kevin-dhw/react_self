import React, { useState } from "react";
import { TabType } from "../../interface";
import classNames from "classnames";
import { ContentProps } from "../../content";

interface TabProps extends Pick<ContentProps, "tabData" | "getTabValue"> {}

const Tab: React.FC<TabProps> = (props) => {
  const { tabData, getTabValue } = props;
  const [curNum, setCurNum] = useState(0);

  const handleTab = (item: TabType, index: number) => {
    setCurNum(index);
    getTabValue(item);
  };
  return (
    <div className=" flex border-2 rounded-lg">
      {tabData.length &&
        tabData.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => handleTab(item, index)}
              className={classNames(
                " mr-8 p-3",
                index === curNum ? " bg-red-700 text-white" : ""
              )}
            >
              {item.label}
            </div>
          );
        })}
    </div>
  );
};

export default Tab;
