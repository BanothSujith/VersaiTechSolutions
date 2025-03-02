import React, { useRef, useState, useEffect } from "react";
import hometopbg from "../../assets/hometopbg.png";
import scanner from "../../assets/scanner.png";
import packbag from "../../assets/package.png";
import pizza from "../../assets/pizza.png";
import discount from "../../assets/discount.png";
import food from "../../assets/food.png";
import cardbgImg from "../../assets/cardbgImg.png";
import pointsCard from "../../assets/pointsCard.png";
import cake from "../../assets/cake.png";
import biriyani from "../../assets/biriyani.png";
import { FaChevronDown } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline,IoSearchOutline} from "react-icons/io5";

import FoodCard from "../../cards/FoodCard";

const foodItems = [
  {
    name: "Pizza",
    price:200,
    image: "https://picsum.photos/seed/pizza/500/300",
    rating: 4,
  },
  {
    name: "Burger",
    price:100,
    image: "https://picsum.photos/seed/burger/500/300",
    rating: 2,
  },
  {
    name: "Pasta",
    price:300,
    image: "https://picsum.photos/seed/pasta/500/300",
    rating: 4,
  },
  {
    name: "Sushi",
    price:450,
    image: "https://picsum.photos/seed/sushi/500/300",
    rating: 3,
  },
  {
    name: "Ice Cream",
    price: 150,
    image: "https://picsum.photos/seed/icecream/500/300",
    rating: 2,
  },
];

function Home() {
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
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
    <div className="w-full h-full flex flex-col gap-6 overflow-auto pb-12">
      <div
        className="w-full h-[10.5rem] py-4 rounded-br-[1.875rem] rounded-bl-[1.875rem] bg-cover bg-center  flex flex-col gap-6 justify-center"
        style={{ backgroundImage: `url(${hometopbg})` }}
      >
        <div className="flex px-6 gap-3">
          <img
            src="https://imgs.search.brave.com/aDFEdWkvQ1zcbocI5rI1aGpOKgJrkcFLS-GFcddZhM4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzgxLzc3LzYz/LzM2MF9GXzg4MTc3/NjMxOF9JMDVFeVJh/UUp0ckVZdWJtT3pw/Q09iRm5KWFZHRmhK/Mi5qcGc"
            className=" w-7 h-7 aspect-square rounded-full"
          />
          <div className="w-full flex justify-between text-white  ">
            <div className="flex items-baseline ">
              <span className="flex flex-col">
                <span className="text-lg font-bold leading-6">
                  Hello Pritika,
                </span>
                <span className="w-42  line-clamp-1 leading-3.5 text-xs">
                  Woodscape Apartment, Sarj.....
                </span>
              </span>
              <span className="text-lg">
                <FaChevronDown />
              </span>
            </div>
            <div>
              <div className="flex gap-3">
                <span className="text-2xl">
                  <CiHeart />
                </span>
                <span className="text-2xl">
                  <IoCartOutline />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xl text-white text-center font-bold">
            What would you like to order
          </p>
        </div>
      </div>
      <div className="flex items-center w-full justify-evenly">
        <div className="border border-[#A3A3A3] w-[19rem]  py-1.5  px-2.5 flex gap-1 rounded-[6.25rem] items-centers-">
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

        <div>
          <img src={scanner} className="w-7 aspect-square object-fill" />
        </div>
      </div>
      <div className="flex gap-4 items-center w-full px-4">
        <div className=" bg-[#F8E8E8] rounded-xl p-4 h-60 shadow-md shadow-[#00000004] ">
          <span className="text-xl font-bold uppercase leading-6">
            Best Seller
          </span>
          <img src={packbag} />
        </div>
        <div className="flex flex-col gap-4">
          <div className="relative w-44 h-24 py-3 px-4 rounded-xl  shadow-md">
            <span className="uppercase">Vegetarian</span>
            <img src={pizza} className="absolute bottom-0 w-36 " />
          </div>
          <div className="relative w-44 h-24 py-3 px-4 rounded-xl  shadow-md">
            <span className="uppercase flex flex-col font-bold leading-6 ">
              <span className="">Big Promo</span>
              <span className="text-xs font-semibold text-[#E4430B]">
                upto ₹200 off
              </span>
            </span>
            <img src={discount} className="absolute bottom-0 w-20 right-0 " />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-evenly">
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            className="relative w-44 h-24 py-3 px-4 rounded-xl  shadow-md bg-gradient-to-br from-[#FFEDE7] via-[#FFEDE7]/0 to-[#FFEDE7]/0"
            key={i}
          >
            <span className="uppercase">Vegetarian</span>
            <img
              src={food}
              className="absolute bottom-0 right-0 w-[5.3rem] h-[4.6rem] "
            />
          </div>
        ))}
      </div>
      <div>
        <div
          className="pl-4 flex gap-4 flex-nowrap overflow-auto "
          ref={scrollRef}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="shrink-0 h-[10.625rem] w-[20.87rem] rounded-3xl  pt-[6.0625rem ] pl-[10rem] pr-[1.1875rem] pb-[1.6rem]"
              style={{
                backgroundImage: `url(${cardbgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>
        <div className="w-full gap-1 max-w-16 p-1.5 flex  items-center justify-center mx-auto">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              className={`w-2 h-2 border rounded-full border-[#820F11] ${
                activeIndex === i ? "bg-[#820F11]" : ""
              }`}
              key={i}
            ></span>
          ))}
        </div>
      </div>
      <div className="flex min-h-[9.2rem] gap-5 ml-4 items-center overflow-auto ">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="shrink-0 flex flex-col items-center"
            style={{ fontFamily: "DM Sans" }}
          >
            <img src={cake} className="w-[6.3rem] h-[7.75rem] rounded-lg " />
            <span className="font-medium text-xs leading-5 capitalize">
              sujith
            </span>
          </div>
        ))}
      </div>
      <div
        className="w-full max-w-[24.125rem] min-h-[5rem] mx-auto px-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${pointsCard})` }}
      ></div>

      <div className="flex w-full justify-between items-center px-6">
        <span className="font-bold text-xl tracking-tight">Cuisines</span>
        <span className="tracking-tight font-medium capitalize text-[#A71316] ">
          View All
        </span>
      </div>
      <div
        className="min-h-[13rem]  flex gap-4 overflow-auto"
        // ref={increaseSizeRef}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="shrink-0 w-[11.1rem] h-[13rem] rounded-3xl  flex justify-center items-center bg-gradient-to-br from-[#E9B6B7] to-[#FFEDE7]"
          >
            <div className="w-[8.7rem] h-[11.5rem] rounded-3xl border border-[#A71316] flex items-end">
              <span className=" inline-block transform -rotate-90 mb-12 font-medium text-[#A71316]">
                sujith
              </span>
              <img src={biriyani} className="w-[6rem] h-[11.5rem]" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between px-6">
        <span className="font-bold text-xl ">Popular Items</span>
        <span className="font-medium text-[#A71316]">View All </span>
      </div>
       
      <div className="flex min-h-[6rem] w-full justify-between items-center gap-4 px-6  overflow-auto">
        {
          foodItems.map((item,index)=>(
            <div key={index} className="shrink-0">
            <FoodCard item={item}/>
             </div>
          ))
        }
      </div>
      </div>
   
  );
}

export default Home;
