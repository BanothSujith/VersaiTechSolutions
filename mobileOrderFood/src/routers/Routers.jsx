import React from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from '../components/home/Home'
import Categories from '../components/categories/Categories'
import RatingsAndReviews from '../components/RatingsAndReviews'
import Profile from '../components/Profile'
function Routers() {
  return (
    <Routes>
     <Route path='/' element={<Home/>}/> 
    <Route path='/categories' element={<Categories/>}/>
    <Route path="/loyaltypoints" element={<RatingsAndReviews/>}/>
    <Route path='/profile' element={<Profile/>}/>
    </Routes>
  )
}

export default Routers