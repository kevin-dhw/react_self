import React, {
  useState,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from "react";

export interface DelComfirmProps {
  handleDelTabItem: () => void;
}
export interface DelComfirmRef {
  open: () => void;
  close: () => void;
}

const InerDelComfirm: ForwardRefRenderFunction<
  DelComfirmRef,
  DelComfirmProps
> = (props, ref) => {
  const { handleDelTabItem } = props;
  const [isShow, setIsShow] = useState(false);

  const open = () => {
    setIsShow(true);
  };
  const close = () => {
    setIsShow(false);
  };

  useImperativeHandle(ref, () => {
    return { open, close };
  });
  if (isShow) {
    return (
      <div className=" fixed top-0 bottom-0 left-0 right-0 bg-gray-300 flex bg-opacity-60">
        <div className=" w-[90%] h-[150px] bg-white m-auto rounded-lg">
          <div className=" h-[70%] border-b-[1px] flex">
            <span className=" m-auto">are you sure you wanna delete it?</span>
          </div>
          <div className=" h-[30%] flex justify-around items-center op">
            <div
              onClick={() => {
                setIsShow(false);
              }}
              className=" text-gray-400"
            >
              cancel
            </div>
            <div onClick={() => handleDelTabItem()}>comfirm</div>
          </div>
        </div>
      </div>
    );
  }
};

const DelComfirm = React.forwardRef(InerDelComfirm);
export default DelComfirm;
