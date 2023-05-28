import React from "react";

const Ambassador = () => {
  return (
    <div className="w-full h-screen ">
      <div className="md:pt-10 pt-2">
        <div className="max-w-[1240px]  h-[480px] rounded-3xl bg-[#eaf7ff] mx-auto md:px-40 md:pb-40 pt-14  p-4">
          <div className=" items-center justify-center">
            <div className="text-md flex md:items-center items-start justify-start md:justify-center">
              <h1 className="font-medium text-base leading-6 mb-5">
                Ambassador
              </h1>
            </div>
            <div className="items-start justify-start ">
              <p className="font-semibold md:text-6xl text-[30px] leading-none md:text-center ">
                Become a JoocBox{" "}
                <span className="text-blue-400">Ambassador</span>
              </p>
            </div>
            <p className="md:py-10 py-5 my-3 md:text-center text-justify font-normal text-lg leading-normal">
              Join JooCBox Ambassadors, a community-driven initiative supporting
              JooCBox mission.Learn about JooCBox, contribute to community
              growth, and promote its adoption. Become an Ambassador and visit
              the official channels or website to get involved.
            </p>
            <div className="items-center justify-center text-center">
              <button className="bg-blue-500 rounded-lg p-2">
                Apply to be an Ambassadors
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ambassador;
