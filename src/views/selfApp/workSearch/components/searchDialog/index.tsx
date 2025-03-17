import React, {
  useState,
  useEffect,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from "react";
import classNames from "classnames";

export interface SearchDialogProps {
  handleConfirm?: (data: Record<string, any>) => void;
}
export interface GetInitDataType {
  obj: Record<string, any>;
  callback: (data: Record<string, any>) => void;
}
export interface SearchDialogRef {
  open: (
    obj: GetInitDataType["obj"],
    callback: GetInitDataType["callback"]
  ) => void;
  close: () => void;
}

const InnerSearchDialog: ForwardRefRenderFunction<
  SearchDialogRef,
  SearchDialogProps
> = (_, ref) => {
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [getInitData] = useState<GetInitDataType>({} as GetInitDataType);

  useEffect(() => {}, [getInitData]);

  const open = (
    obj: GetInitDataType["obj"],
    callback: GetInitDataType["callback"]
  ) => {
    getInitData.obj = obj;
    console.log(getInitData.obj, "getInitData.obj");
    getInitData.callback = callback;
    setIsShowDialog(true);
  };
  const close = () => {
    setIsShowDialog(false);
  };
  const handleReset = () => {
    console.log("reset");
  };
  const clickConfirm = () => {
    getInitData.callback({ age: "20" });
    setIsShowDialog(false);
  };

  useImperativeHandle(ref, () => {
    return { close, open };
  });
  if (isShowDialog) {
    return (
      <div className=" w-full">
        <div
          className={classNames(
            " fixed top-0 bottom-0 right-0 left-0",
            " flex w-full"
          )}
        >
          <div className=" flex-[2.5] bg-gray-300 opacity-45 "></div>
          <div className=" h-full bg-white flex-[7.5] flex flex-col">
            {/* this part is title and close icon */}
            <div className=" flex h-[60px] border-b-[1px]">
              <div className=" flex-[4]"></div>
              <div
                className={classNames(
                  " flex-[6] flex justify-between items-center"
                )}
              >
                <div>条件查询</div>
                <div onClick={() => close()} className=" pr-[20px]">
                  X
                </div>
              </div>
            </div>
            {/* main content */}
            <div className=" flex-1 overflow-auto">
              <p>这是一段内容，当内容超出容器高度时，会出现滚动条。</p>
            </div>
            {/* reset and confirm */}
            <div className=" h-[60px] border-t-[1px] flex justify-around items-center">
              <div
                onClick={() => handleReset()}
                className=" w-[120px] bg-blue-500 text-white rounded-md py-1 flex justify-center items-center"
              >
                <div>重置</div>
              </div>
              <div
                onClick={() => clickConfirm()}
                className=" w-[120px] border-[1px] rounded-md py-1 flex justify-center items-center"
              >
                <div>确认</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

const SearchDialog = React.forwardRef(InnerSearchDialog);
export default SearchDialog;
