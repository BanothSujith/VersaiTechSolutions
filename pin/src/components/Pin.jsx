import React, { useState, useEffect } from "react";
import { IoBackspaceOutline } from "react-icons/io5";

function Pin() {
  const code = [1, 2, 3, 4];
  const [pin, setPin] = useState([]);
  console.log(pin);
  useEffect(() => {
    setTimeout(() => {
      if (pin.length === 4) {
        handleAutosubmit(pin);
      }
    }, 1);
  }, [pin]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handlePin = (digit) => {
    if (pin.length < 4) {
      setPin((prev) => [...prev, digit]);
    }
  };

  const handleBackspace = () => {
    setPin((prev) => prev.slice(0, -1));
  };

  const handleAutosubmit = (enteredPin) => {
    if (JSON.stringify(enteredPin) === JSON.stringify(code)) {
      alert("correct Pin");
    } else {
      alert("Incorrect Pin");
    }
    setTimeout(() => {
      setPin([]);
    }, 1);
  };

  const handleKeyDown = (event) => {
    const key = event.key;
    if (!isNaN(key) && key !== " ") {
      handlePin(Number(key));
    } else if (key === "Backspace") {
      handleBackspace();
    }
  };

  return (
    <div className="grid grid-cols-2 justify-center grid-rows-1 h-screen w-full content-center bg-[#3d3d3d]">
      <div className="flex flex-col h-full items-center justify-center  bg-[#ffffff] p-[5rem]">
        <span className="text-[#9a9a9a] text-[2em] leading-none">Welcome</span>
        <span className="text-[6em] leading-none ">
          <span className="text-[#746957]">A</span>
          <span className="text-[#293534]">S</span>
          <span className="text-[#4592a5]">H</span>
        </span>
        <span className="text-[#9a9a9a] text-[2em]">Restaurant Admin</span>
      </div>

      <div className="bg-[#1b2827] flex flex-col h-full justify-center py-[3em] items-center">
        <h1 className="text-[1.5em] text-[#ffffff]">Enter your PIN</h1>

        <div className="flex my-[1em] justify-center items-center">
          {Array(4)
            .fill()
            .map((_, i) => (
              <span
                key={i}
                className={`bg-[#6b6b6b] rounded-[50%] border-[#c6c9c9] mx-[.5em] w-[1em] h-[1em] ${
                  i < pin.length ? "bg-[#f1f2f2]" : ""
                }`}
              ></span>
            ))}
        </div>

        <div className="grid w-[17rem] h-[27rem] grid-cols-3 py-[2em] grid-rows-4 justify-center items-center gap-6 text-white">
          {Array(9)
            .fill()
            .map((_, i) => (
              <button
                className="flex justify-center w-full h-full items-center border-gray-500 border  rounded-full font-semibold text-xl hover:bg-gray-300 hover:text-black duration-200 "
                key={i}
                onClick={() => handlePin(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          <div
            className="flex justify-center items-center border-gray-500 border h-full w-full rounded-[50%] font-semibold text-[1.3em] hover:bg-white hover:text-black col-start-2 "
            onClick={() => handlePin(0)}
          >
            0
          </div>
          <div
            className="flex justify-center items-center h-full w-full"
            onClick={handleBackspace}
          >
            <IoBackspaceOutline className="text-[2em] font-semibold text-[#ffffff] active:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pin;
