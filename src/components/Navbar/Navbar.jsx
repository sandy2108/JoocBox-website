import React, { useState } from 'react';
import { TfiTwitter } from 'react-icons/tfi';
import { RxDiscordLogo } from 'react-icons/rx';
import { TbBrandTelegram } from 'react-icons/tb';
import { AiOutlineInstagram, AiOutlineMenu } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import Link from 'next/link';
import logo from '../../assests/Images/Mainpage/logo.png';
import Image from 'next/image';
import { useEffect,useRef } from 'react';
 import { BsLayers } from "react-icons/bs";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownItems, setDropdownItems] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDivVisibility,setDivVisibility]= useState(false);
 
  //Onscroll Effects on Navbar 
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const navbarRef = useRef(null);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        const isVisible = prevScrollPos > currentScrollPos;
        setPrevScrollPos(currentScrollPos);
        setIsVisible(isVisible);
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [prevScrollPos]);


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
        <p className='px-2 text-lg flex  text-[#3490dc]'> <BsLayers className='mx-2 mt-1 text-orange-500'/> Use cases</p>
        {dropdownItems.map((item, index) => (
          <h1
            key={index}
            className='px-4 py-2 text-base font-medium font-Inter primary'
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
        <p className=' text-xl flex text-[#3490dc] '> <BsLayers className='mx-2 mt-1 text-orange-500'/> Use cases</p>
        {dropdownItems.map((item, index) => (
          <p
            key={index}
            className='text-base font-normal primary my-3 mx-2'
            onClick={handleMenu}
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
    <div className='w-full h-[90px]'>
    <div ref={navbarRef}  className= {`fixed top-0 left-0 w-full bg-white  z-50 transition duration-300 ${
      isVisible ? '' : 'transform -translate-y-full'
    }`}>
      <div className='max-w-[1240px] m-auto px-4 py-[10px]' onMouseLeave={handleDropdownToggle}>
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
              className='p-2 text-base font-Inter font-medium leading-[21px] text-[#91a3b1] hover:text-blue-500 cursor-pointer'
              onMouseEnter={() =>
                handleHover([
                  { text: 'Intro to JoocBox', hoverText: 'Intro to JoocBox', url:'/learn/Intro_to_JoocBox' },
                  { text: 'Use Cases', hoverText: 'Use Cases' ,url:'/learn/UseCases'},
                  { text: 'Research', hoverText: 'Research ',url:'/learn/Research' },
                  { text: 'Blog', hoverText: 'Blog',url:'https://blog.joocbox.io' },
                ])
              }
            >
              Learn
            </h1>
            <h1
              className='p-2 text-base font-Inter font-medium leading-[21px] text-[#91a3b1] hover:text-blue-500 cursor-pointer'
              onMouseEnter={() =>
                handleHover([
                  { text: 'Fashion Fusion', hoverText: 'Fashion Fusion' , url:'/drops/Fashion'},
                  { text: 'NFTs', hoverText: 'NFTs',url:'/drops/Nft'},
                  { text: 'JooC Stake', hoverText: 'JooC Stake' ,url:'/drops/Jooc_stake'},
                ])
              }
            >
              JooC Drops
            </h1>
            <h1
              className='p-2 text-base font-Inter font-medium leading-[21px] text-[#91a3b1] hover:text-blue-500 cursor-pointer'
              onMouseEnter={() =>
                handleHover([
                  { text: 'Mission and Values', hoverText: 'Mission and Values' ,url:"/connect/Mission"},
                  { text: 'Ambassadors', hoverText: 'Ambassadors', url:"/connect/Ambassador" },
                  { text: 'Team', hoverText: 'Team',url:"/connect/Team"},
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
                      <p className='text-[18px] font-Inter font-medium sm:text-xl text-black '>
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
            <button className='mx-[20px] w-35 rounded-full bg-[#3898ec] px-4 py-2 hover:bg-[#4da2ff] p-2 text-white'>
              <p className='p-1 w-30'>Whitepaper</p>
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
              className='primary text-base font-medium cursor-pointer'
              onMouseEnter={() =>
                handleHover([
                  { text: 'Intro to JoocBox', hoverText: 'Intro to JoocBox', url:'/learn/Intro_to_JoocBox' },
                  { text: 'Use Cases', hoverText: 'Use Cases' ,url:'/learn/UseCases'},
                  { text: 'Research', hoverText: 'Research',url:'/learn/Research' },
                  { text: 'Blog', hoverText: 'Blog',url:'https://blog.joocbox.io' },
                ])
              }
              onClick={toggleDivVisibility}
              
            >
              Learn
            </h1>

            <h1
              className='primary text-base font-normal cursor-pointer'
              onMouseEnter={() =>
                handleHover([
                  { text: 'Fashion Fusion', hoverText: 'Fashion Fusion' , url:'/drops/Fashion'},
                  { text: 'NFTs', hoverText: 'NFTs',url:'/drops/Nft'},
                  { text: 'JooC Stake', hoverText: 'JooC Stake' ,url:'/drops/Jooc_stake'},
                  ])
              }
              onClick={toggleDivVisibility}
            >
              JooC Drops
            </h1>

            <h1
              className='primary text-base font-normal cursor-pointer'
              onMouseEnter={() =>
                handleHover([
                  { text: 'Mission and Values', hoverText: 'Mission and Values' ,url:"/connect/Mission"},
                  { text: 'Ambassadors', hoverText: 'Ambassadors', url:"/connect/Ambassador" },
                  { text: 'Team', hoverText: 'Team',url:"/connect/Team"},
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
    </div>
  );
};

export default Navbar;

