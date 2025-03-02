import React from 'react'
import CouponPopUp from '../cards/CouponPopUp'

function Coupon({coupons}) {
  return (
    <div className="fixed bottom-0 left-0 bg-black/30 w-full h-full flex items-end justify-center ">
    {/* <div className="fixed bottom-0 left-0 bg-white py-12 px-6 w-full rounded-t-[1.875rem] flex flex-col gap-8">
    <div className=" flex gap-4">
       <button className="py-2 px-4 bg-[#820F11] w-full rounded-full text-white font-medium">
         Coupons
       </button>
       <button className="py-2 px-4 bg-[#fff] border border-[#820F11] w-full rounded-full text-[#820F11] font-medium">
         Gift Card
       </button>
     </div>
     <input
       type="search"
       placeholder="Serach..."
       className="appearance-none border border-[#A3A3A3]  w-full py-1.5 px-2.5 rounded-3xl"
     />
     <div className="p-2 flex flex-col gap-6">
       {coupons?.map((coupon, i) => (
         <div className="flex flex-col " key={i}>
           <div className="w-full flex justify-between ">
            <div className="flex gap-3 items-center">
            <img 
             src={coupon.logo}
             className="mx-w-6 max-h-4 "
             />
             <span className="text-xs font-medium leading-5 text-[#1A1A1A]">{coupon.code}</span>
            </div>
             <span className="text-[#820F11] text-sm">Apply</span>
           </div>
           <span className="text-[#0B7C4C] text-xs font-bold leading-5">Save ₹{coupon.discount}</span>
           <span className="text-[#A3A3A3] font-medium leading-5 text-xs">{coupon.description}</span>
         </div>
       ))}
     </div> */}
      {/* <input 
   type="text"
   placeholder="Gift Card Number"
   className="w-full p-4 border rounded-xl font-medium "
   />
     <input 
   type="text"
   placeholder="Enter 6 Digit Pin"
   className="w-full p-4 border rounded-xl font-medium "
   />
   <button className="w-full rounded-lg bg-[#820F11] py-4 px-2.5 text-white font-bold">Apply</button>  
   </div> 
 */}

   {
    <CouponPopUp/>
   }
 </div>  )
}

export default Coupon