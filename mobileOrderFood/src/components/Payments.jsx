import React from "react";
import { IoIosArrowBack } from "react-icons/io";


import card from "../assets/card.png";
import PaymentsTypes from "./PaymentsTypes";
import AddCard from "./AddCard";

function Payments() {
 
  
  return (
    <div
      className="p-2 flex flex-col gap-6 relative overflow-hidden"
      style={{ fontFamily: "Sofia Sans" }}
    >
      <div className="text-[#A71316] flex gap-1  items-center ">
        <span className="text-2xl">
          <IoIosArrowBack />
        </span>
        <span className="text-xl font-bold leading-6">Payment</span>
      </div>
      <div className="px-2 w-full">
        <img src={card} className="w-full" />
      </div>
      {/* <PaymentsTypes/> */}
      <AddCard/>
    </div>
  );
}

export default Payments;
