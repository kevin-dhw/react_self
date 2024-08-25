import { useRef } from "react";
import { useDrag } from "react-dnd";

const useDragHook = (type: any, id?: string) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ dragging }, drag] = useDrag({
    type,
    item: {
      id,
    },
    collect(monitor) {
      return {
        dragging: monitor.isDragging(),
      };
    },
  });

  return { ref, dragging, drag };
};

export default useDragHook;
