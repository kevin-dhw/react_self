import React, { CSSProperties, useImperativeHandle } from "react";
import { Button } from "antd";
import LongTask from "./components/longTask";
import TopTittle from "./components/topTittle";
import { LongTaskDatasBtnProps } from "./type";
import type { LongTaskItem } from "./components/longTask";
// import classNames from "classnames";

export interface LayoutType {
  renderBottom?: () => React.ReactNode;
  longTaskDatas: LongTaskDatasBtnProps[];
  titleContent?: () => React.ReactNode;
  style?: CSSProperties;
  handleBtn?: (type: string, item: LongTaskItem[]) => void;
}
export interface layOutRefType {
  open: (item: Record<string, any>) => void;
}

const Layout: React.ForwardRefRenderFunction<layOutRefType, LayoutType> = (
  props,
  ref
) => {
  const { longTaskDatas, titleContent, handleBtn } = props;
  // console.log(longTaskDatas, "longTaskDatas");

  const open = (item: Record<string, any>) => {
    console.log("open", item);
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
                  <div key={index}>
                    <div className=" flex justify-center items-center">
                      <div className=" flex justify-between ">
                        <div>
                          <LongTask
                            key={index}
                            longTaskData={item.longTaskData}
                          ></LongTask>
                        </div>
                      </div>
                    </div>
                    <div className=" flex justify-around">
                      {item.btns &&
                        item.btns.map((ele, idx) => {
                          return (
                            <div key={idx}>
                              <Button
                                onClick={() =>
                                  handleBtn?.(ele.type!, item.longTaskData)
                                }
                              >
                                {ele.content}
                              </Button>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
const OutLayout = React.forwardRef(Layout);
export default OutLayout;
