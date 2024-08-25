import React from "react";
import DragContent from "./components/DragContent";
import TabContent from "./components/TabContent";

const ToDoList: React.FC = () => {
  return (
    <div className=" flex h-full p-[12px]">
      <div className=" flex-1 border-r-[1px] border-gray-400">
        <TabContent />
      </div>
      <div className=" flex-3 pl-[14px]">
        <DragContent />
      </div>
    </div>
  );
};

export default ToDoList;
