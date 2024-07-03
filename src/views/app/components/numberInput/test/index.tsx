/*
import React, { useState } from "react";
import NumberInput from "../app/components/numberInput/numberInput";

function getArrSum(arr: number[]) {
  const sum = arr.reduce((pre: number, next: number) => {
    return pre + next;
  }, 0);
  return sum;
}
const Test: React.FC = () => {
  const [numArr, setNumArr] = useState([
    { value: 0, mode: "notInput" },
    { value: 0, mode: "notInput" },
    { value: 0, mode: "notInput" },
  ]);
  const numberArr = numArr.map((item) => item.value);
  const [sum, setSum] = useState(getArrSum(numberArr));

  return (
    <>
      <div style={{ fontSize: "40px", marginLeft: "30px" }}> {sum}</div>
      {numArr.map((item, index) => {
        return (
          <NumberInput
            num={item.value}
            mode={item.mode}
            key={index}
            handleNum={(num: number) => {
              setNumArr((arr) => {
                const result = [...arr];
                result[index].value = num;
                // 计算总和
                const numberArr = result.map((item) => item.value);
                setSum(getArrSum(numberArr));
                return result;
              });
            }}
          ></NumberInput>
        );
      })}
    </>
  );
};

export default Test;
*/
