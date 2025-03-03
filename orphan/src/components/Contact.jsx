import React from "react";
import bgForAbout from "../assets/bgforAboutus.png";
import { BsTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const contactInfo = [
  {
    label: "Phone",
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

const question = ["complete Name","email address", "phone no" , "Question"]
function Contact() {
  return (
    <div className="flex flex-col gap-18">
      <div className="relative w-full h-[95vh]">
        <img
          src={bgForAbout}
          className="w-full h-full object-cover"
          alt="Background"
        />
        <div className="absolute top-0 bg-black/30 w-full h-full flex flex-col justify-end px-36">
          <div className="border-b-4 border-white pb-14">
            <h2 className="text-6xl text-white">Contact Us</h2>
            <p className="text-lg text-white">
              Organisations committed to ending poverty worldwide.
            </p>
          </div>
          <div className="flex gap-4 items-center py-6 text-white">
            <span>Home</span>
            <span>-</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly py-20">
        {contactInfo.map((item, i) => (
          <div
            className="relative p-10 border border-[#d1d1d1] rounded-4xl  flex flex-col gap-1 w-80 transition-all duration-1000 ease-in-out hover:bg-[#26268e] hover:text-white text-[#555]"
            key={i}
          >
            <span className="absolute -top-7 right-1/4 p-4 bg-[#ff3636] rounded-full">
              <item.logo className=" text-2xl  text-white " />
            </span>
            <span className="text-xl  font-bold">{item.label}</span>
            {item.number && (
              <span className="text-sm "> Phone:{item.number}</span>
            )}
            {item.fax && <span className="text-sm ">Fax:{item.fax}</span>}
            {item.personal && (
              <span className="text-sm ">{item.personal}</span>
            )}
            {item.charity && (
              <span className="text-sm ">{item.charity}</span>
            )}
            {item.details && (
              <span className="text-sm ">{item.details}</span>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1 items-center ">
        <span className="text-[#999] font-bold uppercase ">If you have any questions</span>
        <span className="text-5xl font-bold w-[50%] text-center">Don't be a stranger just say hello.</span>
      </div>
      <div className="flex gap-12  px-40 my-20 bg-[#fafafa] py-4">
        <div className="w-1/2 border rounded-3xl">{/*map*/}</div>
        <div className="w-[50%]">
            <form className="flex flex-col gap-4 w-full bg-[#fafafa]">
            {
                question.map((item,i)=>(
                    <input 
                      key={i}
                    placeholder={item}
                    className="outline-0 border border-[#d5d5d5] rounded-4xl bg-white p-4 w-full placeholder:capitalize placeholder:text-black"
                    />
                ))
            }
            <button className="overflow-hidden relative capitalize text-white bg-[#ff3636] py-3 px-8 w-fit rounded-4xl transition-all duration-300 group font-bold ">Send message

                <span className="absolute -bottom-full left-[99%] bg-black/40  w-full h-40 rotate-25 transition-all duration-300  group-hover:h-full group-hover:rotate-0 group-hover:bottom-0 group-hover:left-0 "></span>
            </button>
            </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
