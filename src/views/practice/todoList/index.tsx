import React from "react";
import NewItem from "./components/NewItem";
import List from "./components/List";
import GabageBin from "./components/GarbageBin";

export interface TodoListProps {
  curNum?: number;
  changeCurNum?: (num: number) => void;
}

const TodoList: React.FC = (props: TodoListProps) => {
  console.log(props, "11");

  return (
    <div
      className="w-[800px] h-[400px] m-auto mt-100 p-10 
        border-2 border-black flex justify-between gap-2"
    >
      <div className=" flex-2 border-2">
        <List />
      </div>
      <div className=" flex-1 flex flex-col gap-2">
        <div className=" flex-1 border-2">
          <NewItem />
        </div>
        <div className=" flex-2 border-2">
          <GabageBin />
        </div>
      </div>
    </div>
  );
};
export default TodoList;
