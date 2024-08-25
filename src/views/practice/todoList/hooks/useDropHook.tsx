import { useRef } from "react";
import { useDrop } from "react-dnd";
import { useTodoListStore, ListItem } from "../stores";

const useDropHook = (type: any, id?: string) => {
  const ref = useRef<HTMLDivElement>(null);
  const { addItem, deleteItem } = useTodoListStore();

  const [{ isOver }, drop] = useDrop(() => {
    return {
      accept: type,
      drop(item: ListItem, monitor) {
        console.log(item);
        const didDrop = monitor.didDrop();
        if (didDrop) return;

        if (type === "new-item") {
          addItem(
            {
              id: Math.random().toString().slice(2, 8),
              status: "todo",
              content: "待办事项" + Math.random().toString().slice(2, 8),
            },
            id
          );
        } else if (type === "list-item") {
          deleteItem(item!.id);
        }
      },
      collect(monitor) {
        return {
          isOver: monitor.isOver(),
        };
      },
    };
  });

  return { ref, isOver, drop };
};

export default useDropHook;
