import React, { useState } from "react";
import { SelectPopProps } from "../../selectPop";
import TabLeft from "../tabLeft";
import TabRight from "../tabRight";
import classNames from "classnames";

export interface TabProps extends SelectPopProps {}

const Tab: React.FC<TabProps> = (props) => {
  const { tabList, leftData, rightData, getCurLeftItem, getCurRightItem } =
    props;
  const [curIndex, setCurIndex] = useState(0);

  const handleIndex = (index: number) => {
    setCurIndex(index);
  };

  return (
    <>
      <div className=" flex justify-around mt-3">
        {tabList?.length &&
          tabList.map((item, index) => {
            return (
              <div
                onClick={() => handleIndex(index)}
                className={classNames(
                  " px-6 py-1",
                  index === curIndex ? "bg-slate-400 text-white" : ""
                )}
                key={index}
              >
                {item.label}
              </div>
            );
          })}
      </div>
      {curIndex === 0 ? (
        <TabLeft leftData={leftData} getCurLeftItem={getCurLeftItem}></TabLeft>
      ) : (
        <TabRight
          rightData={rightData}
          getCurRightItem={getCurRightItem}
        ></TabRight>
      )}
    </>
  );
};7

export default Tab;
