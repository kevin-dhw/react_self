import React, { PropsWithChildren } from "react";
import classNames from "classnames";

interface HeaderProps extends PropsWithChildren {
  title?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { title = "默认的title", children } = props;

  const handleBack = () => {
    console.log("返回");
  };
  return (
    <div>
      <div
        className={classNames(
          " h-[40px] bg-blue-500 flex items-center",
          " px-4 text-white"
        )}
      >
        <div className=" flex-1">{title}</div>
        <div className=" pr-3">{children}</div>
        <div
          className={classNames(
            " pl-3 ",
            children && "border-l-2  border-red-700"
          )}
          onClick={handleBack}
        >
          返回
        </div>
      </div>
    </div>
  );
};

export default Header;
