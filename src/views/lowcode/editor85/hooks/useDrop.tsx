import { useDrop } from "react-dnd";
import { useRef } from "react";

const useDropHook = () => {
  const dropRef = useRef<HTMLElement>(null);
  const [{ canDrop }, drop] = useDrop({
    accept: "button",
    drop: (item) => {
      console.log(item);
    },
    collect(monitor) {
      return {
        canDrop: monitor.canDrop(),
      };
    },
  });
  return { dropRef, canDrop, drop };
};
export default useDropHook;
