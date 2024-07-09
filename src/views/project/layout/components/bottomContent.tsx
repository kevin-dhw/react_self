import React, { PropsWithChildren, useContext } from "react";
import BottomContext from "../context/bottomComtext";

interface BottomContentType extends PropsWithChildren {}

const BottomContent: React.FC<BottomContentType> = (props) => {
  const { bottomData } = useContext(BottomContext);
  const { children } = props;
  return (
    <div className=" border-t-2 py-3">
      <div className=" flex justify-around">{children}</div>
      {bottomData?.age ?? ""}
      {bottomData?.age ?? ""}
    </div>
  );
};
export default BottomContent;
