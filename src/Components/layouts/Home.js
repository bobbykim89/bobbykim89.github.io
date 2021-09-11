import React, { useState, useEffect } from 'react';
import About from '../About';
import Contact from '../Contact';
import Landing from '../Landing';
import Projects from '../Projects';
import Popup from './Popup';
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

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(false);
    }, 4000);
  }, [showPopup]);

  return (
    <motion.section
      variants={containerMotion}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Popup showPopup={showPopup} />
      <Landing />
      <Projects />
      <About />
      <Contact setShowPopup={setShowPopup} />
    </motion.section>
  );
};

export default Home;
