import React, { useMemo, useState } from "react";
import classNames from "classnames";
import { BtnType } from "../../interface";
import peopleImg from "./img/people.png";

export interface BtnListType {
  btns: BtnType[];
  handleClickBtn?: (text: string) => void;
}

const AllBtns: React.FC<BtnListType> = (props) => {
  const { btns, handleClickBtn } = props;
  const [isShowMoreBtnMask, setIsShowMoreBtnMask] = useState(false);

  const btnLength = useMemo(() => {
    if (btns && btns.length) {
      return btns.length;
    }
    return 0;
  }, [btns]);

  // 超过三个按钮时显示的按钮
  const otherBtn = btns
    .map((item, index) => {
      if (btnLength === 3) {
        if (index != 2) {
          return item;
        }
      } else if (btnLength > 3) {
        if (index == 1) {
          return item;
        }
      }
    })
    .filter((item) => item);

  if (btns.length > 3) {
    otherBtn.unshift({
      type: "more",
      text: "更多",
      icon: peopleImg,
    });
  }
  console.log(otherBtn, "otherBtn");

  // 按钮超过三个时 剩下更多时候显示的按钮
  const moreBtn = btns
    .map((item, index) => {
      if (index > 1 && btns.length > 3) {
        return item;
      }
    })
    .filter((item) => item);
  console.log(moreBtn, "moreBtn");

  const handleClick = (type: string) => {
    if (type === "more") {
      console.log(type, "inner");
      setIsShowMoreBtnMask(true);
    } else {
      handleClickBtn?.(type);
    }
  };

  return (
    <div>
      {/* 当只有一个或者两个按钮的时候显示 */}
      <div className=" flex p-[10px] justify-between gap-3">
        {/* 按钮大于三个，特殊显示，需要图标 */}
        {btnLength >= 3 &&
          otherBtn.map((item, index) => {
            return (
              <div
                key={index}
                className={classNames(" flex flex-col items-center w-[70px] ")}
                onClick={() => {
                  handleClick(item!.type);
                }}
              >
                <div>{item?.text}</div>
                <img src={item?.icon} className=" w-[24px] h-[20px]"></img>
              </div>
            );
          })}

        {/* 按钮只有 一个或者两个或者四个以上的时候显示 
          每次在最左边
        */}
        {(btnLength <= 2 || btnLength >= 4) && (
          <div
            onClick={() => {
              handleClickBtn?.(btns[0].type);
            }}
            className={classNames(
              " flex-1 basis-1/2 border border-gray-200 rounded-md",
              "flex cursor-pointer",
              (btnLength === 1 || btnLength >= 4) && "bg-blue-400 text-white"
            )}
          >
            <div className=" m-auto py-[10px]">{btns[0].text}</div>
          </div>
        )}
        {/* 
        按钮 有两个或 三个的时候显示 每次都在最右边
         */}
        {(btnLength == 2 || btnLength == 3) && (
          <div
            onClick={() => {
              handleClickBtn?.(btns[btns.length - 1].type);
            }}
            className={classNames(
              " bg-blue-400 text-white flex-1 basis-1/2 rounded-md",
              "flex cursor-pointer"
            )}
          >
            <div className=" m-auto py-[10px]">
              {btns[btns.length - 1].text}
            </div>
          </div>
        )}
      </div>
      {/* 更多按钮显示的弹框 */}
      {isShowMoreBtnMask && (
        <div>
          更多 {moreBtn?.length}
          <br />
        </div>
      )}
    </div>
  );
};

export default AllBtns;
