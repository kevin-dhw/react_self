import React, { useState, useImperativeHandle, useRef } from "react";
import HeaderBack from "../headerBack";
import useTabStore from "../../store/useTabStore";
import DelComfirm, { DelComfirmRef } from "../delComfirm";
import AccountAdd, { AccountAddRef } from "../addAccount";
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
  const [curIdx, setCurIdx] = useState(0);
  const { tab, handleDelTab, handleIsShowAll } = useTabStore();
  const delComfirmRef = useRef<DelComfirmRef>(null);
  const editAccountRef = useRef<AccountAddRef>(null);

  const open = () => {
    setIsShow(true);
  };
  const handleDelTabItem = () => {
    // console.log("handleDelTabItem", curIdx);
    delComfirmRef.current?.close();
    handleDelTab(curIdx);
  };
  // before we delete the current item, we first should get the index
  const handleDel = (idx: number) => {
    delComfirmRef.current?.open();
    setCurIdx(idx);
  };
  const onSwitchChange = (checked: boolean) => {
    handleIsShowAll();
    console.log(checked, "checkedchecked");
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
          <div className=" mx-[24px]">
            <div className=" flex justify-between mt-[30px] text-gray-500">
              <div className=" w-[40%]">account name</div>
              <div>modify</div>
              <div>remove</div>
              <div>up</div>
              <div>down</div>
            </div>
            <div className=" flex pt-[20px]">
              <div className=" mr-[20px]">全部</div>
              <Switch
                checked={tab[0].isShow}
                onChange={onSwitchChange}
              ></Switch>
            </div>
            {tab.map((item, index) => {
              if (index != 0) {
                return (
                  <div key={index} className=" flex justify-between mt-[20px]">
                    <div onClick={() => handleDel(index)}>删除</div>
                    <div className=" w-[40%]">{item.lable}</div>
                    <div
                      onClick={() => {
                        editAccountRef.current?.open("edit");
                      }}
                    >
                      修改
                    </div>
                    <div>清空</div>
                    <div>上移</div>
                    <div>下移</div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <DelComfirm
          ref={delComfirmRef}
          handleDelTabItem={handleDelTabItem}
        ></DelComfirm>
        {/* edit account component */}
        <AccountAdd ref={editAccountRef}></AccountAdd>
      </div>
    );
  }
};
const ManageAccount = React.forwardRef(InnerManageAccount);
export default ManageAccount;
