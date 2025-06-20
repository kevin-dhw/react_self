import React from "react";
import useTabStore from "../../store/useTabStore";
import classNames from "classnames";

export interface AccountTabProps {
  handleAdd: () => void;
  handleManage: () => void;
}

const AccountTab: React.FC<AccountTabProps> = (props) => {
  const { tab, changeTabItem } = useTabStore();
  const { handleAdd, handleManage } = props;

  const clickItem = (idx: number) => {
    changeTabItem(idx);
  };
  return (
    <div className=" pt-[12px] px-[10px] flex justify-between">
      <div className=" flex">
        {tab.map((item, index) => {
          return (
            <div
              onClick={() => clickItem(index)}
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
          <div onClick={() => handleAdd()} className=" relative">
            <div className=" inline-block bg-slate-400 px-[7px] rounded-full  absolute top-[1px]">
              +
            </div>
          </div>
        </div>
      </div>
      <div className=" flex text-gray-500">
        <div className=" mr-[10px]">search</div>
        <div onClick={() => handleManage()}>manage</div>
      </div>
    </div>
  );
};

export default AccountTab;
