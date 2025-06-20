import React, { forwardRef, useState, useImperativeHandle } from "react";
import useTabStore from "../../store/useTabStore";
import HeaderBack from "../headerBack";

export interface AccountAddRef {
  open: () => void;
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

  const open = () => {
    console.log("1");
    setIsShow(true);
  };
  const changeInpurVal = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };
  const handleSave = () => {
    if (!inputVal) {
      return;
    }
    handleAddTab({
      lable: inputVal,
      isSelected: false,
    });
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
            title={"add account"}
            handleBack={() => {
              setIsShow(false);
            }}
          ></HeaderBack>
          <div className=" mt-[30px]">add new Account</div>
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
