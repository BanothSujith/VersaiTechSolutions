import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const socialMedias = ["/google.png", "/fb.png", "/insta.png"];
function LoginButton() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleback = () =>{
    console.log("clicked",location.pathname)
    navigate(-1);
  }
  return (
    <div className="w-full  h-full flex flex-col gap-50 py-1 overflow-auto bg-[url('bg_fish.png')] bg-cover bg-left-top  ">
      <button className="flex items-center  text-[#A71316] h-5  p-1 " onClick={handleback}> 
        <span className="w-5">
          <IoIosArrowBack />
        </span>
        <span>Log In</span>
      </button>
      <div className="  flex flex-col justify-between gap-8 pt-[40%] py-2 w-full h-full    ">
        <div className="relative  w-full ">
          <img
            src="/dinningAvatar.png"
            className="w-[27rem] md:w-[32rem] absolute -bottom-20  md:bottom-20 right-1/2 transform translate-x-1/2 md:translate-y-1/2 aspect-square "
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-7 ">
          <button className="max-w-81 w-full py-4 px-2.5 rounded-xl text-white bg-[#820f11]" onClick={()=>navigate('/login')}>
            Log In
          </button>
          <p className="capitalize w-full mx-auto max-w-70 text-sm md:text-lg font-medium text-center  ">
            <span className="text-[#fa4a0c]"> signup </span>
            <span>or </span>
            <span>Start browsing</span>
          </p>
          <div className="flex  gap-4 items-center justify-center h-12">
            {socialMedias.map((socialMedia, index) => (
              <div key={index} className="h-full">
                <img src={socialMedia} className="h-full aspect-square " />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-end items-center gap-2 px-1">
            <span>Skip</span><span className="text-[#C03526]" ><FaArrowRight/></span>
        </div>
      </div>
    </div>
  );
}

export default LoginButton;
