import React, { Fragment, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useLocation } from 'react-router';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ProjectList from '../data/ProjectList';

const containerMotion = {
  initial: {
    x: '-100vw',
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

const motionVariants = {
  initial: {
    scale: 1,
    x: 0,
    color: '#fff',
    borderColor: '#fff',
  },
  hover: {
    scale: 1.1,
    originX: 0,
    color: '#000000',
    borderColor: '#00feda',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const barVariants = {
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

const gitMotion = {
  initial: {
    scale: 1,
    color: '#fff',
  },
  hover: {
    scale: 1.2,
    color: '#00feda',
    transition: {
      scale: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  },
};

const SingleProject = () => {
  const { id } = useParams();
  const project = ProjectList.filter((item) => item.id === id)[0];
  const { name, description, technologies, git, page, image1, image2 } =
    project;

  const history = useHistory();

  const location = useLocation();

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);

  return (
    <Fragment>
      <Helmet>
        <title>Projects: {name}</title>
      </Helmet>
      <motion.section
        className='bg-gray-800 w-screen md:w-full text-white font-montserrat py-20'
        variants={containerMotion}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <motion.button
          onClick={() => history.goBack()}
          className='relative py-2 px-4 mx-4 border mb-6'
          variants={motionVariants}
          initial='initial'
          whileHover='hover'
          animate='initial'
        >
          <div className='relative z-10'>
            <i className='fas fa-chevron-left mr-3' />
            Back to Previous Page
          </div>
          <motion.div
            className='absolute inset-0 bg-[#00feda]'
            variants={barVariants}
          />
        </motion.button>
        {project && (
          <div>
            <h1 className='font-inter text-4xl lg:text-6xl mb-6 tracking-wider mx-6'>
              {name}
            </h1>
            <div className='my-4 lg:my-0 md:p-4 grid grid-cols-5 gap-1 md:gap-4'>
              <div className='col-span-4 overflow-hidden'>
                <img
                  src={image1}
                  alt=''
                  className='inline-block object-fill h-full w-full'
                />
              </div>
              <div className='col-span-1 overflow-hidden'>
                <img
                  src={image2}
                  alt=''
                  className='inline-block object-fill w-full h-full'
                />
              </div>
            </div>
            <div className='grid lg:grid-cols-3 lg:px-4 lg:gap-4'>
              <div className='mx-4 lg:mx-0 p-4 border border-[#00feda] mb-4'>
                <h1 className='text-2xl font-inter mb-4 border-b pb-2'>
                  Technologies
                </h1>
                <div className='ml-3'>
                  {project &&
                    technologies.map((tech, i) => (
                      <p className='text-gray-200 text-lg' key={i}>
                        <i className='fas fa-caret-right' /> {tech}
                      </p>
                    ))}
                </div>
              </div>
              <div className='lg:col-span-2 p-4 mb-4'>
                <h1 className='text-2xl font-inter mb-4 border-b pb-2'>
                  About this project
                </h1>
                <p className='text-gray-300 whitespace-pre-line'>
                  {description}
                </p>
                <div className=' my-4 text-center '>
                  {git && (
                    <motion.a
                      href={git}
                      target='_blank'
                      rel='noreferrer'
                      className='text-4xl inline-block mr-6 align-middle'
                      variants={gitMotion}
                      initial='initial'
                      whileHover='hover'
                    >
                      <i className='fab fa-github' />
                    </motion.a>
                  )}
                  <motion.a
                    href={page}
                    target='_blank'
                    rel='noreferrer'
                    className='relative inline-block border rounded-full border-white px-4 py-2 align-middle overflow-hidden'
                    variants={motionVariants}
                    initial='initial'
                    whileHover='hover'
                    animate='initial'
                  >
                    <motion.div
                      className='inset-0 absolute bg-[#00feda]'
                      variants={barVariants}
                    />
                    <span className='relative'>Go to page</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.section>
    </Fragment>
  );
};

export default SingleProject;
