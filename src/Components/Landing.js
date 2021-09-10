import React from 'react';
import Particles from 'react-tsparticles';
import { motion } from 'framer-motion';
import landing from './img/landing2.jpg';

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
  return (
    <section className='relative min-h-85v text-white font-inter '>
      <div
        className='absolute w-full h-full top-0 bg-fixed bg-bottom bg-cover'
        style={{
          backgroundImage: `url(${landing})`,
        }}
      />
      <Particles
        className='absolute inset-0 bg-gray-800 opacity-80'
        options={{
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
          particles: {
            number: {
              value: 400,

              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.4,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.3,
                sync: false,
              },
            },
            size: {
              value: 10,
              random: true,
              anim: {
                enable: true,
                speed: 10,
                size_min: 10,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 3,
              direction: 'bottom',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onHover: {
                enable: true,
                mode: 'bubble',
                parallax: {
                  enable: true,
                  force: 60,
                  smooth: 10,
                },
              },
              onClick: {
                enable: true,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                lineLinked: {
                  opacity: 1,
                },
              },
              bubble: {
                size: 10,
                opacity: 1,
                distance: 300,
                duration: 2,
                speed: 2,
                color: {
                  value: ['#ec4899', '#00feda'],
                },
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
          fps_limit: 60,
        }}
      />

      <div className='relative inline-block mx-auto mt-60 ml-8 lg:ml-20'>
        <div className='inline mb-2 lg:mb-6'>
          <h1 className='text-3xl lg:text-6xl font-bold lg:tracking-wider leading-normal mb-4'>
            Hi, this is <span className='text-[#00feda]'>Bobby</span>!
            <br />I am a <span className='text-pink-600'>web</span> Developer
          </h1>
        </div>
        <div className='inline-block flex flex-wrap justify-center lg:justify-start text-md lg:text-2xl tracking-wider'>
          <motion.a
            href='https://drive.google.com/file/d/1BFqAufQaxf9PGZCLVq8swfsNU4x4A6n2/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
            className='relative px-6 lg:px-8 py-2 lg:py-3 border border-white  lg:ml-4 hover:border-green-500 hover:bg-opacity-80 transition ease-in'
            initial='initial'
            whileHover='hover'
            animate='initial'
          >
            <motion.p className='z-10 relative' variants={buttonMotion}>
              Resume
            </motion.p>
            <motion.div
              className='inset-0 absolute bg-[#00feda] 
            bg-opacity-80'
              variants={btnBarMotion}
            />
          </motion.a>
          <motion.a
            href='/#contact'
            className='relative px-6 lg:px-8 py-2 lg:py-3 border border-white  ml-6 hover:border-pink-500 hover:bg-opacity-80 transition ease-in'
            initial='initial'
            whileHover='hover'
            animate='initial'
          >
            <motion.p className='z-10 relative' variants={buttonMotion}>
              Contact
            </motion.p>
            <motion.div
              className='inset-0 absolute bg-pink-500 
            bg-opacity-80'
              variants={btnBarMotion}
            />
          </motion.a>
        </div>
      </div>
      <div className='absolute block inset-x-0 bottom-0'>
        <a href='#projects'>
          <div className='mb-6 flex justify-center relative animate-bounce text-white cursor-pointer'>
            <i className='block material-icons text-2xl px-2 py-2 border border-gray-400 rounded-full hover:text-[#00feda] hover:border-[#00feda]'>
              expand_more
            </i>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Landing;
