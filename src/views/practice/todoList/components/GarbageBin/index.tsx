import React, { useEffect } from "react";
import classNames from "classnames";
import useDropHook from "../../hooks/useDropHook";

const GabageBin: React.FC = () => {
  const { ref, isOver, drop } = useDropHook("list-item");

  useEffect(() => {
    drop(ref);
  }, []);

  const cs = classNames(
    "h-200 border-2 border-black",
    "bg-orange-300",
    "leading-200 text-center text-2xl",
    "cursor-move select-none",
    isOver ? "bg-yellow-400 border-dashed" : ""
  );

  return (
    <div ref={ref} className={cs}>
      垃圾箱
    </div>
  );
};
export default GabageBin;
