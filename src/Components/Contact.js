import React from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

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

const Contact = ({ setShowPopup }) => {
  const sendEmail = (e) => {
    e.preventDefault();
    setShowPopup(true);

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
      <div className='relative grid lg:grid-cols-2 md:gap-4'>
        <div className='py-8'>
          <h1 className='relative text-4xl lg:text-5xl text-center md:text-left lg:ml-12 font-inter tracking-wider mb-8'>
            CONTACT
          </h1>
          <div className='lg:w-5/6 mx-auto p-6 bg-gray-900 bg-opacity-80 rounded-md shadow-lg mb-8'>
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
              <label htmlFor='message' className='block text-lg font-semibold'>
                Message:
              </label>
              <textarea
                name='message'
                id='message'
                cols='30'
                rows='10'
                placeholder='Please write your message here'
                className='block bg-gray-800 outline-none block w-full p-2 shadow bg-gray-800 h-48 lg:h-64  mb-4'
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
                  className='inset-0 absolute bg-[#00feda]'
                  variants={btnBarMotion}
                />
              </motion.button>
            </form>
          </div>
        </div>
        <div className='relative grid items-stretch'>
          <div className='absolute bg-gradient-to-br from-gray-900 to-gray-900 via-gray-800 inset-0 pointer-events-none overflow-hidden'>
            <div className='grid grid-cols-4 grid-rows-4 h-full w-full transform -skew-y-12 opacity-75'>
              <div className='bg-gradient-to-br col-span-2' />
              <div className='bg-gradient-to-bl col-span-2 row-span-2' />
              <div className='bg-gradient-to-tr row-span-3 row-start-2' />
              <div className='bg-gradient-to-tl row-start-3 col-start-4' />

              <div className='bg-gradient-to-br row-start-4 col-start-2 col-span-2 ' />
            </div>
          </div>
          <div className='relative w-5/6 mx-auto text-right py-8 self-center'>
            <div className='py-6'>
              <div className='mb-3'>
                <h4 className='text-4xl tracking-wider'>CHANDLER, AZ</h4>
              </div>
              <p className='text-2xl'>bobby.sihun.kim@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
