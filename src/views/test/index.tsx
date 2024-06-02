import React, { useEffect, useState } from "react";
import MainContext from "../project/mainContainer";
import { TabsType } from "../project/mainContainer/type";
import { ListDataItemType } from "./data";

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
export const listData: ListDataItemType[] = [
  {
    title: "交流220kv",
    mainInfo: [
      {
        No: "1234",
        place: "江苏",
        group: "第一组",
        user: "负责人",
      },
    ],
    subInfo: [
      {
        startTime: "2024/5/30",
      },
    ],
    content: "今天我干了什么",
  },
  {
    title: "交流220kv",
    mainInfo: [
      {
        No: "1234",
        place: "江苏",
        group: "第一组",
        user: "负责人",
      },
    ],
    subInfo: [
      {
        startTime: "2024/5/30",
      },
    ],
    content: "今天我干了什么",
  },
  {
    title: "交流220kv",
    mainInfo: [
      {
        No: "1234",
        place: "江苏",
        group: "第一组",
        user: "负责人",
      },
    ],
    subInfo: [
      {
        startTime: "2024/5/30",
      },
    ],
    content: "今天我干了什么",
  },
  {
    title: "交流220kv",
    mainInfo: [
      {
        No: "1234",
        place: "江苏",
        group: "第一组",
        user: "负责人",
      },
    ],
    subInfo: [
      {
        startTime: "2024/5/30",
      },
    ],
    content: "今天我干了什么",
  },
];
export interface BtnListType {
  type: string;
  value: string;
}
const btnList: BtnListType[] = [
  {
    type: "edit",
    value: "编辑",
  },
  {
    type: "del",
    value: "删除",
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

  const handleDel = (item: Record<string, any>) => {
    console.log(item, "执行删除");
  };
  const handleEdit = (item: Record<string, any>) => {
    console.log(item, "执行编辑");
  };
  const handleBtn = (itemBtn: BtnListType, item: ListDataItemType) => {
    if (itemBtn.type === "del") {
      handleDel(item);
    } else if (itemBtn.type === "edit") {
      handleEdit(item);
    }
  };

  return (
    <>
      <MainContext
        tabs={tabs}
        getTabItem={getTabItem}
        getSearchValue={getSearchValue}
        listData={listData}
        btnList={btnList}
        handleBtn={handleBtn}
      ></MainContext>
    </>
  );
};

export default Test;
