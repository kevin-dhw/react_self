import React from "react";
import { useLocation } from "react-router-dom";

const arr = [
  {
    name: "jack",
    age: 20,
  },
  {
    name: "bob",
    age: 20,
  },
  {
    name: "rose",
    age: 20,
  },
];
const newArr = arr.map((item) => {
  if (item.name === "jack") {
    return item;
  } else {
    return {
      name: "jack",
      age: 18,
    };
  }
});

const Detail: React.FC = () => {
  const { state } = useLocation();
  console.log(state, "satte");

  const res = newArr.find((item) => item.age === 20 && item.name === "jack");
  console.log(newArr, "newArr");
  console.log(res, "res");

  return (
    <div>
      detail
      <br />
    </div>
  );
};

export default Detail;
