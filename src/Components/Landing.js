import React from 'react';
import landing from './img/landing.jpg';

const Landing = () => {
  return (
    <section className='relative min-h-85v text-white font-inter'>
      <div
        className='absolute w-full h-full top-0 bg-fixed bg-top bg-cover'
        style={{ backgroundImage: `url(${landing})` }}
      >
        <span className='w-full h-full absolute opacity-90 bg-black' />
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
    </section>
  );
};

export default Landing;
