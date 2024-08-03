import React from "react";
import Select from "../practice/components/select";
import { selectData } from "./data";
// const crypto = require("crypto");

const Test: React.FC = () => {
  // console.log(crypto.randomBytes(18), "111");

  return (
    <>
      <Select selectData={selectData} isRadio={true} />
    </>
  );
};

export default Test;
