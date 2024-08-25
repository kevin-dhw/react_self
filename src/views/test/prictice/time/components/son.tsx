import React from "react";
import { Button } from "antd";
import useNumStore from "../stores";

const Son: React.FC = () => {
  const { addNum, reduceNum } = useNumStore();
  return (
    <div>
      <Button
        onClick={() => {
          addNum(5);
        }}
      >
        增加
      </Button>
      <Button
        onClick={() => {
          reduceNum(5);
        }}
      >
        减少
      </Button>
    </div>
  );
};

export default Son;
