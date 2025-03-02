import React,{useState} from 'react'
import { GiChiliPepper } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import carrot from "../../assets/carrot.png";

const selectSize = [
  {
    id: 1,
    name: "Half ( serving for 1)",
    price: 220,
  },
  {
    id: 2,
    name: "Full ( serving for 2 to 3 )",
    price: 320,
  },
  {
    id: 3,
    name: "Extra Large ( Family Pack)",
    price: 420,
  },
];

const selectExtra = [
  {
    id: 1,
    name: "Cheese",
    category: "Dairy",
    price: 50,
  },
  {
    id: 2,
    name: "Cookies",
    category: "Snacks",
    price: 120,
  },
  {
    id: 3,
    name: "Cheese Cake",
    category: "Dessert",
    price: 250,
  },
  {
    id: 4,
    name: "Extra Chicken",
    category: "Add-on",
    price: 100,
  },
  {
    id: 5,
    name: "Coke 250ml",
    category: "Beverage",
    price: 40,
  },
  {
    id: 6,
    name: "Salad",
    category: "Healthy",
    price: 80,
  },
  {
    id: 7,
    name: "Ice Cream",
    category: "Dessert",
    price: 150,
  },{
    id: 8,
    name: "cake",
    category: "Dessert",
    price: 150,
  },
];
function SelectedItem() {
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedExtra, setSelectedExtra] = useState([]);
  return (

    <div className="absolute top-0 w-full py-2 bg-[#fff] flex flex-col gap-4">
    <img
      src="https://imgs.search.brave.com/KTj6BIldNF36n2boGosETCmzICdl-O2aiaaimCdkG2A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzA4Lzg0LzI0/LzM2MF9GXzYwODg0/MjQxM19oZFlhZHA2/dVNDN2M3cHE2TEpl/dzlzOGdQblJTZ2ps/bi5qcGc"
      className="w-full h-[16.25rem] rounded-t-3xl "
    />
    <div className="px-4">
      <p className="text-xl font-bold leading-7 flex items-center">
        <span>Special Offers</span>
        <IoIosArrowForward className="text-[#464545ca] mt-1 " />
      </p>
      <p className="otext-[#03081F] text-2xl font-bold leading-10">
        Customise Pizza
      </p>
    </div>
    <div className="bg-[#FDFDFD] shadow-lg shadow-[#00000025] rounded-t-lg border border-[#00000010] px-4 pb-8 flex flex-col gap-3">
      <div className="flex justify-between p-2">
        <div className="flex flex-col gap-4 justify-evenly">
          <p className="text-xl font-semibold leading-7">
            Fram House Xtreme Pizza
          </p>
          <div className="flex ">
            <GiChiliPepper className="text-[#e21818]" />
            <GiChiliPepper className="text-[#e21818]" />
            <GiChiliPepper className="text-[#e21818]" />
            <GiChiliPepper className="text-[#707070]" />
            <GiChiliPepper className="text-[#707070]" />
          </div>
        </div>
        <img
          src="https://imgs.search.brave.com/KTj6BIldNF36n2boGosETCmzICdl-O2aiaaimCdkG2A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzA4Lzg0LzI0/LzM2MF9GXzYwODg0/MjQxM19oZFlhZHA2/dVNDN2M3cHE2TEpl/dzlzOGdQblJTZ2ps/bi5qcGc"
          className="w-[7rem] h-[7rem] rounded-full"
        />
      </div>
      <p className="leading-6 ">
        1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized
        French Fries , 3 cold drinks
      </p>
      <p className="font-semibold ">Select your Portion</p>
      {selectSize.map((size) => (
        <div
          className="flex justify-between "
          key={size.id}
          onClick={() =>
            setSelectedSize((prev) =>
              prev === size.name ? null : size.name
            )
          }
        >
          <div className="flex gap-2">
            <input
              type="radio"
              name="size"
              value={size.name}
              checked={selectedSize === size.name}
              onChange={() => setSelectedSize(size.name)}
            />
            <label>{size.name}</label>
          </div>
          <span className="bg-[#A71316] rounded-4xl py-0.5 px-3 text-white">
            ₹{size.price}
          </span>
        </div>
      ))}
    </div>
    <div className="flex gap-8  px-4">
      <img
        src="https://imgs.search.brave.com/KTj6BIldNF36n2boGosETCmzICdl-O2aiaaimCdkG2A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzA4Lzg0LzI0/LzM2MF9GXzYwODg0/MjQxM19oZFlhZHA2/dVNDN2M3cHE2TEpl/dzlzOGdQblJTZ2ps/bi5qcGc"
        className="w-[7.3rem] h-[7.3rem] rounded-full "
      />
      <p className="text-[#FC8A06] font-bold leading-6 w-full border-l-2 border-black flex items-center  px-12">
        Please select up to 4 options free!
      </p>
    </div>
    <div className="flex justify-center mt-8 ">
      <div className="relative w-[24.6rem] h-[18.8rem] pb-8 rounded-xl border border-[#00000030] flex justify-between items-end bg-[#fff] px-8">
        <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
          <div className="relative w-[20.4rem] h-14 border bg-[#820F11] rounded-xl flex items-center justify-center">
            <span className="text-lg font-bold leading-10 text-white ">
              Extra Special
            </span>
            <div className="absolute -left-6 w-16 h-16 bg-[#FC8A06] flex items-center justify-center rounded-full">
              <img src={carrot} className="w-[1.9rem] h-[1.9rem] " />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-evenly  w-full px-4 gap-6">
          {selectExtra.map((extra) => (
            <div
              key={extra.name}
              className="flex gap-2 items-center"
              onClick={() =>
                setSelectedExtra((prev) =>
                  prev.includes(extra.name)
                    ? prev.filter((item) => item !== extra.name)
                    : [...prev, extra.name]
                )
              }
            >
              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedExtra.includes(extra.name) ? "border-[#820F11]": ""}`}>
                {
                  selectedExtra.includes(extra.name) ? <span className="text-xs text-[#820f11]">✓</span> : ""
                }
              </div>
              <label>{extra.name}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
    <button className="w-full mx-auto max-w-[20.4rem] h-14 py-4 px-2.5 rounded-lg bg-[#820F11] text-lg font-semibold text-white">Total to pay  ₹499</button>

    |<p className="w-full max-w-3xs mx-auto text-center" >Delivery & Tax will be calculated in the next step</p>
  </div>  )
}

export default SelectedItem