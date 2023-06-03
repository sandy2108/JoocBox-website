import React, { useEffect, useState } from "react";
import booty from '../../assests/Images/Nfts/booty.png'
import TimeDisplay from "@/components/NFTs/TimeDisplay";
import { SiEthereum } from "react-icons/si";

import FancyCarousel from "@/components/NFTs/FancyComponent";


const Early = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const phrase = ["Minty Magic","Juicy Girl", "Pasta Guy", "Boxer Boy","Hot Babe","Mimic Mystery"];

  const images = [
    'https://dl.dropboxusercontent.com/s/e8f1ongrtm2dqry/chickenricedude.png',
    'https://dl.dropboxusercontent.com/s/h2kp8747fi3i9uy/burgergirl.png',
    'https://dl.dropboxusercontent.com/s/w3pqqolpbo05dwy/Mimosa_SS.png',
    'https://dl.dropboxusercontent.com/s/reiy769akca2xkw/Minty_OJ_SS.png',
    'https://dl.dropboxusercontent.com/s/h742h1za75hqduc/fruitgirl.png',
    'https://dl.dropboxusercontent.com/s/q4pxb12kjnyauih/pastaguy.png'

  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setShowAnimation(true); // Add class to trigger animation
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % phrase.length);
        setShowAnimation(false); // Remove class to reset animation
      }, 1000); // Change text after 1 second
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [phrase.length]);

  return (
    <div className="w-full h-screen ">
      <div className="max-w-[1240px] mx-auto p-4">
        <div className="md:flex">
          <div className="items-center justify-center">
            <div className="item-center justify-center text-center pb-5 md:mx-10 md:my-8 md:w-[580px]">
              <h1 className="text-8xl textcolor2 flex left-0">NFT</h1>
              <div>
                <p
                  className={`text-[#FA6C00] flex left-0 font-bold my-2 text-3xl md:text-7xl ${
                    showAnimation ? "fade-in" : ""
                  }`}
                >
                  {phrase[textIndex]}
                </p>
              </div>
              <div className="my-5 md:my-8">
                <p className="text-2xl text-[#34526e] leading-8 text-left font-medium">
                  JoocBox is a collection of 4 tier drops funny JoocBox unique
                  digital collectibles living on the Ethereum blockchain.
                </p>
              </div>
              <div className="flex items-center gap-8">
                <div className="my-2 text-center">
                  <h3 className="text-[#91a3b1] text-center my-2 font-medium">
                    Current Bid
                  </h3>
                  <h4 className="font-bold flex items-center justify-center">
                    <SiEthereum className="mr-2" /> 2.6 ETH
                  </h4>
                </div>
                <div className="my-2">
                  <h3 className="text-[#91a3b1] my-2 left-0 flex font-medium">
                    Bid Ends in
                  </h3>
                  <h4 className="font-bold">
                    <TimeDisplay />
                  </h4>
                </div>
              </div>
              <div>
                <div className="flex items-start justify-start pt-7">
                  <button className="px-12 py-2 border-2 text-bold button1 border-[#0f0f0f] specialbutton">
                    Bid on Opensea
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 h-screen w-screen overflow-hidden hidden lg:block ">
            <div className="h-screen w-screen flex items-end justify-end">
              <div className="w-[480px] h-[520px]">
                <FancyCarousel
                  images={images}
                  autoRotateTime={1.5}
                  centralImageRadius={0}
                  carouselRadius={350}
                  borderWidth={0}
                  peripheralImageRadius={110}
                  borderHexColor={'ff6600'}
                  transitionTime={2}
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Early;
