import React, { useState } from "react";
import { TabsType } from "../type";
import { Input } from "antd";
import { LeftProps } from "./left";
import classNames from "classnames";
interface LeftTabProps
  extends Pick<LeftProps, "tabs" | "getTabItem" | "getSearchValue"> {}

const LeftTab: React.FC<LeftTabProps> = (props) => {
  const { tabs, getTabItem, getSearchValue } = props;
  // const [num, setNum] = useState<number>(0);
  const handleTab = (item: Record<string, any>) => {
    getTabItem?.(item as TabsType<number>);
  };

  const [value, setValue] = useState<string>("");
  const handleInputChange = (e: any) => {
    setValue(e.target.value);
    getSearchValue?.(e.target.value);
  };

  return (
    <>
      <div className=" flex border-2 p-3 rounded-lg">
        {tabs?.map((item) => {
          return (
            <div
              onClick={() => handleTab(item)}
              className={classNames(" mr-8")}
            >
              {item.tab}
            </div>
          );
        })}
        <div className=" flex-1">编辑</div>
        <div>
          <Input value={value} onChange={(e) => handleInputChange(e)} />
        </div>
      </div>
    </>
  );
};
export default LeftTab;
