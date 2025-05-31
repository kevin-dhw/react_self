import React, { useState } from "react";
import { Dropdown, Button } from "antd";
import type { MenuProps } from "antd";

const Dashborad: React.FC = () => {
  const [curDropdownWord, setCurDropdownWord] = useState("执行状态");

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <span
          onClick={() => {
            setCurDropdownWord("已执行");
          }}
        >
          已执行
        </span>
      ),
    },
    {
      key: "2",
      label: (
        <span
          onClick={() => {
            setCurDropdownWord("未执行");
          }}
        >
          未执行
        </span>
      ),
    },
  ];
  return (
    <div className="">
      <div className=" h-[600px] border w-[300px]">
        <div>
          <Dropdown menu={{ items }} placement="bottomLeft" arrow>
            <Button>{curDropdownWord}</Button>
          </Dropdown>
        </div>
        <div>2344</div>
      </div>
    </div>
  );
};

export default Dashborad;
