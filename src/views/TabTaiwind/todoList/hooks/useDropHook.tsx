import { useRef } from "react";
import { useDrop } from "react-dnd";
import useToDoListStore from "../stores";
// import { getRandomStatus } from "../utils";

// useDropaccept放的是 可以接受的drag的type  多个为数组

interface DropProps {
  id?: string;
}

const useDropHook = (type: any, id?: string | undefined) => {
  const ref = useRef<HTMLDivElement>(null);
  const { addItem, delItem } = useToDoListStore();

  const [{ isOver }, drop] = useDrop({
    accept: type,
    drop: (item: DropProps) => {
      if (type === "new-item") {
        addItem(
          {
            id: Math.random().toString().slice(2, 8),
            status: Math.random() > 0.3 ? "todo" : "done",
            content: "待办事项" + Math.random().toString().slice(2, 8),
          },
          id
        );
      } else if (type === "item") {
        delItem(item.id!);
      }
    },
    collect: (monitor) => {
      return { isOver: monitor.isOver() };
    },
  });
  return { ref, isOver, drop };
};

export default useDropHook;
