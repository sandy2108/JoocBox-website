import React from 'react'
import Link from 'next/link';
import {BsArrowRight  } from "react-icons/bs";

const Design = () => {
  return (
    <div className='w-full'>
        <div className='m-4'>
          <div className='max-w-[1400px] rounded-3xl flex-wrap overflow-hidden bg-[#011829] h-[440px] md:h-[780px] m-auto'>
             <div className='w-full h-[40%] md:h-[55%] rounded-b-2xl loop overflow-hidden bg-gray-100'>
              
             </div>
             <div className='w-full h-full bg-[#011829] '>
                 <div className='max-w-[1240px] mx-auto p-4'>
                    <div className='md:my-20 text-white lg:flex '>
                         <div className='mx'><p className='text-[30px] md:text-5xl lg:text-7xl font-[500] font-Inter text-white'>Build with <br/>Coinfidence</p></div>
                         <div className='my-2 lg:ml-20 lg:pl-20 md:my-5'>
                            <p className='text-[15px] font-medium text-white'>Experience the fusion of exclusive NFT clothing packs, AR enhancements, and cryptocurrency at JooC Box. Elevate your style and maximize wardrobe profitability..</p>
                            <Link href="/" alt="/"> <button className='cursor-pointer rounded-3xl border-2 text-[#eaf7ff] border-[#eaf7ff] flex  my-2 lg:my-7 px-4 py-2 '>Get Started <BsArrowRight size={22} className='mx-2'/> </button> </Link>
                        </div>
                    </div>
                </div> 

                 
              </div>
          </div>
        </div>
    </div>
  )
}

export default Design