import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";
import { TbCurrentLocation } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { IoMdShareAlt } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Address() {
  const navigate = useNavigate();
  return (
    <div className="px-2">
      <div className="w-full h-40   bg-[#fff] rounded-3xl ">
        <div className="flex justify-between items-center p-4 border-b border-b-[#D6D6D6]" onClick={()=>navigate('/profile/addaddress')}>
          <span className="flex gap-8">
            <FaPlus className="text-[#982b15] text-3xl" />
            <span className="text-xl font-semibold text-[#cf6264] ">
              Add Address
            </span>
          </span>
          <FiChevronRight className="text-2xl text-[#b1b1b1]" />
        </div>
        <div className="flex  p-4 items-center gap-8 ">
          <TbCurrentLocation className="text-3xl text-[#982b15] " />
          <span className="flex flex-col justify-between">
            <span className="text-xl font-semibold text-[#cf6264] ">
              Use Your Current Location
            </span>
            <span className="capitalize text-[#8F8D8D] text-xl font-semibold">
              Jaipur, Rajasthan
            </span>
          </span>
        </div>
      </div>

      {/* //saved Address */}

      <div className="">
        <h1 className="text-xl font-medium text-[#8f8d8d] text-center my-6">
          SAVED ADDRESS
        </h1>
        <div className="flex flex-col gap-4">
          {
            Array.from({length:4}).map((_,i)=>(
                <div className="w-full h-40 p-6  bg-[#fff] rounded-3xl flex gap-8 " key={i}>
            <span className="">
              <IoHomeOutline className="text-2xl text-[#8F8D8D] mx-1 " />
              <span className="text-sm font-medium">!3km</span>
            </span>
            <span className="flex flex-col gap-1">
                <span className="text-xl font-medium ">Home</span>
                <p className="text-sm font-medium text-[#8F8D8D] "
                  style={{ fontFamily: "Sofia Sans" }}

                >116 , Pyramid Mahika , jakkur Main Rd, Basaveshwara Nagar Basavagudi, Bengaluru, Karnataka, India</p>
                <span className=" flex gap-4 text-[#982b15]">
                    <SlOptions/>
                    <IoMdShareAlt/>
                </span>
            </span>
          </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Address;
