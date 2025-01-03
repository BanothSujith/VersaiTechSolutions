import React from "react";
import { RxCross2 } from "react-icons/rx";

function SureComponent({ setCardData, setRejected }) {
  return (
    <div className="relative uppercase flex flex-col items-center justify-around w-[85%] h-full max-h-[20%] rounded-xl bg-[#b1b1b08b] ">
      <p className=" text-center text-xl opacity-70 font-semibold max-w-[70%]">
        Sure!
        <span style={{ display: "block" }}>do you want to decline order</span>
      </p>
      <div className="flex flex-row-reverse justify-around  w-full h-11 ">
        <button
          className="bg-[#0f804bc5] h-full w-full max-w-32 text-white rounded-full "
          onClick={() => {
            setCardData([]);
            setRejected(false);
          }}
        >
          YES
        </button>
        <button
          className="bg-[#d63535] h-full w-full max-w-32 text-white rounded-full "
          onClick={() => setRejected(false)}
        >
          NO
        </button>
      </div>
      <div
        className="absolute top-0 right-0 text-xl p-2"
        onClick={() => setRejected(false)}
      >
        <RxCross2 />
      </div>
    </div>
  );
}

export default SureComponent;
