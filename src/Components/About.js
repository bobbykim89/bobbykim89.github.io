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

const About = () => {
  return (
    <section className='bg-gray-700 font-montserrat text-white pt-20'>
      <h1 className='text-3xl lg:text-5xl text-center md:text-left lg:ml-12  font-bold font-inter tracking-wider mb-8'>
        <i className='fas fa-info-circle' /> About
      </h1>
      <div className='grid lg:grid-cols-2 md:gap-6 md:w-3/4 mx-auto mb-20'>
        <div className='inline-block py-10 justify-center'>
          <img
            src={about}
            alt='bird on monitor'
            className='w-2/3 lg:w-1/2 mx-auto rounded-full border-4 border-white shadow-lg mb-8'
          />
          <div className='text-lg text-justify md:text-left text-gray-200 mb-8 w-11/12 mx-auto'>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, enim cupiditate! In, eos? Excepturi voluptates
              assumenda veritatis illum, numquam nostrum sequi incidunt
              temporibus? Veniam debitis eaque sapiente sit cumque repellat.
            </span>
          </div>
        </div>
        <div className='row-span-4 bg-gray-600 p-4 mb-20'>
          <h2 className='mb-4 text-2xl font-inter ml-4 font-semibold tracking-wider'>
            <i className='fas fa-tools mr-3' />
            Technical Skills
          </h2>
          <div className='bg-gray-400 p-4 shadow-lg mb-4 rounded-lg'>
            <h3 className='mb-4 pb-2 text-xl text-gray-100 border-b'>
              Frontend
            </h3>
            <div className='flex justify-center'>
              <img
                src={reactJs}
                alt='react'
                className='w-12 inline-block mr-4'
              />
              <img
                src={tailWind}
                alt='tailwind css'
                className='w-12 inline-block mr-4'
              />
              <img src={vueJs} alt='vue' className='w-12 inline-block mr-4' />
              <img src={nextJs} alt='next' className='w-16 inline-block mr-4' />
            </div>
          </div>
          <div className='bg-gray-400 p-4 shadow-lg mb-4 rounded-lg'>
            <h3 className='mb-4 pb-2 text-xl text-gray-100 border-b'>
              Backend
            </h3>
            <div className='flex justify-center'>
              <img
                src={expressJs}
                alt='expressJs'
                className='w-20 inline-block mr-4'
              />
              <img
                src={nodeJs}
                alt='nodeJs'
                className='w-12 inline-block mr-4'
              />
              <img
                src={mongoDb}
                alt='Mongo DB'
                className='w-20 inline-block mr-4'
              />
              <img
                src={graphQl}
                alt='graphQL'
                className='w-12 inline-block mr-4'
              />
            </div>
          </div>
          <div className='bg-gray-400 p-4 shadow-lg mb-4 rounded-lg'>
            <h3 className='mb-4 pb-2 text-xl text-gray-100 border-b'>
              Platforms
            </h3>
            <div className='flex justify-center'>
              <img
                src={windows}
                alt='windows'
                className='w-12 inline-block mr-4'
              />
              <img
                src={ubuntu}
                alt='ubuntu'
                className='w-12 inline-block mr-4'
              />
              <img
                src={wordPress}
                alt='wordPress'
                className='w-12 inline-block mr-4'
              />
              <img
                src={strapi}
                alt='strapi'
                className='w-12 inline-block mr-4'
              />
            </div>
          </div>
          <div className='bg-gray-400 p-4 shadow-lg rounded-lg'>
            <h3 className='mb-4 pb-2 text-xl text-gray-100 border-b'>
              Graphic Tools
            </h3>
            <div className='flex justify-center'>
              <img
                src={inDesign}
                alt='inDesign'
                className='w-12 inline-block mr-4'
              />
              <img
                src={illustrator}
                alt='illustrator'
                className='w-12 inline-block mr-4'
              />
              <img
                src={photoShop}
                alt='photoShop'
                className='w-12 inline-block mr-4'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
