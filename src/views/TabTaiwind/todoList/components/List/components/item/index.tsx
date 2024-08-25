import React, { useEffect, useState } from "react";
import { ItemType } from "../../../../interface";
import useDragHook from "../../../../hooks/useDragHook";
import classNames from "classnames";
import useToDoListStore from "../../../../stores";

interface ItemProps {
  item: ItemType;
}

const Item: React.FC<ItemProps> = (props) => {
  const { item } = props;
  const { ref, drapping, drap } = useDragHook("item", item?.id);
  const { updateItem } = useToDoListStore();
  const [edit, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState(item.content);

  useEffect(() => {
    drap(ref);
  });

  return (
    <div ref={ref}>
      <div
        className={classNames(
          " bg-red-200 p-[12px]",
          drapping ? " bg-red-50" : "",
          item.status === "done" ? " bg-red-300" : ""
        )}
      >
        {edit ? (
          <div>
            <input
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              onBlur={() => {
                setEdit(false);
                updateItem({
                  ...item,
                  content: inputValue,
                });
              }}
            />
          </div>
        ) : (
          <div
            onDoubleClick={() => {
              setEdit(true);
            }}
          >
            {item.content} {item.status === "done" ? "已完成" : "进行中"}
          </div>
        )}
      </div>
    </div>
  );
};
export default Item;
