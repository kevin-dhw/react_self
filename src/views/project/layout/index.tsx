import React from "react";
import LongTask from "./components/longTask";
import BottomContent from "./components/bottomContent";

const obj = [
  {
    title: "哈哈哈",
    titleColor: "blue",
    content: "号都i哦萨迪克",
  },
  {
    title: "哈",
    titleColor: "blue",
    content: "号都i哦萨迪克",
  },
  {
    title: "哈哈",
    content: "号都i哦克",
  },
  {
    title: "哈哈哈",
    content: "号都i哦萨迪克哦萨迪克",
  },
];
const obj2 = [
  {
    title: "哈",
    content: "号都i哦",
  },
  {
    title: "哈还哦",
    content: "号都i哦萨",
  },
  {
    title: "哈哈",
    titleColor: "pink",
    content: "号都i哦",
  },
  {
    title: "哈哈哈",
    titleColor: "red",
    content: "号都i哦萨迪",
  },
];

interface LayoutType {
  renderBottom?: () => React.ReactNode;
}
const Layout: React.FC<LayoutType> = (props) => {
  const { renderBottom } = props;
  return (
    <>
      {/* 阴影，渐变用tailwind不会写 */}
      <div className=" border-2 rounded-xl">
        <div>
          <LongTask longTaskData={obj} />
          <LongTask longTaskData={obj2} />
        </div>
        <BottomContent>{renderBottom?.()}</BottomContent>
      </div>
    </>
  );
};
export default Layout;
