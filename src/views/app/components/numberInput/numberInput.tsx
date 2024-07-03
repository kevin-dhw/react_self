import React, { ChangeEvent, useState } from "react";
import { Button, Input } from "antd";
import "./index.scss";

interface NumberInputProps {
  num: number;
  handleNum: (num: number) => void;
  mode: string;
  maxNum?: number;
  minNum?: number;
}

// 判断这个数有没有超过一个范围
function isNUmOutRange(num: number, minNum: number, maxNum: number) {
  if (num < minNum) {
    console.log("最小了");
    return false;
  } else if (num > maxNum) {
    console.log("最大了");
    return false;
  }
  return true;
}

const NumberInput: React.FC<NumberInputProps> = (props) => {
  const { num, handleNum, minNum = 0, maxNum = 100, mode } = props;

  const [innerNum, setInnerNum] = useState(num);
  const handleValue = (type: string) => {
    // 是否超出最大最小值
    if (!isNUmOutRange(num, minNum, maxNum)) return;

    if (type === "add") {
      handleNum(innerNum + 1);
      setInnerNum(innerNum + 1);
    } else {
      handleNum(innerNum - 1);
      setInnerNum(innerNum - 1);
    }
  };
  const [innerMode, setInnerMode] = useState(mode);
  const handleEdit = () => {
    if (innerMode === "notInput") {
      setInnerMode("input");
    }
  };

  const [value, setValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    setInnerNum(Number(val));
  };
  const handleConfirm = () => {
    // 是否超出最大最小值
    if (!isNUmOutRange(Number(value), minNum, maxNum)) return;
    if (innerMode === "input") {
      setInnerMode("notInput");
    }
    setInnerNum(Number(value));
    handleNum(innerNum);
  };

  return (
    <div className="number-input">
      <div
        className="number-input-reduce"
        onClick={() => handleValue("reduce")}
      >
        -
      </div>
      {innerMode === "input" ? (
        <Input value={value} onChange={handleChange} />
      ) : (
        <div className="number-input-value">{innerNum ? innerNum : 0}</div>
      )}

      <div className="number-input-add" onClick={() => handleValue("add")}>
        +
      </div>
      <Button onClick={handleEdit}>编辑</Button>
      <Button onClick={handleConfirm}>确定</Button>
    </div>
  );
};
export default NumberInput;
