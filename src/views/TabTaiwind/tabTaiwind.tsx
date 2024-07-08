import React, { useState } from "react";
import { TabType } from "./interface";
import classNames from "classnames";

interface TabTaiWindProps {
  tabsData?: TabType[];
}

const TabTaiWind: React.FC<TabTaiWindProps> = (props) => {
  const { tabsData } = props;
  const [num, setNum] = useState(0);

  const handleClick = (index: number) => {
    setNum(index);
  };

  return (
    <div className=" flex">
      {tabsData?.map((item, index) => {
        return (
          <div
            onClick={() => handleClick(index)}
            className={classNames(
              " mr-5  px-6",
              index === num ? "bg-red-500 text-white" : ""
            )}
            key={index}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
};

export default TabTaiWind;
