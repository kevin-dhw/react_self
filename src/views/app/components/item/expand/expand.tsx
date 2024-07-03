import React, { useState, useImperativeHandle } from "react";
import "./index.scss";
import { SelectItemType, SelectDataType } from "./interface";

export interface ExpandProps {
  getSelectValue?: (item: SelectItemType, index: number) => void;
}
export interface ExpandRef {
  handleIsShow?: (data: SelectDataType, index: number) => void;
}

const InnerExpand: React.ForwardRefRenderFunction<ExpandRef, ExpandProps> = (
  props,
  ref
) => {
  const { getSelectValue } = props;
  const [isShow, setIsSHow] = useState<boolean>(false);
  const [data, setData] = useState<SelectDataType>();
  const [curIndex, setCurIndex] = useState<number>();

  const handleIsShow = (data: SelectDataType, index: number) => {
    setIsSHow(!isShow);
    setData(data);
    setCurIndex(index);
  };

  const handleConfirm = () => {
    setIsSHow(false);
  };

  const handleSelect = (item: SelectItemType) => {
    data?.fn(item);
    setIsSHow(false);
    getSelectValue?.(item, curIndex!);
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
                onClick={() => handleIsShow({} as SelectDataType, 0)}
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
                    onClick={() => handleSelect(item)}
                    className="expand-content-list-item"
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
    </>
  );
};
const Expand = React.forwardRef(InnerExpand);
export default Expand;
