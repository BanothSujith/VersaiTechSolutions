import React from "react";
import { IoIosArrowBack, IoIosHeart, IoIosStar } from "react-icons/io";
const ratingsData = {
  total_reviews: 517,
  ratings: [
    { stars: 5, count: 322 },
    { stars: 4, count: 111 },
    { stars: 3, count: 40 },
    { stars: 2, count: 27 },
    { stars: 1, count: 17 },
  ],
};
const reviews = [
    {
      "name": "Alice Johnson",
      "profile": "https://picsum.photos/seed/alice/100",
      "rating": 5,
      "comment": "Absolutely loved it! The quality was amazing and the service was top-notch."
    },
    {
      "name": "Michael Smith",
      "profile": "https://picsum.photos/seed/michael/100",
      "rating": 4,
      "comment": "Great product! Just wish the delivery was a bit faster."
    },
    {
      "name": "Samantha Lee",
      "profile": "https://picsum.photos/seed/samantha/100",
      "rating": 5,
      "comment": "Best experience ever! Would definitely recommend to my friends."
    },
    {
      "name": "David Brown",
      "profile": "https://picsum.photos/seed/david/100",
      "rating": 3,
      "comment": "Decent experience. The product was good, but packaging could be improved."
    },
    {
      "name": "Emily Davis",
      "profile": "https://picsum.photos/seed/emily/100",
      "rating": 2,
      "comment": "Not satisfied with the quality. Expected better for the price."
    },
    {
      "name": "James Wilson",
      "profile": "https://picsum.photos/seed/james/100",
      "rating": 4,
      "comment": "Really liked it, but there were slight delays in customer support responses."
    },
    {
      "name": "Olivia Martinez",
      "profile": "https://picsum.photos/seed/olivia/100",
      "rating": 5,
      "comment": "Amazing! Everything was perfect from start to finish."
    },
    {
      "name": "Robert Taylor",
      "profile": "https://picsum.photos/seed/robert/100",
      "rating": 1,
      "comment": "Very disappointed. The product was damaged when I received it."
    },
    {
      "name": "Sophia Hernandez",
      "profile": "https://picsum.photos/seed/sophia/100",
      "rating": 3,
      "comment": "It was okay, nothing special. Wouldn’t buy again."
    },
    {
      "name": "William Anderson",
      "profile": "https://picsum.photos/seed/william/100",
      "rating": 5,
      "comment": "Exceeded my expectations! Will definitely purchase again."
    }
  ]
function RatingsAndReviews() {
  return (
    <div className="p-2 flex flex-col gap-8">
      <div className="text-[#A71316] flex gap-1  items-center ">
        <span className="text-2xl">
          <IoIosArrowBack />
        </span>
        <span className="text-xl font-bold leading-6">Ratings and Reviews</span>
      </div>
      <div className=" p-4 flex flex-col items-center  ">
        <span className="text-5xl text-[#b71518] flex items-center gap-2 justify-center p-3 ">
          <IoIosHeart />
          <span className="text-xl text-[#1A1A1A] font-bold">
            {(ratingsData.ratings.find((rating) => rating.stars === 5)?.count ||
              0) +
              (ratingsData.ratings.find((rating) => rating.stars === 4)
                ?.count || 0)}  love this! !
          </span>
        </span>
        <div className="flex gap-2 justify-center items-center overflow-hidden">
          <div>
            <span className="flex items-center justify-center gap-1">
              <span className="text-3xl font-medium leading-8">4.3</span>
              <IoIosStar className="text-xl" />
            </span>
            <p className="text-[#A3A3A3] text-sm font-normal">
              {ratingsData.total_reviews} Verified Buyers
            </p>
          </div>

          <div className="h-32 w-[1px] bg-[linear-gradient(180deg,rgba(101,29,255,0.00)_0%,#651DFF_50%,#FF93CD_100%)]"></div>
          <div>
            {ratingsData.ratings.map((rating, i) => (
              <div className="flex gap-1 items-center" key={i}>
                <span className="font-medium text-[#1A1A1A]">
                  {rating.stars}
                </span>
                <span className="text-[#FA4A0C]">
                  <IoIosStar />
                </span>
                <input
                  type="range"
                  min="0"
                  max={ratingsData.total_reviews}
                  value={rating.count}
                  readOnly
                  className="w-full h-2 rounded-lg appearance-none [&::-webkit-slider-thumb]:appearance-none"
                  style={{
                    background: `linear-gradient(to right,  #E4430B ${
                      (rating.count / ratingsData.total_reviews) * 100
                    }%, #FC865C ${
                      (rating.count / ratingsData.total_reviews) * 100
                    }%)`,
                  }}
                />
                <span className="text-xs text-[#A3A3A3] font-medium leading-5">{rating.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
        <span className="text-lg font-bold leading-6 text-[#1A1A1A] px-4">Reviews</span>
        <div className="flex flex-col gap-8 px-12">
            {
             reviews.map((review, i) => (
                <div key={i } className="flex flex-col gap-2  ">
                    <div className="flex gap-6 items-center">
                        <img 
                        src={review.profile}
                        className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <span>{review.name}</span>
                           <div className="flex gap-1 text-[#ba1e20]">
                           {
                                Array.from({length:review.rating}).map((_, i) => (
                                    <IoIosStar key={i}/>
                                ))
                            }
                           </div>
                            </div>
                        </div>
                        <p className="text-sm font-medium leading-5 text-[#1A1A1A]">{review.comment}</p>

                </div>
             ))
            }
        </div>
    </div>
  );
}

export default RatingsAndReviews;
