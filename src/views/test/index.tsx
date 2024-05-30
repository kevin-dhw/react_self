import React, { useEffect, useState } from "react";
import MainContext from "../project/mainContainer";
import { TabsType } from "../project/mainContainer/type";
import { leftTabContext } from "../project/mainContainer/contenxt/leftTabContext";

const outTabs: TabsType<number>[] = [
  {
    tab: "待办",
    value: 1,
  },
  {
    tab: "进行中",
    value: 2,
  },
  {
    tab: "已完成",
    value: 3,
  },
];
const Test: React.FC = () => {
  const [item, setItem] = useState<TabsType<number>>();

  const [tabs] = useState(outTabs);
  const getTabItem = (item: TabsType<number>) => {
    setItem(item);
  };

  useEffect(() => {
    console.log(item, "item改变");
  }, [item]);

  const [searchValue, setSearchValue] = useState<string>("");
  const getSearchValue = (value: string) => {
    setSearchValue(value);
  };
  useEffect(() => {
    console.log(searchValue, "searchValue改变");
  }, [searchValue]);

  return (
    <>
      <leftTabContext.Provider value={{ tabs, getTabItem, getSearchValue }}>
        <MainContext></MainContext>
      </leftTabContext.Provider>
    </>
  );
};

export default Test;
