import React from "react";
import useTabStore from "../../store/useTabStore";

const Tab: React.FC = () => {
  const { TabData, setExpandItem } = useTabStore();
  return (
    <div className=" p-[20px] border-r-2 h-full">
      {TabData.map((item, index) => {
        return (
          <div key={index}>
            <div
              className=" flex cursor-pointer"
              onClick={() => {
                setExpandItem(index);
              }}
            >
              <div className=" flex-1"> {item.title}</div>
              <div>+</div>
            </div>
            {item.isExpand &&
              item.list.map((ele, idx) => {
                return (
                  <div key={idx} className=" pl-[20px] py-[10px]">
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
