import React, { useEffect, useState } from "react";
import image1 from "../../assests/Images/Nfts/booty.png";
import image2 from "../../assests/Images/Nfts/jooc.png";
import image3 from "../../assests/Images/Nfts/mim.png";
import image4 from "../../assests/Images/Nfts/minty.png";
import TimeDisplay from "@/components/NFTs/TimeDisplay";
import { SiEthereum } from "react-icons/si";
import FancyCarousel from "react-fancy-circular-carousel";
import "react-fancy-circular-carousel/FancyCarousel.css";
import Image from "next/image";

const Early = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const phrase = ["Boom Booty", "Juicy Squeeze", "Mimic mystery", "Minty Magic"];

  const images = [
    image1.default,
    image2.default,
    image3.default,
    image4.default,
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
    <div className="w-screen py-6 h-screen">
      <div className="max-w-[1240px] mx-auto p-4 py-3">
        <div className="md:flex md:px-20 px-4">
          <div className="items-center justify-center">
            <div className="item-center justify-center text-center pb-5 md:w-[500px]">
              <h1 className="text-8xl textcolor1 flex left-0">NFT</h1>
              <div>
                <p
                  className={`text-[#FA6C00] flex left-0 font-bold my-5 text-3xl ${
                    showAnimation ? "fade-in" : ""
                  }`}
                >
                  {phrase[textIndex]}
                </p>
              </div>
              <div className="my-5">
                <p className="text-xl text-left font-medium">
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

          <div className="h-[400px] w-[300px] relative ml-auto">
            <div className="absolute bottom-0 right-0">
              <div
                className="h-[50%] w-[100%] overflow-hidden"
                style={{ transform: "translateY(50%)" }}
              >
                <FancyCarousel
                  images={images}
                  carouselRadius={300}
                  peripheralImageRadius={104}
                  focusElementStyling={{margin:'2px'}}
                  centralImageRadius={0}
                  autoRotateTime={3}
                  borderWidth={0}
                  borderHexColor={"1c364f"}
                  transitionTime = {1.5}
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
