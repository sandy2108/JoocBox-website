import React, { useState } from "react";
import Image from "next/image";
import event from '../../assests/Images/Ambassadors/e.png';
import education from '../../assests/Images/Ambassadors/ed.png';
import network from '../../assests/Images/Ambassadors/network.png';
import recognition from '../../assests/Images/Ambassadors/recongintion.png';
import suprise from '../../assests/Images/Ambassadors/suprise.png';
import affilation from '../../assests/Images/Ambassadors/affilation.png';

const Benefits = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const ImageData = [
    {
      Imgsrc: education,
      text: "Access unique educational opportunities",
      name:'Education',
    },
    {
      Imgsrc: network,
      text: "Expand your web3 and crypto network",
      name:'Network',
    },
    {
        Imgsrc: event,
        text: "Receive event tickets and special access",
        name:'Events',
      },
      {
        Imgsrc: recognition,
        text: "Be valued and recognized throughout the ecosystem",
        name:'Recognition',
      },
      {
        Imgsrc: affilation,
        text: "Meet ecosystem leaders and partners",
        name:'Affilation',
      },
      {
        Imgsrc: suprise,
        text: "Receive other special and fun perks",
        name:'Suprise',
      },
    // Add more images and their corresponding text
  ];

  const selectedText = ImageData.find((image) => image.Imgsrc === selectedImage)?.text;

  return (
    <div className="w-full">
      <div className="items-center justify-center">
        <div className="max-w-[1240px] mx-auto p-4">
          <div className="md:px-20">
            <div>
              <h1 className="font-bold font-weight-600 text-4xl md:leading-[64px] text-[#011829] text-shadow">Benefits of <span className="text-[#3898ec]">Participating</span></h1>
              <p className="py-5 text-left text-[#011829] font-base font-weight-600 md:text-2xl text-xl leading-6 md:leading-8">There are many benefits of participating as an Ambassador. The ideal candidate is enthusiastic about building a brighter future, understands The JoocBox vision, and is motivated to contribute and help others.</p>
            </div>
            <div >
              <div className="grid md:grid-cols-3 gap-5 lg:grid-cols-6 grid-cols-2 grid-flow-rows my-10 ">
                {ImageData.map((role, index) => (
                  <div key={index}>
                    <Image
                      src={role.Imgsrc}
                      height={40}
                      width={60}
                      className={`cursor-pointer floating ${selectedImage === role.Imgsrc ? 'floating' : ''}`}
                      alt="/"
                      onClick={() => handleImageClick(role.Imgsrc)}
                      style={{ animationDelay: `${index * 2}s` }}
                    />
                    <p className="text-[#011829] my-2 ">{role.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5">
              {selectedText && (
                <p className="text-[#1c4768] font-bold text-2xl text-center">{selectedText}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

