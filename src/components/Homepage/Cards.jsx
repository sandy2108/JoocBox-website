import React from 'react';
import juice from '../../assests/Images/j.png';
import panda from '../../assests/Images/panda.png';
import Image from 'next/image';
import Link from 'next/link';

import bg from '../../assests/Images/community.mp4';


const cards = () => {
  return (
    <div className='w-full text-white'>
      <div className='max-w-[1240px] mx-auto py-12'>
        <div className='grid lg:grid-cols-2 '>
          <div className='grid md:grid-rows-2 gap-2'>

             <div className='bg-[#011829] rounded-xl shadow-2xl mx-5 px-8 pt-8 mt-8'>
                <div className='grid lg:grid-cols-3  my-5 mt-0'>
                     <div className=' col-span-1 flex justify-center items-start py-4 lg:py-2 '>
                          <Image
                            src={juice}
                            height="20"
                            width="120"
                            alt="/"
                            className="rounded-full lg:mb-10"
                          />
                     </div>
                     <div className='col-span-2'>
                        <p className="font-inter my-2 text-white font-normal text-base sm:text-lg leading-normal">JooC Box offers exclusive NFT clothing packs that combine augmented reality, streetwear, and cryptocurrency for a unique and profitable fashion experience.</p>
                        <h1 className='font-inter font-normal text-[#4ca3ff] hover:text-white text-2xl leading-6 my-5'>FashionFusion</h1>
                    </div>
               </div>
             </div>

             <div className='bg-white rounded-xl shadow-2xl mx-5 px-8 mb-8 text-black'>
                <div className='grid lg:grid-cols-3 my-5 mt-0'>
                    <div className='col-span-1 py-4 lg:py-2 flex justify-center items-start'>
                    <Image
                            src={panda}
                            height="20"
                            width="120"
                            alt="/"
                            className="rounded-full aspect-w-6 aspect-h-1 object-cover lg:my-4 lg:mb-10"
                          />
                    </div>
                    <div className='col-span-2'>
                        <p className='font-inter my-2 font-normal text-base sm:text-lg leading-normal'>JooC Box enhances customer engagement with an immersive AR/VR juice bar, a chatbot or AI assistant, and design contests that foster brand involvement and ownership.</p>
                        <h1 className='font-inter font-normal text-[#4ca3ff] hover:text-black text-2xl leading-6 my-5'>Engage</h1>
                    </div>
                </div>
             </div>

             
          </div>

          <div className='rounded-2xl m-8 overflow-hidden relative'>
           <video src={bg} autoPlay loop muted style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
           <div className='absolute bottom-0 left-0 p-4'>
              <Link href="https://discord.gg/n4HE6yyu" alt="/"> <h1 className='text-3xl sm:text-3xl md:text-3xl lg:text-4xl px-10 hover:text-[#4ca3ff] my-2 text-white font-bold'>Meet the JoocBox Community</h1></Link>
          </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default cards;
