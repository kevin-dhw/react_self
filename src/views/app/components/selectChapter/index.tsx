import React, { useState } from "react";
import { chapterData } from "../../standardCard/data";
import classNames from "classnames";

const SelectChapter: React.FC = () => {
  console.log(chapterData, "chapterData");
  const [isShowAll, setIsShowAll] = useState(false);
  const [curNum, setCurNum] = useState(-1);

  return (
    <div className=" relative">
      <div className=" flex items-center">
        {!isShowAll ? (
          <div className=" overflow-scroll w-full whitespace-nowrap mr-6">
            {chapterData.map((item, index) => {
              return (
                <span
                  key={index}
                  onClick={() => {
                    setCurNum(index);
                  }}
                  className={classNames(
                    " bg-slate-400 py-1 px-5 mr-1 rounded-lg inline-block",
                    curNum === index ? " bg-white text-black" : "",
                    " text-white"
                  )}
                >
                  {item.name}
                </span>
              );
            })}
          </div>
        ) : (
          <div className=" flex-1"></div>
        )}
        <div
          className=" mr-2 inline-block"
          onClick={() => {
            if (isShowAll) {
              setIsShowAll(false);
            } else {
              setIsShowAll(true);
            }
          }}
        >
          {isShowAll ? "fold" : "expand"}
        </div>
      </div>
      {isShowAll && (
        <div className=" absolute right-0 top-[30px] w-full">
          <div className=" bg-red-300 flex flex-wrap">
            {chapterData.map((item, index) => {
              return (
                <div
                  key={index}
                  className={classNames(
                    " h-[40px] py-2 px-4 bg-slate-400 rounded-md m-2",
                    curNum === index ? " bg-white text-black" : ""
                  )}
                  onClick={() => {
                    setIsShowAll(false);
                    setCurNum(index);
                    console.log(item, "item");
                  }}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default SelectChapter;
