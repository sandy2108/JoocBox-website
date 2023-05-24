import React from 'react'
import {BsArrowRight  } from "react-icons/bs";

const Security = () => {
  
  const data =[
    {
      title:'Secure Assests',
      Description: 'Assets can only be used by their owners, no matter the transaction type',
    },
    {
      title:'Secure Contracts',
      Description: 'Smart contracts define asset types and their logic, including applicable transaction types',
    },
    {
      title:'Secure Transactions',
      Description: 'Transactions can be finalized even in adverse conditions.',
    },
    {
      title:'Secure Network',
      Description: 'Delegated Proof-of-Stake ensures validators are accountable to the Sui community.',
    }
  ]


  return (
    <div className='w-full lg:h-screen my-20 security'>
        <div className='m-4'>
          <div className='max-w-[1500px] rounded-3xl flex-wrap overflow-hidden border-2 border-[#e7e7e7] md:h-[700px] m-auto'>
             
             <div className='w-full h-full '>
                 <div className='max-w-[1240px] mx-auto p-4'>
                    <div className='md:my-1 lg:my-7 lg:mx-0 py-10 lg:px-0 lg:mx:15 text-white lg:flex '>
                         <div className='my-2 md:my-5 lmd:w-full'>
                            <p className='text-[30px] md:text-3xl lg:text-7xl font-[500] font-Inter text-[#011829] leading-15'>Security is in Joocbox Genetic.</p>
                            <button className='cursor-pointer bg-[#3898ec] rounded-3xl border-2 text-[#ffffff] border-[#eaf7ff] flex  my-2 lg:my-7 px-4 py-2 '>Learn More! <BsArrowRight size={22} className='mx-2'/> </button>
                        </div>
                         <div className='mx-auto'><p className='lg:my-10 my-10  text-[20px] font-[500] font-Inter text-[#111111]'>The highest security guarantees are offered to asset owners by JoocBox and the JoocBox Team.</p></div>
                    </div>
                 
                    <div className='my-10 border-t-2 border-[#e7e7e7]  '>
                      <div className='grid grid-cols-1 my-10 sm:grid-cols-2 gap-4 lg:grid-cols-4'>
                         {data.map((item,index)=>(
                            <div key={index}>
                             <div className=''><h1 className='font-Inter font-medium mb-5 text-[24px] leading-6 text-[#111111]'>{item.title}</h1></div>
                             <div><p className=' font-medium mb-5 lg:w-full md:w-[85%] w-[70%] text-[18px] leading-6 text-[#111822]'>{item.Description}</p></div>
                          </div>
                         ))}
                             
                         </div>
                          
                    </div>

                </div> 

                 
              </div>
          </div>
        </div>
    </div>
  )
}

export default Security