import React, { useState, useImperativeHandle } from "react";
import "./index.scss";
import { SelectItemType, SelectDataType } from "./interface";
import classNames from "classnames";

export interface ExpandProps {
  getSelectValue?: (item: any[]) => void;
}
export interface ExpandRef {
  handleIsShow?: () => void;
}
const defaultData = {
  field: "value1",
  type: "expand",
  subTitle: "哈哈11",
  value: "",
  list: [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
  ],
  fn: (item: SelectItemType) => {
    console.log(item, "1234");
  },
};

const InnerExpand: React.ForwardRefRenderFunction<ExpandRef, ExpandProps> = (
  props,
  ref
) => {
  const { getSelectValue } = props;
  const [isShow, setIsSHow] = useState<boolean>(true);
  const [data] = useState<SelectDataType>(defaultData);
  const [selectValue, setSelectValue] = useState<string>("");
  const [valArr, setValArr] = useState<any[]>(
    new Array(data.list.length).fill(null)
  );

  const handleIsShow = () => {
    setIsSHow(!isShow);
  };

  const handleConfirm = () => {
    setIsSHow(false);
    const value = valArr.filter((item) => item).join(",");
    setSelectValue(value);
  };

  const handleSelect = (item: SelectItemType, index: number) => {
    data?.fn(item);
    setValArr((valArr) => {
      const arr = [...valArr];
      if (!arr[index]) {
        arr[index] = item.value;
      } else {
        arr[index] = null;
      }
      return arr;
    });
    getSelectValue?.(valArr);
  };

  useImperativeHandle(ref, () => {
    return { handleIsShow };
  });

  return (
    <>
      {isShow && (
        <div className="expand">
          <div className="expand-content">
            <div className="expand-content-top">
              <div
                className="expand-content-left"
                onClick={() => handleIsShow()}
              >
                取消
              </div>
              <div className="expand-content-middle">{data?.subTitle}</div>
              <div className="expand-content-right" onClick={handleConfirm}>
                确定
              </div>
            </div>
            <div className="expand-content-list">
              {data?.list.map((item, idx) => {
                return (
                  <div
                    onClick={() => handleSelect(item, idx)}
                    className={classNames(
                      "expand-content-list-item",
                      valArr[idx] ? " expand-content-list-item-selected" : ""
                    )}
                    key={idx}
                  >
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      <br />
      <>{selectValue}</>
    </>
  );
};
const ExpandMultipe = React.forwardRef(InnerExpand);
export default ExpandMultipe;
