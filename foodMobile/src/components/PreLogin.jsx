import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const design = [
  {
    image: "/redstone.svg",
    style: "w-8 absolute top-65 md:top-20 left-84 ",
  },
  {
    image: "/orange.svg",
    style: "w-4 absolute top-30 left-10",
  },
  {
    image: "/light.svg",
    style: "absolute w-24 aspect-video -bottom-5 -rotate-y-20 -right-10",
  },
  {
    image: "/light.svg",
    style: "absolute w-24 aspect-video top-5 -rotate-y-20 -right-10",
  },
  {
    image: "/lightpink.svg",
    style: "absolute w-16 aspect-video bottom-5 rotate-106 -left-10",
  },
];
const mainAvatars = [
  {
    image: "/Avatar1.png",
    style:
      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 md:w-auto aspect-square rotate-y-180",
  },
  {
    image: "/Avatar2.png",
    style:
      "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-75 h-69 md:h-auto md:w-auto rotate-180",
  },
  {
    image: "/Avatar3.png",
    style:
      "absolute bottom-1/2 left-1/2 transform -translate-1/2 translate-y-1/2 w-78 aspect-square md:w-auto "
  },
];
const designData = [
  {
    heading:
      "Now eat well, don't leave the house,You can choose your favorite food only with one click",
    description:
      "Now eat well, don't leave the house,You can choose your favorite food only with one click",
  },
  {
    heading: "Indulge in elegance, savour the experience.",
    description:
      "Now eat well, don't leave the house,You can choose your favorite food only with one click",
  },
  {
    heading: "Earn more, save more  loyalty pays off!",
    description:
      "Now eat well, don't leave the house,You can choose your favorite food only with one click",
  },
];

function PreLogin() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
 
  const handleContinue = () => {
    setActive((prevActive) => {
      if (prevActive < 2) {
        return prevActive + 1;
      } else {
        navigate('/prelogin');  
        return 2; 
      }
    });
  };
  return (
    <div className="w-full h-full flex flex-col gap-18 md:gap-0 justify-between overflow-scroll hidescrollbar ">
      <div className="relative w-full aspect-square p-4  bg-[url('/ovelimg.svg')] bg-contain bg-no-repeat bg-center  ">
        <img
          src={mainAvatars[active].image}
          alt=""
          className={mainAvatars[active].style}
        />
        {active == 2 && (
          <img
            src="/coins.png"              

            alt="coins"
            className="absolute bottom-11  left-1/2 transform -translate-x-1/2  md:-translate-y-1/2 w-70 md:w-72 aspect-square  rotate-y-180"
          />
        )}
        {design.map((item, index) => (
          <img src={item.image} className={item.style} key={index} />
        ))}
      </div>
      <div className="w-80 md:w-full md:px-12 h-52 flex flex-col gap-4 mx-auto  ">
        <h3 className="text-3xl text-center font-bold  ">
          {designData[active].heading}
         </h3>
        <p className="w-full mx-auto text-center text-[.75rem] md:text-sm leading-[.9rem]">
        {designData[active].description}

        </p>
        <button
          className="bg-[#820F11] hover:bg-[#82170fdf] transition-all duration-100  text-white rounded-[.625rem] w-81 mx-auto flex justify-center items-center py-4 px-2.5 "
          onClick={handleContinue}
        >
          NEXT
        </button>
      </div>
      <div className="w-full mx-auto mt-6 flex justify-between items-center px-1">
        <button className="text-lg font-medium" onClick={()=>navigate('/prelogin')}>Skip</button>
        <div className="w-11 h-2.5 flex justify-between items-center">
          {
            Array.from({length:3}).map((_,index)=>(
              <span key={index}
            className={`w-2.5 h-2.5 rounded-full ${
              active == index ? "bg-[#C03526]" : "bg-[#E6E6E6]"
            } `}
          ></span>
            ))
          }
         
        </div>
        <button
          className="w-3.5 h-3.5 text-[#C03526]"
          onClick={handleContinue}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default PreLogin;
