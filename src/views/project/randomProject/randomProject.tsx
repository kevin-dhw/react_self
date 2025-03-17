import React, { useRef, useState, useEffect, useMemo } from "react";
import { Button } from "antd";
import Son, { SonRef } from "./components/son";
import useTestStore from "./store/testStore";
import classNames from "classnames";

const item = [
  {
    price: 99,
    name: "衣服",
    num: 10,
  },
];

const RandomProject: React.FC = () => {
  const sonRef = useRef<SonRef>(null);
  const { num, changeNum } = useTestStore();
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count, "count");
  }, [count]);
  const handleClick = (str: string) => {
    console.log("1111", str);
  };
  const memoCount = useMemo(() => {
    return count * 20;
  }, [count]);

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
      >
        <div>传给子组件的ReactNode</div>
      </Son>
      <br />
      <Button
        onClick={() => {
          changeNum(5);
          setCount((val) => val + 1);
        }}
      >
        改变num
      </Button>
      store: {num}
      <div
        className={classNames(
          // " bg-red-200 border-2",
          count ? " text-fuchsia-600" : " text-red-900"
        )}
      >
        11
      </div>
      <br />
      memoCount: {memoCount}
    </div>
  );
};
export default RandomProject;
