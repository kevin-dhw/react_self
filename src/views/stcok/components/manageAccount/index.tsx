import React, { useState, useImperativeHandle, useRef } from "react";
import classNames from "classnames";
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
  const {
    tab,
    handleDelTab,
    handleIsShowAll,
    curIdx,
    setCurIdx,
    handleUpTab,
    handleDownTab,
  } = useTabStore();
  const delComfirmRef = useRef<DelComfirmRef>(null);
  const editAccountRef = useRef<AccountAddRef>(null);

  const open = () => {
    setIsShow(true);
  };
  const handleDelTabItem = () => {
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
            <div className="  mt-[20px] border-b">
              <div className=" flex  pb-[20px]">
                <div className=" pr-[20px]">全部</div>
                <Switch
                  checked={tab[0].isShow}
                  onChange={onSwitchChange}
                ></Switch>
                <div className=" flex-1"></div>
              </div>
            </div>
            {tab.map((item, index) => {
              if (item.lable != "all") {
                return (
                  <div
                    key={index}
                    className=" flex justify-between mt-[20px] border-b pb-[20px]"
                  >
                    <div onClick={() => handleDel(index)}>删除</div>
                    <div className=" w-[40%]">{item.lable}</div>
                    <div
                      onClick={() => {
                        setCurIdx(index);
                        editAccountRef.current?.open("edit");
                      }}
                    >
                      修改
                    </div>
                    <div>清空</div>
                    <div
                      onClick={() => {
                        setCurIdx(index);
                        handleUpTab();
                      }}
                    >
                      <span className={classNames(index == 1 && " hidden")}>
                        上移
                      </span>
                    </div>
                    <div
                      onClick={() => {
                        setCurIdx(index);
                        handleDownTab();
                      }}
                    >
                      <span
                        className={classNames(
                          index == tab.length - 1 && " hidden"
                        )}
                      >
                        下移
                      </span>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div
            onClick={() => {
              editAccountRef.current?.open("add");
            }}
            className=" pl-[22px] pt-[20px]"
          >
            add account
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
