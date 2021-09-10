import React from 'react';

const LegacyCollections = () => {
  return (
    <div>
      <div
        className='absolute w-full h-full top-0 bg-fixed bg-top bg-cover'
        style={{ backgroundImage: `url(${landing})` }}
      ></div>
      <div className='inset-0 pointer-events-none overflow-hidden absolute opacity-90 bg-black'></div>
      <div className='grid grid-cols-4 lg:grid-cols-6 grid-rows-4 h-full w-full transform -skew-y-12'>
        <div className='bg-gray-900 hidden lg:block row-span-2 animate-pulse' />
        <div className='bg-gray-700 hidden lg:block animate-pulse animation-1-3' />
        <div className='bg-gray-800 col-span-2 animate-pulse animation-3-5' />
        <div className='bg-gray-600 col-span-2 row-span-2 animate-pulse animation-7-4' />
        <div className='bg-gray-900 col-span-1 row-start-2 lg:col-start-3 animate-pulse animation-7-4' />
        <div className='bg-gray-700 row-span-2 row-start-3 lg:col-start-3 animate-pulse animation-3-3' />
        <div className='bg-gray-900 row-start-3 col-start-4 lg:col-start-6 animate-pulse animation-3-5' />
        <div className='bg-gray-600 hidden lg:block row-start-4 col-span-2 animate-pulse' />
        <div className='bg-gray-800 row-start-4 col-start-2 lg:col-start-4 col-span-2 animate-pulse animation-3-5' />
      </div>
      <div>
        'linear-gradient(to right, #f0f -200%, #0ff -100%, #f0f 0%, #0ff 100%)',
        'linear-gradient(to right, #f0f -100%, #0ff 0%, #f0f 100%, #0ff 200%)',
        'linear-gradient(to right, #f0f 0%, #0ff 100%, #f0f 200%, #0ff 300%)',
      </div>
      {/* Bouncy particles setting */}
      <Particles
        className='absolute inset-0 bg-gray-800'
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
    </div>
  );
};

export default LegacyCollections;
