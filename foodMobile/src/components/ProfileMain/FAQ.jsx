import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";

function FAQ() {
const [open, setOpen] = useState(null);
  return (
    <div className='flex flex-col gap-4' style={{fontFamily: 'Sofia Sans'}} >
        <h1 className='text-xl font-bold '>FAQ</h1>
        <div>
           {
            Array.from({length:7}).map((_,i)=>(
              <div className='flex flex-col gap-4 w-full justify-between  border-y border-y-[#D4D4D4] py-4 px-6  text-[#5B5B5B] cursor-pointer' key={i} onClick={()=>setOpen(open == i ? null : i)}>
              <p className=' font-semibold flex justify-between'> <span>What are your Deliver hours?</span> <FaPlus className=''/></p>
              
              {
                i == open && (
                  <p className='text-sm font-normal'>At Viral Pitch we expect at a day’s start is you, better and happier than yesterday. We have got you covered share your concern or check our frequently asked questions listed below.At Viral Pitch we expect at a day’s start is you, better and happier than yesterday. We have got you covered share your concern.check our frequently asked questions listed below</p>
                )
              }
          </div>
            ))
           }
        </div>
        <p className='text-xl font-bold text-center '>Still stuck? Help us a mail away</p>
        <button className='bg-[#820F11] max-w-[20rem] w-full mx-auto rounded-xl py-4 px-2.5 text-white '>Send a message</button>
    </div>
  )
}

export default FAQ