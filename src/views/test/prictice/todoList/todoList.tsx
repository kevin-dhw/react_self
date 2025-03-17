import React from "react";
import Item from "./components/item";
import List from "./components/list";
import Trash from "./components/trash";
import classNames from "classnames";

const ToDoList: React.FC = () => {
  return (
    <div className=" flex w-full h-full">
      <div
        className={classNames(
          " w-[700px] h-[500px] border-2 border-red-200  m-auto",
          " rounded-md flex gap-2"
        )}
      >
        <div className={classNames(" flex-1 border-[2px]", " rounded-md m-2")}>
          <List></List>
        </div>
        <div className={classNames(" flex-1 border-[2px] rounded-md m-2")}>
          <Item></Item>
          <Trash></Trash>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
