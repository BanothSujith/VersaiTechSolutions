import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { FiMinusCircle } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

function AddmoreCard({item,setItems}) {
    const increaseQuantity = (id) => {
        setItems((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      };
    
      const decreaseQuantity = (id) => {
        setItems((prev) =>
          prev.map((item) =>
            item.id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      };
      const handleRemoveItem = (id) =>{
        setItems((prev) => prev.filter((item) => item.id !== id));    
      }
      return (
    <div className="w-full   p-2 flex justify-between gap-4">
    <img 
    src={item.image}
    className="w-[7.25rem] h-[7.25rem] aspect-square rounded-xl object-cover"
    />
    <div className="w-[14.7rem]   flex flex-col gap-2 ">
      <div>
      <div className="flex justify-between">
      <span className="text-sm font-bold leading-5 text-[#820F11] line-clamp-1">{item.name} </span>
       <RiDeleteBin6Line className="text-[#A3A1A1]" onClick={()=>handleRemoveItem(item.id)}/>
      </div>
      <div className="flex gap-1 items-center text-[#857575]">
        <span className="text-xs font-medium">Customize</span>
        <FaChevronDown className="text-xs"/>
        </div>
      </div>
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
                <button onClick={() => increaseQuantity(item.id)}><HiOutlinePlusCircle/></button><span className="text-lg font-medium">{item.quantity}</span><button className="text-xs foont-bold" onClick={() => decreaseQuantity(item.id)}><FiMinusCircle/></button>
            </div>
            <span className="text-[#1A1A1A] font-bold text-sm leading-5">₹{item.price}</span>
        </div>
        <button className="  bg-[#820F11] text-white flex items-center justify-center gap-2 rounded-[6.25rem] py-2 px-3">
            <span className="text-xl font-bold">+</span>
            <span>Add More Items</span>
        </button>
    </div>
</div>
  )
}

export default AddmoreCard