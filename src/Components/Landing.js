import React from 'react';
import Particles from 'react-tsparticles';
import { motion } from 'framer-motion';

const buttonMotion = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.2,
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
    <section className='relative min-h-85v text-white font-inter overflow-hidden'>
      <Particles
        className='absolute inset-0 bg-black bg-opacity-90'
        options={{
          fullScreen: {
            enable: false,
            zIndex: 0,
          },
          particles: {
            number: {
              value: 1000,
              limit: 1200,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.3,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.3,
                sync: false,
              },
            },
            size: {
              value: 0.2,
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
              direction: 'none',
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
                  value: ['#ec4899', '#10b981'],
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
            Hi, this is <span className='text-green-500'>Bobby</span>!
            <br />I am a <span className='text-pink-600'>web</span> Developer
          </h1>
        </div>
        <div className='inline-block flex flex-wrap justify-center lg:justify-start text-md lg:text-2xl font-semibold tracking-wider'>
          <motion.a
            href='/'
            className='relative px-6 lg:px-8 py-2 lg:py-3 border border-white  lg:ml-4 hover:border-green-500 hover:bg-opacity-80 transition ease-in'
            initial='initial'
            whileHover='hover'
            animate='initial'
          >
            <motion.p className='z-10 relative' variants={buttonMotion}>
              Resume
            </motion.p>
            <motion.div
              className='inset-0 absolute bg-green-500 
            bg-opacity-80'
              variants={btnBarMotion}
            />
          </motion.a>
          <motion.a
            href='/'
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
            <i className='block material-icons text-2xl px-2 py-2 border border-gray-400 rounded-full '>
              expand_more
            </i>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Landing;
