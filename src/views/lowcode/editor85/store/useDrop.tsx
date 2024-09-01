import { useDrop } from "react-dnd";


const useDropHook = () => {
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
  return { canDrop, drop };
};
export default useDropHook;
