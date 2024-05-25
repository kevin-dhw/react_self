import React, { useState } from "react";
import TodoList from "../practice/todoList";

const Test: React.FC = () => {
  const [curNum, setCurNum] = useState<number>(0);
  function changeCurNum(num: number) {
    setCurNum(num);
  }
  return (
    <>
      <TodoList curNum={curNum} changeCurNum={changeCurNum} />
    </>
  );
};

export default Test;
