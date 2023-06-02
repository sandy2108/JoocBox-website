import React from "react";
import amba from '../../assests/Images/Ambassadors/amba.jpg';
import Image from "next/image";

const Intro = () => {
  return (
    <div className="w-full h-full">
      <div className="md:pt-10">
        <div className="max-w-[1240px] lg:h-[500px] rounded-3xl bg-[#eaf7ff] mx-auto lg:px-18 md:pb-40 pt-14  p-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="order-2 md:order-1 md:ml-9">
              <div className="text-left md:my-20 my-10 ml-3">
                <p className="font-semibold text-left md:text-6xl text-[30px] leading-none ">
                  Become a JoocBox{" "}
                  <span className="text-blue-400 ">Ambassador</span>
                </p>
                <p className="my-5 md:my-20 text-[20px] md:text-[30px] leading-[30px] font-normal">Help grow and educate the JoocBox Community</p>
              </div>
            </div>
            <div className="order-1 md:order-2 ">
              <div className=" flex items-center justify-center md:mt-10 mt-0 ">
                <Image src={amba} width="330" height="330" alt="/" className="rounded-xl mx-20 lg:h-250 lg:w-30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
