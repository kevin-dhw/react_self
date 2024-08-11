import React, { useImperativeHandle, useState } from "react";
import { SelectProps } from "../../select";
import { isEmpty } from "lodash";
import classNames from "classnames";

export interface RadioSelectProps extends Omit<SelectProps, "isRadio"> {}
export interface RadioSelectRef {
  handleShow: () => void;
}

const InRadioSelect: React.ForwardRefRenderFunction<
  RadioSelectRef,
  RadioSelectProps
> = (props, ref) => {
  const { selectData, getSelectedData } = props;
  const [isShowSelect, setIsShowSelect] = useState(false);
  const [num, setNum] = useState<number | undefined>(undefined);

  const handleCancel = () => {
    setIsShowSelect(false);
  };

  const handleConfirm = () => {
    setIsShowSelect(false);
    if (num !== undefined) {
      getSelectedData?.(selectData[num]);
    }
  };
  const handleSelect = (index: number) => {
    setNum(index);
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
              {!isEmpty(selectData) &&
                selectData.map((item, index) => {
                  return (
                    <span
                      key={index}
                      className={classNames(
                        " bg-slate-200 py-[6px] px-[20px] rounded ",
                        index === num ? " bg-red-400 text-white" : " "
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
const RadioSelect = React.forwardRef(InRadioSelect);
export default RadioSelect;
