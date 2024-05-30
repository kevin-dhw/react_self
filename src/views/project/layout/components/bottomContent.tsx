import React, { PropsWithChildren } from "react";

interface BottomContentType extends PropsWithChildren {}

const BottomContent: React.FC<BottomContentType> = (props) => {
  const { children } = props;
  return (
    <div className=" border-t-2 py-3">
      <div className=" flex justify-around">{children}</div>
    </div>
  );
};
export default BottomContent;
