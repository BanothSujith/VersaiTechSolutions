import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdCheckmark } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { FaFacebookMessenger,FaAngleRight } from "react-icons/fa6";

import Deliverybike from "../assets/trackDelivery.png";
import location from "../assets/locationtrack.png";
const orderStatus = [
  {
    id: 1,
    title: "Your order has been received",
  },
  {
    id: 2,
    title: "The restaurant is preparing your food",
  },
  {
    id: 3,
    title: "Your order has been picked up for delivery",
  },
  {
    id: 4,
    title: "Order arriving soon!",
  },
];
function TrackDelivery() {
  const currentStage = 2;

  return (
    <div className="p-2 flex flex-col gap-6">
      <div className="text-[#A71316] flex gap-1  items-center ">
        <span className="text-2xl">
          <IoIosArrowBack />
        </span>
        <span className="text-xl font-bold leading-6">Order Status</span>
      </div>
      <img src={Deliverybike} className="w-full h-[12rem] my-12" />
      <div className="flex w-full justify-between items-center border border-[#FDC7B4] rounded-xl px-4 ">
        <div className="flex  items-center">
          <img src={location} className="h-20 aspect-square object-center" />
          <span className="font-semibold text-[#A71316]">Track Your Order</span>
        </div>
        <button className="bg-[#820F11] text-white px-4 py-2.5 rounded-lg">
          View Map
        </button>
      </div>

      <div className="flex flex-col gap-4 p-4 bg-white rounded-lg ">
        <div className="flex flex-col items-center">
          <span className="text-xl font-extrabold ">20 min</span>
          <span className="text-[#A0A5BA] text-sm font-medium leading-6">
            Estimated delivery time
          </span>
        </div>
        {orderStatus.map((status, index) => (
          <div
            key={status.id}
            className="relative flex items-center gap-6  px-3"
          >
            <span
              className={`w-4 h-4 bg-[#E4430B] rounded-full text-white text-sm flex items-center justify-center ${
                index < currentStage ? "bg-[#E4430B]" : "bg-gray-300"
              }`}
            >
              {index + 1 != currentStage ? <IoMdCheckmark /> : ""}
            </span>
            <span
              className={`font-normal ${
                index < currentStage - 1 ? "text-[#E4430B]" : "text-[#A0A5BA]"
              }`}
            >
              {status.title}
            </span>
            {index !== orderStatus.length - 1 && (
              <div
                className={`absolute left-[1.2rem] top-5 w-[2px] h-6 ${
                  index < currentStage - 1 ? "bg-[#E4430B]" : "bg-gray-300"
                }`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="px-2.5 py-3.5 border border-[#FDC7B4] rounded-xl mx-4 flex justify-between items-center">
        <div className="flex items-center gap-6 ">
          <img
            src="https://imgs.search.brave.com/KlINh97Wdie4SqYvOBwHPe9g_TrH478N8u44ouOZSRY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9oNmdvbzln/dzFoaDYvMnNOWnRG/QVdPZFAxbG1RMzNW/d1JOMy8yNGU5NTNi/OTIwYTljZDBmZjJl/MWQ1ODc3NDJhMjQ3/Mi8xLWludHJvLXBo/b3RvLWZpbmFsLmpw/Zz93PTEyMDAmaD05/OTImZmw9cHJvZ3Jl/c3NpdmUmcT03MCZm/bT1qcGc"
            className="w-[3.9rem] aspect-square rounded-full"
          />
          <div className="flex flex-col justify-between ">
            <span className="text-[#111A2C] text-xl font-semibold leading-8">Banoth Sujith</span>
            <span className="text-[#A0A5BA] text-sm font-normal leading-6 ">Delivary Partner</span>
          </div>
        </div>
        <div className="flex gap-4 h-11">
          <span className="h-full aspect-square rounded-full  border flex items-center justify-center"><FiPhone/> </span>
          <span className="h-full text-2xl aspect-square rounded-full  border flex items-center justify-center"><FaFacebookMessenger/></span>
        </div>
      
      </div>
      <div className="bg-[#DFF2EA] flex items-center justify-between px-4 py-2 mx-2">
            <span className="text-[#1A1A1A] text-xs font-medium leading-5">Add Instructions</span>
            <FaAngleRight/>
        </div>
    </div>
  );
}

export default TrackDelivery;
