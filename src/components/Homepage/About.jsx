import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import arrow from '../../assests/Images/Mainpage/DemandSpikes.png';
import dynamicAsset from '../../assests/Images/Mainpage/DynamicAssets.png';
import fast from '../../assests/Images/Mainpage/FastEnough.png';

const About = () => {
  const [textIndex, setTextIndex] = useState(0);
  const phrases = ['Trust', 'Chances', 'Scalable'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [phrases.length]);

  const cardData = [
    {
      imageSrc: arrow,
      alt: '/',
      title: 'Demand spikes, fees dont',
      description:
        'Horizontal scaling keeps fees low and steady even at times of increased demand. Rapid fast and juicy box for everyonee    ',
    },
    {
      imageSrc: fast,
      alt: '/',
      title: 'Fast enough for any application',
      description:
        'Parallel processing allows simple transactions, such as asset transfers, to finalize in real-time, without sacrificing security.',
    },
    {
      imageSrc: dynamicAsset,
      alt: '/',
      title: 'Dynamic assets you actually own',
      description:
        'Sui object-centric data model allows digital assets and their attributes to live on-chain and outside of smart contracts.',
    },
  ];

  return (
    <div className='w-full'>
      <div className='max-w-[1240px] mx-auto p-4'>
        <div className='lg:py-8 px-4 flex items-center justify-start border-b-2 border-gray-400'>
          <h1 className='font-[500] font-Inter text-[35px] md:text-[78px] lg:text-[120px] leading-[111px] text-black'>
            Eternal
          </h1>
          <h2 className='font-[500] mx-5 font-Inter text-[35px] md:text-[78px] lg:text-[120px] leading-[111px] text-[#4ca3ff]'>
            {phrases[textIndex]}
          </h2>
        </div>

        <div className='w-full lg:px-2'>
          <div className='lg:px-0 px-5 '>
            <div className='grid lg:grid-cols-3 lg:gap-5'>
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className='rounded-xl mx-auto border-2 border-[#e7e7e7] p-14 m-6 px-6 relative'
                >
                  <div className='my-10 mb-1 mt-20'>
                    <div className='flex items-center justify-end'>
                      <Image
                        src={card.imageSrc}
                        height={80}
                        width={120}
                        alt={card.alt}
                        className='absolute top-0 right-0'
                      />
                    </div>
                    <div className='py-5'>
                      <div>
                        <h1 className='mt-20 font-[500] font-Inter text-[21px]'>{card.title}</h1>
                      </div>
                      <div>
                        <p className='font-[500] font-inter text-[#91a3b1] text-[15px] my-2'>
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
