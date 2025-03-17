import React, { PropsWithChildren } from "react";
import useTestContext from "../hooks/useTestContext";

export interface SonProps extends PropsWithChildren {}

const Son: React.FC<SonProps> = (props) => {
  const { children } = props;
  const { name, age } = useTestContext();
  return (
    <div className=" h-[100vh]">
      <div>son</div>
      {children && children}
      <br />
      name: {name}
      <br />
      age: {age}
    </div>
  );
};

export default Son;
