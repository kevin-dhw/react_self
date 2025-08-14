import React, {
  useState,
  useEffect,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from "react";
import classNames from "classnames";
import { searchData } from "../../data";
import { hanldeData } from "./utils";
import { cloneDeep } from "lodash";

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
  const [getInitData, setGetInitData] = useState<GetInitDataType>(
    {} as GetInitDataType
  );
  const [newData, setNewData] = useState(hanldeData(searchData));

  useEffect(() => {
    console.log(getInitData, "getInitData useEffect");
  }, [getInitData]);

  const open = (
    obj: GetInitDataType["obj"],
    callback: GetInitDataType["callback"]
  ) => {
    getInitData.obj = obj;
    setDefaulData();
    getInitData.callback = callback;
    setIsShowDialog(true);
  };
  // 打开弹出框，要赋值默认的数据
  const setDefaulData = () => {
    setNewData((data) => {
      data.forEach((item) => {
        const arr = getInitData.obj[item.field];
        item.list.forEach((ele) => {
          if (arr && arr.length) {
            if (arr.includes(ele.value)) {
              ele.isChoose = true;
            } else {
              ele.isChoose = false;
            }
          } else {
            ele.isChoose = false;
          }
        });
      });
      return cloneDeep(data);
    });
  };
  const close = () => {
    setIsShowDialog(false);
  };
  const handleReset = () => {
    setGetInitData((data) => {
      return cloneDeep({
        ...data,
        obj: [],
      });
    });
    setNewData((data) => {
      data.forEach((item) => {
        item.list.forEach((ele) => {
          ele.isChoose = false;
        });
      });
      return cloneDeep(data);
    });
  };
  // 处理传出去的数据
  const postData = () => {
    const arr: any = [];
    newData.forEach((item, idx) => {
      const obj: Record<string, any> = {};
      obj[item.field] = item.list
        .filter((ele) => ele.isChoose)
        .map((item) => item.value);
      arr[idx] = obj;
    });
    return arr;
  };
  const clickConfirm = () => {
    postData();
    setGetInitData(postData());
    getInitData.callback(postData());
    setIsShowDialog(false);
  };
  // 每个选择的点击事件 点击状态改为选中
  const handleClickItem = (idx: number, index: number) => {
    setNewData((data) => {
      // 单选逻辑
      if (data[idx].type === "single") {
        data[idx].list.forEach((item, i2) => {
          if (i2 === index) {
            item.isChoose = true;
          } else {
            item.isChoose = false;
          }
        });
      } else {
        data[idx].list[index].isChoose = !data[idx].list[index].isChoose;
      }
      return cloneDeep(data);
    });
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
            " flex w-full transition-all ease-in-out delay-100 duration-500"
          )}
        >
          <div
            onClick={() => {
              close();
            }}
            className=" flex-[2.5] bg-gray-300 opacity-70 "
          ></div>
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
            <div className=" flex-1 overflow-auto ">
              <div className=" w-full px-3">
                {newData.map((item, idx) => {
                  {
                    /* showType select 类型 */
                  }
                  if (item.showType === "select") {
                    return (
                      <div key={idx}>
                        <div className=" py-2 font-bold">{item.title}</div>
                        <div className=" flex flex-wrap">
                          {item.list.map((ele, index) => {
                            return (
                              <div
                                onClick={() => handleClickItem(idx, index)}
                                key={index}
                              >
                                <div
                                  className={classNames(
                                    " text-sm bg-gray-100 py-2 px-[30px] rounded-xl mr-3 mb-3",
                                    ele.isChoose ? " bg-red-200 text-white" : ""
                                  )}
                                >
                                  {ele.subTitle}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                    // input类型
                  } else if (item.showType === "input") {
                    return <div key={idx}>1111</div>;
                  }
                })}
              </div>
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
