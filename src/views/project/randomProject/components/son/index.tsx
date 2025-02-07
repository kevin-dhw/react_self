import React, { useImperativeHandle, ForwardRefRenderFunction } from "react";
import { Button } from "antd";
import { ItemType } from "../../interface";

interface SonProps<ageType, itemType> {
  age: ageType;
  name: string;
  item?: itemType[];
  handleClick: (str: string) => void;
}
export interface SonRef {
  handleSonFn: () => void;
}

const InnerSon: ForwardRefRenderFunction<SonRef, SonProps<number, ItemType>> = (
  props,
  ref
) => {
  const { age, name, handleClick } = props;
  const handleSonFn = () => {
    console.log("handleSonFn");
  };

  useImperativeHandle(ref, () => {
    return { handleSonFn };
  });
  return (
    <div>
      son
      <br />
      age: {age} name: {name}
      <br />
      <Button
        onClick={() => {
          handleClick("item");
        }}
      >
        测试
      </Button>
    </div>
  );
};

const Son = React.forwardRef(InnerSon);
export default Son;
