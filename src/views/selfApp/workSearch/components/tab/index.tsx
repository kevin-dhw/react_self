import React from "react";
import useTabStore, { tabItemType } from "../../store/useTabStore";
import classNames from "classnames";

const Tab: React.FC = () => {
  const { tabList, setCurTab } = useTabStore();
  const handleTabItem = (item: tabItemType, index: number) => {
    tabList.forEach((ele, idx) => {
      if (index === idx) {
        ele.isSelected = true;
      } else {
        ele.isSelected = false;
      }
    });
    setCurTab(item);
  };
  return (
    <div className=" flex justify-around">
      {tabList.map((item, index) => {
        return (
          <div
            onClick={() => handleTabItem(item, index)}
            className={classNames(
              " rounded-md mb-[10px] px-[10px]",
              item.isSelected ? " bg-blue-400 text-white" : ""
            )}
            key={index}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export default Tab;
