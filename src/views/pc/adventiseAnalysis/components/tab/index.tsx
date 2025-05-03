import React from "react";
import useTabStore from "../../store/useTabStore";
import classNames from "classnames";

const Tab: React.FC = () => {
  const { TabData, setExpandItem, setActiveItem } = useTabStore();
  return (
    <div className=" p-[20px] border-r-2 h-full">
      {TabData.map((item, index) => {
        return (
          <div key={index}>
            <div
              className=" cursor-pointer"
              onClick={() => {
                setExpandItem(index);
              }}
            >
              <div
                className={classNames(
                  " flex rounded-md px-[10px] py-[4px]",
                  item.list.some((item) => item.isSelected) && " bg-green-200"
                )}
              >
                <div className=" flex-1">{item.title}</div>
                <div>+</div>
              </div>
            </div>
            {item.isExpand &&
              item.list.map((ele, idx) => {
                return (
                  <div
                    onClick={() => {
                      setActiveItem(index, idx);
                    }}
                    key={idx}
                    className={classNames(
                      " pl-[20px] py-[3px] rounded-lg my-[10px]",
                      ele.isSelected && " bg-green-200"
                    )}
                  >
                    <span></span>
                    {ele.label}
                  </div>
                );
              })}
          </div>
        );
      })}
    </div>
  );
};

export default Tab;
