import React, { forwardRef, useState, useImperativeHandle } from "react";
import useTabStore from "../../store/useTabStore";
import HeaderBack from "../headerBack";

export interface AccountAddRef {
  open: (mode: "add" | "edit") => void;
}
export interface AccountAddProps {}

const InnerAccountAdd: React.ForwardRefRenderFunction<
  AccountAddRef,
  AccountAddProps
> = (props, ref) => {
  console.log(props);
  const { handleAddTab } = useTabStore();
  const [isShow, setIsShow] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [mode, setMode] = useState("add");
  const [specificWords, setSpecificWords] = useState({
    title: "add account",
    subTitle: "add new Account",
  });

  const open = (mode: "add" | "edit") => {
    setMode(mode);
    if (mode === "edit") {
      setSpecificWords({
        title: "edit account",
        subTitle: "Edit Account",
      });
    }
    setIsShow(true);
  };
  const changeInpurVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };
  const handleSave = () => {
    if (!inputVal) {
      return;
    }
    if (mode === "add") {
      handleAddTab({
        lable: inputVal,
        isSelected: false,
        isShow: true,
      });
    } else {
      console.log("edit");
    }
    setTimeout(() => {
      setIsShow(false);
    }, 200);
  };

  useImperativeHandle(ref, () => {
    return { open };
  });
  if (isShow) {
    return (
      <div className=" fixed top-0 bottom-0 left-0 right-0 bg-white">
        <div className=" mx-[14px]">
          <HeaderBack
            title={specificWords.title}
            handleBack={() => {
              setIsShow(false);
            }}
          ></HeaderBack>
          <div className=" mt-[30px]">{specificWords.subTitle}</div>
          <div className=" mt-[20px]">
            <input
              onChange={(e) => changeInpurVal(e)}
              className=" border rounded-sm bg-gray-200 w-full h-[40px]"
            ></input>
          </div>
          <div
            onClick={() => handleSave()}
            className=" bg-orange-500 mt-[20px] h-[40px] rounded-md flex"
          >
            <div className=" m-auto text-white text-[18px]">save</div>
          </div>
        </div>
      </div>
    );
  }
};

const AccountAdd = forwardRef(InnerAccountAdd);

export default AccountAdd;
