import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdHome } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const addresses = [
  {
    label: "Home",
    address:
      "#205, Second Floor, Sree Primus, Hosapalya Main Road, HSR Layout, Bengaluru, Karnataka 560068",
    phone: "+91 9886186111",
    logo: IoMdHome,
  },
  {
    label: "Shefali’s",
    address:
      "A-201, Mantri Splendor Apartments, Hennur Main Road, Kothanur, Bengaluru, Karnataka 560077",
    phone: "+91 7033222299",
    logo: FaLocationDot,
  },
  {
    label: "Pramit’s",
    address:
      "#1601, G Block, Greens Apartments, Shrikrushna Colony, Thergaon, Pune, Maharashtra, 411033",
    phone: "+91 9880249153",
    logo: FaLocationDot,
  },
];
function Address() {
  return (
    <div className="p-2 flex flex-col gap-8">
      <div className="text-[#A71316] flex gap-1  items-center ">
        <span className="text-2xl">
          <IoIosArrowBack />
        </span>
        <span className="text-xl font-bold leading-6">Addresses</span>
      </div>
      <div className="p-4 flex flex-col gap-4">
        {addresses.map((address, i) => (
          <div style={{ fontFamily: "Sofia Sans" }}>
            <div className="flex gap-4 items-start ">
              <address.logo className={`${address.label === "Home" ? "text-2xl" : ""}`} />
              <div className="text-[#1A1A1A] font-bold leading-6 flex flex-col gap-2">
                <span>{address.label}</span>
                <span className="text-xs font-medium leading-4 text-[#1A1A1A]">
                  {address.address}
                </span>
                <span className="text-xs font-medium leading-5">Phone Number: {address.phone}</span>
              <div className="flex gap-8">
                <span className="text-sm font-medium text-[#820F11] ">EDIT</span>
                <span className="text-sm font-medium text-[#820F11] ">DELETE</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Address;
