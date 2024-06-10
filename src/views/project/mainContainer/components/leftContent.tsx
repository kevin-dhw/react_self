import React from "react";
import { Button } from "antd";
import { LeftProps } from "./left";

interface LeftContextProps
  extends Pick<
    LeftProps,
    "listData" | "btnList" | "handleBtn" | "getClickItem"
  > {}

const LeftContent: React.FC<LeftContextProps> = (props) => {
  const { listData, btnList, handleBtn, getClickItem } = props;
  // 点击整个item
  const clickItem = (item: any) => {
    getClickItem?.(item);
  };
  return (
    <div>
      {listData?.map((item, index) => {
        return (
          <div
            onClick={() => clickItem(item)}
            key={index}
            className=" mt-4 p-2 border-2 rounded-lg"
          >
            <div className=" flex">
              <div className=" flex-1">{item.title}</div>
              <div>{item.type}</div>
            </div>
            <div className=" bg-gray-100 rounded-md mt-2 p-2 box-border">
              {item.mainInfo.map((mainItem, mianIndex) => {
                return (
                  <div key={mianIndex} className=" flex">
                    <div className=" mr-8">
                      <strong>作业计划编号：</strong>
                      {mainItem.No}
                    </div>
                    <div className=" mr-8">
                      <strong>工作地点：</strong>
                      {mainItem.place}
                    </div>
                    <div className=" mr-8">
                      <strong>工作负责人：</strong>
                      {mainItem.group}
                    </div>
                    <div>
                      <strong>风险等级：</strong>
                      {mainItem.user}
                    </div>
                  </div>
                );
              })}
              {item.subInfo.map((subItem, subIndex) => {
                return (
                  <div key={subIndex} className="subInfo">
                    <div>{subItem.startTime}</div>
                  </div>
                );
              })}
              <div className=" flex justify-around">
                {btnList?.map((itemBtn) => {
                  return (
                    <Button
                      onClickCapture={(e) => handleBtn?.(e, itemBtn, item)}
                      type="text"
                      key={itemBtn.type}
                    >
                      {itemBtn.value}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default LeftContent;
