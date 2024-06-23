import React from "react";
import Echarts from "../practice/components/echarts";

function getValue<T>(value: T) {
  console.log(value);
}
getValue<number>(1);

const Test: React.FC = () => {
  return (
    <>
      <Echarts />
    </>
  );
};

export default Test;
