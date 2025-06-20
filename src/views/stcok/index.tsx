import React from "react";
import Header from "./components/header";
import AccountTab from "./components/accountTab";

const Stock: React.FC = () => {
  return (
    <div className=" h-[100vh]">
      <Header></Header>
      <AccountTab></AccountTab>
    </div>
  );
};

export default Stock;
