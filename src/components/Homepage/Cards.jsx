import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg from '../../assests/Videos/community.mp4';
import juice from '../../assests/Images/j.png';
import panda from '../../assests/Images/panda.png';

const Cards = () => {
  const cardData = [
    {
      imageSrc: juice,
      alt: '/',
      content:
        'JooC Box offers exclusive NFT clothing packs that combine augmented reality, streetwear, and cryptocurrency for a unique and profitable fashion experience.',
      title: 'FashionFusion',
    },
    {
      imageSrc: panda,
      alt: '/',
      content:
        'JooC Box enhances customer engagement with an immersive AR/VR juice bar, a chatbot or AI assistant, and design contests that foster brand involvement and ownership.',
      title: 'Engage',
    },
  ];

  return (
    <div className='w-full text-white'>
      <div className='max-w-[1240px] mx-auto py-12'>
        <div className='grid lg:grid-cols-2'>
          <div className='grid md:grid-rows-2 gap-4'>
            {cardData.map((card, index) => (
              <div
                key={index}
                className={`bg-${index === 0 ? '[#011829]' : 'white'} rounded-xl shadow-2xl mx-5 px-8 ${
                  index === 0 ? 'pt-8 mt-8' : 'pt-8 lg:mt-6 my-2'
                } text-${index === 0 ? 'white' : 'black'}`}
              >
                <div className='grid md:grid-cols-3 my-5 mt-0'>
                  <div className='col-span-1 flex justify-center items-start py-4 lg:py-2'>
                    <Image
                      src={card.imageSrc}
                      height={20}
                      width={120}
                      alt={card.alt}
                      className='rounded-full lg:mb-10'
                    />
                  </div>
                  <div className='col-span-2 '>
                    <p className='font-inter my-2 font-[500px] text-base sm:text-lg leading-normal'>
                      {card.content}
                    </p>
                    <h1 className='font-inter font-normal text-[#4ca3ff] hover:text-white text-2xl leading-6 my-5'>
                      {card.title}
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='rounded-2xl lg:mt-8 lg:mb-2 mx-5  mt-5 overflow-hidden relative'>
            <video src={bg} autoPlay loop muted style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            <div className='absolute bottom-0 left-0 p-4'>
              <Link href='https://discord.gg/n4HE6yyu' alt='/'>
                <h1 className='text-3xl sm:text-3xl md:text-3xl lg:text-4xl px-4 hover:text-[#4ca3ff] my-2 text-white font-bold'>
                  Meet the JoocBox Community
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
