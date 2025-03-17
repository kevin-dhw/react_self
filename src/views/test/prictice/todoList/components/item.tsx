import React from "react";
import classNames from "classnames";
import { useDrag } from "react-dnd";

const Item: React.FC = () => {
  const [, drag] = useDrag({
    type: "item",
    item: {
      type: "item",
    },
  });
  return (
    <div ref={drag}>
      <div
        className={classNames(
          " w-[280px] h-[40px] bg-pink-300 ml-6 mt-2 justify-center"
        )}
      >
        item
      </div>
    </div>
  );
};

export default Item;
