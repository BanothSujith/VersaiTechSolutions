import { useState } from 'react'
import Home from './components/home/Home'
import Categories from './components/categories/Categories'
import Categories1 from './components/categories/Categories1'

function App() {
  return (
    <div className=' h-screen w-full max-w-[27rem] mx-auto font-["Sofia Sans"] bg-white ' >
     {/* <Home/> */}
    {/* <Categories/> */}
    <Categories1/>
    </div>
  )
}

export default App
