import React from "react";
import LeftTab from "./leftTab";
import LeftContent from "./leftContent";
import { MainContextProps } from "..";

export interface LeftProps extends MainContextProps {}

const Left: React.FC<LeftProps> = (props) => {
  return (
    <>
      <LeftTab {...props} />
      <LeftContent {...props} />
    </>
  );
};
export default Left;
