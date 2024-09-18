import React from "react";
import { useDrag, useDrop } from "react-dnd";
import classNames from "classnames";
import "./index.scss";

function Box() {
  const [{ isDragging }, drag] = useDrag({
    type: "box",
    item: {
      name: "jack",
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const cs = classNames("box", isDragging ? " bg-red-100" : "");
  return <div ref={drag} className={cs}></div>;
}

function Container() {
  const [{ isOver }, drop] = useDrop({
    accept: "box",
    drop(item) {
      console.log(item, "item");
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  const cs = classNames("container", isOver ? " bg-green-100" : "");
  return <div ref={drop} className={cs}></div>;
}

const Dnd: React.FC = () => {
  return (
    <div>
      <Container></Container>
      <Box></Box>
    </div>
  );
};
export default Dnd;
