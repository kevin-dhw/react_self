import React, { useState } from "react";
import { TabsType } from "../type";
import { Input } from "antd";
import { LeftProps } from "./left";
import classNames from "classnames";
interface LeftTabProps
  extends Pick<LeftProps, "tabs" | "getTabItem" | "getSearchValue"> {}

const LeftTab: React.FC<LeftTabProps> = (props) => {
  const { tabs, getTabItem, getSearchValue } = props;
  const [num, setNum] = useState<number>(0);
  const handleTab = (item: Record<string, any>, index: number) => {
    getTabItem?.(item as TabsType<number>);
    setNum(index);
  };

  const [value, setValue] = useState<string>("");
  const handleInputChange = (e: any) => {
    setValue(e.target.value);
    getSearchValue?.(e.target.value);
  };

  return (
    <>
      <div className=" flex border-2 p-3 rounded-lg">
        {tabs?.map((item, index) => {
          return (
            <div
              onClick={() => handleTab(item, index)}
              className={classNames(
                " mr-8 rounded-md w-20% flex",
                index === num ? " bg-purple-700  text-white" : ""
              )}
            >
              <span className=" m-auto">{item.tab}</span>
            </div>
          );
        })}
        <div className=" flex-1">选择</div>
        <div>
          <Input value={value} onChange={(e) => handleInputChange(e)} />
        </div>
      </div>
    </>
  );
};
export default LeftTab;
