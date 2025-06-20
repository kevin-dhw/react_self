import React, { useRef } from "react";
import Header from "./components/header";
import AccountTab from "./components/accountTab";
import AccountAdd, { AccountAddRef } from "./components/addAccount";
import ManageAccount, { ManageAccountRef } from "./components/manageAccount";

const Stock: React.FC = () => {
  const accountAddRef = useRef<AccountAddRef>(null);
  const manageAccuntRef = useRef<ManageAccountRef>(null);

  const handleAdd = () => {
    accountAddRef.current?.open();
  };
  const handleManage = () => {
    console.log("manage");
    manageAccuntRef.current?.open();
  };
  return (
    <div className=" h-[100vh]">
      <Header></Header>
      <AccountTab
        handleAdd={handleAdd}
        handleManage={handleManage}
      ></AccountTab>
      {/* show when you wanna add an account */}
      <AccountAdd ref={accountAddRef}></AccountAdd>
      <ManageAccount ref={manageAccuntRef}></ManageAccount>
    </div>
  );
};

export default Stock;
