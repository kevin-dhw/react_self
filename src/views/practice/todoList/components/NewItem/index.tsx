import React, { useEffect } from "react";
import classNames from "classnames";
import useDragHook from "../../hooks/useDragHook";

const NewItem: React.FC = () => {
  const { ref, dragging, drag } = useDragHook("new-item");

  useEffect(() => {
    drag(ref);
  }, []);

  const cs = classNames(
    "h-100 border-2 border-black",
    "leading-100 text-center text-2xl",
    "bg-green-300",
    "cursor-move select-none",
    dragging ? "border-dashed bg-white" : ""
  );

  return (
    <div ref={ref} className={cs}>
      新的待办事项
    </div>
  );
};
export default NewItem;
