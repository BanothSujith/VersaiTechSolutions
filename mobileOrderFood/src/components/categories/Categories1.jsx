import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

import SuggesionsFotter from "./SuggesionsFotter";
{
  /* img imports remove if needed*/
}
import mobilePizza from "../../assets/mobilePizza.png";
import deliveryBoy from "../../assets/deliveryBoy.png";
import RecentOrderCard from "../../cards/RecentOrderCard";
import SelectedItem from "./SelectedItem";
import Filter from "./Filter";
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
  "Hot Deals",
];
const recentOrders = [
  {
    id: 1,
    label: "Recommended",
    items: [
      {
        id: 1,
        name: "Hyderabadi Biryani",
        price: 199,
        rating: 4.8,
        category: "Biryani",
        type: "non-veg",
        image: "https://picsum.photos/seed/biryani/200/300",
      },
      {
        id: 2,
        name: "Paneer Butter Masala",
        price: 249,
        rating: 4.7,
        category: "Main Course",
        type: "veg",
        image: "https://picsum.photos/seed/paneer/200/300",
      },
    ],
  },
  {
    id: 2,
    label: "Today’s Special",
    items: [
      {
        id: 6,
        name: "Mughlai Chicken",
        price: 299,
        rating: 4.8,
        category: "Special",
        type: "non-veg",
        image: "https://picsum.photos/seed/mughlai/200/300",
      },
      {
        id: 7,
        name: "Tandoori Prawns",
        price: 349,
        rating: 4.7,
        category: "Special",
        type: "non-veg",
        image: "https://picsum.photos/seed/tandooriprawns/200/300",
      },
    ],
  },
  {
    id: 3,
    label: "Lip Smacking Starters",
    items: [
      {
        id: 8,
        name: "Crispy Corn",
        price: 149,
        rating: 4.6,
        category: "Starter",
        type: "veg",
        image: "https://picsum.photos/seed/crispycorn/200/300",
      },
      {
        id: 9,
        name: "Chicken Lollipop",
        price: 199,
        rating: 4.5,
        category: "Starter",
        type: "non-veg",
        image: "https://picsum.photos/seed/chickenlollipop/200/300",
      },
    ],
  },
  {
    id: 4,
    label: "Main Course",
    items: [
      {
        id: 10,
        name: "Dal Tadka",
        price: 189,
        rating: 4.6,
        category: "Main Course",
        type: "veg",
        image: "https://picsum.photos/seed/daltadka/200/300",
      },
      {
        id: 11,
        name: "Chicken Curry",
        price: 259,
        rating: 4.7,
        category: "Main Course",
        type: "non-veg",
        image: "https://picsum.photos/seed/chickencurry/200/300",
      },
    ],
  },
  {
    id: 5,
    label: "Dessert",
    items: [
      {
        id: 12,
        name: "Gulab Jamun",
        price: 79,
        rating: 4.8,
        category: "Dessert",
        type: "veg",
        image: "https://picsum.photos/seed/gulabjamun/200/300",
      },
      {
        id: 13,
        name: "Rasmalai",
        price: 99,
        rating: 4.7,
        category: "Dessert",
        type: "veg",
        image: "https://picsum.photos/seed/rasmalai/200/300",
      },
    ],
  },
];

function Categories1() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("Vegitarian");
  const [fiterTypes, setFilterTypes] = useState("All");

  return (
    <div className="relative bg-[#F5ECEC] flex flex-col gap-6 pb-12">
      <div className="flex justify-between items-start text-[#A71316] p-4   ">
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
            }`}
            onClick={() => setType(types.name)}
          >
            <div
              className="w-6 h-6 p-1 border"
              style={{ borderColor: types.logo }}
            >
              <span
                className="w-full h-full block rounded-full"
                style={{ backgroundColor: types.logo }}
              ></span>
            </div>
            <span className="font-bold">{types.name}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2.5 overflow-auto  ml-4">
        {categories.map((category, i) => (
          <span
            key={i}
            className={`shrink-0 font-medium text-xs tracking-tight py-1.5 px-3 capitalize rounded-xl ${
              category == fiterTypes
                ? "text-[#fff] bg-[#A71316]"
                : "bg-[#FAFAFA] text-[#8C8C8C]"
            }`}
            onClick={() => setFilterTypes(category)}
          >
            {category}
          </span>
        ))}
      </div>
      <span className="text-xl font-bold tracking-tight px-4 ">
        Repeat Order
      </span>
      <div className="flex gap-4 overflow-auto ml-4">
        {recentOrders.map((item, i) => (
          <div key={i}>
            <RecentOrderCard item={item} />
          </div>
        ))}
      </div>
      <div className="bg-[#000] py-2 px-6">
        <div className="w-full flex justify-between items-center">
          <span className="text-xl font-semibold tracking-tighter text-white">
            Top Pick{" "}
          </span>
          <span className="text-[#A71316] font-medium">View All</span>
        </div>
        <div className="flex gap-4 overflow-auto ml-4">
          {recentOrders.map((item, i) => (
            <div
              key={i}
              className="w-fit p-4 border border-[#A71316] rounded-[2rem]  flex flex-col gap-1 items-center justify-center"
            >
              <div className="relative w-[8.7rem] h-[6.6rem] bg-transparent ">
                <img
                  src="https://imgs.search.brave.com/KTj6BIldNF36n2boGosETCmzICdl-O2aiaaimCdkG2A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzA4Lzg0LzI0/LzM2MF9GXzYwODg0/MjQxM19oZFlhZHA2/dVNDN2M3cHE2TEpl/dzlzOGdQblJTZ2ps/bi5qcGc"
                  className="w-full h-full "
                />
                <div
                  className={`absolute top-0 right-0 w-4 h-4  border ${
                    item.type === "veg"
                      ? "border-[#017F01]"
                      : "border-[#F10027]"
                  } `}
                >
                  <span
                    className={`w-full h-full block rounded-full ${
                      item.type === "veg" ? "bg-[#017F01]" : " bg-[#F10027]"
                    } `}
                  ></span>
                </div>
              </div>
              <div className="flex flex-col  text-center  w-full">
                <span className="text-[#999]   font-bold leading-tight">
                  Hyderabadi Biryani
                </span>
                <span className="text-[#AAA] text-[.5rem] font-medium w-full mx-auto max-w-[7rem] ">
                  Thin creast with veggies double cheeze
                </span>
                <span className="text-[#A71316] font-bold">₹199</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SuggesionsFotter />
      {/* <SelectedItem/> */}
      {/* <Filter /> */}
      
    </div>
  );
}

export default Categories1;
