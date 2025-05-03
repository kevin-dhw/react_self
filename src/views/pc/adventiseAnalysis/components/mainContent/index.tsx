import React from "react";
import useTabStore from "../../store/useTabStore";

const MainContent: React.FC = () => {
  const { TabData } = useTabStore();
  let component: any;
  TabData.forEach((item) => {
    item.list.forEach((ele) => {
      if (ele.isSelected) {
        component = ele.component;
      }
    });
  });
  return (
    <div>
      <div>{component()}</div>
    </div>
  );
};

export default MainContent;
