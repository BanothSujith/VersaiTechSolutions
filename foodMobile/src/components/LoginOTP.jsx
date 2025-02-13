import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoBackspaceOutline } from "react-icons/io5";
import { LuPencilLine } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function LoginOTP() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpPhase, setOtpPhase] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isValid, setIsValid] = useState(null);
  const [timer, setTimer] = useState(60);
 const navigate = useNavigate();
  useEffect(() => {
    if (timer === 0) return;

    const count = setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => clearTimeout(count);
  }, [timer]);

  useEffect(() => {
    const otpValue = otp.join("");
    if (otpValue.length === 4) {
      if (otpValue === "1234") {
        setIsValid(true);
        setTimeout(() => setIsValid(null) ,navigate('/profile/profile')
        , 2000);
      } else {
        setIsValid(false);
        setOtp(["", "", "", ""]);
        setTimeout(() => setIsValid(null), 2000);
      }
    }
  }, [otp]);

  const handlePhoneNumber = (e) => {
    if (e.target.value.length <= 10) {
      setPhoneNumber(e.target.value);
    }
  };

  const handleComplete = () => {
    phoneNumber.length == 10
      ? (alert("OTP sent to your phone number " + phoneNumber),
        setOtpPhase(!otpPhase))
      : alert("Please enter a valid phone number");
  };
  const handleEditButton = () => {
    setOtpPhase(!otpPhase);
    setOtp(["", "", "", ""]);
  };
  const handleNumberButtons = (e) => {
    const targetElement = e.target.closest("span");
    if (!targetElement) return;

    const action = targetElement.dataset.action;
    const number = targetElement.textContent.trim();

    !otpPhase &&
      setPhoneNumber((prev) => {
        if (action === "backspace") {
          return prev.slice(0, -1);
        } else if (!isNaN(number) && prev.length < 10) {
          return prev + number;
        }
        return prev;
      });
    otpPhase &&
      setOtp((prev) => {
        const newOtp = [...prev];
        const emptyIndex = newOtp.findIndex((val) => val === "");

        if (action === "backspace") {
          const lastFilledIndex = newOtp
            .map((val) => val !== "")
            .lastIndexOf(true);
          if (lastFilledIndex >= 0) {
            newOtp[lastFilledIndex] = "";
          }
        } else if (!isNaN(number) && emptyIndex !== -1) {
          newOtp[emptyIndex] = number;
        }
        return newOtp;
      });
  };

  return (
    <div className="w-full  h-full flex flex-col py-1 gap-4 justify-between overflow-auto ">
      <span className="flex items-center  text-[#A71316] h-5  p-1 ">
        <span className="w-5">
          <IoIosArrowBack />
        </span>
        {!otpPhase ? <span>Log In /Sign Up</span> : <span>Enter OTP</span>}
      </span>

      {!otpPhase && (
        <div className="w-full flex flex-col  gap-8 items-center ">
          <span className="w-full font-bold text-6 text-center h-7  capitalize   ">
            Log In /Sign Up
          </span>
          <label className="text-[#A3A3A3] text-[.875rem] font-sans capitalize  flex flex-col-reverse">
            <input
              type="tel"
              readOnly
              value={phoneNumber}
              maxLength={10}
              minLength={10}
              onChange={handlePhoneNumber}
              className="w-82 h-13 shrink-0 my-2 px-4 border tracking-widest bg-[#F9F7F7] outline-0 border-[#C03526] rounded-xl text-black font-[DM Sans]  font-bold"
            />
            enter mobile number
          </label>
          <button
            className="w-82 py-4 px-2.5 bg-[#820F11] rounded-xl text-white text-2xl "
            onClick={handleComplete}
          >
            Complete
          </button>
        </div>
      )}

      {otpPhase && (
        <div className="w-full flex flex-col gap-8 items-center">
          <span className="w-full font-bold text-lg md:text-2xl text-center h-7 capitalize">
            Enter OTP
          </span>
          <span className="font-bold flex gap-1 w-full justify-center items-center text-6 text-center h-7 capitalize">
            <span>Sent On</span> <u>{phoneNumber}</u>{" "}
            <span onClick={handleEditButton}>
              <LuPencilLine />
            </span>{" "}
          </span>
          <div className="flex gap-2">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                id={`otp-input-${index}`}
                value={value}
                readOnly
                maxLength={1}
                className={`w-16 h-16 text-center text-3xl font-bold rounded-lg focus:outline-none border ${
                  isValid === null
                    ? "border-[#C03526]"
                    : isValid
                    ? "border-green-500 "
                    : "border-red-500 bg-red-100"
                }`}
              />
            ))}
          </div>
          <span>
            Next retry in <span className="text-red-500">{timer}</span> seconds
          </span>

          <button
            className={`uppercase`}
            disabled={timer !== 0}
            onClick={() => {
              setTimer(60);
            }}
          >
            Retry
          </button>
        </div>
      )}

      <div className="w-full h-98 p-2 bg-[#d1d5db] ">
        <div
          className="w-full h-68   grid grid-cols-3 gap-2 md:gap-3 justify-items-center pt-1  "
          onClick={handleNumberButtons}
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className={` flex justify-center items-center  w-full h-16 md:h-20 transition-all duration-100 ease-in cursor-pointer ${
                phoneNumber.length == 10 ? "bg-[#fcfcfeb5] " : "bg-[#FCFCFE]"
              }  rounded-sm text-center text-3xl font-bold `}
            >
              {i + 1}
            </span>
          ))}
          <span
            className={`shrink-0 flex justify-center items-center w-full h-16 md:h-20 transition-all duration-100 ease-in cursor-pointer ${
              phoneNumber.length == 10 ? "bg-[#fcfcfeb5] " : "bg-[#FCFCFE]"
            }  rounded-sm text-center text-3xl font-bold col-start-2 `}
          >
            0
          </span>
          <span
            data-action="backspace"
            className="shrink-0 flex justify-center items-center max-w-full max-h-16 md:h-20 w-full h-full  rounded-sm text-center text-4xl font-bold  cursor-pointer"
          >
            <IoBackspaceOutline />
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginOTP;
