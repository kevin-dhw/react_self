import React, { useState } from "react";
import dayjs from "dayjs";

export interface HeaderProps {
  getCurYear: (curYear: number) => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { getCurYear } = props;
  const curYear = Number(dayjs().format("YYYY"));
  const [year, setYear] = useState(curYear);

  const handleAddYear = () => {
    setYear(year + 1);
    getCurYear(year + 1);
  };
  const handleReduceYear = () => {
    setYear(year - 1);
    getCurYear(year - 1);
  };
  return (
    <div className=" flex p-6">
      <div className=" flex m-auto">
        <div onClick={handleReduceYear}>-</div>
        <div>{year}</div>
        <div onClick={handleAddYear}>{year < curYear && <>+</>}</div>
      </div>
    </div>
  );
};

export default Header;
