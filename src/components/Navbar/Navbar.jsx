import React, { useState } from 'react';
import { TfiTwitter } from 'react-icons/tfi';
import { RxDiscordLogo } from 'react-icons/rx';
import { TbBrandTelegram } from 'react-icons/tb';
import { AiOutlineInstagram, AiOutlineMenu } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import Link from 'next/link';
import logo from '../../assests/Images/logo.png';
import Image from 'next/image';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDivVisibility,setDivVisibility]= useState(false);

  const toggleDivVisibility =()=>{
    setDivVisibility(!isDivVisibility);
  };

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
    setDivVisibility(!true);
  };

  const handleHover = (items) => {
    setDropdownItems(items);
    setIsDropdownOpen(true);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  

  const dropdownContent = () => {
    return (
      <div className='max-w-[1240px] mx-auto p-4 border-r-4'>
        {dropdownItems.map((item, index) => (
          <h1
            key={index}
            className='px-4 py-2 text-base font-normal primary'
          >
            <Link href={`${item.url}`}> {item.hoverText} </Link>
          </h1>
        ))}
      </div>
    );
  };

  const mobileScreenContent = () => {
    return (
      <div className='w-full'>
        <div className='my-5'>
        {dropdownItems.map((item, index) => (
          <p
            key={index}
            className='text-base font-normal primary my-3'
            onClick={item.hoverText === 'NFT Series' ? handleToggleDropdown : undefined}
          >
            <Link href={`${item.url}`}> {item.hoverText} </Link>
          </p>
        ))}
        </div>

        
      </div>
    );
  };
  
  const handleMouseEnter = () => {
    if (!isDropdownOpen) {
      setIsDropdownOpen(true);
    }
  };

  return (
    <div className='relative z-2 w-screen h-[90px]'>
      <div className='max-w-[1240px] m-auto p-4' onMouseLeave={handleDropdownToggle}>
        <div className='flex justify-between items-center py-2'>
          <div className='flex-start'>
            <Link href="/" >
              <Image
              src={logo}
              height='50'
              width='100'
              className="cursor-pointer shadow-orange-300"
              alt="/"
              />
            </Link>
          </div>
          <div className='relative sm:flex hidden' onMouseEnter={handleMouseEnter}>
            <h1
              className='p-2 text-base font-normal text-[#91a3b1] hover:text-blue-500 cursor-pointer'
              onMouseEnter={() =>
                handleHover([
                  { text: 'Join Early Beta Access', hoverText: 'Join Early Beta Access', url:'nft' },
                  { text: 'Join Whitelist', hoverText: 'Join Whitelist' ,url:'whitelist'},
                  { text: 'JoocBox NFT Mint', hoverText: 'JoocBox NFT Mint',url:'mint' },
                ])
              }
            >
              NFT Series
            </h1>
            <h1
              className='p-2 text-base font-normal text-[#91a3b1] hover:text-blue-500 cursor-pointer'
              onMouseEnter={() =>
                handleHover([
                  { text: 'The Majestic Mixture (Ultra-Rare)', hoverText: 'The Majestic Mixture (Ultra-Rare)' , url:'Majestic'},
                  { text: 'The Premium Pour (Rare)', hoverText: 'The Premium Pour (Rare)',url:'Premium'},
                  { text: 'The Simple Squeeze (Common)', hoverText: 'The Simple Squeeze (Common)' ,url:'Common'},
                ])
              }
            >
              JoocBox TierList
            </h1>
            <h1
              className='p-2 text-base font-normal text-[#91a3b1] hover:text-blue-500 cursor-pointer'
              onMouseEnter={() =>
                handleHover([
                  { text: 'Vendor Machines', hoverText: 'Vendor Machines'  },
                  { text: 'Colloboration', hoverText: 'Colloboration' },
                  { text: 'Partnerships', hoverText: 'Partnerships' },
                  { text: 'Team', hoverText: 'Team' },
                ])
              }
            >
              Connect
            </h1>

            
            {isDropdownOpen && (
              <div className='fixed top-[90px] left-0 w-full  h-[30vh] bg-[#fff]'>
                <div className='grid grid-cols-2 max-w-[1240px]'>
                  {dropdownContent()}
                  <div className='text-base'>
                    <div className='py-6'>
                      <p className='text-lg sm:text-xl text-black font-normal'>
                        Lets connect with us! Get news, updates, and insights.
                      </p>
                    </div>
                    <div className='flex gap-3'>
                      <div>
                        <Link href="https://discord.gg/n4HE6yyu" alt="/"> 
                          <RxDiscordLogo size={40} className='bg-[#3898ec] text-white p-2 rounded-full'/>
                        </Link>
                      </div>
                      <div>
                        <Link href="https://www.instagram.com/thejoocbox/" alt="/">
                          <AiOutlineInstagram size={40} className='bg-[#3898ec] text-white p-2 rounded-full'/>
                        </Link>
                      </div>
                      <div>
                        <Link href="https://twitter.com" alt="/">
                          <TfiTwitter size={40} className='bg-[#3898ec] text-white p-2 rounded-full'/>
                        </Link>
                      </div>
                      <div>
                        <Link href="https://telegram.org/" alt="/"> 
                          <TbBrandTelegram size={40} className='bg-[#3898ec] text-white p-2 rounded-full'/>
                       </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className='mx-20px flex'>
            <button className='mx-20px rounded-full bg-[#3898ec] mx-2 px-4 hover:bg-[#4da2ff] p-2 text-white'>
              Whitepaper
            </button>
            <div className='sm:hidden cursor-pointer' onClick={handleMenu}>
              <div className='flex  items-center justify-center'>
                <BiMenu className='w-12 h-10 cursor-pointer mr-2' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          menuOpen
            ? ' sm:hidden w-screen absolute  inset-x-0 top-[90px] h-14  bg-[#fff] mt-0 p-2 px-4 ease-in duration-350'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-350'
        }
      >
        <div className=' max-w-[1240px] flex  gap-5 m-auto my-2'>
             
            <h1
              className='primary text-base font-normal cursor-pointer'
              onMouseEnter={() =>
                handleHover([
                  { text: 'Join Early Beta Access', hoverText: 'Join Early Beta Access', url:'nft' },
                  { text: 'Join Whitelist', hoverText: 'Join Whitelist' ,url:'whitelist'},
                  { text: 'JoocBox NFT Mint', hoverText: 'JoocBox NFT Mint',url:'mint' },
                ])
              }
              onClick={toggleDivVisibility}
              
            >
              NFT Series
            </h1>

            <h1
              className='primary text-base font-normal cursor-pointer'
              onMouseEnter={() =>
                handleHover([
                    { text: 'The Majestic Mixture (Ultra-Rare)', hoverText: 'The Majestic Mixture (Ultra-Rare)' },
                    { text: 'The Premium Pour (Rare)', hoverText: 'The Premium Pour (Rare)' },
                    { text: 'The Simple Squeeze (Common)', hoverText: 'The Simple Squeeze (Common)' },
                  ])
              }
              onClick={toggleDivVisibility}
            >
              TierList
            </h1>

            <h1
              className='primary text-base font-normal cursor-pointer'
              onMouseEnter={() =>
                handleHover([
                  { text: 'Vendor Machines', hoverText: 'Vendor Machines' },
                  { text: 'Colloboration', hoverText: 'Colloboration' },
                  { text: 'Partnerships', hoverText: 'Partnerships' },
                  { text: 'Team', hoverText: 'Team' },
                ])
              }
              onClick={toggleDivVisibility}
            >
              Connect
            </h1>
        </div>
      </div>
      <div className=' w-screen max-h-screen lg:bg-transparent bg-white sm:bg-white sm:hidden md:hidden'>
      {isDivVisibility && (
            <div className=' w-screen h-screen border border-gray-200'>
             <div className='grid grid-rows-2'>
               <div className='p-4 my-6 text-base primary w-screen'>  
               {mobileScreenContent()}
                </div>
              
               <div className='text-base'>
                    <div className='p-4 py-6'>
                      <p className='text-lg sm:text-xl text-black font-normal'>
                        Lets connect with us! Get news, updates, and insights.
                      </p>
                    </div>
                    <div className='flex gap-3 p-4'>
                      <div>
                        <Link href="https://discord.gg/n4HE6yyu" alt="/"> 
                          <RxDiscordLogo size={40} className='bg-[#3898ec] text-white p-2 rounded-full'/>
                        </Link>
                      </div>
                      <div>
                        <Link href="https://www.instagram.com/thejoocbox/" alt="/">
                          <AiOutlineInstagram size={40} className='bg-[#3898ec] text-white p-2 rounded-full'/>
                        </Link>
                       
                      </div>
                      <div>
                        <Link href="https://twitter.com" alt="/">
                          <TfiTwitter size={40} className='bg-[#3898ec] text-white p-2 rounded-full'/>
                        </Link>
                       
                      </div>
                      <div>
                       <Link href="https://telegram.org/" alt="/"> 
                          <TbBrandTelegram size={40} className='bg-[#3898ec] text-white p-2 rounded-full'/>
                       </Link>
                      </div>
                    </div>
                  </div>
             </div>
           </div>
            )}
      </div>
    </div>
  );
};

export default Navbar;

