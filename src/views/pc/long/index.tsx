import React, { useState } from "react";
import classNames from "classnames";

const ToggleElement = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className="p-4">
        <button
          onClick={toggleVisibility}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {isVisible ? "Hide" : "Show"} Element
        </button>
      </div>
      <div
        className={classNames(
          " border w-[500px] ",
          " transition-all ease-in-out duration-700 delay-100 overflow-hidden",
          !isVisible ? " h-[300px]" : " h-[0px]"
        )}
      >
        123
        <div className=" bg-red-300">456</div>
      </div>
    </div>
  );
};

export default ToggleElement;
