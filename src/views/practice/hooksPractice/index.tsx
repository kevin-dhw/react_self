import React from "react";
import useCookie from "./hooks/useCookie";
import { Button } from "antd";

const HooksPractice: React.FC = () => {
  const [value, updateCookie, deleteCookie] = useCookie("hahahha");

  const updateVal = () => {
    updateCookie("更新后的值");
  };
  const deleteVal = () => {
    deleteCookie();
  };
  return (
    <div>
      HooksPractice
      <br />
      <div>值：{value}</div>
      <Button onClick={() => updateVal()}>更新</Button>
      <br />
      <Button onClick={() => deleteVal()}>删除</Button>
    </div>
  );
};
export default HooksPractice;
