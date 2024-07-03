import React, { useState, useImperativeHandle } from "react";
import { OptionItemType } from "../../interface";
import useSelectContext from "../../hooks/useSelectContext";
import "./index.scss";

export interface SelectRef {
  handleIsShow: (option: OptionItemType[]) => void;
}
export interface SelectProps {
  getSelectValue: (item: OptionItemType) => void;
}

const InnerSelect: React.ForwardRefRenderFunction<SelectRef, SelectProps> = (
  props,
  ref
) => {
  const { getSelectValue } = props;
  const { selectData } = useSelectContext();
  const [isShow, setIsShow] = useState<boolean>(false);
  const [option, setOption] = useState<OptionItemType[]>();

  const handleIsShow = (option: OptionItemType[]) => {
    setIsShow(!isShow);
    setOption(option);
  };

  const handleOption = (item: OptionItemType) => {
    getSelectValue(item);
    setIsShow(!isShow);
  };

  useImperativeHandle(ref, () => {
    return { handleIsShow };
  });
  return (
    <>
      {isShow && (
        <div className="select">
          <div className="select-content">
            {option?.length &&
              option.map((item) => {
                return (
                  <div onClick={() => handleOption(item)} key={item.label}>
                    {item.label} {selectData?.num}
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};
const Select = React.forwardRef(InnerSelect);
export default Select;
