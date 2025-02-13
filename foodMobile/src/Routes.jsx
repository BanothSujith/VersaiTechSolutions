import React from 'react'
import {Routes,Route} from 'react-router-dom'
import PreLogin from './components/PreLogin'
import LoginButton from './components/LoginButton'
import LoginOTP from './components/LoginOTP'
import ProfileIndex from './components/ProfileMain/Index'
import Profile from './components/ProfileMain/Profile'
import Orders from './components/ProfileMain/Orders'
import Payments from './components/ProfileMain/Payments'
import MyPoints from './components/ProfileMain/MyPoints'
import Address from './components/ProfileMain/Address'
import AddAddress from './components/ProfileMain/AddAddress'
import RateAndReview from './components/ProfileMain/RateAndReview'
import FAQ from './components/ProfileMain/FAQ'

function Routers() {
  return (
    <Routes>
        <Route path="/" element={<PreLogin/>} />
        <Route path="/prelogin" element={<LoginButton/>} />
        <Route path="/login"   element={<LoginOTP/>} />
        <Route path="/profile" element={<ProfileIndex/>} >
         <Route path='profile' element={<Profile/>} />
         <Route path='myorder' element={<Orders/>}/> 
         <Route path='payments' element={<Payments/>} />
         <Route path='mypoints' element={<MyPoints/>}/>
         <Route path='myaddress' element={<Address/>}/>
         <Route path="addaddress" element={<AddAddress/>} />
         <Route path='rateandreview' element={<RateAndReview/>}/>
         <Route path='faq' element={<FAQ/>}/>
        </Route>

    </Routes>
  )
}

export default Routers