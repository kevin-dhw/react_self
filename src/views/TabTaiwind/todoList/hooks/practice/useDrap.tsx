import { useRef } from "react";
import { useDrag } from "react-dnd";

const useDragHook = (type: any) => {
  const ref = useRef<HTMLElement>(null);
  const [{ drapping }, drap] = useDrag({
    type,
    item: {},
    collect: (monitor) => {
      return { drapping: monitor.isDragging() };
    },
  });
  return { ref, drapping, drap };
};

export default useDragHook;
