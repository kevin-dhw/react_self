import React from "react";
import useTabStore from "../../store/useTabStore";
import classNames from "classnames";

const AccountTab: React.FC = () => {
  const { tab } = useTabStore();
  return (
    <div className=" pt-[12px] px-[10px] flex justify-between">
      <div className=" flex">
        {tab.map((item, index) => {
          return (
            <div
              key={index}
              className={classNames(
                " pr-[16px] text-gray-500 ",
                item.isSelected && " text-black"
              )}
            >
              {item.lable}
            </div>
          );
        })}
        <div>
          <div className=" relative">
            <div className=" inline-block bg-slate-400 px-[7px] rounded-full  absolute top-[1px]">
              +
            </div>
          </div>
        </div>
      </div>
      <div className=" flex text-gray-500">
        <div className=" mr-[10px]">search</div>
        <div>manage</div>
      </div>
    </div>
  );
};

export default AccountTab;
