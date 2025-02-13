import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { BiSolidEdit } from "react-icons/bi";

const reviewerInputFields = ["Your Name", "Your Email"];

function RateAndReview() {
  const [reviewerDetails, setReviewerDetails] = useState({
    Name: "",
    Email: "",
  });
  const [rating, setRating] = useState(0);
  const [reviewSummary, setReviewSummary] = useState("");
  const [review, setReview] = useState("");
//   console.log(reviewSummary);
  // console.log(rating)
  // console.log(reviewerDetails)
  const handleReviewerDetails = (e, field) => {
    if (field === "Your Name") {
      setReviewerDetails((prevState) => ({
        ...prevState,
        Name: e.target.value,
      }));
    }
    if (field === "Your Email") {
      setReviewerDetails((prevState) => ({
        ...prevState,
        Email: e.target.value,
      }));
    }
  };
  const handleReviewSummary = (e) => {
    if (e.target.value.length <= 150) {
      setReviewSummary(e.target.value);
    }
  };
  const handleReviewChange = (e) => {
    if (e.target.value.length <= 2000) {
      setReview(e.target.value);
    }
  };
const handleReviewSubmit = () =>{
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(reviewerDetails.Email)) {
    console.log(reviewerDetails,{'reviewSummary':reviewSummary},{'review':review},{"rating":rating})
    }
    else{
        alert("Invalid Email or fields")
    }
}
  return (
    <div className="px-6 flex flex-col gap-4">
      <h1 className="capitalize text-lg font-medium text-[#00000040]">
        rate & review
      </h1>
      <div className="flex flex-col gap-6">
        {reviewerInputFields.map((field, index) => (
          <input
            key={index}
            type={field === "Your Name" ? "text" : "email"}
            placeholder={field}
            value={reviewerDetails[field]}
            onChange={(e) => handleReviewerDetails(e, field)}
            className="w-full h-9 border border-[#820f11] bg-transparent text-sm  outline-none rounded-lg font-medium p-4 placeholder:text-[#00000035] placeholder:text-sm placeholder:font-medium "
          />
        ))}
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-4 items-center">
          <p className="text-sm ">Rate this services</p>
          <span className="flex ">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <span onClick={() => setRating(index + 1)} key={index}>
                  {index < rating ? (
                    <FaStar className="text-xl " />
                  ) : (
                    <CiStar className="text-xl " />
                  )}
                </span>
              ))}
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Review Summary (150 Characters max)"
            value={reviewSummary}
            onChange={handleReviewSummary}
            className="w-full h-9 border border-[#820f11] bg-transparent text-sm  outline-none rounded-lg font-medium p-4 placeholder:text-[#00000035] placeholder:text-sm placeholder:font-medium "
          />
          <textarea
            placeholder="Enter your review for this service, Maximum 2000 Characters are allowed (optional)"
            value={review}
            onChange={handleReviewChange}
            className="w-full h-24 border border-[#820f11] bg-transparent text-sm outline-none rounded-lg font-medium px-4 py-2 placeholder:text-[#00000035] placeholder:text-sm placeholder:font-medium resize-none"
          ></textarea>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[#820f11] rounded-xl w-28 py-[1rem] font-bold text-sm text-white" onClick={handleReviewSubmit}>
<BiSolidEdit className="text-2xl"/>
SUBMIT

        </button>
      </div>
    </div>
  );
}

export default RateAndReview;
