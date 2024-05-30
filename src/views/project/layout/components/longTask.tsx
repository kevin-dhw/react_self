import React, { CSSProperties } from "react";

export interface LongTaskItem {
  title: string;
  content: string;
  titleColor?: string;
}
export interface LongTaskProps {
  longTaskData: LongTaskItem[];
  style?: CSSProperties;
}

const LongTask: React.FC<LongTaskProps> = (props) => {
  return (
    <>
      <div className=" flex ml-3">
        {props.longTaskData.map((item, index) => {
          return (
            <div className=" mr-6" key={index}>
              <div className=" border-r-2 pr-6 my-4">
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
