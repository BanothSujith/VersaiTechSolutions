import React, { useState, useRef } from "react";
import { BiSolidLockOpenAlt } from "react-icons/bi";

const OTPVerification = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);
  const correctOtp = "1234";

  const handleChange = (index, e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const verifyOtp = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp === correctOtp) {
      alert("OTP Verified Successfully!");
      setOtp(["", "", "", ""])
    } else {
      alert("Incorrect OTP. Please try again.");
      setOtp(["", "", "", ""]);
      inputRefs.current[0].focus();
    }
  };

  return (
    <div className="relative flex flex-col items-center gap-4 bg-white p-12 rounded-2xl" style={{ fontFamily: "DM Sans" }}>
 <BiSolidLockOpenAlt className="absolute -top-6 text-[#820F11] left-1/2 transform -translate-x-1/2 text-5xl"/>
      <h2 className="text-xl font-bold text-[#1A1A1A] leading-7">Enter OTP</h2>
      <span className="text-[#A3A3A3] text-xs font-medium leading-5">OTP sent on +91 9886186111</span>
      <div className="flex gap-2">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-12 h-12 text-center text-lg font-bold border border-[#A3A3A3] rounded-md bg-white shadow focus:border-blue-500 focus:outline-none"
          />
        ))}
      </div>
      <span className="text-[#820F11] text-xs font-bold leading-5">RETRY</span>
      <button className="mt-4 px-12 py-2 bg-[#820F11] text-white rounded-lg font-semibold" onClick={verifyOtp}>
        Confirm
      </button>
    </div>
  );
};

export default OTPVerification;
