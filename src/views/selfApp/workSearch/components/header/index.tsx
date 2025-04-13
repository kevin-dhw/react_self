import React from "react";
import classNames from "classnames";

export interface HeaderProps {
  handleChoose?: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { handleChoose } = props;

  const handleIcon1 = () => {
    console.log("handleIcon1");
  };
  const handleIcon3 = () => {
    console.log("handleIcon3");
  };

  return (
    <div>
      <div
        className={classNames(
          " h-[60px] bg-blue-500 flex justify-between items-center",
          " px-[20px] text-white"
        )}
      >
        <div className=" flex flex-1">
          <div className=" flex-1">作业查询</div>
          <div onClick={() => handleIcon1()} className=" pr-[20px]">
            icon1
          </div>
          <div onClick={() => handleChoose?.()}>筛选</div>
        </div>
        <div className=" px-[20px] py-[10px] h-full">
          <div className=" w-[1px] h-full bg-white"></div>
        </div>
        <div onClick={() => handleIcon3()}>返回</div>
      </div>
    </div>
  );
};

export default Header;
