import React, { useState,useEffect } from "react";
import bgForAbout from "../assets/bgforAboutus.png";
import { BsTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Logos from "./Logos";
import { FaArrowUp } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const contactInfo = [
  {
    label: "Phone No",
    number: "(7332) 987-01 03",
    fax: "(732) 987-010",
    logo: BsTelephoneFill,
  },
  {
    label: "Email Id",
    personal: "namedomain@domain.com",
    charity: "Charitydomain@domain.com",
    logo: MdMail,
  },
  {
    label: "Address",
    details: "Street No 12, Honolulu, Hawaii, 10 Avenue, United States.",
    logo: IoLocationOutline,
  },
];

const question = ["complete Name", "email address", "phone no", "Question"];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    question: "",
  });
  const [showScroll, setShowScroll] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form Submitted Successfully!");
    setFormData({ name: "", email: "", phone: "", question: "" });
  };

  const handleScroll = () => {
    setShowScroll(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col md:gap-18">
      <div className="relative w-full min-h-[60vh] lg:h-[95vh]">
        <img
          src={bgForAbout}
          className="w-full h-[60vh] lg:h-full object-fill"
          alt="Background"
        />
        <div className="absolute top-0  bg-black/30 w-full h-full flex flex-col justify-end px-4 lg:px-36">
          <div className="border-b-4 border-white pb-6 lg:pb-14">
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Contact Us
            </h2>
            <p className=" text-lg text-white">
              Organisations committed to ending poverty worldwide.
            </p>
          </div>
          <div className="flex gap-4 items-center py-6 text-white">
            <Link to="\">Home</Link>
            <span>-</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-evenly gap-18 md:gap-1 md:gap-y-16 pt-20">
        {contactInfo.map((item, i) => (
          <div
            className="relative py-18 px-12 border border-[#d1d1d1] rounded-4xl flex flex-col gap-1 w-96 transition-all duration-1000 ease-in-out hover:bg-[#26268e] hover:text-white text-[#555]"
            key={i}
          >
            <span className="absolute -top-12 right-1/4 p-6 bg-[#ff3636] rounded-full">
              <item.logo className=" text-5xl text-white " />
            </span>
            <span className="text-3xl font-bold">{item.label}</span>
            {item.number && (
              <span className="text-lg"> Phone:{item.number}</span>
            )}
            {item.fax && <span className="text-lg">Fax:{item.fax}</span>}
            {item.personal && <span className="text-lg">{item.personal}</span>}
            {item.charity && <span className="text-lg">{item.charity}</span>}
            {item.details && <span className="text-lg">{item.details}</span>}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-1 items-center">
        <span className="text-[#999] font-bold uppercase">
          If you have any questions
        </span>
        <span className="text-3xl px-12  lg:text-5xl font-bold md:w-[50%] text-center">
          Don't be a stranger just say hello.
        </span>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 px-8 lg:px-40 my-20 bg-[#fafafa] py-4">
        <div className="w-full lg:w-1/2 aspect-square border rounded-3xl text-center">
          <iframe
            title="NIMS University Jaipur Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.8140619879628!2d75.95530149999999!3d27.193580200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d09d29fda6413%3A0xeff4b5cb1ce3e35a!2sNIMS%20University!5e0!3m2!1sen!2sin!4v1741164944204!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="rounded-3xl "
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        
        </div>
        <div className="w-full lg:w-1/2">
          <form
            className="flex flex-col gap-4 w-full bg-[#fafafa]"
            onSubmit={handleSubmit}
          >
            {question.map((item, i) =>
              item === "Question" ? (
                <textarea
                  key={i}
                  name="question"
                  value={formData.question}
                  onChange={handleChange}
                  placeholder={item}
                  className="outline-0 border border-[#d5d5d5] rounded-[2rem] bg-white p-4 w-full h-32 resize-none placeholder:capitalize placeholder:text-black"
                ></textarea>
              ) : (
                <input
                  key={i}
                  name={item.toLowerCase()}
                  value={formData[item.toLowerCase()]}
                  onChange={handleChange}
                  placeholder={item}
                  className="outline-0 border border-[#d5d5d5] rounded-[2rem] bg-white p-4 w-full placeholder:capitalize placeholder:text-black"
                />
              )
            )}

            <button
              type="submit"
              className="overflow-hidden relative capitalize text-white bg-[#ff3636] py-3 px-8 w-fit rounded-[2rem] transition-all duration-300 group font-bold"
            >
              Send message
              <span className="absolute -bottom-full left-[99%] bg-black/40 w-full h-40 rotate-25 transition-all duration-300 group-hover:h-full group-hover:rotate-0 group-hover:bottom-0 group-hover:left-0"></span>
            </button>
          </form>
        </div>
      </div>
      <div className="px-18 pb-12">
        <Logos />
      </div>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 bg-[#ff3636] text-white rounded-full shadow-lg hover:bg-red-700 transition-all"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </div>
  );
}

export default Contact;
