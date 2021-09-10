import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Landing from '../Landing';
import Projects from '../Projects';
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
  return (
    <motion.section
      variants={containerMotion}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Landing />
      <Projects />
      <About />
      <Contact />
    </motion.section>
  );
};

export default Home;
