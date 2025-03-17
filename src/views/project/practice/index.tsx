import React from "react";
import useTestStore from "./store/testStore";
import Son from "./components/son";

const Practice: React.FC = () => {
  const { num, handleDecrement } = useTestStore();
  return (
    <div className=" h-[100vh]">
      <div>Practice</div>
      num: {num}
      <br />
      <div
        onClick={() => {
          handleDecrement(2);
        }}
      >
        减少
      </div>
      <Son>
        <div>1233</div>
      </Son>
    </div>
  );
};

export default Practice;
