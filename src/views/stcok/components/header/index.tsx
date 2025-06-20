import React from "react";
import HouseImg from "../../img/house.png";

const Stock: React.FC = () => {
  return (
    <div className=" flex justify-between items-center px-[10px] pt-[10px] ">
      <div>
        <img src={HouseImg} className=" w-[30px] h-[30px] rounded-full"></img>
      </div>
      <div className=" text-[20px] font-bold">name of this account</div>
      <div>
        <img className=" w-[20px] h-[20px] rounded-full" src={HouseImg}></img>
      </div>
    </div>
  );
};

export default Stock;
