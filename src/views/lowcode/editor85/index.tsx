import React, { useEffect } from "react";
import Button from "./components/button";
import useDragHook from "./hooks/useDrag";
// import { useDrag, useDrop } from "react-dnd";
import useDropHook from "./hooks/useDrop";

function renderComponent() {
  return React.createElement(Button, {
    id: 111,
    key: "222",
    name: "jack",
    age: 18,
  });
}

const Editor: React.FC = () => {
  const { drag, dragRef } = useDragHook();
  const { canDrop, drop, dropRef } = useDropHook();

  useEffect(() => {
    drag(dragRef);
  }, [drag, dragRef]);

  useEffect(() => {
    drop(dropRef);
  }, [drop, dropRef]);

  return (
    <div>
      Editor
      <div
        ref={drop}
        style={{ border: canDrop ? "2px solid red" : "" }}
        className=" h-[200px] w-[200px] border-2 border-black"
      >
        1
      </div>
      <br />
      {renderComponent()}
      <br />
      <Button ref={drag}></Button>
    </div>
  );
};
export default Editor;
