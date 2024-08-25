import React from "react";
import List from "./components/List";
import NewItem from "./components/NewItem";
import Trash from "./components/Trash";

const ToDoList: React.FC = () => {
  return (
    <div className=" flex">
      <div className=" m-auto w-[800px] h-[400px] border-2 flex p-[10px] gap-2">
        <div className=" flex-2 border-2 border-red-200 rounded-md">
          <List />
        </div>
        <div
          className=" flex-1 border-2 border-red-200 rounded-md
                      flex flex-col gap-2 p-[10px]"
        >
          <div>
            <NewItem />
          </div>
          <div>
            <Trash />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ToDoList;
