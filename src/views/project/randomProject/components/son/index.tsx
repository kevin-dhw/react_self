import React, {
  useImperativeHandle,
  ForwardRefRenderFunction,
  PropsWithChildren,
} from "react";
import { Button } from "antd";
import { ItemType } from "../../interface";

interface SonProps<ageType, itemType> extends PropsWithChildren {
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
  const { age, name, handleClick, children } = props;
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
      <br />
      <br />
      children: {children && children}
    </div>
  );
};

const Son = React.forwardRef(InnerSon);
export default Son;
