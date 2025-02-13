import React from 'react'


const addressItems = [
    {
        label:"street number",
        type:'number',
    },
    {
        label:"street ",
        type:'text',
    },
    {
        label:"city",
        type:'text',
    },
    {
        label:"State",
        type:'text',
    },
    {
        label:"country",
        type:'text',
    },
    {
        label:"postal code",
        type:'number',
    },
]
function AddAddress() {
  return (
    <div className='px-8 flex flex-col gap-8 md:gap-12  '>
         <h1 className='text-xl font-medium text-[#00000040]'>ADDRESS</h1>
         <div className='flex flex-col  gap-4 w-full '> {
          
            addressItems.map((item, index) => (
                <div className=' flex flex-col  gap-1' key={index}>
                <label className='capitalize'>{item.label}</label>
                <input 
                type={item.type}
                placeholder={item.label}
                className='outline-none  border  border-[#820F11] rounded-lg bg-[#d9d9d902] py-2 px-4 text-xl placeholder:capitalize  '
                />
                </div>
            ))
            
        }
        </div>
    <button className='w-full py-4  px-2.5 rounded-xl bg-[#820f11] text-white text-xl font-bold'>SAVE</button>
    </div>
  )
}

export default AddAddress