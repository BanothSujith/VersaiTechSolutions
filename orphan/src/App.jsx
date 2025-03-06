import { useState } from 'react'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Logos from './components/Logos'
import Review from './components/Test'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen font-sora'>
       <AboutUs/>
       {/* <Contact/> */}
       {/* <Logos/> */}
       <Review/>
    </div>
  )
}

export default App
