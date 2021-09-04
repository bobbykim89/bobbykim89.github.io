import React from 'react';
import landing from './img/landing.jpg';

const Landing = () => {
  return (
    <section className='relative min-h-85v text-white font-inter'>
      <div
        className='absolute w-full h-full top-0 bg-fixed bg-top bg-cover'
        style={{ backgroundImage: `url(${landing})` }}
      ></div>
      <div className='inset-0 pointer-events-none overflow-hidden absolute opacity-90 bg-black'>
        <div className='grid grid-cols-4 lg:grid-cols-6 grid-rows-4 h-full w-full transform -skew-y-12'>
          <div className='bg-gray-900 hidden lg:block row-span-2 animate-pulse' />
          <div className='bg-gray-800 hidden lg:block animate-pulse animation-1-3' />
          <div className='bg-gray-900 col-span-2 animate-pulse animation-3-5' />
          <div className='bg-gray-800 col-span-2 row-span-2 animate-pulse animation-7-4' />
          <div className='bg-gray-900 col-span-1 row-start-2 lg:col-start-3 animate-pulse animation-7-4' />
          <div className='bg-gray-900 row-span-2 row-start-3 lg:col-start-3 animate-pulse animation-3-3' />
          <div className='bg-gray-900 row-start-3 col-start-4 lg:col-start-6 animate-pulse animation-3-5' />
          <div className='bg-gray-800 hidden lg:block row-start-4 col-span-2 animate-pulse' />
          <div className='bg-gray-800 row-start-4 col-start-2 lg:col-start-4 col-span-2 animate-pulse animation-3-5' />
        </div>
      </div>
      <div className='container w-5/6 relative mx-auto pt-48'>
        <h1 className='inline-block text-3xl lg:text-6xl font-bold lg:tracking-wider leading-normal mb-4'>
          Hi, this is <span className='text-green-500'>Bobby</span>!
          <br />I am a <span className='text-pink-600'>web</span> Developer
        </h1>
        <p className='text-lg text-gray-300'>
          Purdue University Alumni in Industrial Engineering
        </p>
      </div>
      <div className='absolute block inset-x-0 bottom-0'>
        <div className='mb-6 flex justify-center relative animate-bounce text-white'>
          <i className='block material-icons text-2xl px-2 py-2 border border-gray-400 rounded-full '>
            expand_more
          </i>
        </div>
      </div>
    </section>
  );
};

export default Landing;
