import React, { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import PopUp from "../cards/PopUp";

function OrderNow() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Current count:", count);
  }, [count]);
  return (
    <div className="relative w-full h-full ">
      <img
        src="https://imgs.search.brave.com/iyN9IdP1rNF5AF42mv7xqpKyzqwserYGijN2GR_iCSY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/NDcyNzY1Ni9waG90/by9iaXJpeWFuaS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Z1l1cXFPeHhjSHBa/WGlVNGFKa0ZodU5M/UjBKOGxqUjA5VTlK/YkxmUUR2VT0"
        className="w-full h-full"
      />
      <div className="absolute  top-4 right-4 text-red-500  flex gap-3">
        <span className="text-3xl">
          <CiHeart />
        </span>
        <span className="text-3xl">
          <IoCartOutline />
        </span>
      </div>
      <div className="fixed bottom-0 flex flex-col gap-4 text-white bg-[#00000093] bg-opacity-50 w-full  px-4 py-8 rounded-t-3xl">
        <div className="flex flex-col gap-3.5 ">
          <div className="flex flex-col ">
            <span className="text-2xl font-bold text-[#F8E8E8]">
              Double Cheesy burger
            </span>
            <span className="text-[#D9D9D9] text-xl font-medium">₹200</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="bg-[#A71316] py-0.5 px-3.5 rounded-3xl text-sm font-bold w-fit ">
              Bestseller
            </span>
            <div className="flex  items-start gap-3">
              <div className="flex ">
                {Array.from({ length: 4 }).map((_, i) => (
                  <IoIosStar className="text-[#e04f5f]" key={i} />
                ))}
                <IoIosStar className="text-[#cedbe4] " />
              </div>
              <span className="relative text-xs font-medium underline decoration-transparent bg-gradient-to-r from-[#A71316] to-[#E4430B] text-transparent bg-clip-text after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-[#A71316] after:to-[#E4430B]">
                433 love this!
              </span>
            </div>
          </div>
          <p className="text-sm text-[#FFF] font-medium">
            BBQ Infused Chicken / Lamb / Tenderloin patty, Pickles, Caramelized
            Onions, Kraft American Cheese Melted Over Freshly Grilled Patties,
            On A Soft, Toasted Bun With Spread Of Classic Burger Sauce.Also
            sides with french-fries and a dip of your choice.
          </p>
        </div>
        <div className="flex gap-4 items-center justify-between">
          <button
            className="bg-[#820F11] text-white text-center py-4 px-2.5 rounded-lg w-[19.68rem] "
            onClick={() => console.log(count)}
          >
            Order Now
          </button>
          <div className="bg-[#820F11] text-white font-bold py-4 px-2.5 rounded-lg w-[4.0625rem] flex justify-center items-center gap-1 ">
            <button onClick={() => setCount((prev) => prev + 1)}>+</button>
            <span>{count}</span>
            <button
              className="flex items-center"
              onClick={() => {
                count > 0 ? setCount((prev) => prev - 1) : "";
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-0 w-full h-full bg-[#00000020] text-white flex justify-center items-center ">
        <div>
          <PopUp />
        </div>
      </div>
    </div>
  );
}

export default OrderNow;
