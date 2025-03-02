import { useState } from 'react'
import Home from './components/home/Home'
import Categories from './components/categories/Categories'
import Categories1 from './components/categories/Categories1'
import OrderNow from './components/OrderNow'
import RatingsAndReviews from './components/RatingsAndReviews'
import Profile from './components/Profile'
import Address from './components/Address'
import Payments from './components/Payments'
import VerifyOtp from './VerifyOtp'
import TrackDelivery from './components/TrackDelivery'
import DeliveryTracking from "./components/DeliveryTracking"
import Layout from './Layout'
function App() {
  return (
    <div className=' h-screen w-full max-w-[27rem] mx-auto font-["Sofia Sans"] bg-white ' >
     {/* <Home/> */}
    {/* <Categories/> */}
    {/* <Categories1/> */}
    {/* <OrderNow/> */}
    {/* <RatingsAndReviews/> */}
    {/* <Profile/> */}
    {/* <Address/> */}
     {/* <Payments/> */}
   {/* <VerifyOtp/> */}
   {/* <TrackDelivery/> */}
   {/* <DeliveryTracking/> */}
   <Layout/>
    </div>
  )
}

export default App
