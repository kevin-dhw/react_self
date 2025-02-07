import React, { useRef } from "react";
import { Button } from "antd";
import Son, { SonRef } from "./components/son";
const item = [
  {
    price: 99,
    name: "衣服",
    num: 10,
  },
];

const RandomProject: React.FC = () => {
  const sonRef = useRef<SonRef>(null);
  const handleClick = (str: string) => {
    console.log("1111", str);
  };
  return (
    <div>
      RandomProject
      <Button
        onClick={() => {
          sonRef.current?.handleSonFn();
        }}
      >
        测试调用子
      </Button>
      <Son
        ref={sonRef}
        age={20}
        name={"jack"}
        item={item}
        handleClick={handleClick}
      />
    </div>
  );
};
export default RandomProject;
