import React, { useEffect } from "react";
import useDropHook from "../../hooks/useDropHook";
import classNames from "classnames";

const Trash: React.FC = () => {
  const { ref, drop, isOver } = useDropHook("item");

  useEffect(() => {
    drop(ref);
  });
  return (
    <div ref={ref}>
      <div
        className={classNames(
          " bg-blue-400 py-[50px] flex",
          isOver ? " bg-blue-100" : ""
        )}
      >
        <div className=" m-auto text-white">垃圾桶</div>
      </div>
    </div>
  );
};
export default Trash;
