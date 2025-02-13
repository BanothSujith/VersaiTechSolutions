import React from "react";
import { CiEdit } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";
import { CiWallet } from "react-icons/ci";
import { PiPiggyBank } from "react-icons/pi";
import { GoInfo } from "react-icons/go";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const profileItems = [
  {
    icon: CiBookmark,
    label: "my orders",
    description: "Check order status (active, completed, cancelled)",
    redirectTo: '/profile/myorder'
  },
  {
    icon: CiWallet,
    label: "payments methods",
    description: "Manage saved cards and bank details ",
    redirectTo: '/profile/payments'

  },
  {
    icon: PiPiggyBank,
    label: "My Points",
    description: "All your member points in one place",
    redirectTo: '/profile/mypoints'

  },
  {
    icon: GoInfo,
    label: "My Address",
    description: "Add Your address",
    redirectTo: '/profile/myaddress'

  },
  {
    icon: MdOutlineStarBorderPurple500,
    label: "Rate and Review",
    description: "Earn member points by rating your items",
    redirectTo: '/profile/rateandreview'
  },
  {
    icon: GoQuestion,
    label: "Frequently Asked Questions",
    description: "FAQ from Customers ",
    redirectTo: '/profile/faq'
  },
];
function Profile() {
  const navigate = useNavigate();

  const handleSection = (item) => {
      navigate(item.redirectTo)
}
  return (
    <div className="flex flex-col gap-12 h-full overflow-scroll ">
      <div className=" w-full h-16 md:h-18 flex justify-between  ">
        <div className="w-[20.125rem] md:w-full flex  gap-3 ">
          <img
            src="https://imgs.search.brave.com/4qOCNg8AYYNNZUhJv9cM-5d2bBq5UE2K2Vdld-UHul4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aW1nYWNhZGVteS5j/b20vc2l0ZXMvZGVm/YXVsdC9maWxlcy9p/bWctYWNhZGVteS1p/bWdwbHVzLmpwZw"
            className="h-full  aspect-square flex justify-center items-center rounded-full"
          />
          <div className="flex flex-col justify-evenly text-sm md:text-lg" >
            <p className="font-bold ">Reema Pandey</p>
            <p>reemapandey143@gmail.com</p>
            <p>9876543211</p>
          </div>
          <span className="text-lg md:text-2xl font-bold">
            <CiEdit />
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4  items-center justify-center ">
        {profileItems.map((item, i) => (
          <div
            className="w-full  flex justify-between items-center cursor-pointer"
            key={i}
            onClick={() => handleSection(item)}
          >
            <div className="flex w-full items-center  gap-2 md:gap-4 h-10 md:h-14">
              <span className="flex justify-center items-center text-xl md:text-4xl font-semibold">
                {React.createElement(item.icon)}
              </span>
              <div className="flex flex-col justify-between   ">
                <p className="capitalize font-bold text-[.875rem] md:text-xl">
                  {item.label}
                </p>
                <p className="line-clamp-1 text-[.75rem] md:text-lg text-[#A3A3A3] ">
                  {item.description}
                </p>
              </div>
            </div>
            <span className="text-[#A3A3A3] md:text-2xl">
              <FaChevronRight />
            </span>
          </div>
        ))}
      </div>
      <button className="w-full mx-auto max-w-[21.4rem] p-4 bg-[#820F11] rounded-2xl text-white text-xl font-semibold " onClick={()=>navigate('/login')}>
        Log Out
      </button>
    </div>
  );
}

export default Profile;
