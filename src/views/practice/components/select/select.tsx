import React, { useRef, useImperativeHandle } from "react";
import RadioSelect, { RadioSelectRef } from "./components/radioSelect";
import MultipeSelect, { MultipleSelectRef } from "./components/multipleSelect";
import type { SelectItemType } from "./interface";

export type SelectProps = {
  selectData: SelectItemType[];
  isRadio?: boolean;
  getSelectedData?: (item: SelectItemType | SelectItemType[]) => void;
};
export interface SelectRef {
  open: () => void;
}

const InSelect: React.ForwardRefRenderFunction<SelectRef, SelectProps> = (
  props,
  ref
) => {
  const { selectData, isRadio = true, getSelectedData } = props;
  const radioSelectRef = useRef<RadioSelectRef>(null);
  const multipleSelectRef = useRef<MultipleSelectRef>(null);

  const open = () => {
    if (isRadio) {
      radioSelectRef.current?.handleShow();
    } else {
      multipleSelectRef.current?.handleShow();
    }
  };

  useImperativeHandle(ref, () => ({ open }));

  if (isRadio) {
    return (
      <div>
        <RadioSelect
          ref={radioSelectRef}
          selectData={selectData}
          getSelectedData={getSelectedData}
        ></RadioSelect>
      </div>
    );
  }
  return (
    <div>
      <MultipeSelect
        ref={multipleSelectRef}
        selectData={selectData}
        getSelectedData={getSelectedData}
      ></MultipeSelect>
    </div>
  );
};
const Select = React.forwardRef(InSelect);
export default Select;
