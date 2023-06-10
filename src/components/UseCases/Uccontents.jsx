import React from "react";
import Image from "next/image";
import game from "../../assests/Images/usecases/nmmn.gif";
import finance from "../../assests/Images/usecases/fgg.gif";

const Uccontents = () => {
  const data = [
    {
      id: 1,
      mainButton: "Gaming",
      title: "Game-changing Entertainment",
      description:
        "Sui unlocks new gaming experiences with the power of expressive smart contracts. Players can truly own in-game assets that are only limited by the developers imagination.",
      button: ["Dynamic Assets", "Seamless Onboarding", "Realtime Settlement"],
      gifImage: game,
      bgColor:"bg-[#c0e6ff80]",
      borderColor:"border-[#ecf2fa]",
      textColor: "text-[#111111]",
      buttonBorder:"border-[#000000]"
    },
    {
      id: 2,
      mainButton: "Finance",
      title: "The Internet of Value for Everyone",
      description:
        "Sui enables near instant settlement for peer-to-peer payments and asset transfers, allowing builders to develop fast, available, and accessible financial services",
      button: ["Fast", "Secure and Safe", "High Throughput"],
      gifImage: game,
      bgColor:"bg-[#ffffff]",
      borderColor:"border-[#e5e7eb]",
      textColor: "text-[#111111]",
      buttonBorder:"border-[#000000]"
    },
    {
      id: 3,
      mainButton: "Fashion",
      title: "Authentic Interactions, Verifiable Assets",
      description:
        "Social networks built on Sui allow media, posts, and interactions to be owned by their creator and verifiable by users.",
      button: ["Interoperable Assets", "Low Transaction Fees", "Private"],
      gifImage: game,
      bgColor:"bg-[#011829]",
      borderColor:"border-[#ffffff]",
      textColor:"text-white",
      buttonBorder:"border-[#ffffff]"
    },
  ];

  return (
    <div className="w-full my-10 p-4">
      {data.map((item) => (
        <div
          key={item.id}
          className={`max-w-[1400px] my-10 mx-auto lg:p-8 flex-wrap lg:px-20 md:px-2 rounded-3xl  border-2 ${item.bgColor} ${item.borderColor} ${item.textColor}`}
        >
          <div className="max-w-[1240px] mx-auto">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
              <div className="md:mt-10 md:order-2 order-2 lg:order-1 p-4">
                <button className={`w-35 rounded-full px-7 py-2 border-2 ${item.buttonBorder}`}>
                  <p className="w-30 text-[14px] leading-[20px] ">
                    {item.mainButton}
                  </p>
                </button>
                <div className="md:my-8 my-4">
                  <h1 className="font-medium not-italic text-[28px] leading-[32px] md:text-[40px] lg:text-[72px] md:leading-[42px] lg:leading-[68px] ">
                    {item.title}
                  </h1>
                </div>
                <div className="md:w-[480px]">
                  <h4 className="mb-10 font-medium text-[15px] leading-[21px] ">
                    {item.description}
                  </h4>
                </div>
                <div className="md:flex items-center max-w-[480px]">
                  {item.button.map((buttonText, index) => (
                    <div key={index} className="mr-2 my-2">
                      <button className={`p-2 rounded-full border-2 ${item.buttonBorder}`}>
                        <p className="text-[14px] ml-1 leading-[20px]  whitespace-nowrap">
                          {buttonText}
                        </p>
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center lg:justify-end justify-start md:order-1 order-1 lg:order-2">
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden usecasebg1">
                    <Image
                      src={item.gifImage}
                      alt="The Game Video"
                      objectFit="cover"
                      className="rounded-2xl h-[250px] md:h-[450px] lg:h-[470px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Uccontents;
