import React, { useContext, useState } from "react";
import { leftTabContext } from "../contenxt/leftTabContext";
import { useLeftStore } from "../../../../store/left";
import { TabsType } from "../type";
import { Input } from "antd";

const LeftTab: React.FC = () => {
  const { tabs, getTabItem, getSearchValue } = useContext(leftTabContext);
  const { changeItem } = useLeftStore();
  const handleTab = (item: Record<string, any>) => {
    changeItem(item);
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
            <div onClick={() => handleTab(item)} className=" mr-8">
              {item.tab}
            </div>
          );
        })}
        <div>
          <Input value={value} onChange={(e) => handleInputChange(e)} />
        </div>
      </div>
    </>
  );
};
export default LeftTab;
