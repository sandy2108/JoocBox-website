import React from 'react'
import {BsArrowDown} from "react-icons/bs";


const Hero = () => {
  return (
    <div className='w-full h-full my-5'>
        <div className='m-4'>
          <div className='max-w-[1500px] rounded-3xl flex-wrap background h-[680px] m-auto p-4'>
            <div className='mx-auto md:my-12'>
                <h1 className=' font-inter font-normal text-transparent sm:text-9xl  m-5 text-7xl leading-none text-gradient bg-gradient-to-r from-gray-900 to-white bg-clip-text' >Build Beyond </h1>
            </div>
            <div className='mx-auto items-start justify-start'>
                <h2 className=' font-normal p-4  md:w-1/2 lg:whitespace-nowrap lg:w-1/2 text-white justify-start leading-none text-4xl m-5'>Squeeze the Wealth Out of Fashion!</h2>
            </div>
            <div className='mx-auto my-44 mt-8 md:my-40'> 
                <p className='font-inter font-bold m-5 text-inter-500 text-md leading-6 text-gray-700 my-8 p-4 flex'><BsArrowDown size={24} className='mr-2'/>Explore more </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero