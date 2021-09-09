import React from 'react';
import landing from './img/landing.jpg';

const Contact = () => {
  return (
    <section className='relative min-h-70v font-montserrat text-white'>
      <div
        className='relative z-10 top-auto bottom-0 left-0 right-0 w-full pointer-events-none overflow-hidden'
        style={{ height: '70px' }}
      >
        <svg
          className='absolute top-0 bottom-0 overflow-hidden'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          version='1.1'
          viewBox='0 0 2560 100'
          x='0'
          y='0'
        >
          <polygon
            className='text-gray-700 fill-current'
            points='0 0 2560 0 0 100'
          ></polygon>
        </svg>
      </div>
      <div
        className='absolute w-full h-full top-0 content-center bg-scroll bg-top bg-cover'
        style={{ backgroundImage: `url(${landing})` }}
      >
        <span className='w-full h-full absolute opacity-80 bg-black' />
      </div>
      <div className='relative py-12'>
        <h1 className='relative text-4xl lg:text-5xl text-center md:text-left lg:ml-12  font-bold font-inter tracking-wider mb-8'>
          <i className='fas fa-envelope' /> ABOUT
        </h1>
      </div>
    </section>
  );
};

export default Contact;
