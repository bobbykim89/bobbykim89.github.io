import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const containerMotion = {
  initial: {
    x: '100vw',
    opacity: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: '0.5',
      damping: 8,
      delay: 0.5,
      when: 'beforeChildren',
    },
  },
  exit: {
    x: '-100vw',
    transition: { ease: 'easeInOut' },
  },
};

const buttonMotion = {
  initial: {
    borderColor: '#fff',
    color: '#fff',
  },
  hover: {
    color: '#000000',
    borderColor: '#00feda',
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

const barMotion = {
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

const NotFound = () => {
  return (
    <motion.section
      className='grid min-h-100v text-white font-inter'
      variants={containerMotion}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <div className='flex flex-col relative inline-block self-center mx-auto'>
        <h1 className='inline-block lg:w-1/3 mx-auto text-center text-8xl mb-8 pb-4 font-bold border-b-2'>
          404
        </h1>
        <h1 className='text-xl lg:text-6xl font-bold tracking-wider mb-8'>
          Sorry, this page doesn't exist :(
        </h1>
        <Link to='/' className='inline-block w-1/2 lg:w-1/3 mx-auto'>
          <motion.div
            className='relative px-6 py-4 text-xl border tracking-wider mx-auto'
            variants={buttonMotion}
            initial='initial'
            whileHover='hover'
            animate='initial'
          >
            <p className='relative text-center z-10'>Go Back</p>
            <motion.div
              className='inset-0 absolute bg-[#00feda] 
            bg-opacity-80'
              variants={barMotion}
            />
          </motion.div>
        </Link>
      </div>
    </motion.section>
  );
};

export default NotFound;
