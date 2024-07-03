/*
 
 import React, { useRef } from "react";
import { Button } from "antd";
import React, { useRef } from "react";
import { Button } from "antd";
// import Item from "../app/components/item/item";
import ExpandMultipe, { ExpandRef } from "../app/components/expandMultipe";

const Test: React.FC = () => {
  const expandRef = useRef<ExpandRef>(null);

  const handleOpen = () => {
    expandRef.current?.handleIsShow?.();
  };
  const getSelectValue = (arr: any[]) => {
    console.log(arr, "12345");
  };
  return (
    <>
      <Button onClick={handleOpen}>打开</Button>
      <ExpandMultipe
        getSelectValue={getSelectValue}
        ref={expandRef}
      ></ExpandMultipe>
    </>
  );
};

export default Test;
 */
