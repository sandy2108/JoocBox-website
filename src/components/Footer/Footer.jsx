import React from 'react'
import {BsArrowUpRight} from "react-icons/bs";
import { TfiTwitter } from 'react-icons/tfi';
import { RxDiscordLogo } from 'react-icons/rx';
import { TbBrandTelegram } from 'react-icons/tb';
import { AiOutlineInstagram} from 'react-icons/ai';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className=' left-0 z-2 w-full h-full md:h-screen sm:h-full bg-[#011829]'>
        <div className='max-w-[1240px] m-auto p-4'>
            <div className='my-20'>
                 <div className='border-b-2 '>
                    <div><h1 className='text-4xl font-inter font-normal leading-10  text-[#3490dc] hover:text-[#91a3b1]'>Build Beyond</h1></div>
                    <div><h2 className='font-inter font-normal text-500 leading-6 text-white text-base sm:text-md  my-3 mb-10'>Unlock the freedom to build powerful on-chain assets</h2></div>
                 </div>
                 <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 my-10 '>
                    <div className='lg:p-4 md:p-4  md:flex lg:flex gap-3 col-span-2 justify-between'>
                        <div> 
                            <div>
                            <div>
                                <h1 className='text-white font-bold text-base leading-6'>Developers</h1>
                            </div>
                            <div className='primary my-4 cursor-pointer'>
                                <p className=' font-inter primary my-3 font-inter font-normal text-inter-blue text-base leading-6 flex'>Documentation <BsArrowUpRight size={15} className='font-bold ml-1 mt-1 '/></p>
                                <p className='primary my-3 font-inter font-normal text-inter-blue text-base leading-6 flex'>Github <BsArrowUpRight size={15} className='font-bold ml-1 mt-1 '/></p>
                                <p className='primary my-3 font-inter font-normal text-inter-blue text-base leading-6'>Developer portal</p>
                                <p className='primary my-3 font-inter font-normal text-inter-blue text-base leading-6 flex'>Whitepaper <BsArrowUpRight size={15} className='font-bold ml-1 mt-1 '/></p>

                            </div>
                            </div>
                            
                        </div>
                        <div>
                        <div>
                            <div>
                                <h1 className='text-white font-bold text-base leading-6'>Community</h1>
                            </div>
                            <div className='primary my-4 cursor-pointer'>
                                <p className='primary my-3 font-inter font-normal text-inter-blue text-base leading-6'>Ambassador program</p>
                                <p className='primary my-3 font-inter font-normal text-inter-blue text-base leading-6'>Blog</p>
                                <p className='primary my-3 font-inter font-normal text-inter-blue text-base leading-6'>Ecosystem Directory</p>
                                <p className='primary my-3 font-inter font-normal text-inter-blue text-base leading-6'>Ecosystem Job Board</p>
                                <p className='primary my-3 font-inter font-normal text-inter-blue text-base leading-6'>Community Access Program</p>
                            </div>
                            </div>
                        </div>
                        <div>

                        <div>
                            <div>
                                <h1 className='text-white font-bold text-base leading-6 '>JoocBox Foundation</h1>
                            </div>
                            <div className='primary my-4 cursor-pointer'>
                                
                                <p className='primary my-3 font-inter font-normal text-inter-blue text-base leading-6 flex'>Career <BsArrowUpRight size={15} className='font-bold ml-1 mt-1 '/></p>
                                <p className='primary my-3 font-inter font-normal text-inter-blue text-base leading-6 flex'>Blog <BsArrowUpRight size={15} className='font-bold ml-1 mt-1 '/></p>
                                <p className='primary my-3 font-inter font-normal text-inter-blue text-base leading-6'>Team</p>
                                
                            </div>
                            </div>

                        </div>

                    </div>
                    <div className='p-4 sm:p-0 lg:ml-20 my-4'>
                        <div className='items-center justify-between'>
                            <div><p className='text-white font-bold text-xl mb-5 leading-6 '>JOOCBOX</p></div>
                            <div className='flex gap-3'>
                                <div>
                                  <Link href="https://discord.gg/n4HE6yyu" alt="/"> 
                                    <RxDiscordLogo size={40} className='bg-[#3898ec] text-white p-2 rounded-full'/>
                                  </Link>
                                </div>
                                <div>
                                  <Link href="https://www.instagram.com/thejoocbox/" alt="/">
                                    <AiOutlineInstagram size={40} className='bg-[#3898ec] text-white p-2 rounded-full'/>
                                  </Link>
                                </div>
                                <div>
                                  <Link href="https://twitter.com" alt="/">
                                    <TfiTwitter size={40} className='bg-[#3898ec] text-white p-2 rounded-full'/>
                                  </Link>
                                </div>
                                <div>
                                  <Link href="https://telegram.org/" alt="/"> 
                                    <TbBrandTelegram size={40} className='bg-[#3898ec] text-white p-2 rounded-full'/>
                                 </Link>
                                </div>
                           </div>
                           <div><p className='text-sm  my-5 leading-5 text-white font-normal'>©2023 Copyright JoocBox. All rights reserved.</p></div>
                        </div>
                    </div>

                 </div>
            </div>

        </div>

    </div>
  )
}

export default Footer