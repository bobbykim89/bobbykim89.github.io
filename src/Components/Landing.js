import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as LandingLogo } from './img/landing.svg';

const buttonMotion = {
  initial: {
    scale: 1,
    color: '#fff',
  },
  hover: {
    scale: 1.1,
    color: '#000000',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const btnBarMotion = {
  initial: {
    width: '0%',
  },
  hover: {
    width: '100%',
    transition: {
      duration: 0.6,
      ease: 'linear',
    },
  },
};

const Landing = () => {
  const toProjects = (e) => {
    e.preventDefault();
    window.scroll({ top: 750, left: 0, behavior: 'smooth' });
  };
  return (
    <section className='relative overflow-hidden min-h-85v text-white font-inter '>
      <LandingLogo
        fill='#00feda'
        className='absolute w-1/2 lg:w-1/3 h-52 lg:h-1/2 inline-block top-0 lg:top-[10%] lg:right-[10%] -rotate-45'
      />
      <div className='relative inline-block mx-auto mt-60'>
        <div className='inline-block mb-2 lg:mb-6 ml-8 lg:ml-20'>
          <h1 className='text-3xl lg:text-6xl lg:tracking-wider leading-normal mb-4 text-shadow-xl'>
            HI THIS IS BOBBY
            <br />I AM A WEB DEVELOPER
          </h1>
        </div>
        <div className='inline-block flex flex-wrap justify-center lg:justify-start text-md lg:ml-20 lg:text-2xl tracking-wider'>
          <motion.a
            href='https://drive.google.com/file/d/1BFqAufQaxf9PGZCLVq8swfsNU4x4A6n2/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
            className='relative px-6 lg:px-8 py-2 lg:py-3 border border-white  lg:ml-4 hover:border-[#00feda] transition ease-in'
            initial='initial'
            whileHover='hover'
            animate='initial'
          >
            <motion.p className='z-10 relative' variants={buttonMotion}>
              Resume
            </motion.p>
            <motion.div
              className='inset-0 absolute bg-[#00feda]'
              variants={btnBarMotion}
            />
          </motion.a>
          <motion.a
            href='/#contact'
            className='relative px-6 lg:px-8 py-2 lg:py-3 border border-white  ml-6 hover:border-[#00feda] transition ease-in'
            initial='initial'
            whileHover='hover'
            animate='initial'
          >
            <motion.p className='z-10 relative' variants={buttonMotion}>
              Contact
            </motion.p>
            <motion.div
              className='inset-0 absolute bg-[#00feda]'
              variants={btnBarMotion}
            />
          </motion.a>
        </div>
      </div>
      <div className='absolute block inset-x-0 bottom-0'>
        <div
          className='mb-6 flex justify-center relative animate-bounce text-white cursor-pointer'
          onClick={toProjects}
        >
          <i className='block material-icons text-2xl px-2 py-2 border border-gray-400 rounded-full hover:text-[#00feda] hover:border-[#00feda]'>
            expand_more
          </i>
        </div>
      </div>
    </section>
  );
};

export default Landing;
