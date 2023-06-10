import React from "react";
import Image from "next/image";
import game from "../../assests/Images/usecases/nmmn.gif";

const Uccontents = () => {
  return (
    <div className="w-full my-10 p-4">
      <div className="max-w-[1400px] mx-auto  flex-wrap lg:px-20 md:px-2 rounded-3xl bg-[#c0e6ff80] ">
        <div className="max-w-[1240px] mx-auto  ">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 ">
            <div className="md:mt-10 md:order-2 order-2 lg:order-1 p-4">
              <button className=" w-35 rounded-full  px-7 py-2 border-2 border-[#111111] ">
                <p className=" w-30 text-[14px] leading-[20px] text-black">
                  Gaming
                </p>
              </button>
              <div className="md:my-12 my-4">
                <h1 className="font-medium not-italic text-[28px] leading-[32px] md:text-[40px] lg:text-[72px] md:leading-[42px] lg:leading-[68px] text-[#111111]">
                  Game-changing Entertainment
                </h1>
              </div>
              <div className="md:w-[480px] ">
                <h4 className=" mb-10 font-normal text-[15px] leading-[21px] text-[#111111]">
                  Sui unlocks new gaming experiences with the power of
                  expressive smart contracts. Players can truly own in-game
                  assets that are only limited by the developers imagination.
                </h4>
              </div>
              <div className="grid lg:grid-cols-3 grid-rows-3 gap-2 items-center custom-screen-size">
                <div className="">
                <button className=" p-2 rounded-full border-2 border-[#111111]">
                  <p className="text-[14px] mx-2 leading-[20px] text-black whitespace-nowrap">
                    Dynamic Assets
                  </p>
                </button>
                </div>
                <div className="">  
                <button className=" p-2 rounded-full border-2 border-[#111111]">
                  <p className="text-[14px] ml-1 leading-[20px] text-black whitespace-nowrap">
                    Seamless Onboarding
                  </p>
                </button>
                </div>
                <div >
                <button className=" p-2 rounded-full border-2 border-[#111111]">
                  <p className="text-[14px] ml-1 leading-[20px] text-black whitespace-nowrap">
                    Realtime Settlement
                  </p>
                </button>
                </div>
              
              </div>
            </div>

            <div className="flex items-center lg:justify-end justify-start md:order-1 order-1 lg:order-2">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden usecasebg1">
                  <Image
                    src={game}
                    alt="The Game Video"
                    
                    objectFit="cover"
                    className="rounded-2xl h-[250px] md:h-[450px] lg:h-[500px] object-cover "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uccontents;
