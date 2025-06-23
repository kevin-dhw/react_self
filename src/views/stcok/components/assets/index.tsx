import React from "react";
import classNames from "classnames";
import useAssetsStore from "../../store/useAssetsStore";

export interface AssetsProps {
  handleAssets: () => void;
}

const arrow = ">";

const Assets: React.FC<AssetsProps> = (props) => {
  const { handleAssets } = props;
  const { totalData } = useAssetsStore();
  return (
    <div className=" mx-[10px] mt-[20px]">
      <div className=" h-[90px] w-full rounded-t-md border flex justify-between p-[10px]">
        <div className=" w-full">
          <div className=" h-[28px] text-sm text-gray-400 flex justify-between items-center">
            <div>all assets（$）</div>
            <div className=" pr-[10px]">income of today</div>
          </div>
          <div className=" h-[56px] text-xl font-bold flex justify-between items-center">
            <div>{totalData.assets}</div>
            <div
              className={classNames(
                " pr-[10px]",
                totalData.currentIncome > 0
                  ? " text-red-700"
                  : " text-green-600"
              )}
            >
              {totalData.currentIncome > 0
                ? "+" + totalData.currentIncome
                : totalData.currentIncome}
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            handleAssets();
          }}
        >
          {arrow}
        </div>
      </div>
    </div>
  );
};

export default Assets;
