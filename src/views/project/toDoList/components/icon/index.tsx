import React, { PropsWithChildren } from "react";

export interface IconProps extends PropsWithChildren {}
const Icon: React.FC<IconProps> = (props) => {
  const { children } = props;

  return (
    <div>
      Icon
      <br />
      {children}
    </div>
  );
};

export default Icon;
