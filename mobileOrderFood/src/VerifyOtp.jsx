import React, { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";

function VerifyOtp() {
  const [isVerifiedOtp, setIsVerified] = useState(true);
  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly border-2 border-amber-400">
      <div>
        {isVerifiedOtp ? (
          <IoIosCheckmarkCircle className="text-9xl text-[#0B7C4C]" />
        ) : (
          <IoIosCloseCircle className="text-9xl text-[#D22735]" />
        )}
        <span className="text-[#1A1A1A] ">{isVerifiedOtp ?  "Yay! Payment Successful!" : "Uh oh! Payment failed!"}</span>
      </div>
      <button className="bg-[#820F11] text-white  py-4 w-[21rem] rounded-lg">
      {isVerifiedOtp ?  "Continue" : "TRY AGAIN"}      </button>
    </div>
  );
}

export default VerifyOtp;
