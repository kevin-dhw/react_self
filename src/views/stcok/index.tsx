import React, { useRef } from "react";
import Header from "./components/header";
import AccountTab from "./components/accountTab";
import AccountAdd, { AccountAddRef } from "./components/addAccount";
import ManageAccount, { ManageAccountRef } from "./components/manageAccount";
import Assets from "./components/assets";
import AssetsContent from "./components/assetsContent";
import AssetsAllContent from "./components/assetsAllContent";
import AnalysisAssets, { AnalysisAssetsRef } from "./components/analysisAssets";
import useTabStore from "./store/useTabStore";

const Stock: React.FC = () => {
  const accountAddRef = useRef<AccountAddRef>(null);
  const manageAccuntRef = useRef<ManageAccountRef>(null);
  const analysisAssetsRef = useRef<AnalysisAssetsRef>(null);
  const { tab } = useTabStore();

  const handleAdd = () => {
    accountAddRef.current?.open("add");
  };
  const handleManage = () => {
    manageAccuntRef.current?.open();
  };
  // get current selected tab , get the index of current tab
  const curSelectedTabIdx = tab.findIndex((item) => item.isSelected);
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
      {/*   specific analyse assets
       it has two mode, when the current tab is all, it will show different style */}
      {curSelectedTabIdx === 0 && <AssetsAllContent></AssetsAllContent>}
      {curSelectedTabIdx !== 0 && <AssetsContent></AssetsContent>}

      {/* show when you wanna add an account */}
      <AccountAdd ref={accountAddRef}></AccountAdd>
      <ManageAccount ref={manageAccuntRef}></ManageAccount>
      {/* analysis assets component */}
      <AnalysisAssets ref={analysisAssetsRef}></AnalysisAssets>
    </div>
  );
};

export default Stock;
