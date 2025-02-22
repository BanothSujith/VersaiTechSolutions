import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

{
  /* img imports remove if needed*/
}
import mobilePizza from "../../assets/mobilePizza.png";
import deliveryBoy from "../../assets/deliveryBoy.png";

const types = [
  {
    name: "Vegitarian",
    logo: "#017F01",
  },
  {
    name: "Non-Vegitarian",
    logo: "#F10027",
  },
];
const categories = [
    "All",
    "Rating 4.0+",
    "Favourites",
    "Offer Zone",
    "Party Order Pock",
    "Best Sellers",
    "New Arrivals",
    "Limited Time Deals",
    "Exclusive Offers",
    "Flash Sale",
    "Top Picks",
    "Seasonal Specials",
    "Combo Deals",
    "Trending Now",
    "Hot Deals"
  ];
function Categories1() {
  const [search, setSearch] = useState("");
const [type,setType] = useState("Vegitarian");
const [fiterTypes,setFilterTypes] = useState("All");
  return (
    <div className="bg-[#F5ECEC] flex flex-col gap-6 p-4">
      <div className="flex justify-between items-start text-[#A71316]   ">
        <div className="flex gap-1  items-center">
          <span className="text-2xl">
            <IoIosArrowBack />
          </span>
          <span className="text-xl font-bold leading-6">Categories</span>
        </div>
        <div className="flex gap-3">
          <span className="text-3xl">
            <CiHeart />
          </span>
          <span className="text-3xl">
            <IoCartOutline />
          </span>
        </div>
      </div>
      <div className="flex justify-evenly w-full items-center mt-6">
        <div className="border border-[#E9B6B7] bg-[#fff] w-[21.6rem]  py-1.5  px-2.5 flex gap-1 rounded-[6.25rem] items-centers-">
          <span className="flex items-center text-[#E9B6B7] text-xl">
            <IoSearchOutline />
          </span>
          <input
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              console.log(search);
            }}
            placeholder="Search Product"
            className="w-full outline-none placeholder:font-medium placeholder:text-[#E9B6B7]"
          />
        </div>
        <div className="text-[#E9B6B7] text-2xl">
          <HiOutlineAdjustmentsHorizontal />
        </div>
      </div>

      <div className="w-full max-w-[24.125rem] mx-auto bg-[#fff] rounded-xl border border-[#FDC7B4] flex justify-evenly ">
        <img src={mobilePizza} className="w-[6.43rem] h-[6rem]" />
        <div className="flex flex-col justify-center p-2">
          <span className="font-bold leading-6">FREE DELIVERY</span>
          <span className="text-xs text-[#A71316] font-medium tracking-tighter">
            on orders above ₹199
          </span>
        </div>
        <img src={deliveryBoy} className="w-[6.43rem] h-[6.43rem]" />
      </div>
      <div className="flex justify-evenly">
        {types.map((types, i) => (
          <div
            key={i}
            className={`flex gap-3 items-center justify-center w-[11.875rem] mx-auto  rounded-full  p-2 ${
              types.name == type ? "bg-[#A71316] text-white" : "bg-transparent"
            }`} onClick={() => setType(types.name)}
          >
            <div className="w-6 h-6 p-1 border" style={{ borderColor: types.logo }}>
              <span className="w-full h-full block rounded-full" style={{backgroundColor: types.logo}}></span>
            </div>
            <span className="font-bold">{types.name}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2.5 overflow-auto">
        {
            categories.map((category,i)=>(
                <span key={i} className={`shrink-0 font-medium text-xs tracking-tight py-1.5 px-3 capitalize rounded-xl ${category == fiterTypes ? "text-[#fff] bg-[#A71316]" : "bg-[#FAFAFA] text-[#8C8C8C]"}`} onClick={()=>setFilterTypes(category)} >
                    {category}
                </span>
            ))
        }
        </div>
        <span className="text-xl font-bold tracking-tight ">
        Repeat Order
        </span>
        <div>
            <div className="w-[16.75rem] px-2.5 py-2 bg-[#fff] rounded-3xl flex gap-4 items-baseline">
                <img src="https://imgs.search.brave.com/KTj6BIldNF36n2boGosETCmzICdl-O2aiaaimCdkG2A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzA4Lzg0LzI0/LzM2MF9GXzYwODg0/MjQxM19oZFlhZHA2/dVNDN2M3cHE2TEpl/dzlzOGdQblJTZ2ps/bi5qcGc" 
                className="w-[6.25rem] h-[6.25rem] rounded-3xl "
                />
            <div>
            
            </div>
            </div>
        </div>
    </div>
  );
}

export default Categories1;
