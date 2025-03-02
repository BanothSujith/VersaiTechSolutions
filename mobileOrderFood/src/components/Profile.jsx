import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillHouseAddFill } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import AddmoreCard from "../cards/AddmoreCard";
import CompleteYourMEal from "../cards/CompleteYourMEal";
import { FaAngleRight } from "react-icons/fa6";
import Coupon from "./Coupon";

const itemsData = [
  {
    id: 1,
    name: "Nati Donne Veg Biryani",
    image: "https://picsum.photos/seed/biryani/200",
    price: 299,
    quantity: 1,
  },
  {
    id: 2,
    name: "Spicy Paneer Tikka",
    image: "https://picsum.photos/seed/milk/200",
    price: 249,
    quantity: 1,
  },
  {
    id: 3,
    name: "Spicy Paneer Tikka",
    image: "https://picsum.photos/seed/egg/200",
    price: 249,
    quantity: 1,
  },
];
const priceBreakupData = {
  price_breakup: [
    { label: "Total MRP", value: 1408, type: "positive" },
    { label: "Coupon Code (SAVER11)", value: -300, type: "negative" },
    { label: "Shipping Charges", value: 12, type: "positive" },
    { label: "Total", value: 1120, type: "total" },
  ],
};
const coupons = [
  {
    code: "GLOBAL15",
    discount: 372,
    description: "Applicable on ICICI and Kotak Debit Cards",
    logo: "https://picsum.photos/seed/discount/40",
  },
  {
    code: "SAVEMOREFWD",
    discount: 400,
    description: "15% off on minimum purchase of ₹1500",
    logo: "https://picsum.photos/seed/discount/40",
  },
  {
    code: "CTPAYTM",
    discount: 420,
    description: "Applicable on PayTM payment",
    logo: "https://picsum.photos/seed/discount/40",
  },
];

function Profile() {
  const [items, setItems] = useState(itemsData);
  return (
    <div className="py-2 px-2 flex flex-col gap-6 ">
      <div className="flex flex-col ">
        <div className="text-[#820F11] flex items-center ">
          <span className="text-3xl">
            <IoIosArrowBack />
          </span>
          <span className="text-xl font-bold leading-6">Hello Pritika,</span>
        </div>
        <div className="flex gap-2 text-[#820F11] items-center px-2">
          <BsFillHouseAddFill />
          <span className="font-bold text-sm leading-3.5">Home:</span>
          <span className="w-44 line-clamp-1 text-xs font-medium">
            Woodscape Apartment, Sarj.....
          </span>
          <FaChevronDown />
        </div>
      </div>
      <div className="px-2">
        {items?.map((item) => (
          <AddmoreCard key={item.id} item={item} setItems={setItems} />
        ))}
      </div>
      <span
        className="text-lg font-semibold leading-6 text-[#3C2F2F] px-2 "
        style={{ fontFamily: "Roboto" }}
      >
        Complete Your Meal
      </span>
      <div
        className=" ml-2 flex gap-4 overflow-auto hidescrollbar h-[7.25rem] "
        style={{ fontFamily: "Roboto" }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <CompleteYourMEal key={i} />
        ))}
      </div>
      <div className="flex items-center justify-between px-4 py-2 w-full bg-[#DFF2EA] text-[#1A1A1A] ">
        <span className="text-xs font-medium leading-6  ">
          Apply coupons and gift cards to save more!
        </span>
        <FaAngleRight />
      </div>
      <div style={{ fontFamily: "DM Sans" }} className="text-[#1A1A1A]">
        <div className="w-full bg-white p-6 rounded-lg shadow-md ">
          <h2 className="text-lg font-bold mb-3">Price Breakup</h2>
          {priceBreakupData.price_breakup.map((item, i) => (
            <div key={i} className="flex justify-between w-full py-1">
              <span
                className={`text-sm font-medium ${
                  item.type === "total"
                    ? "font-bold text-black"
                    : "text-gray-600"
                }`}
              >
                {item.label}
              </span>
              <span className={`text-sm font-bold`}>
                {item.value < 0
                  ? `- ₹${Math.abs(item.value)}`
                  : `₹${item.value}`}
              </span>
            </div>
          ))}
        </div>
      </div>
      <button className="bg-[#820F11] text-white w-full mx-auto max-w-[20.4375rem] px-2.5 py-4 rounded-lg ">
        Check Out
      </button>
      {false && (
       <Coupon coupons={coupons}/>
      )}
    </div>
  );
}

export default Profile;
