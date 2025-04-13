import React, { useState } from "react";
import classNames from "classnames";
import useTimeStore, { timeItemType } from "../../store/useTimeStore";

const SearchTitle: React.FC = () => {
  const [show, setShow] = useState(false);
  const { timeList, setTimeItem, curTimeItem } = useTimeStore();

  const handleTimeSelect = () => {
    setShow(!show);
  };
  const handleItem = (item: timeItemType, index: number) => {
    timeList.forEach((ele, idx) => {
      if (index === idx) {
        ele.isSelected = true;
      } else {
        ele.isSelected = false;
      }
    });
    setTimeItem(item);
  };
  const comfirm = () => {
    console.log(curTimeItem, "curTimeItem");
    setShow(!show);
  };
  return (
    <div>
      <div
        className={classNames(
          " bg-blue-200 h-[60px] rounded-t-xl",
          " flex items-center"
        )}
      >
        <div
          onClick={() => handleTimeSelect()}
          className=" rounded-[20px] px-[20px] py-[4px] border-[1px] ml-[20px]"
        >
          时间
        </div>
      </div>
      {show && (
        <div
          className={classNames(
            " bg-slate-100 fixed top-[192px] right-0 bottom-0 left-0"
          )}
        >
          <div className="flex justify-around mt-3">
            {timeList.map((item, index) => {
              return (
                <div
                  key={item.time}
                  onClick={() => handleItem(item, index)}
                  className={classNames(
                    " rounded-lg px-[10px]",
                    item.isSelected ? " bg-red-300 text-white" : ""
                  )}
                >
                  {item.time}
                </div>
              );
            })}
          </div>
          <div className=" flex mt-[100px]">
            <div className=" flex-1"></div>
            <div onClick={() => comfirm()} className=" pr-[36px]">
              确定
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchTitle;
