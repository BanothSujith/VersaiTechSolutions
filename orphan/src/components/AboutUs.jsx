import React from "react";
import bgForAbout from "../assets/bgforAboutus.png";
import handshake from "../assets/handshake.png";
import { IoLogoVimeo } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

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
    logo: "https://tse3.mm.bing.net/th?id=OIP.q54LJ90E7SxGQekZOwdHUwHaHa&pid=Api&P=0&h=180",
    service: "Develop and Lead",
    description:
      "Duis il odio amet nibh vulp. Morbi accumsan ipsuy velia uctor. Class aptent.",
  },
  {
    logo: "https://tse1.mm.bing.net/th?id=OIP.bMsM26bRX9jXbBFVAj2hrAHaHa&pid=Api&P=0&h=180",
    service: "Individual Donors",
    description:
      "Duis il odio amet nibh vulp. Morbi accumsan ipsuy velia uctor. Class aptent.",
  },
  {
    logo: "https://tse3.mm.bing.net/th?id=OIP.jHHzpwMJ7Gghqh5B37sRAgHaHa&pid=Api&P=0&h=180",
    service: "Provide a Range",
    description:
      "Duis il odio amet nibh vulp. Morbi accumsan ipsuy velia uctor. Class aptent.",
  },
];
const services = [
  {
    id: 1,
    title: "Find a Service",
    description:
      "Duis sed odio sit amet nibh vulpuate ris. Morbi accumsan ipsuy veli Nam nt auctor Class aptent.",
  },
  {
    id: 2,
    title: "Support Volunteers",
    description:
      "Duis sed odio sit amet nibh vulpuate ris. Morbi accumsan ipsuy veli Nam nt auctor Class aptent.",
  },
  {
    id: 3,
    title: "Help For Heroes",
    description:
      "Duis sed odio sit amet nibh vulpuate ris. Morbi accumsan ipsuy veli Nam nt auctor Class aptent.",
  },
];

function AboutUs() {
  return (
    <div className="w-full h-full flex flex-col gap-24 ">
      <div className="relative w-full h-[95vh]">
        <img src={bgForAbout} className="w-full h-full" />
        <div className="absolute top-0 bg-black/30 w-full h-full flex flex-col justify-end px-36">
          <div className="border-b-4 border-white pb-14">
            <h2 className="text-6xl text-white  ">About Us</h2>
            <p className="text-[1rem] text-white ">
              Organisations committed to ending poverty worldwide.
            </p>
          </div>
          <div className="flex gap-4 items-center py-6 text-white">
            <span>Home</span>
            <span>-</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
      <div className="px-16 flex flex-col gap-10">
        <div className="flex flex-col justify-center items-center uppercase text-center px-44">
          <IoLogoVimeo className="text-4xl text-[#ff3636]" />
          <span className="text-[#999999]  font-bold">working on charity</span>
          <p className="text-[#212529] text-[2.5rem] font-semibold">
            We Help Children Stay Safe, Healthy and Learning.
          </p>
        </div>

        <div className="flex gap-24 px-12">
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
        <div className="px-8 flex  justify-center gap-12">
          {orphanpeoples.map((item, i) => (
            <img
              src={item}
              key={i}
              className="rounded-4xl w-full aspect-video  object-cover"
            />
          ))}
        </div>
      </div>
      <div className="px-16 flex flex-col gap-10">
        <div className="flex flex-col justify-center items-center uppercase text-center px-44">
          <IoLogoVimeo className="text-4xl text-[#ff3636]" />
          <span className="text-[#999999]  font-bold">Charity Services</span>
          <p className="text-[#212529] text-[2.5rem] font-semibold">
            We're Mind, the Mental Health Charity
          </p>
        </div>
        <div className="flex px-10 gap-12 py-12 ">
          <div className="flex flex-col justify-evenly gap-16">
            {aboutCharityservice.map((item, i) => (
              <div
                className="flex items-center gap-12 transition-all duration-300 ease-linear hover:-translate-y-3"
                key={i}
              >
                <div className="h-[6.25rem] aspect-square rounded-full bg-[#ff3636] p-4 ">
                  <img
                    src={item.logo}
                    className=" h-full aspect-square rounded-full"
                  />
                </div>
                <div>
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
            className="flex w-1/2 rounded-4xl"
          />
        </div>
      </div>
      <div className=" w-full py-30 ">
        <div className="relative">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.wo6wOZXPzeLVDhW10iytjwHaEq&pid=Api&P=0&h=180"
            className="w-full h-[90vh] "
          />
          <div className="absolute top-0 bg-black/20 h-full w-full flex flex-col justify-center items-center uppercase text-center px-44">
            <IoLogoVimeo className="text-4xl text-[#ff3636]" />
            <span className="text-[#858585]  font-bold">
              Fundraising and events
            </span>
            <p className="text-[#fff] text-[2.5rem] font-semibold">
              Start a Fundraiser
            </p>
          </div>
          <div className="absolute -bottom-20 w-full flex gap-[1px] items-center justify-center">
            {services.map((item, i) => (
              <div className="bg-[#26268e] max-w-[15rem] py-4 flex flex-col items-center gap-4 justify-center">
                <div className="relative w-[6rem] aspect-square border border-white rounded-full p-4">
                  <img src={handshake} className="w-full aspect-square" />
                  <span className="absolute top-3 left-0 bg-[#ff3636] text-white p-1 rounded-full w-5 h-5 flex justify-center items-center text-xs font-medium">
                    {i + 1}
                  </span>
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
        <div className="flex flex-col justify-center items-center uppercase text-center px-44">
          <IoLogoVimeo className="text-4xl text-[#ff3636]" />
          <span className="text-[#999999]  font-bold">
            Testimonials & Stories
          </span>
          <p className="text-[#212529] text-[2.5rem] font-semibold">
            16+ Million Reviews
          </p>
        <div className="flex flex-col gap-8 items-center justify-center py-20">
        <div className="flex justify-center items-center gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`relative ${i === 2 ? "w-[6.8rem]" : "w-[4.8rem]"}`}
            >
              <img
                src="https://up.yimg.com/ib/th?id=OIP.gxCrcJ9wcnuS-hppF4l8ggHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120"
                className="w-full aspect-square rounded-full"
                alt="avatar"
              />
              {i === 2 && (
                <div className="absolute top-0 w-full h-full bg-[#31308cb0] flex justify-center items-center rounded-full">
                  <span className="text-white text-9xl  font-bold flex items-center justify-center pt-12 ">
                    “
                  </span>
                </div>
              )}
            </div>
          ))}
          </div>
        <p className="w-[68%] mx-auto leading-10 text-2xl text-center ">Excepteur sint occaecat cupidatat non proident, sunt in culpa deserunt mollit anim id est dolor sit amet, consectetur adipisi sed do eiusmod tempor incididunt ut labore..</p>
        <div className="flex gap-2 text-[#ff3636] ">
            {
                Array.from({length:5}).map((_,i)=>(
                  <FaStar/>
                ))
            }
        </div>
        <div className="flex flex-col  items-center">
            <span className="text-3xl font-bold leading-10">BANOTH SUJITH</span>
            <span className="text-[#212529] text-sm">FRONTEND DEVELOPER</span>
        </div>
        </div>
        </div>

    </div>
  );
}

export default AboutUs;
