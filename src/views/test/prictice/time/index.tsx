import React, { useState, useMemo } from "react";
import { Button } from "antd";
import useTimeHooks from "./hooks/useTimeHooks";
import useTimeDoubleContext from "./hooks/useTimeDoubleContext";
import useNumStore from "./stores";
import Son from "./components/son";
import { useNavigate } from "react-router-dom";

const Time: React.FC = () => {
  const [numVal, setNumVal] = useState(1);
  const { num } = useNumStore();
  const { time } = useTimeHooks();
  const { timeAll } = useTimeDoubleContext();
  const navigate = useNavigate();

  const countNum = useMemo(() => {
    return numVal * 10 - 15;
  }, [numVal]);

  return (
    <div>
      {numVal}
      <br />
      <Button
        onClick={() => {
          setNumVal((num) => num + 1);
        }}
      >
        改变数字
      </Button>
      {countNum}
      <br />
      time {time}
      <br />
      {timeAll?.year} {timeAll?.mouth}
      <br />
      {num}
      <br />
      <Son />
      <br />
      <Button
        onClick={() => {
          navigate("/detail", { state: { name: "jack" } });
        }}
      >
        去详情
      </Button>
    </div>
  );
};
export default Time;
