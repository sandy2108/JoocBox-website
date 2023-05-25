import React from 'react';
import loading from '../../assests/Images/loading.gif';
import Image from 'next/image';

const CustomLoadingIcon = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className=" mb-4">
        <Image src={loading} height="50" width='45' alt="/" layout="responsive" className='bg-transparent'/>
      </div>
      <p className="text-2xl text-black">Loading...</p>
    </div>
  );
};

export default CustomLoadingIcon;

