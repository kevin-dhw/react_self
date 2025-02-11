import React, {
  useState,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from "react";
import classNames from "classnames";
import { SearchInputProps } from "../Search";
import type { SelectItemType } from "../../standardCard/interface";
import { selectData } from "../../standardCard/data";

interface SelectProps extends Pick<SearchInputProps, "getSelectValue"> {}
export interface SelectRef {
  handleHiddenSelect?: () => void;
}

const InnerSelect: ForwardRefRenderFunction<SelectRef, SelectProps> = (
  props,
  ref
) => {
  const { getSelectValue } = props;
  const [num, setNum] = useState(-1);
  const [curItem, setCurItem] = useState<SelectItemType>({} as SelectItemType);
  const [isShow, setIsShow] = useState<Boolean>(false);

  const handleHiddenSelect = () => {
    setIsShow(true);
  };

  useImperativeHandle(ref, () => {
    return { handleHiddenSelect };
  });
  //   false 不显示 什么都不返回
  if (!isShow) {
    return <div></div>;
  }
  return (
    <div
      className={classNames(
        " fixed top-[70%] bottom-0 left-0 right-0 bg-gray-200",
        " z-10 text-white"
      )}
    >
      <div className=" text-black flex pt-3">
        <div className=" flex-1"></div>
        <div
          className=" pr-9"
          onClick={() => {
            getSelectValue?.(curItem);
            setIsShow(false);
          }}
        >
          保存
        </div>
      </div>
      <div className=" flex flex-wrap px-4">
        {selectData.map((item, index) => {
          return (
            <div
              key={index}
              className={classNames(
                " bg-red-400 py-2 px-4 rounded-lg mr-3 mt-3 ",
                num === index ? " text-red-900" : ""
              )}
              onClick={() => {
                setNum(index);
                setCurItem(item);
              }}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};
const Select = React.forwardRef(InnerSelect);
export default Select;
