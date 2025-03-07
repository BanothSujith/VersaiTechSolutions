import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    name: "Banoth Sujith",
    profile: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 3,
    review: "Great place to grow as a frontend developer.",
  },
  {
    name: "John Doe",
    profile: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 5,
    review: "Fantastic work environment with challenging projects.",
  },
  {
    name: "Jane Smith",
    profile: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 4,
    review: "A dynamic workplace with excellent career growth.",
  },
  {
    name: "David Johnson",
    profile: "https://randomuser.me/api/portraits/men/4.jpg",
    rating: 2,
    review: "Exciting challenges and learning opportunities.",
  },
  {
    name: "Emily White",
    profile: "https://randomuser.me/api/portraits/women/5.jpg",
    rating: 5,
    review: "A wonderful environment for frontend developers.",
  },
  {
    name: "Michael Brown",
    profile: "https://randomuser.me/api/portraits/men/6.jpg",
    rating: 4,
    review: "Challenging projects and supportive mentors.",
  },
];

const Review = () => {
  const [centerIndex, setCenterIndex] = useState(2);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    initialSlide: 2, 
    beforeChange: (_, next) => setCenterIndex(next),
    afterChange: (current) => setCenterIndex(current), 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode:false,
          slidesToScroll: 1,
          initialSlide:1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center py-10 w-full overflow">
      <Slider {...settings} className=" w-24 md:w-full  lg:w-[55%]">
        {reviews.map((item, i) => (
          <div key={i} className="flex flex-col items-center py-5">
            <div
              className={`relative w-20 mx-2 md:mx-0 h-20 md:w-20 md:h-20 rounded-full overflow-hidden transition-all duration-300 ${
                i === centerIndex ? "scale-110" : ""
              }`}
            >
              <img
                src={item.profile}
                className="w-full h-full object-cover"
                alt="avatar"
              />
              {i === centerIndex && (
                <div className="absolute top-0 left-0 w-full h-full bg-[#31308cb0] flex justify-center items-center opacity-90">
                  <span className="text-white text-9xl pt-12 font-bold">“</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </Slider>


      <div className="text-center">
        <p className="text-lg md:text-xl my-4">{reviews[centerIndex]?.review}</p>
        <div className="flex justify-center gap-1 text-[#ff3636]">
          {Array.from({ length: reviews[centerIndex]?.rating }).map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
        <div className="mt-2">
          <span className="text-2xl font-bold">{reviews[centerIndex]?.name}</span>
          <p className="text-[#212529] text-sm">Frontend Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
