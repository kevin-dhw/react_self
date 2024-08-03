import React, { useState } from "react";
import { TabType } from "../../interface";
import classNames from "classnames";
import _ from "lodash";

interface PlusTabProps {
  tabData: TabType[];
}

const PlusTab: React.FC<PlusTabProps> = (props) => {
  const { tabData } = props;
  const renderTabData = _.cloneDeep(tabData).splice(0, 7);
  console.log(tabData);
  const [num, setNum] = useState(0);

  const handleChangeTab = (index: number) => {
    setNum(index);
  };

  return (
    <div className=" h-16 flex items-center">
      <div className=" overflow-y-hidden flex-1 pl-[10px]">
        {tabData?.length &&
          renderTabData.map((item, index) => {
            return (
              <div
                onClick={() => handleChangeTab(index)}
                key={index}
                className={classNames(
                  " inline-block mr-[18px] my-[14px] cursor-pointer",
                  num === index
                    ? " text-yellow-400 border-b-2 border-yellow-100"
                    : "",
                  "hover:text-yellow-400"
                )}
              >
                {item.label}
              </div>
            );
          })}
      </div>
      <div className="group pr-[14px] cursor-pointer flex relative">
        <span className="">更多</span>
        {/* invisible */}
        <div
          className="invisible group-hover:visible absolute top-6 right-4
                     h-[200px] w-[150px] border rounded
                    "
        >
          <div className=" h-full overflow-auto border">
            {tabData?.length &&
              tabData.map((item, index) => {
                return (
                  <div key={index} className=" p-[6px] hover:bg-gray-100 ">
                    {item.value}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlusTab;
