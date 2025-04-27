import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './componenets/Navbar'
import Home from './pages/Home'
import Aboutus from './pages/Aboutus'
import Offer from './pages/Services'
import Contact  from './pages/Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/AboutUs" element={<Aboutus />}></Route>
        <Route path="Offer" element={<Offer/>}></Route>
        <Route path="Contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>   

      
    </>
  )
}

export default App
