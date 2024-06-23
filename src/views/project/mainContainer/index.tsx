import React, { useImperativeHandle, useState } from "react";
import { Button } from "antd";
import Left from "./components/left";
import Right from "./components/right";
import { TabsType } from "./type";
import { ListDataItemType } from "../../test/data";
import { BtnListType } from "../../test";

export interface MainContextProps {
  getTabItem?: (tabItem: TabsType<number>) => void;
  getSearchValue?: (value: string) => void;
  tabs?: TabsType<number>[];
  listData?: ListDataItemType[];
  btnList?: BtnListType[];
  handleBtn?: (e: any, itemBtn: BtnListType, item: ListDataItemType) => void;
  getClickItem?: (item: ListDataItemType) => void;
}
export interface MainContextRef {
  open: (data: Record<string, any>, sendOpenMethods: () => Function) => void;
}

const InnerMainContext: React.ForwardRefRenderFunction<
  MainContextRef,
  MainContextProps
> = (props, ref) => {
  const [initData, setInitData] = useState<Record<string, any>>();

  const [fun, setFun] = useState<Function | undefined>();

  const open = (data: Record<string, any>, sendOpenMethods: () => Function) => {
    console.log("open");
    setFun(sendOpenMethods);
    setInitData(data);
  };

  const handleOutMrthods = () => {
    console.log(111111);
    fun?.("123");
  };

  useImperativeHandle(ref, () => {
    return { open };
  });

  return (
    <div className=" flex m-3">
      {initData && initData.name ? "哈HAHAH" : "不哈哈哈"}
      <Button onClick={handleOutMrthods}>执行外面传进来的</Button>
      <div className=" w-70%">
        <Left {...props} />
      </div>
      <div className=" w-30%">
        <Right />
      </div>
    </div>
  );
};
const MainContext = React.forwardRef(InnerMainContext);
export default MainContext;
