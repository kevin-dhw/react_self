import { Button as AntdButton } from "antd";

const Button = (props: any) => {
  console.log(props, "props");

  return (
    <AntdButton>
      111
      <br />
    </AntdButton>
  );
};

export default Button;
