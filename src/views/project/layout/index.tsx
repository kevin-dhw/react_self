import React, { CSSProperties } from "react";
import BottomContent from "./components/bottomContent";
import LongTask from "./components/longTask";
import TopTittle from "./components/topTittle";
import { LongTaskDatasType } from "./type";

interface LayoutType {
  renderBottom?: () => React.ReactNode;
  longTaskDatas: LongTaskDatasType[];
  titleContent?: () => React.ReactNode;
  style?: CSSProperties;
}
const Layout: React.FC<LayoutType> = (props) => {
  const { renderBottom, longTaskDatas, titleContent } = props;

  return (
    <>
      {/* 阴影，渐变用tailwind不会写 */}
      <div className=" border-2 rounded-xl">
        <TopTittle titleContent={titleContent} />
        <div>
          {longTaskDatas.length &&
            longTaskDatas.map((item, index) => {
              return (
                <LongTask
                  key={index}
                  longTaskData={item.longTaskData}
                ></LongTask>
              );
            })}
        </div>
        <BottomContent>{renderBottom?.()}</BottomContent>
      </div>
    </>
  );
};
export default Layout;
