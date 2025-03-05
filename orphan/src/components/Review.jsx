import React, { useState, useRef, useEffect } from "react";
import { FaStar } from "react-icons/fa";

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
  const [centerIndex, setCenterIndex] = useState(
    window.innerWidth < 768 ? 0 : 2
  );
  const reviewProfiles = useRef(null);
  const isProgrammaticScroll = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setCenterIndex(window.innerWidth < 768 ? 0 : 2);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = reviewProfiles.current;
    if (!container) return;

    const debounce = (func, delay) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
      };
    };

    const handleScroll = () => {
      if (isProgrammaticScroll.current) return;

      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      let closestProfile = centerIndex;
      let closestDistance = Infinity;

      container.childNodes.forEach((child, index) => {
        const childRect = child.getBoundingClientRect();
        const childCenter = childRect.left + childRect.width / 2;
        const distance = Math.abs(containerCenter - childCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestProfile = index;
        }
      });

      if (closestProfile !== centerIndex) {
        setCenterIndex(closestProfile);
      }
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);
    container.addEventListener("scroll", debouncedHandleScroll);

    return () => container.removeEventListener("scroll", debouncedHandleScroll);
  }, [centerIndex]);

  const handleProfileClick = (index) => {
    const container = reviewProfiles.current;
    const selectedProfile = container?.children[index];

    if (selectedProfile) {
      isProgrammaticScroll.current = true;

      const containerRect = container.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;

      const profileRect = selectedProfile.getBoundingClientRect();
      const profileCenterX = profileRect.left + profileRect.width / 2;

      const scrollDelta = profileCenterX - containerCenterX;
      const newScrollLeft = container.scrollLeft + scrollDelta;

      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      setCenterIndex(index);

      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col gap-8 items-center justify-center py-10">
      <div
        ref={reviewProfiles}
        className="flex items-center gap-4 overflow-x-auto w-[8rem] md:w-[30rem] scroll-smooth scrollbar-hide h-32 hide-scrollbar"
      >
        {reviews.map((item, i) => (
          <div
            key={i}
            onClick={() => handleProfileClick(i)}
            className={`shrink-0 relative transition-all duration-300 cursor-pointer ${
              i === centerIndex ? "w-[6.8rem]" : "w-[4.8rem]"
            }`}
          >
            <img
              src={item.profile}
              className="w-full aspect-square rounded-full"
              alt="avatar"
            />
            {i === centerIndex && (
              <div className="absolute top-0 w-full h-full bg-[#31308cb0] flex justify-center items-center rounded-full">
                <span className="text-white text-6xl font-bold">“</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="min-w-[90%] lg:w-[68%] mx-auto leading-8 md:leading-10 text-xl lg:text-2xl text-center">
        {reviews[centerIndex]?.review}
      </p>

      <div className="flex gap-2 text-[#ff3636]">
        {Array.from({ length: reviews[centerIndex]?.rating }).map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold leading-10">
          {reviews[centerIndex]?.name}
        </span>
        <span className="text-[#212529] text-sm">Frontend Developer</span>
      </div>
    </div>
  );
};

export default Review;
