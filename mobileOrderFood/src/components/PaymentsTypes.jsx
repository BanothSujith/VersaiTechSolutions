import React,{useState} from 'react';
import OTPVerification from "./Otp";
import { FaChevronDown } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const paymentdata = [
  {
    type: "Credit Card",
    bank: "HDFC Bank",
    masked_number: "XXXX-XXXX-XXXX-1234",
    cvv: "",
  },
  {
    type: "Debit Card",
    bank: "ICICI Bank",
    masked_number: "XXXX-XXXX-XXXX-3570",
    cvv: true,
  },
  {
    type: "UPI",
    bank: "HDFC Bank",
    upi_id: "Pallavipandey41@okhdfcbank",
    account_holder: "PALLAVI PANDEY",
  },
];
const otherPayments = [
  { id: 1, name: "Cash on Delivery", icon: <BsCashStack /> },
  {
    id: 2,
    name: "UPI Payment",
    icon: "https://www.vectorlogo.zone/logos/upi/upi-ar21.svg",
  },
  { id: 3, name: "Credit/ Debit Card", icon: <FaCreditCard /> },
];

function PaymentsTypes() {
    const [paymentData, setPaymentData] = useState(paymentdata);
    const [paymentMethod, setPAymentMethod] = useState("UPI");
    const [isOTPopen,setIsOTPOpen] = useState(false);
    const handleCvv = (i, e) => {
        let value = e.target.value;
        value = value.replace(/\D/g, "");
        if (value.length > 3) {
          value = value.slice(0, 3);
        }
        setPaymentData((prev) =>
          prev.map((item, index) => (index === i ? { ...item, cvv: value } : item))
        );
        console.log(`Updated CVV for card ${i}:`, value);
      };
    
  return (
    <div><div className="px-2 flex flex-col gap-4">
    <h1 className="text-center text-[#DE9395] text-xl font-bold leading-7">
      Redemption Options
    </h1>
    <div className="flex justify-between items-center">
      <div className="flex gap-6 items-center">
        <IoMdCheckmarkCircleOutline className="text-[#0E7F3D] text-4xl" />
        <div className="flex flex-col ">
          <span className="font-semibold text-[#000] leading-6">
            Loyalty Points (178 points)
          </span>
          <span className="text-xs font-normal  leading-5 text-[#000]">
            You are eligible to use ₹178.9{" "}
          </span>
        </div>
      </div>
      <span className="text-[#820F11] text-sm font-bold leading-5">
        Apply
      </span>
    </div>

    <h1 className="text-center text-[#DE9395] text-xl font-bold leading-7">
      Quick payment options
    </h1>
    {paymentData.map((method, i) => (
      <div
        className="flex justify-between items-center"
        key={i}
        onClick={() => setPAymentMethod(method.type)}
      >
        <div className="flex gap-7 items-center">
          {method.type === paymentMethod ? (
            <IoMdCheckmarkCircleOutline className="text-[#0E7F3D] text-3xl " />
          ) : (
            <span className="w-6 h-6 rounded-full border-2 border-[#1C1B1F]"></span>
          )}
          <div className="flex flex-col ">
            <span className="font-semibold text-[#000] leading-6">
              Loyalty Points (178 points)
            </span>
            <span className="text-xs font-normal  leading-5 text-[#000]">
              You are eligible to use ₹178.9
            </span>
          </div>
          {method.type != "UPI" ? (
            <input
              type="number"
              value={method.cvv}
              onChange={(e) => handleCvv(i, e)}
              placeholder="CVV"
              className="w-16 h-7 appearance-none placeholder:text-[#E6006F] placeholder:text-sm placeholder:font-semibold border border-gray-400/40 text-center rounded-xl outline-0 [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden"
            />
          ) : (
            <img
              src="https://imgs.search.brave.com/spbWjYrQGWfxJVnOumrpWRMDnREqii2BNkZX30JnyBQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA1L2Nm/L2QxLzA1Y2ZkMWY3/YTIwMTVjNjk1MzQ5/YTdjMDkyODc3Yzg3/LmpwZw"
              className="w-16 h-16 object-cover"
            />
          )}
        </div>
      </div>
    ))}
    <h1 className="text-center text-[#DE9395] text-xl font-bold leading-7">
      Other payment options
    </h1>
    <div className="flex flex-col gap-4 shadow-[0_4px_10px_rgba(212,143,143,0.5)] ">
      {otherPayments.map((method) => (
        <div
          key={method.id}
          className="flex items-center justify-between gap-3 p-2 "
        >
          <div className="flex gap-4 items-center">
            {typeof method.icon === "string" ? (
              <img
                src={method.icon}
                alt={method.name}
                className="w-8 h-8"
              />
            ) : (
              <span className="text-xl text-gray-700">{method.icon}</span>
            )}
            <span className="text-sm font-medium">{method.name}</span>
          </div>
          <FaChevronDown />
        </div>
      ))}
    </div>
    <div className="flex gap-4 justify-between ">
      <div className="flex flex-col justify-center text-center">
        <span className="font-bold leading-6">₹11,20</span>
        <span className="text-[#820F11] text-sm font-semibold ">
          View Details
        </span>
      </div>
      <button className="bg-[#820F11] text-white w-[16rem] py-4 px-2.5 rounded-xl " onClick={()=>setIsOTPOpen(true)}>
        Pay Now
      </button>
    </div>
  </div>
{isOTPopen &&  <div className="absolute bg-black/30 left-0 top-0 w-full h-full flex justify-center items-center">
    <OTPVerification/>
  </div>}</div>
  )
}

export default PaymentsTypes