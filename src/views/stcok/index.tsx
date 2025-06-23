import React, { useRef } from "react";
import Header from "./components/header";
import AccountTab from "./components/accountTab";
import AccountAdd, { AccountAddRef } from "./components/addAccount";
import ManageAccount, { ManageAccountRef } from "./components/manageAccount";
import Assets from "./components/assets";
import AnalysisAssets, { AnalysisAssetsRef } from "./components/analysisAssets";

const Stock: React.FC = () => {
  const accountAddRef = useRef<AccountAddRef>(null);
  const manageAccuntRef = useRef<ManageAccountRef>(null);
  const analysisAssetsRef = useRef<AnalysisAssetsRef>(null);

  const handleAdd = () => {
    accountAddRef.current?.open("add");
  };
  const handleManage = () => {
    console.log("manage");
    manageAccuntRef.current?.open();
  };
  // click analysis arrow
  const handleAssets = () => {
    analysisAssetsRef.current?.open();
  };
  return (
    <div className=" h-[100vh]">
      <Header></Header>
      <AccountTab
        handleAdd={handleAdd}
        handleManage={handleManage}
      ></AccountTab>
      {/* all assetes part */}
      <Assets handleAssets={handleAssets}></Assets>

      {/* show when you wanna add an account */}
      <AccountAdd ref={accountAddRef}></AccountAdd>
      <ManageAccount ref={manageAccuntRef}></ManageAccount>
      {/* analysis assets component */}
      <AnalysisAssets ref={analysisAssetsRef}></AnalysisAssets>
    </div>
  );
};

export default Stock;
