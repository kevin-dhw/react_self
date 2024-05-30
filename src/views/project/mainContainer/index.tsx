import React from "react";
import Left from "./components/left";
import Right from "./components/right";

export interface MainContextProps {}

const MainContext: React.FC<MainContextProps> = () => {
  return (
    <div className=" flex m-3">
      <div className=" w-70%">
        <Left />
      </div>
      <div className=" w-30%">
        <Right />
      </div>
    </div>
  );
};
export default MainContext;
