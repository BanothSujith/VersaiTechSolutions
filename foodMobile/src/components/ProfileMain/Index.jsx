import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import Profile from "./Profile";
import Orders from "./Orders";
import Payments from "./Payments";
import Address from "./Address";
import AddAddress from "./AddAddress";
import RateAndReview from "./RateAndReview";
import FAQ from "./FAQ";
import MyPoints from "./MyPoints";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function ProfileIndex() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname)
  const handleName = ()=>{
    if(location.pathname == '/profile/profile') return 'Profile'
    if(location.pathname == '/profile/myorder') return 'MyOrders'
    if(location.pathname == '/profile/payments') return 'Payments'
    if(location.pathname == '/profile/mypoints') return 'MyPoints'
    if(location.pathname == '/profile/myaddress') return 'MyAddress'
    if(location.pathname == '/profile/faq') return 'FAQ\'S'


    return 'sub'
  }
  return (
    <div className="w-full h-screen  py-1 px-2 overflow-auto scroll-smooth bg-[#fafafa]">
      <div className="flex justify-between items-center pb-8  ">
        <button className="flex items-center  text-[#A71316] h-5  "  onClick={()=>navigate(-1) || navigate('/profile/profile')} >
          <span className="w-5">
            <IoIosArrowBack />
          </span>
          <span>{handleName()}</span>
        </button>
        <div className="text-[#A71316] text-2xl flex gap-3 px-4">
          <span>
            <CiHeart />
          </span>
          <span>
            <IoCartOutline />
          </span>
        </div>
      </div>
      <div className="flex justify-evenly items-center h-10 md:h-16 w-full mb-8 ">
        <div className="flex gap-2 w-full max-w-82 md:max-w-[60%]  bg-[#f8e8e8] h-full px-2.5 rounded-[6.25rem] ">
          <span className="flex  items-center text-2xl md:text-3xl font-bold text-[#E9B6B7] ">
            <CiSearch />
          </span>
          <input
            type="search"
            placeholder="Search"
            className="flex justify-center items-center placeholder:text-[#E9B6B7] outline-0 w-full placeholder:text-2xl"
          />
        </div>
        <span className="w-7 md:w-20  h-full flex items-center text-3xl md:text-5xl  justify-end text-[#E9B6B7]">
          <TbAdjustmentsHorizontal />
        </span>
      </div>

      {/* //all sections  */}
<div className="px-7 md:px-18 w-full h-full ">
      {/* <Profile/> */}

      {/* <Orders /> */}

        {/* <Payments/> */}
{/* <Address/> */}
{/* <AddAddress/> */}
{/* <RateAndReview/> */}

{/* <FAQ/> */}
    {/* <MyPoints/> */}
    <Outlet/>
    </div>
    </div>
  );
}

export default ProfileIndex;
