import React, { useState, useImperativeHandle } from "react";
import HeaderBack from "../headerBack";
import useTabStore from "../../store/useTabStore";
import { Switch } from "antd";

export interface ManageAccountRef {
  open: () => void;
}
export interface ManageAccountProps {}

const InnerManageAccount: React.ForwardRefRenderFunction<
  ManageAccountRef,
  ManageAccountProps
> = (props, ref) => {
  console.log(props);
  const [isShow, setIsShow] = useState(false);
  const { tab } = useTabStore();

  const open = () => {
    setIsShow(true);
  };
  useImperativeHandle(ref, () => {
    return { open };
  });
  if (isShow) {
    return (
      <div className=" fixed top-0 bottom-0 left-0 right-0 bg-white">
        <div className=" mx-[14px]">
          <HeaderBack
            title={"manage account"}
            handleBack={() => {
              setIsShow(false);
            }}
          ></HeaderBack>
          <div className=" flex justify-between mt-[30px] text-gray-500">
            <div className=" w-[40%]">组合名称</div>
            <div>修改</div>
            <div>清空</div>
            <div>上移</div>
            <div>下移</div>
          </div>
          <div className=" flex pt-[20px]">
            <div className=" mr-[20px]">全部</div>
            <Switch></Switch>
          </div>
          {tab.map((item, index) => {
            if (index != 0) {
              return (
                <div key={index} className=" flex justify-between mt-[20px]">
                  <div className=" w-[40%]">{item.lable}</div>
                  <div>修改</div>
                  <div>清空</div>
                  <div>上移</div>
                  <div>下移</div>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
};
const ManageAccount = React.forwardRef(InnerManageAccount);
export default ManageAccount;
