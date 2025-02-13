import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CiCircleMinus } from "react-icons/ci";

function SideListCard({ cardData, handleIncrement, handleDecrement, editing }) {
  return (
    <div className="flex  max-w-[22.25rem] justify-between w-full h-full max-h-[4.125rem]">
      <div className="flex justify-between basis-[12.438rem] h-full max-h-[4.125rem] w-full max-w-[12.438rem] ">
        <div className="basis-[4.063rem] h-full max-h-[4.063rem] 	 ">
          <img
            className="w-full h-full aspect-square rounded-[.25rem] "
            src={cardData.img}
            alt={cardData.name}
          />
        </div>
        <div className="max-h-[4rem] basis-[7.25rem] flex flex-col justify-center  ">
          <span className="uppercase font-medium text-base  ">
            {cardData.item}
          </span>
          <span className=" font-bold text-2xl">${cardData.price}</span>
        </div>
      </div>
      <div className="max-h-[4rem] basis-[7.25rem] flex flex-col justify-center  items-center">
        <span className="uppercase font-medium text-base  ">Quantity:</span>
        {editing ? (
          <span className="flex justify-center items-center gap-1">
            <button
              className=" pt-1 text-blue-600 text-[1.563rem]"
              onClick={handleIncrement}
            >
              <AiOutlinePlusCircle />
            </button>{" "}
            <span className="font-bold text-2xl">{cardData.qty}</span>{" "}
            <button
              className="pt-1 text-red-600 text-[1.563rem] "
              onClick={handleDecrement}
            >
              <CiCircleMinus />
            </button>
          </span>
        ) : (
          <span className="font-bold text-2xl">{cardData.qty}</span>
        )}
      </div>
    </div>
  );
}

export default SideListCard;
