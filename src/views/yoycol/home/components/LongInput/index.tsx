import React from "react";
import { Button as AntButton } from "antd";
import { StyleButton } from "./style";

const LongInput: React.FC = () => {
  return (
    <>
      LongInput
      <br />
      <StyleButton>我是按钮</StyleButton>
      <br />
      <AntButton>按钮</AntButton>
    </>
  );
};

export default LongInput;
