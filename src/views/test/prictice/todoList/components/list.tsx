import React from "react";
import classNames from "classnames";
import { useDrop } from "react-dnd";
import useToDoListStore from "../store/toDoListStore";

const List: React.FC = () => {
  const { listData } = useToDoListStore();
  const [{ canDrop }, drop] = useDrop(() => ({
    accept: "item",
    drop: (item) => {
      console.log(item, "item22222222222");
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div className="w-full" ref={drop}>
      {listData.map((item, index) => {
        return (
          <div
            key={index}
            className={classNames(
              " w-[280px] h-[40px] bg-pink-300 ml-6 mt-2 justify-center",
              canDrop ? " bg-green-500" : ""
            )}
          >
            {item.name}
          </div>
        );
      })}
    </div>
    
  );
};

export default List;
