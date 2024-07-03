import React, { useState, useMemo } from "react";
import { Button } from "antd";
import Son from "./components/son";

const Other: React.FC = () => {
  const [num, setNum] = useState(12);

  const memoNum = useMemo(() => {
    return ((num * 10) / 3) * 10;
  }, [num]);

  const getMemoNum = () => {
    setNum((num) => num + 1);
    console.log(memoNum);
  };

  return (
    <>
      <Button onClick={getMemoNum}>获取</Button>
      <br />
      <Son />
    </>
  );
};

export default Other;
