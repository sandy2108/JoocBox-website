import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

export const Ucases = () => {
  return (
    <div className="w-full ">
      <div className="md:m-4">
        <div className="max-w-[1400px] md:rounded-3xl flex-wrap lg:px-20 md:px-10 usecasebg h-[680px] mx-auto p-4 flex items-center justify-center">
          <div className="max-w-[1240px] mx-auto p-4">
          <div className="mb-10 md:mb-0 items-center justify-center ">
            <h1 className="font-inter font-medium text-white text-[45px] leading-[54px] lg:text-[120px] md:text-[72px] md:leading-[76px] lg:leading-[111px] lg:pb-10">
              Metamorphic Experiences
            </h1>
            <div className="md:flex items-center justify-between border-t-2 mt-5 border-[#cedae7] py-10">
              <div className="max-w-[350px] lg:order-2 mb-5 ">
                <p className="text-3xl text-white not-italic">
                  Next-Gen Breakthrough, TechStyle Innovation
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
    </div>
  );
};
