import React from 'react';
import Particles from 'react-tsparticles';

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
              value: 100,
              limit: 150,
              density: {
                enable: true,
                value_area: 400,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.5,
                sync: false,
              },
            },
            size: {
              value: 5,
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

      <div className='container w-5/6 relative mx-auto mt-60'>
        <div className='mb-2 lg:mb-6'>
          <h1 className='inline-block text-3xl lg:text-6xl font-bold lg:tracking-wider leading-normal mb-4'>
            Hi, this is <span className='text-green-500'>Bobby</span>!
            <br />I am a <span className='text-pink-600'>web</span> Developer
          </h1>
        </div>
        <div className='inline-block flex flex-wrap justify-center lg:justify-start text-md lg:text-2xl font-semibold tracking-wider'>
          <a
            href='/'
            className='px-6 lg:px-8 py-2 lg:py-3 border-2 border-white  lg:ml-4 hover:bg-green-500 hover:text-white hover:border-green-500 hover:bg-opacity-80 transition ease-in'
          >
            Resume
          </a>
          <a
            href='/'
            className='px-6 lg:px-8 py-2 lg:py-3 border-2 border-white  ml-6 hover:bg-pink-500 hover:text-white hover:border-pink-500 hover:bg-opacity-80 transition ease-in'
          >
            Contact
          </a>
        </div>
      </div>
      <div className='absolute block inset-x-0 bottom-0'>
        <div className='mb-6 flex justify-center relative animate-bounce text-white cursor-pointer'>
          <i className='block material-icons text-2xl px-2 py-2 border border-gray-400 rounded-full '>
            expand_more
          </i>
        </div>
      </div>
    </section>
  );
};

export default Landing;
