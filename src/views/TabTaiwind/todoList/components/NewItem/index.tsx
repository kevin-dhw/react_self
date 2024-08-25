import React, { useEffect } from "react";
import useDragHook from "../../hooks/useDragHook";
import classNames from "classnames";

const NewItem: React.FC = () => {
  const { ref, drap, drapping } = useDragHook("new-item");

  useEffect(() => {
    drap(ref);
  }, []);
  return (
    <div
      ref={ref}
      className={classNames(
        " bg-green-600 w-full p-[10px] flex",
        drapping ? " bg-green-200" : ""
      )}
    >
      <span className=" m-auto text-white">新的待办事项</span>
    </div>
  );
};
export default NewItem;
