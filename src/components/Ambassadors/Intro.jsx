import React from "react";
import amba from '../../assests/Images/Ambassadors/amba.jpg';
import Image from "next/image";

const Intro = () => {
  return (
    <div className="w-full h-full">
      <div className="md:pt-10">
        <div className="max-w-[1350px] h-[640px] rounded-3xl bg-[#eaf7ff] mx-auto  md:pb-40 pt-14  p-4 justify-center items-center">
          <div className="md:flex  lg:flex justify-center items-center my-12">
            <div className="order-1 lg:order-1 ">
              <div className="text-left  px-10">
                <p className="font-semibold text-left text-[39px] lg:text-[81px] leading-none ">
                  Become a JoocBox{" "}
                  <span className="text-blue-400 ">Ambassador</span>
                </p>
                <p className=" text-[20px] md:text-[30px] lg:text-[30px] leading-[30px] font-normal">Help grow and educate the JoocBox Community</p>
              </div>
            </div>
            <div className="order-2 md:order-1 ">
              <div className=" flex items-center justify-center md:mt-10 lg:mt-0 mt-0 ">
                <Image src={amba} width="400" height="400" alt="/" className="rounded-xl mx-20 " />
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
