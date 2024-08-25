import { useRef } from "react";
import { useDrag } from "react-dnd";
// import { ItemType } from "../interface";

// useDrag里面的type放的是 本页面使用的名字

const useDragHook = (type: any, id?: string) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ drapping }, drap] = useDrag({
    type,
    item: {
      id,
    },
    collect: (monitor) => {
      return { drapping: monitor.isDragging() };
    },
  });
  return { ref, drapping, drap };
};
export default useDragHook;
