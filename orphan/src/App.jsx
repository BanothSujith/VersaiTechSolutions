import { useState } from 'react'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen font-sora'>
       {/* <AboutUs/> */}
       <Contact/>
    </div>
  )
}

export default App
