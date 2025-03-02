import React from "react";
import { FaBell } from "react-icons/fa6";

function PopUp() {
  return (
    <div
      className="relative bg-white flex flex-col gap-4 w-[19.3rem] h-[19rem] items-center rounded-3xl px-4 py-6"
      style={{ fontFamily: "DM Sans" }}
    >
      <div className="w-40 flex flex-col items-center">
        <span className="text-[#1A1A1A] text-lg font-bold leading-7 ">
          Get Notified!
        </span>
        <p className="text-xs font-medium leading-5 text-[#A3A3A3] text-center ">
          Turn on push notification to get notified about offer and price drops!
        </p>
      </div>
      <button className="bg-[#820F11] rounded-lg py-2.5 px-4 text-white w-[12.5rem] text-sm font-medium leading-5">
        Turn On
      </button>
      <button className="bg-transparent border border-[#820F11] rounded-lg py-2.5 px-4 text-[#820F11] w-[12.5rem] text-sm font-medium leading-5">
        Not Now
      </button>
      <div className="absolute -top-3 text-[#820F11] text-3xl">
        <FaBell/>
      </div>
    </div>
  );
}

export default PopUp;
