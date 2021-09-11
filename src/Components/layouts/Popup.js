import React from 'react';
import { motion } from 'framer-motion';

const popupMotion = {
  initial: {
    y: '-100vh',
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      ease: 'easeIn',
    },
  },
};

const Popup = ({ showPopup }) => {
  return (
    <section className='absolute top-0 z-50 sticky bg-transparent text-white text-lg'>
      {showPopup && (
        <motion.div
          className='relative flex flex-wrap justify-center'
          variants={popupMotion}
          initial='initial'
          animate='animate'
        >
          <div className='w-60 shadow-xl text-center inline-block mx-auto bg-black bg-opacity-90 px-4 py-2'>
            <p>
              <i className='fas fa-info-circle' /> Your message has been sent
              successfully!
            </p>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Popup;
