import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";

import potatoFr5ies from "../../assets/potatoFries.png";
import bike from "../../assets/bike.png";

const categories = [
    {
        name: "All",
        image: "https://picsum.photos/seed/pizza/500/300",
    },
    {
        name: "Starters",
        image: "https://picsum.photos/seed/burger/500/300",
    },
    {
        name: "Main Course",
        image: "https://picsum.photos/seed/pasta/500/300",
    },
    {
        name: "Desserts",
        image: "https://picsum.photos/seed/sushi/500/300",
    },
    {
        name: "Bevarages",
        image: "https://picsum.photos/seed/icecream/500/300",
    },
]

const foodTypes =[
    {
        name: "Pizza",
        image: "https://picsum.photos/seed/pizza/500/300",
    },
    {
        name: "Burger",
        image: "https://picsum.photos/seed/burger/500/300",
    },
    {
        name: "Pasta",
        image: "https://picsum.photos/seed/pasta/500/300",
    },
    {
        name: "Sushi",
        image: "https://picsum.photos/seed/sushi/500/300",
    },
    {
        name: "Ice Cream",
        image: "https://picsum.photos/seed/icecream/500/300",
    },
    {
        name: "Potato Fries",
        image: "https://picsum.photos/seed/potatofries/500/300",
    }
]
function Categories() {
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [filter,setFilter] = useState("All");
  const scrollRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const cardWidth = scrollRef.current.children[0].offsetWidth;
        const newIndex = Math.round(scrollLeft / cardWidth);
        setActiveIndex(newIndex);
      }
    };

    const slider = scrollRef.current;
    slider.addEventListener("scroll", handleScroll);

    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-6 ">
      <div className="w-full h-[14.3rem] flex flex-col gap-6 py-4 px-6 bg-gradient-to-b from-[rgba(183,21,24,0.50)] to-[#B71518] rounded-b-[1.8rem]">
        <div className="flex justify-between items-start  ">
          <div className="text-white flex gap-1  items-center">
            <span className="text-2xl">
              <IoIosArrowBack />
            </span>
            <span className="text-xl font-bold leading-6">Categories</span>
          </div>

          <img
            src="https://imgs.search.brave.com/vAIaZ0qk9XJ8_uG9VPqjKdjwJS0Cr_DvVDy5zgJZBf4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzE4Lzk3Lzg2/LzM2MF9GXzgxODk3/ODYxNF9CWTBSVkxx/NkE4Szh2NnBzbDRX/a1Z1Ukhjb2taUUgw/Ui5qcGc"
            className="w-[3.18rem] h-[3.18rem] rounded-full border-2 border-white "
          />
        </div>
        <div className="flex justify-evenly w-full items-center">
          <div className="border border-[#A3A3A3] bg-[#fff] w-[21.6rem]  py-1.5  px-2.5 flex gap-1 rounded-[6.25rem] items-centers-">
            <span className="flex items-center">
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
              className="w-full outline-none placeholder:font-medium"
            />
          </div>
          <div className="text-white text-2xl">
            <HiOutlineAdjustmentsHorizontal />
          </div>
        </div>
        <p className="text-xl text-white text-center">
          Explore flavors, discover your favorites!
        </p>
      </div>

      <div
        className="hidescrollbar pt-12 ml-4 min-h-[14rem] flex gap-6 overflow-x-scroll "
        ref={scrollRef}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="relative w-[20.56rem] h-[9.8rem]  shrink-0 rounded-3xl bg-gradient-to-b from-[#FA4A0C] to-[#B71518] flex items-center "
          >
            <p className="flex flex-col text-white text-lg px-4 py-4">
              <span className="font-medium leading-6">Today’s offer</span>
              <span className=" font-bold ">Free box of fries</span>
              <span className="py-2 font-medium">
                on all orders above 400.Rs
              </span>
            </p>
            <img
              src={potatoFr5ies}
              className=" absolute  w-[12.5rem] h-[6.75rem] -top-12 -right-6"
            />
          </div>
        ))}
      </div>
      <div className="w-full gap-1 max-w-16 flex  items-center justify-center mx-auto">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            className={`w-2 h-2 border rounded-full border-[#820F11] ${
              activeIndex === i ? "bg-[#820F11]" : ""
            }`}
            key={i}
          ></span>
        ))}
      </div>
      <div className="flex w-full justify-between items-center px-6">
        <span className="font-bold text-xl tracking-tight">Categories</span>
        <span className="tracking-tight font-medium capitalize text-[#A71316] ">
          View All
        </span>
      </div>
      <div className="px-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
        {
        categories.map((category, index) => (
            <div key={index} className={`flex items-center gap-2 border border-[#FF0000] px-2 py-2 rounded-full ${filter == category.name? "bg-[#b91b1e] text-white" : "bg-transparent"}`} onClick={()=>setFilter(category.name)}>
                <img src={category.image} className="w-[2.187rem] h-[2.187rem] rounded-xl " />
                <span className="font-semibold text-sm  capitalize">
                    {category.name}
                </span>
            </div>
        ))
        }
      </div>
    <div className="flex gap-4 px-4 min-h-[8rem] overflow-auto">
        {
            foodTypes.map((item,i)=>(
                <div className="flex shrink-0 flex-col items-center" key={i} >
                <img 
                src={item.image}
                className="w-[6.3rem] h-[7.7rem] rounded-lg object-cover"
                />
                <span className="text-sm font-medium leading-5 text-[#1A1A1A] capitalize">{item.name}</span>
                </div>
            ))
        }
    </div>
    <div className="text-2xl font-bold px-4">
    <span>Quick Pick</span>
    </div>
    <div className="w-full h-full px-6 grid grid-cols-3 gap-4">
      {
        Array.from({length: 9}).map((_,i)=>(
            <div key={i} className="relative w-full h-[7rem] p-2 rounded-xl border border-[#A71316] border-opacity-30 bg-[#F8E8E8]">
       <span className="UPPERCASE font-bold leading-6 text-center text-xs">Fast Delivery</span>
     <img 
     src={bike}
    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[3.5rem] h-[3.5rem] "
     />
      </div>
        ))
      }
    </div>
    </div>
  );
}

export default Categories;
