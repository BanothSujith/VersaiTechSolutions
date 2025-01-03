import React from "react";
import { FaRupeeSign } from "react-icons/fa";


function Card({ item,setSelecteditem,setItemId }) {
  return (
    <div
      className={`flex flex-col justify-between items-center gap-1 w-full h-full max-w-[16.146rem] max-h-[15.063rem] p-2 rounded-md bg-[#ffffff] `}  onClick={()=>{setSelecteditem(true); setItemId(item.id)}}
     
    >
      <div className={`relative h-[11.25rem] w-full max-h-[12.25rem] max-w-[15.146rem]`}>
        <img
          src={item.image}
          alt={item.itemName}
          loading="lazy"
          className={`rounded-lg object- w-full h-full max-h-[12.25rem] max-w-[15.146rem] ${
        item.stock>0 ? "bg-white " : " filter grayscale "
      }`}
        />
        <div
          className={`absolute flex gap-1 items-center justify-evenly top-0 right-0 m-1 px-2 py-1 w-fit max-h-6 rounded-[.25rem] ${
            item.stock>0 ? "bg-white" : "bg-red-100 text-red-500"
          }`}
        >
          <span
            className={`${
              item.stock>0 ? "bg-[#0cb466]" : "bg-red-500"
            } w-2 h-2 rounded-full `}
          ></span>
          <span className="text-sm ">{item.stock>0 ? "Available" : "Not Available"}</span>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-between items-center w-full max-w-[15.146rem] text-lg font-semibold">
        <p className="flex items-center ">
          <span>
            <FaRupeeSign />
          </span>
          {item.price}
        </p>
        <p className="line-clamp-2 leading-tight overflow-hidden text-ellipsis text-left break-words max-w-[70%]" title={item.itemName}>{item.itemName}</p>
      </div>
    </div>
  );
}

export default Card;
