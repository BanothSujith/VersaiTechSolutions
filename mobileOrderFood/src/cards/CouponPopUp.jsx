import React from 'react'

function CouponPopUp() {
  return (
    <div className='bg-black/60 w-full h-full flex justify-center items-center'>
        <div className='relative w-[19.3rem] h-[14.6rem] bg-white rounded-3xl flex flex-col gap-6 items-center justify-center p-12 text-center'>
            <img 
            src="https://logotyp.us/file/paytm.svg"
            className='max-w-12 absolute -top-2 left-1/2 transform -translate-x-1/2'
            />
            <span className='text-[#A3A3A3] font-bold leading-6 '>‘SAVEMOREFWD’ applied</span>
            <span className='text-[#1A1A1A] text-xl font-bold leading-7 '>₹400 saved with this coupon!</span>
            <span className='text-[#820F11] text-sm font-bold leading-5 '>YAY!</span>
        </div>
    </div>
  )
}

export default CouponPopUp