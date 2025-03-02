import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

function RecentOrderCard({ item }) {
  return (
    <div className="w-[24.3rem] pr-4 pl-5  py-3.5 bg-[#fff] rounded-3xl flex gap-4 items-start">
      <img
        src="https://imgs.search.brave.com/KTj6BIldNF36n2boGosETCmzICdl-O2aiaaimCdkG2A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzA4Lzg0LzI0/LzM2MF9GXzYwODg0/MjQxM19oZFlhZHA2/dVNDN2M3cHE2TEpl/dzlzOGdQblJTZ2ps/bi5qcGc"
        className="w-[7.5rem] h-[6.8rem] rounded-3xl "
      />
      <div className="flex flex-col gap-1  w-full">
        <div className="flex gap-1 justify-end">
          <div
            className={`w-3 h-3  border ${
              item.type === "veg" ? "border-[#017F01]" : "border-[#F10027]"
            } `}
          >
            <span
              className={`w-full h-full block rounded-full ${
                item.type === "veg" ? "bg-[#017F01]" : " bg-[#F10027]"
              } `}
            ></span>
          </div>
          <span className="text-[.5rem] font-medium text-[#A71316]">
            Bestseller
          </span>
          <span className="text-[#a71316] text-xs font-semibold">
            <FaRegStar />
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold leading-3.5">{item.name}</span>
          <span className="text-[#726C6C] text-[.6rem] font-bold leading-3.5">
            ₹{item.price}
          </span>
        </div>
        <div className="flex justify-between"> 
        <div className="flex gap-1 items-center">
          <span className="text-[.5rem] font-normal leading-3 text-[#A3A3A3]">
            Rating
          </span>
          <span className="text-[.5rem] font-bold leading-3 text-[#0E7F3D]">
            {item.rating}
          </span>
          <span className="text-[#0E7F3D] text-xs">
            <FaStar />
          </span>
        </div>
        <div className="flex gap-1 items-center text-[.5rem]">
          <CiBookmark />
          <span className="font-normal leading-3 bg-[#FFEDED] flex gap-1 items-center border-[.5px] border-[#E9B6B7] text-[#A3A3A3] px-1 rounded-md">
            More Details
            <span>
              <FaAngleRight />
            </span>
          </span>
        </div>
        </div>

        <div className="flex gap-3 justify-between  ">
          <div className="flex items-center gap-1 text-[#A71316] border-[.75px] border-[#FCE5E0] max-w-fit px-1 rounded-sm">
            <IoCartOutline className="text-sm" />
            <span className=" text-sm font-semibold">Add to Cart</span>
          </div>
          <div className="flex gap-1 text-[#A71316] border-[.75px] border-[#FCE5E0] max-w-fit px-1 rounded-sm text-xl font-semibold">
            <span>+</span>
            <span>0</span>
            <span>-</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentOrderCard;
