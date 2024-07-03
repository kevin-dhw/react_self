import React from "react";
import { Button } from "antd";
import { ContentProps } from "../../content";

interface MainContentProps
  extends Pick<ContentProps, "mainData" | "handleBtn"> {}

const MainContent: React.FC<MainContentProps> = (props) => {
  const { mainData, handleBtn } = props;
  return (
    <div>
      {mainData.length &&
        mainData.map((item, index) => {
          return (
            <div key={index} className=" my-3">
              <div>{item.title}</div>
              <div>
                <div>名称： {item.name}</div>
              </div>
              <div>
                <div>处理人： {item.dealName}</div>
              </div>
              <div>
                {item.btns.length &&
                  item.btns.map((ele, idx) => {
                    return (
                      <Button onClick={() => handleBtn(ele)} key={idx}>
                        {ele.value}
                      </Button>
                    );
                  })}
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default MainContent;
