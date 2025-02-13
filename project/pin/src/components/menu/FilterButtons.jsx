import React from 'react'

function FilterButtons({item,foodItems,setFilterItems}) {
  return (
    <div className='h-full w-[12.109rem]'>
        <button className='bg-[#d9d9d9] h-full w-full max-h-20 rounded-xl max-w-[12.109rem] uppercase hover:bg-[#4a5c2f] transition-all duration-100 hover:text-white scroll-smooth	' 
        onClick={()=>setFilterItems(()=>foodItems.filter((food)=>food.category===item))}
        >{item}</button>
    </div>
  )
}

export default FilterButtons