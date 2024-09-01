import { useDrag } from "react-dnd";
import { useRef } from "react";

const useDragHook = () => {
  const dragRef = useRef<HTMLElement>(null);
  const [{ isDrag }, drag] = useDrag({
    type: "button",
    item: {
      name: "jack",
    },
    collect: (monitor) => {
      return {
        isDrag: monitor.isDragging(),
      };
    },
  });
  return { dragRef, isDrag, drag };
};

export default useDragHook;
