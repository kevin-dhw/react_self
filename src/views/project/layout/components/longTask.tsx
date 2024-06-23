import React from "react";
import classNames from "classnames";
import { LayoutType } from "..";

export interface LongTaskItem {
  title: string;
  content: string;
  titleColor?: string;
}

// s Omit<LayoutType, "renderBottom" | "titleContent">
export interface LongTaskProps extends Pick<LayoutType, "style"> {
  longTaskData: LongTaskItem[];
  getItemDetail?: (item: LongTaskItem) => void;
}

const LongTask: React.FC<LongTaskProps> = (props) => {
  const { longTaskData, getItemDetail } = props;
  // const len: number = props.longTaskData.length - 1;
  // index === longTaskData.length - 1 ? " border-r-0" : ""
  return (
    <>
      <div className=" flex ml-3">
        {longTaskData.map((item, index) => {
          return (
            <div
              onClick={() => getItemDetail?.(item)}
              key={index}
              className=" mr-6"
            >
              <div
                className={classNames(
                  " border-r-2 pr-6 my-4",
                  index === longTaskData.length - 1 ? " border-none" : ""
                )}
              >
                <span style={{ color: item.titleColor }}>{item.title}：</span>
                {item.content}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default LongTask;
