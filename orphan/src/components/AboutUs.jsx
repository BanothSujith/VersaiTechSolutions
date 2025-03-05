import React, { useEffect, useState } from "react";
import bgForAbout from "../assets/bgforAboutus.png";
import { IoLogoVimeo } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";
import Logos from "./Logos";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import Review from "./Review";
import { useNavigate } from "react-router-dom";
const aboutdata = [
  {
    heading: "60 MILLION",
    para: "BY 2021, WE'RE AIMING FOR 60 MILLION MORE PEOPLE WORLDWIDE TO HAVE ACCESS TO CLEAN DRINKING WATER",
  },
  {
    heading: "6/10",
    para: "6 IN 10 PEOPLE WORLDWIDE, OR 4.5 BILLION, LACK SAFELY MANAGED SANITATIONR",
  },
];
const orphanpeoples = [
  "https://imgs.search.brave.com/RxXNqxe6DEvcXHIw6vgD-RF3Sw9mk28mZ4hBtEo51ls/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTkz/OTU3NjYwL3Bob3Rv/L2EtcG9ydHJhaXQt/b2YtYS1wb29yLWNo/aWxkLWZyb20taW5k/aWEuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVNGaWtrMkF4/WkgwN05nSG1adWs0/YkgwSmZtUEVrWGVm/M1ZrOWNJR3JFNjQ9",
  "https://imgs.search.brave.com/vQMCJoCdbzfUtrXRxim7w5l-PU0HD7-M-98LbaiQuM8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDcx/MDMxODA4L3Bob3Rv/L2RlcHJlc3NlZC1s/aXR0bGUtYm95LXNp/dHRpbmctb24tdGhl/LWZsb29yLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz10TkFS/N3BteWtQaDBCRWo0/dHIwVXM4UnhMcDlF/ODNibVhaRDQwR0Iy/QjNjPQ",
];
const aboutCharityservice = [
  {
    logo: service1,
    service: "Develop and Lead",
    description:
      "Duis il odio amet nibh vulp. Morbi accumsan ipsuy velia uctor. Class aptent.",
  },
  {
    logo: service2,
    service: "Individual Donors",
    description:
      "Duis il odio amet nibh vulp. Morbi accumsan ipsuy velia uctor. Class aptent.",
  },
  {
    logo: service3,
    service: "Provide a Range",
    description:
      "Duis il odio amet nibh vulp. Morbi accumsan ipsuy velia uctor. Class aptent.",
  },
];
const services = [
  {
    id: 1,
    img: img1,
    title: "Find a Service",
    description:
      "Duis sed odio sit amet nibh vulpuate ris. Morbi accumsan ipsuy veli Nam nt auctor Class aptent.",
  },
  {
    id: 2,
    img: img2,
    title: "Support Volunteers",
    description:
      "Duis sed odio sit amet nibh vulpuate ris. Morbi accumsan ipsuy veli Nam nt auctor Class aptent.",
  },
  {
    id: 3,
    img: img3,
    title: "Help For Heroes",
    description:
      "Duis sed odio sit amet nibh vulpuate ris. Morbi accumsan ipsuy veli Nam nt auctor Class aptent.",
  },
];

const colors = ["#26268e", "#1f1f7c", "#191974"];
function AboutUs() {
  const [showScroll, setShowScroll] = useState(false);
  const navigate = useNavigate();
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
    <div className="w-full h-full flex flex-col gap-24 ">
      <div className="relative w-full min-h-[60vh] lg:min-h-[95vh]">
        <img src={bgForAbout} className="w-full h-full" />
        <div className="absolute top-0 bg-black/30 w-full h-full flex flex-col justify-end  px-12 lg:px-36">
          <div className="border-b-4 border-white pb-4 md:pb-14">
            <h2 className="text-6xl text-white  ">About Us</h2>
            <p className="text-[1rem] text-white ">
              Organisations committed to ending poverty worldwide.
            </p>
          </div>
          <div className="flex gap-4 items-center py-6 text-white">
            <span onClick={()=>navigate("/")}>Home</span>
            <span>-</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
      <div className="lg:px-16 flex flex-col gap-10">
        <div className="flex flex-col gap-2 justify-center items-center uppercase text-center px-10 md:px-44">
          <IoLogoVimeo className="text-4xl text-[#ff3636]" />
          <span className="text-[#999999]  font-bold">working on charity</span>
          <p className="text-[#212529] text-2xl md:text-[2.5rem] font-semibold">
            We Help Children Stay Safe, Healthy and Learning.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-x-24 gap-y-12 px-4 md:px-12">
          <div className="flex flex-col gap-4 ">
            <p className="text-[#555555] leading-8 font-medium flex flex-col gap-6">
              <span>
                Duis sed odio sit amet nibh vulputate cursus a amet ma accumsan
                ipsuy veli Nam nec tellus per coec tellus. curs a amet mauli
                accumsan ipsuy veli Nam nec tell cumsan suy veli Nam per coec
                tellusnec perus.
              </span>
              <span>
                a odio tincidunt auct ursus a amet mauris Mor ipsuy veli Nam nec
                tell cumsan ipsuy veli Nam nec perus.
              </span>
            </p>
            <h1 className="text-3xl font-bold pt-12 leading-9">
              Barlim Qoarli
            </h1>
            <p className="uppercase text-[#666] ">charitable trust director</p>
            <p className="p-4 border w-fit">signature</p>
          </div>
          <div className="w-full flex flex-col gap-4 ">
            {aboutdata.map((item, i) => (
              <div className="" key={i}>
                <h1 className="text-[#ff3636] font-bold uppercase leading-14 text-4xl">
                  {item.heading}
                </h1>
                <p className="text-lg leading-7 text-[#212529] font-medium ">
                  {item.para}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="px-8 flex flex-col md:flex-row justify-center gap-8 lg:gap-12">
          {orphanpeoples.map((item, i) => (
            <img
              src={item}
              key={i}
              className="rounded-4xl w-full md:w-1/2 aspect-video   object-cover"
            />
          ))}
        </div>
      </div>
      <div className="lg:px-16 flex flex-col gap-10">
        <div className="flex flex-col gap-2 justify-center items-center uppercase text-center px-10 md:px-20 lg:px-44">
          <IoLogoVimeo className="text-4xl text-[#ff3636]" />
          <span className="text-[#999999]  font-bold">Charity Services</span>
          <p className="text-[#212529]  text-2xl md:text-[2.5rem] font-semibold">
            We're Mind, the Mental Health Charity
          </p>
        </div>
        <div className="flex flex-col lg:flex-row px-10 md:px-24 gap-12 py-12 ">
          <div className="flex flex-col justify-evenly  gap-16">
            {aboutCharityservice.map((item, i) => (
              <div
                className="flex flex-col  items-start md:items-center  md:flex-row gap-4 md:gap-12 transition-all duration-300 ease-linear hover:-translate-y-3"
                key={i}
              >
                <div className="h-[6.25rem] aspect-square rounded-full">
                  <img
                    src={item.logo}
                    className=" h-full aspect-square rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-bold text-2xl leading-5 text-[#212529]">
                    {item.service}
                  </h3>
                  <p className="text-[#555] font-normal leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <img
            src="https://winsfolio.net/html/orphan/assets/img/charity-8.jpg"
            className="flex  lg:w-1/2 rounded-4xl "
          />
        </div>
      </div>
      <div className=" w-full lg:py-30 ">
        <div className="relative">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.wo6wOZXPzeLVDhW10iytjwHaEq&pid=Api&P=0&h=180"
            className="w-full h-[90vh] md:h-[60vh] lg:h-[90vh] "
          />
          <div className="absolute top-0 bg-black/20 h-full w-full flex flex-col lg:justify-center items-center uppercase text-center py-20 md:px-44">
            <IoLogoVimeo className="text-4xl text-[#ff3636]" />
            <span className="text-[#858585]  font-bold">
              Fundraising and events
            </span>
            <p className="text-[#fff] text-2xl md:text-[2.5rem] font-semibold">
              Start a Fundraiser
            </p>
          </div>
          <div className="absolute -bottom-[55%] md:-bottom-1/3 w-full flex flex-col lg:justify-center items-center gap-4 md:flex-row md:flex-wrap md:gap-0 md:px-6 lg:px-0">
            {services.map((item, i) => (
              <div
                key={i}
                style={{ backgroundColor: colors[i] }}
                className={`max-w-[23rem] py-12 flex flex-col items-center gap-4 justify-center`}
              >
                <div className="relative w-[6rem] aspect-square rounded-full  ">
                  <img
                    src={item.img}
                    className="w-full object-cover aspect-square"
                  />
                </div>
                <div className="flex flex-col gap-4 items-center">
                  <span className="text-xl text-white">{item.title}</span>
                  <p className="text-[#cfcfcf] leading-5 text-center text-sm font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center uppercase text-center pt-96 md:pt-64 lg:pt-0 md:px-44">
        <IoLogoVimeo className="text-4xl text-[#ff3636]" />
        <span className="text-[#999999]  font-bold">
          Testimonials & Stories
        </span>
        <p className="text-[#212529] text-2xl md:text-[2.5rem] font-semibold">
          16+ Million Reviews
        </p>
        <Review />
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

export default AboutUs;
