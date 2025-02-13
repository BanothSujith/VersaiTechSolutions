import React, { useState, useRef } from "react";
import { FaHashtag } from "react-icons/fa";
import { MdOutlineTableBar } from "react-icons/md";
import SideListCard from "./SideListCard";
import SureComponent from "./SureComponent";
import QtyLess from "./QtyLess";
import { CiCircleRemove } from "react-icons/ci";
import { IoFastFoodOutline } from "react-icons/io5";

function SideList() {
  // const itemsList = [
  //   {
  //     id: 1,
  //     img: "https://imgs.search.brave.com/dlqhI8xbetyzrGtfayQ8Rfqc1mKYVAnjtXxR2vtsowI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8x/MS8yNS8xNy8xNy9z/YW5kd2ljaC0yOTc3/MjUxXzY0MC5qcGc",
  //     item: "aloo",
  //     price: 1098,
  //     qty: 1,
  //   },
  //   {
  //     id: 2,
  //     img: "https://imgs.search.brave.com/EVc6Lv8Y9S8vHMOymvNO_JqDpnBqj4rH7HdPPze55h8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZHJhZ29uc3Bl/bGwvaW1hZ2VzL3df/NDgwLGhfNDgwLGNf/ZmlsbCxkcHJfYXV0/byxmbF9wcm9ncmVz/c2l2ZTpzdGVlcCxm/X2F1dG8vd180ODAs/aF80ODAsY19maWxs/L3YxNTcxNDIwNzQ3/L3d3dy50cmF2ZWxw/b3J0bGFuZC5jb20v/Y3JvcHBlZC1NaXNz/LURlbHRhLWJhcmJl/Y3VlLU1pc3Npc3Np/cHBpLVBob3RvLWJ5/LUNhdGFsaW5hLUdh/aXRhbi9jcm9wcGVk/LU1pc3MtRGVsdGEt/YmFyYmVjdWUtTWlz/c2lzc2lwcGktUGhv/dG8tYnktQ2F0YWxp/bmEtR2FpdGFuLmpw/Zw",
  //     item: "aloo",
  //     price: 730,
  //     qty: 3,
  //   },
  //   {
  //     id: 3,
  //     img: "https://imgs.search.brave.com/8sVOl_mUftNlT9VjVQTiZGLXXkF-_oFXvK3Y4MUqVrU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZHJhZ29uc3Bl/bGwvaW1hZ2VzL3df/NDgwLGhfNDgwLGNf/ZmlsbCxkcHJfYXV0/byxmbF9wcm9ncmVz/c2l2ZTpzdGVlcCxm/X2F1dG8vd180ODAs/aF80ODAsY19maWxs/L3YxNjUxMDAwMzQz/L3d3dy50cmF2ZWxw/b3J0bGFuZC5jb20v/bWt0Zy0yMDIxMTIx/Ny1lbmF0LTA4MS9t/a3RnLTIwMjExMjE3/LWVuYXQtMDgxLmpw/Zw",
  //     item: "aloo",
  //     price: 233,
  //     qty: 19,
  //   },
  //   // {
  //   //   id: 4,
  //   //   img: "https://imgs.search.brave.com/gh8nEUA6I20nncjBiWYyQqiCu43ovJptb32Vrzvi_ZE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQ3/OTEzMTE0L3Bob3Rv/L3NoaXNoLWtvZnRl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1UREVNRmZPM2tn/QjlMNTNCMzFNYkJW/SWRSckJmZXNvZTRj/NFFHc1lPeXlzPQ",
  //   //   item: "aloo",
  //   //   price: 933,
  //   //   qty: 10,
  //   // },
  //   // {
  //   //   id: 5,
  //   //   img: "https://imgs.search.brave.com/8sVOl_mUftNlT9VjVQTiZGLXXkF-_oFXvK3Y4MUqVrU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZHJhZ29uc3Bl/bGwvaW1hZ2VzL3df/NDgwLGhfNDgwLGNf/ZmlsbCxkcHJfYXV0/byxmbF9wcm9ncmVz/c2l2ZTpzdGVlcCxm/X2F1dG8vd180ODAs/aF80ODAsY19maWxs/L3YxNjUxMDAwMzQz/L3d3dy50cmF2ZWxw/b3J0bGFuZC5jb20v/bWt0Zy0yMDIxMTIx/Ny1lbmF0LTA4MS9t/a3RnLTIwMjExMjE3/LWVuYXQtMDgxLmpw/Zw",
  //   //   item: "aloo",
  //   //   price: 233,
  //   //   qty: 19,
  //   // },
  //   // {
  //   //   id: 6,
  //   //   img: "https://imgs.search.brave.com/gh8nEUA6I20nncjBiWYyQqiCu43ovJptb32Vrzvi_ZE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQ3/OTEzMTE0L3Bob3Rv/L3NoaXNoLWtvZnRl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1UREVNRmZPM2tn/QjlMNTNCMzFNYkJW/SWRSckJmZXNvZTRj/NFFHc1lPeXlzPQ",
  //   //   item: "aloo",
  //   //   price: 933,
  //   //   qty: 10,
  //   // },
  //   // {
  //   //   id: 7,
  //   //   img: "https://imgs.search.brave.com/gh8nEUA6I20nncjBiWYyQqiCu43ovJptb32Vrzvi_ZE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQ3/OTEzMTE0L3Bob3Rv/L3NoaXNoLWtvZnRl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1UREVNRmZPM2tn/QjlMNTNCMzFNYkJW/SWRSckJmZXNvZTRj/NFFHc1lPeXlzPQ",
  //   //   item: "aloo",
  //   //   price: 933,
  //   //   qty: 10,
  //   // },
  //   // {
  //   //   id: 8,
  //   //   img: "https://imgs.search.brave.com/gh8nEUA6I20nncjBiWYyQqiCu43ovJptb32Vrzvi_ZE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQ3/OTEzMTE0L3Bob3Rv/L3NoaXNoLWtvZnRl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1UREVNRmZPM2tn/QjlMNTNCMzFNYkJW/SWRSckJmZXNvZTRj/NFFHc1lPeXlzPQ",
  //   //   item: "aloo",
  //   //   price: 933,
  //   //   qty: 10,
  //   // },
  // ];
  const [itemsList, setItemsList] = useState([
    {
      id: 1,
      img: "https://imgs.search.brave.com/dlqhI8xbetyzrGtfayQ8Rfqc1mKYVAnjtXxR2vtsowI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8x/MS8yNS8xNy8xNy9z/YW5kd2ljaC0yOTc3/MjUxXzY0MC5qcGc",
      item: "aloo",
      price: 1098,
      qty: 1,
    },
    {
      id: 2,
      img: "https://imgs.search.brave.com/EVc6Lv8Y9S8vHMOymvNO_JqDpnBqj4rH7HdPPze55h8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZHJhZ29uc3Bl/bGwvaW1hZ2VzL3df/NDgwLGhfNDgwLGNf/ZmlsbCxkcHJfYXV0/byxmbF9wcm9ncmVz/c2l2ZTpzdGVlcCxm/X2F1dG8vd180ODAs/aF80ODAsY19maWxs/L3YxNTcxNDIwNzQ3/L3d3dy50cmF2ZWxw/b3J0bGFuZC5jb20v/Y3JvcHBlZC1NaXNz/LURlbHRhLWJhcmJl/Y3VlLU1pc3Npc3Np/cHBpLVBob3RvLWJ5/LUNhdGFsaW5hLUdh/aXRhbi9jcm9wcGVk/LU1pc3MtRGVsdGEt/YmFyYmVjdWUtTWlz/c2lzc2lwcGktUGhv/dG8tYnktQ2F0YWxp/bmEtR2FpdGFuLmpw/Zw",
      item: "aloo",
      price: 730,
      qty: 3,
    },
    {
      id: 3,
      img: "https://imgs.search.brave.com/8sVOl_mUftNlT9VjVQTiZGLXXkF-_oFXvK3Y4MUqVrU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZHJhZ29uc3Bl/bGwvaW1hZ2VzL3df/NDgwLGhfNDgwLGNf/ZmlsbCxkcHJfYXV0/byxmbF9wcm9ncmVz/c2l2ZTpzdGVlcCxm/X2F1dG8vd180ODAs/aF80ODAsY19maWxs/L3YxNjUxMDAwMzQz/L3d3dy50cmF2ZWxw/b3J0bGFuZC5jb20v/bWt0Zy0yMDIxMTIx/Ny1lbmF0LTA4MS9t/a3RnLTIwMjExMjE3/LWVuYXQtMDgxLmpw/Zw",
      item: "aloo",
      price: 233,
      qty: 19,
    },
    // {
    //   id: 4,
    //   img: "https://imgs.search.brave.com/gh8nEUA6I20nncjBiWYyQqiCu43ovJptb32Vrzvi_ZE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQ3/OTEzMTE0L3Bob3Rv/L3NoaXNoLWtvZnRl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1UREVNRmZPM2tn/QjlMNTNCMzFNYkJW/SWRSckJmZXNvZTRj/NFFHc1lPeXlzPQ",
    //   item: "aloo",
    //   price: 933,
    //   qty: 10,
    // },
    // {
    //   id: 5,
    //   img: "https://imgs.search.brave.com/8sVOl_mUftNlT9VjVQTiZGLXXkF-_oFXvK3Y4MUqVrU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZHJhZ29uc3Bl/bGwvaW1hZ2VzL3df/NDgwLGhfNDgwLGNf/ZmlsbCxkcHJfYXV0/byxmbF9wcm9ncmVz/c2l2ZTpzdGVlcCxm/X2F1dG8vd180ODAs/aF80ODAsY19maWxs/L3YxNjUxMDAwMzQz/L3d3dy50cmF2ZWxw/b3J0bGFuZC5jb20v/bWt0Zy0yMDIxMTIx/Ny1lbmF0LTA4MS9t/a3RnLTIwMjExMjE3/LWVuYXQtMDgxLmpw/Zw",
    //   item: "aloo",
    //   price: 233,
    //   qty: 19,
    // },
    // {
    //   id: 6,
    //   img: "https://imgs.search.brave.com/gh8nEUA6I20nncjBiWYyQqiCu43ovJptb32Vrzvi_ZE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQ3/OTEzMTE0L3Bob3Rv/L3NoaXNoLWtvZnRl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1UREVNRmZPM2tn/QjlMNTNCMzFNYkJW/SWRSckJmZXNvZTRj/NFFHc1lPeXlzPQ",
    //   item: "aloo",
    //   price: 933,
    //   qty: 10,
    // },
    // {
    //   id: 7,
    //   img: "https://imgs.search.brave.com/gh8nEUA6I20nncjBiWYyQqiCu43ovJptb32Vrzvi_ZE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQ3/OTEzMTE0L3Bob3Rv/L3NoaXNoLWtvZnRl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1UREVNRmZPM2tn/QjlMNTNCMzFNYkJW/SWRSckJmZXNvZTRj/NFFHc1lPeXlzPQ",
    //   item: "aloo",
    //   price: 933,
    //   qty: 10,
    // },
    // {
    //   id: 8,
    //   img: "https://imgs.search.brave.com/gh8nEUA6I20nncjBiWYyQqiCu43ovJptb32Vrzvi_ZE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQ3/OTEzMTE0L3Bob3Rv/L3NoaXNoLWtvZnRl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1UREVNRmZPM2tn/QjlMNTNCMzFNYkJW/SWRSckJmZXNvZTRj/NFFHc1lPeXlzPQ",
    //   item: "aloo",
    //   price: 933,
    //   qty: 10,
    // },
  ]);
  const PIN = [1, 2, 3, 4];
  const [status, setStatus] = useState("");
  const [cardData, setCardData] = useState(itemsList);
  const [pin, setPin] = useState(["", "", "", ""]);
  const [isEditing, setIsEditing] = useState(false);
  const [isRejected, setRejected] = useState(false);
  const [popupState, setPopupState] = useState({ isOpen: false, itemId: null });

  console.log(status);
  console.log(cardData);
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...pin];
    newOtp[index] = value;
    setPin(newOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    if (!value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (index === 3 && value) {
      setTimeout(() => {
        handlePinCheck(newOtp.join(""));
      }, 1);
    }
  };

  const handlePinCheck = (enteredPin) => {
    setTimeout(() => {
      if (enteredPin == PIN.join("")) {
        alert("PIN Verified Successfully!");
        setStatus("verified");
      } else {
        alert("Incorrect PIN. Please try again.");
      }
      setPin(["", "", "", ""]);
    }, 1);
  };

  const handleIncrement = (id) => {
    setCardData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };
  const handleDecrement = (id) => {
    const item = cardData.find((item) => item.id === id);
    if (item && item.qty > 1) {
      setCardData((prevData) =>
        prevData.map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
      );
    } else if (item && item.qty === 1) {
      setPopupState({ isOpen: true, itemId: id });
    }
  };
  const handleConfirm = () => {
    setCardData((prevData) =>
      prevData.filter((item) => item.id !== popupState.itemId)
    );
    setPopupState({ isOpen: false, itemId: null });
  };

  const handleCancel = () => {
    setPopupState({ isOpen: false, itemId: null });
  };

  const totalPrice = cardData.reduce(
    (total, item) => total + item.price * item.qty.toFixed(2),
    0
  );

  return (
    <div className=" relative bg-[#f4f4f4]  w-full h-full max-w-[26.188rem] flex flex-col justify- items-center ">
      <QtyLess
        isOpen={popupState.isOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
      <div className="flex flex-col justify-between items-center text-3xl font-semibold text-[#2c3832] w-full h-full  max-h-[6rem] max-w-[24.688rem]  pb-2 border-b-2 border-[#a9a9a9] border-dashed ">
        <div className=" flex justify-between max-h-[2.375rem] h-full w-full  ">
          <span className="flex max-w-[8.25rem] h-full truncate">
            ORDER
            <span className="pl-2 pt-1">
              {" "}
              <FaHashtag />
            </span>{" "}
          </span>
          <span className="max-w-[8.25rem] h-full truncate">123455</span>
        </div>

        <div className="flex justify-between h-full max-h-[1.875rem] w-full max-w-[24.043rem]  text-[.938rem]">
          <span className="flex justify-center items-center">
            <span className="pt-1">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <span className="px-1">GUESS:</span>{" "}
            <span className="text-[#d89f65] ">2</span>
          </span>

          <span className="flex justify-center items-center">
            <span>
              <MdOutlineTableBar />
            </span>
            <span className="px-1">TABLE:</span>{" "}
            <span className="text-[#d89f65] ">2</span>
          </span>
        </div>
      </div>

      {cardData.length !== 0 ? (
        <div className="w-full h-full max-h-98 px-4 py-2 overflow-auto ">
          {cardData.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col mt-2 w-full h-full  max-w-[24.625rem] max-h-[5.25rem] bg-[#e8e8e8] rounded-xl p-2 pb-1 px-2 "
            >
              <SideListCard
                cardData={item}
                handleIncrement={() => handleIncrement(item.id)}
                handleDecrement={() => handleDecrement(item.id)}
                editing={isEditing}
              />
              {isEditing ? (
                <div className="absolute -top-2 -right-[5px] text-red-700 ">
                  <button
                    onClick={() =>
                      setCardData((prevData) =>
                        prevData.filter((data) => data.id !== item.id)
                      )
                    }
                  >
                    <CiCircleRemove />
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
          {isRejected ? (
            <div
              className="absolute w-full h-full bg-[#f1ededb6] flex items-center justify-center
           left-0 top-0  "
            >
              <SureComponent
                setCardData={setCardData}
                setRejected={setRejected}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center  h-full w-full   ">
          <IoFastFoodOutline className="text-9xl text-yellow-400 opacity-40" />
          <div className="uppercase text-sm p-6 w-[50%] text-center font-bold tracking-wide opacity-40">
            {" "}
            no products in this moment added
          </div>{" "}
        </div>
      )}
      {/* initial Status */}
      {cardData.length !== 0 && status === "" ? (
        <div className="bg-[#FAFAFA] border rounded-t-[.875rem] border-[#a9a9a9] border-dashed  flex flex-col justify-between items w-full h-full max-h-[12.875rem] max-w-[24.625rem] p-5 ">
          <div className=" flex flex-col justify-between w-full h-full  ">
            <div className="flex justify-between font-bold text-[1.875rem] ">
              <span>TOTAL</span>
              <span>${totalPrice}</span>
            </div>

            <div className="flex justify-between ml-4">
              <button
                className="border-[0.094rem] rounded-md text-[#ec5a5a] border-[#ec5a5a] px-4 py-2 hover:bg-[#ec5a5a] hover:text-white transition duration-500"
                onClick={() => setRejected(true)}
              >
                DECLINE ORDER
              </button>
              <button
                className="border-[0.094rem] rounded-md text-[#f1f2f2] bg-[#1b2827] px-4 py-2 hover:bg-[#28a745] hover:text-white transition duration-500 "
                onClick={() => setStatus("accepted")}
              >
                ACCEPT ORDER
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* accepted Status */}
      {status === "accepted" ? (
        <div className="bg-[#FAFAFA] border rounded-t-[.875rem] border-[#a9a9a9] border-dashed  flex flex-col justify-between items-center w-full h-full max-h-[19.5rem] max-w-[24.625rem] p-5 ">
          <p className="uppercase text-[#2B82F5] ">
            verify 4-digit security pin
          </p>

          <div className="flex space-x-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index}>
                <input
                  type="text"
                  maxLength={1}
                  ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handleInputChange(e, index)}
                  className="w-12 h-12 text-center bg-[#efefef] shadow-[#feda59] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6a680d]"
                />
              </div>
            ))}
          </div>

          <div className=" flex flex-col justify-between w-full h-full max-h-[7.875rem] max-w-[22.438rem] ">
            <div className="flex justify-between font-bold text-[1.875rem] ">
              <span>TOTAL</span>
              <span>${totalPrice}</span>
            </div>
            <div className="flex justify-between ml-4">
              <button
                className="border-[0.094rem] rounded-md text-[#ec5a5a] border-[#ec5a5a] px-4 py-2 hover:bg-[#ec5a5a] hover:text-white transition duration-500"
                onClick={() => {
                  setCardData([]);
                  setStatus("");
                }}
              >
                DECLINE ORDER
              </button>
              <button
                className="border-[0.094rem] rounded-md text-[#f1f2f2] bg-[#1b2827] px-4 py-2 transition duration-500 cursor-not-allowed	 "
                disabled
              >
                ACCEPT ORDER
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* verified Status */}

      {cardData.length !== 0 && status === "verified" ? (
        <div className="bg-[#FAFAFA] border rounded-t-[.875rem] border-[#a9a9a9] border-dashed  flex flex-col justify-around items-center w-full h-full max-h-[19.5rem] max-w-[24.625rem] ">
          <div className="flex flex-col w-full h-full justify-between max-h-[5.75rem] pb-[2rem] border-b-2 border-dotted border-[#a9a9a9] font-semibold text-[.938rem] uppercase ">
            <div className="px-5">
              <span className="flex justify-between">
                <span>subtotal</span>
                <span>${(totalPrice - totalPrice * 0.1).toFixed(2)}</span>
              </span>
            </div>
            <div className="px-5">
              <span className="flex justify-between">
                <span>
                  <span className="pr-2">service charge</span>
                  <span>10%</span>{" "}
                </span>
                <span>${(totalPrice * 0.1).toFixed(2)}</span>
              </span>
            </div>
          </div>

          <div className=" flex flex-col justify-between w-full h-full max-h-[7.875rem] max-w-[22.438rem] ">
            <div className="flex justify-between font-bold text-[1.875rem] ">
              <span>TOTAL</span>
              <span>${totalPrice}</span>
            </div>
            <div className="flex flex-row-reverse justify-between ml-4">
              <button className="border-[0.094rem] rounded-md text-black bg-[#5aec90] hover:bg-[#488a60] border-[#ecbe5a] px-4 py-2  hover:text-black transition duration-500">
                GENERATE BILL
              </button>
              <button
                className="border-[0.094rem] rounded-md text-black border-[#ec5a5a] bg-[#b1ced4] px-4 py-2 hover:bg-[#bdccc1]  transition duration-500 "
                onClick={() => {
                  setIsEditing(!isEditing);
                  setStatus("editing");
                }}
              >
                EDIT ORDER
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* edit state */}
      {cardData.length !== 0 && status === "editing" ? (
        <div className="bg-[#FAFAFA] border rounded-t-[.875rem] border-[#a9a9a9] border-dashed  flex flex-col justify-around items-center w-full h-full max-h-[19.5rem] max-w-[24.625rem] ">
          <div className="flex flex-col w-full h-full justify-between max-h-[5.75rem] pb-[2rem] border-b-2 border-dotted border-[#a9a9a9] font-semibold text-[.938rem] uppercase ">
            <div className="px-5">
              <span className="flex justify-between">
                <span>subtotal</span>
                <span>${totalPrice - totalPrice * 0.1}</span>
              </span>
            </div>
            <div className="px-5">
              <span className="flex justify-between">
                <span>
                  <span className="pr-2">service charge</span>
                  <span>10%</span>{" "}
                </span>
                <span>${totalPrice * 0.1}</span>
              </span>
            </div>
          </div>

          <div className=" flex flex-col justify-between w-full h-full max-h-[7.875rem] max-w-[22.438rem] ">
            <div className="flex justify-between font-bold text-[1.875rem] ">
              <span>TOTAL</span>
              <span>${totalPrice}</span>
            </div>
            <div className="flex justify-between ml-4">
              <button
                className="border-[0.094rem] rounded-md text-[#ec5a5a] border-[#ec5a5a] px-4 py-2 hover:bg-[#ec5a5a] hover:text-white transition duration-500"
                onClick={() => {
                  setCardData(itemsList);
                  setStatus("verified");
                  setIsEditing(false);
                }}
              >
                CANCEL
              </button>
              <button
                className="border-[0.094rem] rounded-md text-[#f1f2f2] bg-[#1b2827] px-4 py-2 hover:bg-[#28a745] hover:text-white transition duration-500 "
                onClick={() => {
                  setIsEditing(false);
                  setStatus("verified");
                  setItemsList(cardData);
                }}
              >
                CONFIRM CHANGES
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SideList;
