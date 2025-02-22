import React from 'react'
import { FaStar, FaRegStar } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { IoCartOutline} from "react-icons/io5";

function FoodCard({item}) {
  return (
    <div className="flex gap-2">
       <img
          src="https://imgs.search.brave.com/KTj6BIldNF36n2boGosETCmzICdl-O2aiaaimCdkG2A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzA4Lzg0LzI0/LzM2MF9GXzYwODg0/MjQxM19oZFlhZHA2/dVNDN2M3cHE2TEpl/dzlzOGdQblJTZ2ps/bi5qcGc"
          className="w-32 h-[5.75rem] rounded-xl "
        />

    <div className="flex flex-col gap-0.5 justify-evenly">
    <span className="text-[#A3A3A3] text-xs font-bold leading-3.5">
      {item.name}
    </span>
    <span className="text-xs">₹200</span>
    <span className="flex items-center gap-2">
      <span className="text-xs">Rating</span>
      <span className="flex gap-1 text-[#a71316]">
        {
          Array.from({length:`${item.rating}`}).map((_,i)=>(
            <div key={i}>
              <FaStar />
            </div>
          ))
}
{
  Array.from({length:`${5-item.rating}`}).map((_,i)=>(
    <div key={i}>
      <FaRegStar />
    </div>
  ))
}
      </span>
    </span>
    <span className="bg-[#A71316] flex gap-2 w-fit px-[.4rem] py-0 rounded-[.3rem]">
      <CiBookmark className="text-white text-[.7rem]" />
      <span className="text-[#A3A3A3] text-[.5rem]">Save to Eatlist</span>
    </span>
    <span className="text-[#A71316] flex gap-2">
      <IoCartOutline /> 
      <span className="text-[.6rem]">Add to Cart</span>
    </span>
  </div>
  </div>
  )
}

export default FoodCard