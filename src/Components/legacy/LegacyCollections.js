import React from 'react';

const LegacyCollections = () => {
  return (
    <div>
      <div
        className='absolute w-full h-full top-0 bg-fixed bg-top bg-cover'
        style={{ backgroundImage: `url(${landing})` }}
      ></div>
      <div className='inset-0 pointer-events-none overflow-hidden absolute opacity-90 bg-black'></div>
      <div className='grid grid-cols-4 lg:grid-cols-6 grid-rows-4 h-full w-full transform -skew-y-12'>
        <div className='bg-gray-900 hidden lg:block row-span-2 animate-pulse' />
        <div className='bg-gray-700 hidden lg:block animate-pulse animation-1-3' />
        <div className='bg-gray-800 col-span-2 animate-pulse animation-3-5' />
        <div className='bg-gray-600 col-span-2 row-span-2 animate-pulse animation-7-4' />
        <div className='bg-gray-900 col-span-1 row-start-2 lg:col-start-3 animate-pulse animation-7-4' />
        <div className='bg-gray-700 row-span-2 row-start-3 lg:col-start-3 animate-pulse animation-3-3' />
        <div className='bg-gray-900 row-start-3 col-start-4 lg:col-start-6 animate-pulse animation-3-5' />
        <div className='bg-gray-600 hidden lg:block row-start-4 col-span-2 animate-pulse' />
        <div className='bg-gray-800 row-start-4 col-start-2 lg:col-start-4 col-span-2 animate-pulse animation-3-5' />
      </div>
      <div>
        'linear-gradient(to right, #f0f -200%, #0ff -100%, #f0f 0%, #0ff 100%)',
        'linear-gradient(to right, #f0f -100%, #0ff 0%, #f0f 100%, #0ff 200%)',
        'linear-gradient(to right, #f0f 0%, #0ff 100%, #f0f 200%, #0ff 300%)',
      </div>
    </div>
  );
};

export default LegacyCollections;
