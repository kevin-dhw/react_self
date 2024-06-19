/**
 * 
 * import React, { useEffect, useState } from "react";
// import { useRequest } from "ahooks";
import MainContext from "../project/mainContainer";
import { TabsType } from "../project/mainContainer/type";
import { ListDataItemType, listData } from "./data";

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
  const [tabs] = useState(outTabs);
  // 定义一下列表数据状态 一开始默认是待办的
  const [listDataState, setListDataState] = useState<ListDataItemType[]>(
    listData.filter((item) => item.type === outTabs[0].tab)
  );
  //将单个tab保存下来 搜索的时候要使用
  const [tab, setTab] = useState<string>("");
  const getTabItem = (item: TabsType<number>) => {
    const { tab } = item;
    setTab(tab);
    setListDataState(listData.filter((item) => item.type === tab));
  };

  const [searchValue, setSearchValue] = useState<string>("");
  // 获取查询的参数
  const getSearchValue = (value: string) => {
    setSearchValue(value);
  };
  // 获取查询的数据
  const getSearchData = (searchVal: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = listData.filter(
          (item) => item.title.includes(searchVal) && item.type === tab
        );
        resolve(data);
      }, 1000);
    });
  };
  // 依赖查询  设置查询的结果
  useEffect(() => {
    if (searchValue) {
      console.log(111);
      getSearchData(searchValue).then((res) => {
        setListDataState(res as ListDataItemType[]);
      });
    }
  }, [searchValue]);

  const handleDel = (item: Record<string, any>) => {
    console.log(item, "执行删除");
  };
  const handleEdit = (item: Record<string, any>) => {
    console.log(item, "执行编辑");
  };
  const handleBtn = (e: any, itemBtn: BtnListType, item: ListDataItemType) => {
    e.stopPropagation();
    if (itemBtn.type === "del") {
      handleDel(item);
    } else if (itemBtn.type === "edit") {
      handleEdit(item);
    }
  };
  // 获取每个数据的详情
  const getClickItem = (item: ListDataItemType) => {
    console.log(item, "itemitem");
  };

  return (
    <>
      <MainContext
        tabs={tabs}
        getTabItem={getTabItem}
        getSearchValue={getSearchValue}
        listData={listDataState}
        btnList={btnList}
        handleBtn={handleBtn}
        getClickItem={getClickItem}
      ></MainContext>
    </>
  );
};

export default Test;

 */
