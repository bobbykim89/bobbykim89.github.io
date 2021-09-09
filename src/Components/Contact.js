import React from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import landing from './img/landing.jpg';

const buttonMotion = {
  initial: {
    color: '#fff',
    borderColor: '#fff',
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

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_eh5yyep',
        'template_i67opcm',
        e.target,
        'user_9tcnrHlnKOVmNoKqF7y5Y'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section
      id='contact'
      className='relative font-montserrat text-white font-inter'
    >
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
          <i className='fas fa-envelope' /> CONTACT
        </h1>
        <div className='grid lg:grid-cols-2 md:gap-4'>
          <div>
            <div className='w-11/12 lg:w-5/6 mx-auto p-6 bg-gray-900 bg-opacity-80 rounded-md shadow-lg mb-8'>
              <form onSubmit={sendEmail} className='flex flex-col'>
                <label htmlFor='name' className='block text-lg font-semibold'>
                  Name:
                </label>
                <input
                  type='text'
                  id='name'
                  name='from_name'
                  placeholder='Name'
                  className='block bg-gray-800 w-full p-2 outline-none mb-4'
                  required
                />
                <label htmlFor='email' className='block text-lg font-semibold'>
                  Email:
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='example@email.com'
                  className='block bg-gray-800 w-full p-2 outline-none mb-4'
                  required
                />
                <label
                  htmlFor='message'
                  className='block text-lg font-semibold'
                >
                  Message:
                </label>
                <textarea
                  name='message'
                  id='message'
                  cols='30'
                  rows='10'
                  placeholder='Please write your message here'
                  className='block bg-gray-800 outline-none block w-full p-2 shadow bg-gray-800 text-yellow-600  h-48 lg:h-64  mb-4'
                  required
                />
                <motion.button
                  type='submit'
                  className='relative block w-full px-4 py-2 bg-transparent border text-lg text-white font-semibold tracking-wider shadow-md'
                  variants={buttonMotion}
                  initial='initial'
                  whileHover='hover'
                  animate='initial'
                >
                  <h1 className='block relative text-center z-10'>Send</h1>
                  <motion.div
                    className='inset-0 absolute bg-[#00feda] 
            bg-opacity-80'
                    variants={btnBarMotion}
                  />
                </motion.button>
              </form>
            </div>
          </div>
          <div className='flex-col w-5/6 mx-auto text-right self-center py-8'>
            <div className='mb-3'>
              <h4 className='font-bold text-4xl tracking-wider'>
                Chandler, AZ
                <i className='fas fa-home ml-4' />
              </h4>
            </div>
            <p className='font-bold text-2xl'>Let's Keep in touch!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
