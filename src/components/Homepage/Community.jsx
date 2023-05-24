import React from 'react'
import ReactPlayer from 'react-player';
import { useState } from 'react';

import { MdOutlinePlayCircleFilled ,MdOutlineClose  } from "react-icons/md";

const Community = () => {
    const [showModal, setShowModal] = useState(false);
    const handlePlayVideo = () => {
        setShowModal(true);
      };

     
      return (
        <div className="w-full my-10">
          <div className="m-4">
            <div className="max-w-[1500px] rounded-3xl overflow-hidden flex-wrap photo border-2 border-[#e7e7e7] h-[450px] md:h-[500px] lg:h-[600px] xl:h-[750px] m-auto">
              <div className="flex items-center mt-2 md:my-40 lg:my-50 justify-center">
                <div className="text-center lg:p-20">
                  <div className="p-20">
                    <p className="lg:leading-[59px] lg:text-[54px] text-[22px] text-white md:text-[39px] leading-[29px] my-5">
                      Join us on <br /> the Global Juicy House
                    </p>
                    <div className="flex items-center justify-center my-10">
                      <button className="flex my-text1 items-center" onClick={handlePlayVideo}>
                        <MdOutlinePlayCircleFilled className="my-text mx-2" />
                        Play Video
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showModal && (
            <div className="fixed inset-0 flex justify-center items-center z-50">
              <div className="absolute inset-0 bg-black bg-opacity-75" onClick={() => setShowModal(false)}></div>
              <div className="absolute w-full h-full flex justify-center items-center">
                <button
                  className="absolute top-4 right-4 text-white text-xl"
                  onClick={() => setShowModal(false)}
                >
                  <MdOutlineClose size={30} />
                </button>
                <div className="w-full h-full max-w-[80%] max-h-[80%]">
                  <ReactPlayer
                    className="react-player"
                    url="https://youtu.be/nzDoU34HgVE"
                    width="100%"
                    height="100%"
                    controls={true}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      );
      
}

export default Community