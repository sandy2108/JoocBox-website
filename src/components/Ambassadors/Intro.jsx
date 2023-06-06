import React from "react";
import amba from "../../assests/Images/Ambassadors/amba.jpg";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="w-full h-full">
      <div className="pt-10">
        <div className="max-w-[1350px] h-[600px] rounded-3xl bg-[#eaf7ff] mx-auto md:pb-40 pt-14 p-4 justify-center items-center">
          <div className="md:flex lg:flex justify-center items-center md:my-12 ">
            <div className="grid grid-cols-1 order-2 md:order-2 lg:order-2">
              <div className="flex items-center justify-center  mr-10">
                <Image
                  src={amba}
                  width={400}
                  height={450}
                  alt="/"
                  className="rounded-xl mx-auto sm:mx-0 lg:w-[550px] lg:h-[400px] items-center justify-center "
                />
              </div>
            </div>
            <div className="grid grid-cols-1 order-1 md:order-1 lg:order-1">
              <div className="text-left md:ml-3 my-5 ">
                <p className="font-normal text-left text-[39px] lg:text-[81px] mx-auto leading-none">
                  Become a JoocBox{" "}
                  <span className="text-blue-400 font-semibold text-left text-[39px] lg:text-[81px] mx-auto leading-none ">Ambassador</span>
                </p>
                <p className="my-5 text-[20px] md:text-[30px] lg:text-[30px] leading-[30px] font-normal">
                  Help grow and educate the JoocBox Community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
