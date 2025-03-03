import React from 'react'
import Routers  from './routers/Routers'
import { IoMdHome } from "react-icons/io";
import { TbCategory2 } from "react-icons/tb";
import { BsTag } from "react-icons/bs";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { NavLink ,BrowserRouter} from 'react-router-dom';

const navitems =[{
    label:"Home",
    path:"/",
    logo:IoMdHome
},
{
    label:"Categories",
    path:"/categories",
    logo:TbCategory2
},
{
   label:"Loyalty Points",
   path:"/loyaltypoints",
   logo:BsTag
},
{
    label:"Profile",
    path:"/profile",
    logo:MdOutlinePeopleAlt
}
]
function Layout() {
  return (
    <BrowserRouter>

    <div className='flex flex-col h-full w-full'>
        <div className='overflow-auto hidescrollbar'>
        <Routers/>

        </div>
        <nav className='flex justify-between px-6 py-2'>
           {
            navitems.map((item,i)=>(
                <NavLink to={item.path}  key={i} className={({ isActive }) => 
                    `flex flex-col items-center w-fit ${isActive ? "text-[#A71316]" : ""}`
                  }><item.logo className='text-3xl'/><span className='font-bold  '>{item.label}</span></NavLink>
            ))
           }
        </nav>
    </div>
    </BrowserRouter>

  )
}

export default Layout