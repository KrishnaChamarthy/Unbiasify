import React from 'react'
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-6 lg:mx-20 border-b-2 '>
        <img src={Logo} alt="" className='lg:w-[150px] w-[100px]'/>
        <ul className='hidden lg:flex items-center justify-center gap-8 text-lg text-[#546871]'>
            <li>About</li>
            <li>Features</li>
            <li>How It Works</li>
            <li>Help</li>
        </ul>
        <div className='w-[100px] lg:w-[150px] flex justify-end items-center text-center'>
            <div className='rounded-full py-2 px-7 shadow-xl bg-white text-[#364b56] font-semibold' >
                Start
            </div>
        </div>
    </div>
  )
}

export default Navbar