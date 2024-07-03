import React, { useRef, useState } from "react";
import { Button } from "antd";
import "./itemDetail.scss";
import Select, { SelectRef, SelectItemType, SelectDataType } from "../select";
import Expand, { ExpandRef } from "../expand";

interface ItemDetailProps {
  data?: SelectDataType[];
  getTestData?: (testData: string) => void;
}

const ItemDetail: React.FC<ItemDetailProps> = (props) => {
  const { data, getTestData } = props;

  const selectRef = useRef<SelectRef>(null);
  const expandRef = useRef<ExpandRef>(null);

  const [, setCurValue] = useState<SelectItemType>();
  const [valueArr, setValueArr] = useState<string[]>(
    new Array(data?.length).fill("--")
  );

  const getSelectValue = (item: SelectItemType, index: number) => {
    setValueArr((arr) => {
      arr[index] = item.value;
      return arr;
    });
    setCurValue(item);
  };

  const hadnleSelect = (item: SelectDataType, index: number) => {
    if (item?.type === "select") {
      selectRef.current?.handleIsShow?.(item!, index);
    } else {
      expandRef.current?.handleIsShow?.(item!, index);
    }
  };

  // 测试
  const handleTest = (testData: string) => {
    // console.log("测试", testData);
    // const testDataVal = testData + "1";
    getTestData?.(testData);
  };

  return (
    <div className="item-detail">
      {data?.map((item, index) => {
        return (
          <div className="item-detail-content" key={index}>
            <div className="item-detail-content-left">{item.field}</div>
            <div
              className="item-detail-content-middle"
              onClick={() => hadnleSelect(item, index)}
            >
              {valueArr[index]}
            </div>
            <div
              className="item-detail-content-right"
              onClick={() => hadnleSelect(item, index)}
            >
              》
            </div>
          </div>
        );
      })}
      <Button onClick={() => handleTest("测试数据")}>测试</Button>
      <Select getSelectValue={getSelectValue} ref={selectRef}></Select>
      <Expand getSelectValue={getSelectValue} ref={expandRef}></Expand>
    </div>
  );
};

export default ItemDetail;
