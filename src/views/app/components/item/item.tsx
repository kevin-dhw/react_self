import React, { useState, useEffect } from "react";
import ItemCard from "./itemCard/itemCard";
import ItemFold from "./itemFold/itemFold";
import ItemDetail from "./itemDetail";
import { SelectItemType } from "./select";
const obj: Record<string, any> = {};
const allData = [
  {
    title: "我是标题111",
    isShowContent: false,
    data: [
      {
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
          obj["value1"] = item.value;
          console.log(obj, "obj");
        },
      },
      {
        field: "value2",
        type: "select",
        subTitle: "哈哈22",
        value: "",
        list: [
          { value: "1", label: "1" },
          { value: "2", label: "2" },
          { value: "3", label: "3" },
        ],
        fn: (item: SelectItemType) => {
          obj["value2"] = item.value;
          console.log(obj, "obj");
        },
      },
    ],
  },
  {
    title: "我是标题222",
    isShowContent: false,
    data: [
      {
        field: "value3",
        type: "expand",
        subTitle: "不哈哈11",
        value: "",
        list: [
          { value: "1", label: "1" },
          { value: "2", label: "2" },
          { value: "3", label: "3" },
        ],
        fn: (item: SelectItemType) => {
          obj["value3"] = item.value;
          console.log(obj, "obj");
        },
      },
      {
        field: "value4",
        type: "expand",
        subTitle: "不哈哈22",
        value: "",
        list: [
          { value: "1", label: "1" },
          { value: "2", label: "2" },
          { value: "3", label: "3" },
        ],
        fn: (item: SelectItemType) => {
          obj["value4"] = item.value;
          console.log(obj, "obj");
        },
      },
      {
        field: "value5",
        type: "select",
        subTitle: "不哈哈22",
        value: "",
        list: [
          { value: "1", label: "1" },
          { value: "2", label: "2" },
          { value: "3", label: "3" },
        ],
        fn: (item: SelectItemType) => {
          obj["value5"] = item.value;
          console.log(obj, "obj");
        },
      },
    ],
  },
  {
    title: "我是标题222",
    isShowContent: false,
    data: [
      {
        field: "value3",
        type: "expand",
        subTitle: "不哈哈11",
        value: "",
        list: [
          { value: "1", label: "1" },
          { value: "2", label: "2" },
          { value: "3", label: "3" },
        ],
        fn: (item: SelectItemType) => {
          obj["value3"] = item.value;
          console.log(obj, "obj");
        },
      },
      {
        field: "value4",
        type: "expand",
        subTitle: "不哈哈22",
        value: "",
        list: [
          { value: "1", label: "1" },
          { value: "2", label: "2" },
          { value: "3", label: "3" },
        ],
        fn: (item: SelectItemType) => {
          obj["value4"] = item.value;
          console.log(obj, "obj");
        },
      },
      {
        field: "value5",
        type: "select",
        subTitle: "不哈哈22",
        value: "",
        list: [
          { value: "1", label: "1" },
          { value: "2", label: "2" },
          { value: "3", label: "3" },
        ],
        fn: (item: SelectItemType) => {
          obj["value5"] = item.value;
          console.log(obj, "obj");
        },
      },
    ],
  },
];

allData.forEach((item) => {
  item.data.forEach((ele) => {
    obj[ele.field] = "";
  });
});
const Item: React.FC = () => {
  const [str, setStr] = useState("");
  const getTestData = (str: string) => {
    console.log(str, "str2222222");
    setStr(str);
  };
  useEffect(() => {
    setTimeout(() => {
      console.log(str);
    }, 1000);
  }, [str]);

  return (
    <>
      <ItemCard>
        {allData.map((item, index) => {
          return (
            <ItemFold key={index} isShowContent={item.isShowContent}>
              <ItemDetail
                getTestData={getTestData}
                data={item.data}
              ></ItemDetail>
            </ItemFold>
          );
        })}
      </ItemCard>
    </>
  );
};

export default Item;
