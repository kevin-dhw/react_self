import React from "react";

export interface HeaderBackProps {
  title?: string;
  handleBack?: () => void;
}

const HeaderBack: React.FC<HeaderBackProps> = (props) => {
  const { title = "title", handleBack } = props;
  return (
    <div>
      <div className=" flex justify-between pt-[10px] ">
        <div
          onClick={() => {
            handleBack?.();
          }}
        >
          back
        </div>
        <div>{title}</div>
        <div></div>
      </div>
    </div>
  );
};

export default HeaderBack;
