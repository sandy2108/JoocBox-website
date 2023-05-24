import React from 'react'
import { useEffect, useState } from 'react'
import arrow from '../../assests/Images/DemandSpikes.png';
import dynamic from '../../assests/Images/DynamicAssets.png';
import Fast from '../../assests/Images/FastEnough.png';
import Image from 'next/image';

const About = () => {
   

  const [textIndex, setTextIndex] = useState(0);
  const phrases = ['Trust', 'Chances', 'Scalable'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  
  }, [phrases.length]);



  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto p-4  '>
          <div className='lg:py-8 px-4 flex items-center justify-start border-b-2 border-gray-400'>
            <h1 className='font-[500] font-Inter text-[35px] md:text-[78px] lg:text-[120px] leading-[111px] text-black'>Eternal</h1> 
            <h2 className='font-[500] mx-5 font-Inter text-[35px] md:text-[78px] lg:text-[120px] leading-[111px] text-[#4ca3ff]'>{phrases[textIndex]}</h2>            
          </div>

          <div className='w-full lg:px-2 '>
            <div className='lg:px-0 px-5 lg:mx-0 md:px-25 md:mx-20'>
               <div className='grid lg:grid-cols-3 my-10 gap-4'>
                  <div className='rounded-xl mx-auto border-2 border-[#e7e7e7] p-14 m-6 px-6 relative'>
                     <div className='my-10 mb-1 mt-20 '>
                       <div className='flex items-center justify-end'>
                         <Image
                           src={arrow}
                           height="80"
                           width="120"
                           alt="/"
                           className="absolute top-0 right-0 "
                         />
                       </div>
                        <div className='py-5'> 
                           <div>
                              <h1 className='mt-20 font-[500] font-Inter text-[21px]'>Demand spikes, fees dont</h1>
                           </div>
                           <div>
                              <p className='font-[500] font-inter text-[#91a3b1] text-[15px] my-2'>Horizontal scaling keeps fees low and steady even at times of increased demand.</p>
                           </div>
                        </div>
                      </div>
                  </div>

                  <div className='rounded-xl mx-auto border-2 border-[#e7e7e7] p-14 m-6 px-6 relative'>
                     <div className='my-10 mb-1 mt-20 '>
                       <div className='flex items-center justify-end'>
                         <Image
                           src={Fast}
                           height="80"
                           width="120"
                           alt="/"
                           className="absolute top-0 right-0 "
                         />
                       </div>
                        <div className='py-5'> 
                           <div>
                              <h1 className='mt-20 font-[500] font-Inter text-[21px]'>Fast enough for any application</h1>
                           </div>
                           <div>
                              <p className='font-[500] font-inter text-[#91a3b1] text-[15px] my-2'>Parallel processing allows simple transactions, such as asset transfers, to finalize in real-time, without sacrificing security.</p>
                           </div>
                        </div>
                      </div>
                  </div>
                   
                  <div className='rounded-xl mx-auto border-2 border-[#e7e7e7] p-14 m-6 px-6 relative'>
                     <div className='my-10 mb-1 mt-20 '>
                       <div className='flex items-center justify-end'>
                         <Image
                           src={dynamic}
                           height="80"
                           width="120"
                           alt="/"
                           className="absolute top-0 right-0 "
                         />
                       </div>
                        <div className='py-5'> 
                           <div>
                              <h1 className='mt-20 font-[500] font-Inter text-[21px]'>Dynamic assets you actually own</h1>
                           </div>
                           <div>
                              <p className='font-[500] font-inter text-[#91a3b1] text-[15px] my-2'>Sui object-centric data model allows digital assets and their attributes to live on-chain and outside of smart contracts.</p>
                           </div>
                        </div>
                      </div>
                  </div>
               </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About