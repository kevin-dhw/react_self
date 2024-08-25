import { useRef } from "react";
import { useDrop } from "react-dnd";

const useDropHook = (type: any) => {
  const ref = useRef<HTMLElement>(null);
  const [{ isOver }, drop] = useDrop({
    accept: type,
    drop: (item) => {
      console.log(item);
    },
    collect: (monitor) => ({ isOver: monitor.isOver }),
  });
  return { ref, isOver, drop };
};

export default useDropHook;
