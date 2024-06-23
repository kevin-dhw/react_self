import React, { CSSProperties, useState, useImperativeHandle } from "react";
import BottomContent from "./components/bottomContent";
import LongTask from "./components/longTask";
import TopTittle from "./components/topTittle";
import { LongTaskDatasType } from "./type";
import type { LongTaskItem } from "./components/longTask";
import classNames from "classnames";

export interface LayoutType {
  renderBottom?: () => React.ReactNode;
  longTaskDatas: LongTaskDatasType[];
  titleContent?: () => React.ReactNode;
  style?: CSSProperties;
}
export interface layOutRefType {
  open: (item: Record<string, any>) => void;
}

const Layout: React.ForwardRefRenderFunction<layOutRefType, LayoutType> = (
  props,
  ref
) => {
  const { renderBottom, longTaskDatas, titleContent } = props;
  const [dataItem, setDataList] = useState<LongTaskItem>();
  const getItemDetail = (item: LongTaskItem) => {
    setDataList(item);
  };
  const renderDataList = () => {
    if (dataItem) {
      return <>{dataItem.content}</>;
    } else {
      return <>暂无数据</>;
    }
  };
  const wordColor = {
    red: " text-red-600",
    green: " text-green-600",
    yellow: " text-yellow-600",
  };
  const color = wordColor["yellow"];

  const open = (item: Record<string, any>) => {
    console.log("open", item);
  };
  const doOpen = () => {
    const value = wordColor["red"];
    open({ color: value });
  };
  useImperativeHandle(ref, () => {
    return {
      open,
    };
  });

  return (
    <>
      {/* 阴影，渐变用tailwind不会写 */}
      <div className=" border-2 rounded-xl">
        <TopTittle titleContent={titleContent} />
        <div className=" flex justify-between">
          <div>
            {longTaskDatas.length &&
              longTaskDatas.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" flex justify-center items-center"
                  >
                    <div className={classNames(color)}>123</div>
                    <div className=" flex justify-between ">
                      <div>
                        <LongTask
                          getItemDetail={getItemDetail}
                          key={index}
                          longTaskData={item.longTaskData}
                        ></LongTask>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div>
            <div className=" mr-5">
              {renderDataList()} 123
              <button onClick={doOpen}>执行打开</button>
            </div>
          </div>
        </div>
        <BottomContent>{renderBottom?.()}</BottomContent>
      </div>
    </>
  );
};
const OutLayout = React.forwardRef(Layout);
export default OutLayout;
