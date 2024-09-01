import { useDrag } from "react-dnd";

const useDragHook = () => {
  const [, drag] = useDrag({
    type: "button",
    item: {
      type: "jack",
    },
  });
  //   const [{ isDrag }, drag] = useDrag({
  //     type: "button",
  //     item: {
  //       name: "jack",
  //     },
  //     collect: (monitor) => {
  //       return {
  //         isDrag: monitor.isDragging(),
  //       };
  //     },
  //   });
  return { drag };
};

export default useDragHook;
