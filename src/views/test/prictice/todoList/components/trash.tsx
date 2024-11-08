import React from "react";
import classNames from "classnames";

const Trash: React.FC = () => {
  return (
    <div>
      <div
        className={classNames(" w-[280px] h-[200px] bg-green-300 ml-6 mt-2")}
      >
        trash
      </div>
    </div>
  );
};
export default Trash;
