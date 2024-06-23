import React from "react";
import classNames from "classnames";
import Header from "./components/header";
import EchartsContainer from "./components/echartContainer";
import "./index.scss";

interface EchartsProps {
  position?: "column" | "row";
}

// function getStyle(value: string) {}

const Echarts: React.FC<EchartsProps> = (props) => {
  const { position = "column" } = props;

  const cls = classNames("echrts-container", { [`echarts-${position}`]: position });
  return (
    <div className="echarts">
      <div className={cls}>
        <Header />
        <EchartsContainer />
      </div>
    </div>
  );
};

export default Echarts;
