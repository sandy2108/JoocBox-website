import React from "react";
import amba from '../../assests/Images/Ambassadors/amba.jpg';
import Image from "next/image";

const Intro = () => {
  return (
    <div className="w-full h-full ">
      <div className="md:pt-10 pt-2">
        <div className="max-w-[1240px] h-[480px] rounded-3xl bg-[#eaf7ff] mx-auto lg:px-18 md:pb-40 pt-14  p-4">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
                 <div className="text-left my-10">
                   <p className="font-semibold text-left md:text-6xl text-[30px] leading-none ">
                     Become a JoocBox{" "}
                     <span className="text-blue-400 ">Ambassador</span>
                   </p>

                   <p className="my-20">Help to Grow the Community</p>
                 </div>  
            </div>
            <div>
              <div className="mx-20">
                <Image src={amba} width="380" height="280" alt="/" className=" rounded-xl mx-20" />
              </div>
              
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Intro;
