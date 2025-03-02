import React from "react";
import { FaCirclePlus } from "react-icons/fa6";

function CompleteYourMEal() {
  return (
    <div className="h-[7.25rem]">
      <div className="relative bg-[#3C2F2F] w-[6.25rem] h-full rounded-[.9375rem] flex items-end justify-between p-2 text-white">
        <span className="text-xs font-medium leading-4 max-w-[4rem] line-clamp-1">
          Fries
        </span>
        <span className="text-[#ef2a39] bg-white rounded-full">
          <FaCirclePlus />
        </span>
        <div className="absolute top-0 left-0 border w-[6.25rem] h-[4.8rem] bg-[#fff]  rounded-[.9375rem] p-4 flex items-center justify-center">
          <img
            src="https://w7.pngwing.com/pngs/520/887/png-transparent-biryani-thumbnail.png"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default CompleteYourMEal;
