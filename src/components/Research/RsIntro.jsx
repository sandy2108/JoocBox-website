import React from 'react'
import { AiOutlineArrowDown } from "react-icons/ai";

const RsIntro = () => {
  return (
    <div className="w-full ">
      <div className="md:m-4">
        <div className="max-w-[1400px] md:rounded-3xl flex-wrap lg:px-20 md:px-10 usecasebg h-[680px] mx-auto p-4 flex items-center justify-center">
          <div className="max-w-[1240px] mx-auto p-4">
             <p className='text-white  text-[48px] leading-[48px] lg:text-[120px] md:text-[72px] md:leading-[76px] lg:leading-[111px] font-medium'>Discover leading <span className='text-orange-200'>Breakthrough</span></p>
             <hr className='mt-10 border-[#cedae7]'></hr>
             <div className="md:flex items-center justify-between py-10 ">
              <div className="max-w-[350px] lg:order-2 mb-5 ">
                <p className="text-3xl text-left text-white not-italic">
                  Whitepapers and journal articles Related to JoocBox
                </p>
              </div>
              <div className="justify-start lg:order-1 ">
                <h2 className="text-md text-white not-italic flex">
                  <AiOutlineArrowDown size={20} className="mt-[1px] mx-2" />{" "}
                  Explore More
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RsIntro