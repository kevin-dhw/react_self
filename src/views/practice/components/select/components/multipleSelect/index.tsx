import React, { useImperativeHandle, useState } from "react";
import { SelectProps } from "../../select";
import { isEmpty } from "lodash";
import classNames from "classnames";

export interface MultipleSelectProps extends Omit<SelectProps, "isRadio"> {}
export interface MultipleSelectRef {
  handleShow: () => void;
}

const InMultipeSelect: React.ForwardRefRenderFunction<
  MultipleSelectRef,
  MultipleSelectProps
> = (props, ref) => {
  const { selectData, getSelectedData } = props;
  const [isShowSelect, setIsShowSelect] = useState(false);
  const [numArr, setNumArr] = useState<boolean[]>(
    new Array(selectData.length).fill(false)
  );
  const [selectDataArr, setSelectDataArr] = useState(selectData);

  const handleCancel = () => {
    setIsShowSelect(false);
  };

  const handleConfirm = () => {
    setIsShowSelect(false);
    const arr = selectDataArr.filter((item) => item.selected);
    getSelectedData?.(arr);
  };
  const handleSelect = (index: number) => {
    setNumArr((arr) => {
      const newArr = [...arr];
      if (newArr[index]) {
        newArr[index] = false;
      } else {
        newArr[index] = true;
      }
      return newArr;
    });
    setSelectDataArr((originData) => {
      const arr = [...originData];
      if (arr[index].selected) {
        arr[index].selected = false;
      } else {
        arr[index].selected = true;
      }
      return arr;
    });
  };

  const handleShow = () => {
    setIsShowSelect(true);
  };
  useImperativeHandle(ref, () => ({
    handleShow,
  }));

  return (
    <div>
      {isShowSelect && (
        <div className=" fixed top-0 bottom-0 left-0 right-0">
          <div className=" w-full h-40% bg-slate-100 absolute bottom-0 rounded p-[10px]">
            <div className=" flex">
              <div className=" flex-1" onClick={handleCancel}>
                取消
              </div>
              <div onClick={handleConfirm}>确定</div>
            </div>
            <div className=" flex flex-wrap gap-2 pt-4">
              {!isEmpty(selectDataArr) &&
                selectDataArr.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className={classNames(
                        " bg-slate-200 py-[6px] px-[20px] rounded ",
                        numArr[index] ? " bg-red-400 text-white" : " "
                      )}
                      onClick={() => handleSelect(index)}
                    >
                      {item.label}
                    </span>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MultipeSelect = React.forwardRef(InMultipeSelect);
export default MultipeSelect;
