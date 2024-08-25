import React, { useEffect, Fragment, useState } from "react";
import classNames from "classnames";
import useDragHook from "../../hooks/useDragHook";
import useDropHook from "../../hooks/useDropHook";
import { useTodoListStore, ListItem } from "../../stores";

const List: React.FC = () => {
  const list = useTodoListStore((state) => state.list);
  return (
    <div>
      {list.length
        ? list.map((item) => {
            return (
              <Fragment key={item.id}>
                <Gap id={item.id} />
                <Item data={item} />
              </Fragment>
            );
          })
        : "暂无待办事项"}
      <Gap />
    </div>
  );
};

interface GapProps {
  id?: string;
}
const Gap: React.FC<GapProps> = (props) => {
  const { id } = props;
  console.log(id, "11");

  const { ref, isOver, drop } = useDropHook("new-item", id);
  useEffect(() => {
    drop(ref);
  }, []);

  const cs = classNames("h-[16px]", isOver ? "bg-red-300" : "");
  return <div ref={ref} className={cs}></div>;
};

interface ItemProps {
  data: ListItem;
}
const Item: React.FC<ItemProps> = (props) => {
  const { data } = props;
  const { ref, dragging, drag } = useDragHook("list-item", data.id);
  const [editing, setEditing] = useState(false);
  const [editingContent, setEditingContent] = useState(data.content);
  const { updateItem } = useTodoListStore();

  useEffect(() => {
    drag(ref);
  }, []);

  return (
    <div
      ref={ref}
      onDoubleClick={() => {
        setEditing(true);
      }}
      className={classNames(
        "h-40 border-2 border-black bg-blue-300 p-10",
        "flex justify-start items-center",
        "text-xl tracking-wide",
        dragging ? "border-dashed bg-white" : ""
      )}
    >
      {/* <input type="checkbox" className="w-[20px] h-[20px] mr-10" /> */}
      <p>
        {editing ? (
          <input
            value={editingContent}
            onChange={(e) => {
              setEditingContent(e.target.value);
            }}
            onBlur={() => {
              setEditing(false);
              updateItem({
                ...data,
                content: editingContent,
              });
            }}
          />
        ) : (
          data.content
        )}
      </p>
    </div>
  );
};
export default List;
