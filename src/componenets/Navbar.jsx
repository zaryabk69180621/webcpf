import React from 'react'
import assets from '../assets/assets'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className=' flex justify-center items-center text-lg gap-100 shadow-xl shadow-grey-100/45  h-25 p-1'>
        <img className='h-15' src={assets.logo}>

        </img>
        <div className='&>*:block   flex items-center gap-10 '>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/AboutUs"> About Us</NavLink>
            <NavLink to="/Offer"> Offer</NavLink>
            <NavLink to="/Contact">Contact us</NavLink>
            <a href="tel:03369544885">
          <div className='flex gap-1 p-3 bg-slate-800 text-white'>
            <div >
            <svg className=' size-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width='1em' height='1em'><path fill="currentColor" d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"/></svg>
            </div>
             <p className=' content-center'>03XXXXXXXXXX</p>
            </div>
            </a>
        </div>
    </div>
  )
}

export default Navbar