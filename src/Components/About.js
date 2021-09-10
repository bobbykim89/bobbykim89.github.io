import React from 'react';
import about from './img/about.jpg';

import reactJs from './img/logos/reactjs.svg';
import vueJs from './img/logos/vuejs.svg';
import nextJs from './img/logos/nextjs.svg';
import tailWind from './img/logos/tailwind.svg';

import nodeJs from './img/logos/nodejs.svg';
import expressJs from './img/logos/expressjs.svg';
import mongoDb from './img/logos/mongodb.svg';
import graphQl from './img/logos/graphql.svg';

import strapi from './img/logos/strapi.svg';
import wordPress from './img/logos/wordpress.svg';
import windows from './img/logos/windows.svg';
import ubuntu from './img/logos/ubuntu.svg';

import inDesign from './img/logos/indesign.svg';
import photoShop from './img/logos/photoshop.svg';
import illustrator from './img/logos/illustrator.svg';

import { motion } from 'framer-motion';

const techMotion = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: 'linear',
    },
  },
};

const techText = {
  initial: {
    color: '#f3f4f6',
    borderColor: '#f3f4f6',
  },
  hover: {
    color: ['#f3f4f6', '#00feda'],
    borderColor: ['#f3f4f6', '#00feda'],
    transition: {
      duration: 1,
      ease: 'linear',
    },
  },
};

const birdMotion = {
  initial: {
    rotate: 0,
    borderColor: '#fff',
  },
  hover: {
    rotate: [0, -90, -180, -270, -360],
    borderColor: ['#fff', '#f59e0b', '#00feda', '#ec4899'],
    transition: {
      duration: 2,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

const iconMotion = {
  initial: {
    scale: 1,
    color: '#fff',
  },
  hover: {
    scale: 1.3,
    color: '#00feda',
    transition: {
      duration: 0.8,
      ease: 'linear',
    },
  },
};

const About = () => {
  return (
    <section
      id='about'
      className='bg-gray-700 font-montserrat text-white pt-20'
    >
      <h1 className='text-4xl lg:text-5xl text-center md:text-left lg:ml-12  font-bold font-inter tracking-wider mb-8'>
        <i className='fas fa-question-circle' /> ABOUT
      </h1>
      <div className='grid lg:grid-cols-2 md:gap-6 md:w-3/4 mx-auto'>
        <div className='inline-block py-10 justify-center'>
          <motion.img
            src={about}
            alt='bird on monitor'
            className='w-2/3 lg:w-1/2 mx-auto rounded-full border-4 border-white shadow-lg mb-8'
            variants={birdMotion}
            initial='initial'
            whileHover='hover'
            whileTap='hover'
          />
          <div className='text-lg text-justify md:text-left text-gray-200 mb-8 w-11/12 mx-auto'>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, enim cupiditate! In, eos? Excepturi voluptates
              assumenda veritatis illum, numquam nostrum sequi incidunt
              temporibus? Veniam debitis eaque sapiente sit cumque repellat.
            </span>
            <div className=' my-4 text-center '>
              <motion.a
                href='https://github.com/bobbykim89'
                target='_blank'
                rel='noreferrer'
                className='text-4xl inline-block mr-6 align-middle'
                variants={iconMotion}
                initial='initial'
                whileHover='hover'
              >
                <i className='fab fa-github-square' />
              </motion.a>
              <motion.a
                href='https://www.linkedin.com/in/bobby-kim-9baa17165/'
                target='_blank'
                rel='noreferrer'
                className='text-4xl inline-block mr-6 align-middle'
                variants={iconMotion}
                initial='initial'
                whileHover='hover'
              >
                <i className='fab fa-linkedin' />
              </motion.a>
            </div>
          </div>
        </div>
        <div className='row-span-4 bg-gray-800 p-4 mb-20 shadow-lg'>
          <h2 className='mb-4 text-2xl font-inter ml-4 font-semibold tracking-wider'>
            <i className='fas fa-tools mr-3' />
            Technical Skills
          </h2>
          <motion.div
            className='bg-gray-400 p-4 shadow-lg mb-4 rounded-lg'
            variants={techMotion}
            initial='initial'
            whileHover='hover'
            animate='initial'
          >
            <motion.h3
              className='mb-4 pb-2 text-xl text-gray-100 border-b'
              variants={techText}
            >
              Frontend
            </motion.h3>
            <div className='flex justify-center'>
              <motion.img
                src={reactJs}
                alt='react'
                className='w-12 inline-block mr-4'
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.2}
              />
              <motion.img
                src={tailWind}
                alt='tailwind css'
                className='w-12 inline-block mr-4'
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.2}
              />
              <motion.img
                src={vueJs}
                alt='vue'
                className='w-12 inline-block mr-4'
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.2}
              />
              <motion.img
                src={nextJs}
                alt='next'
                className='w-16 inline-block mr-4'
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.2}
              />
            </div>
          </motion.div>
          <motion.div
            className='bg-gray-400 p-4 shadow-lg mb-4 rounded-lg'
            variants={techMotion}
            initial='initial'
            whileHover='hover'
          >
            <motion.h3
              className='mb-4 pb-2 text-xl text-gray-100 border-b'
              variants={techText}
            >
              Backend
            </motion.h3>
            <div className='flex justify-center'>
              <motion.img
                src={expressJs}
                alt='expressJs'
                className='w-20 inline-block mr-4'
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.2}
              />
              <motion.img
                src={nodeJs}
                alt='nodeJs'
                className='w-12 inline-block mr-4'
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.2}
              />
              <motion.img
                src={mongoDb}
                alt='Mongo DB'
                className='w-20 inline-block mr-4'
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.2}
              />
              <motion.img
                src={graphQl}
                alt='graphQL'
                className='w-12 inline-block mr-4'
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.2}
              />
            </div>
          </motion.div>
          <motion.div
            className='bg-gray-400 p-4 shadow-lg mb-4 rounded-lg'
            variants={techMotion}
            initial='initial'
            whileHover='hover'
          >
            <motion.h3
              className='mb-4 pb-2 text-xl text-gray-100 border-b'
              variants={techText}
            >
              Platforms
            </motion.h3>
            <div className='flex justify-center'>
              <motion.img
                src={windows}
                alt='windows'
                className='w-12 inline-block mr-4'
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.2}
              />
              <motion.img
                src={ubuntu}
                alt='ubuntu'
                className='w-12 inline-block mr-4'
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.2}
              />
              <motion.img
                src={wordPress}
                alt='wordPress'
                className='w-12 inline-block mr-4'
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.2}
              />
              <motion.img
                src={strapi}
                alt='strapi'
                className='w-12 inline-block mr-4'
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.2}
              />
            </div>
          </motion.div>
          <motion.div
            className='bg-gray-400 p-4 shadow-lg rounded-lg'
            variants={techMotion}
            initial='initial'
            whileHover='hover'
          >
            <motion.h3
              className='mb-4 pb-2 text-xl text-gray-100 border-b'
              variants={techText}
            >
              Design Tools
            </motion.h3>
            <div className='flex justify-center'>
              <motion.img
                src={inDesign}
                alt='inDesign'
                className='w-12 inline-block mr-4'
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.2}
              />
              <motion.img
                src={illustrator}
                alt='illustrator'
                className='w-12 inline-block mr-4'
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.2}
              />
              <motion.img
                src={photoShop}
                alt='photoShop'
                className='w-12 inline-block mr-4'
                drag
                dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                dragElastic={0.2}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
