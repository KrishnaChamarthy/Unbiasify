import React from 'react'
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-6'>
        <img src={Logo} alt="" width={150}/>
        <ul className='m-8 flex items-center justify-center gap-8 text-lg '>
            <li>About</li>
            <li>Features</li>
            <li>How It Works</li>
            <li>Help</li>
        </ul>
        <div className='w-[150px] flex justify-center items-center'>
            <div className='xrounded-full py-2 px-7 border-stone-800'>
                Start
            </div>
        </div>
    </div>
  )
}

export default Navbar