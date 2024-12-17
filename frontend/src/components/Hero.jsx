import React from 'react'
import { MdLock } from "react-icons/md";
import { FaCircleDot } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='py-4 lg:my-20'>
        <div className='flex flex-col gap-5 items-center text-center'>
          <h1 className='text-3xl lg:text-7xl'>Detect. Analyze. Mitigate</h1>
          <p className='text-sm lg:text-lg text-[#546871] lg:max-w-[60%]'> Unbiasfy helps you uncover hidden biases in your data and models, providing tools to identify and address disparities that can impact decision-making and results.</p>
          <div className='my-5 text-sm text-[#bfccd1] flex items-center gap-3'>
             <FaCircleDot /> 
             <div className='w-5 border-t-2 border-[#bfccd1]'></div>
             <FaCircleDot /> 
             <div className='w-5 border-t-2 border-[#bfccd1]'></div>
             <div className='p-2 rounded-full bg-white flex items-center justify-center shadow-xl'> <MdLock className='text-xl'/></div>
           
            <div className='w-5 border-t-2 border-[#bfccd1]'></div>
            <FaCircleDot /> 
            <div className='w-5 border-t-2 border-[#bfccd1]'></div>
            <FaCircleDot /> 
          </div>
        </div>
        
    </div>
  )
}

export default Hero