import React from 'react';
import ProjectList from './data/ProjectList';
import { motion, useCycle } from 'framer-motion';

const projectVariants = {
  hidden: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  buttonHover: {
    scale: [1, 1.1, 1],
    rotateZ: [0, -5, 0, 5, 0],
    transition: {
      duration: 0.5,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

const Projects = () => {
  return (
    <section
      id='projects'
      className='min-h-85v font-inter bg-gray-800 font-montserrat text-white py-20'
    >
      <h1 className='text-3xl md:text-5xl text-center md:text-left md:ml-12  font-bold font-inter tracking-wider mb-8'>
        <i className='fas fa-code' /> PROJECTS
      </h1>
      <div className='grid grid-flow-row md:grid-cols-4'>
        {ProjectList &&
          ProjectList.map((project) => (
            <div
              className='relative overflow-hidden aspect-w-1 aspect-h-1'
              key={project.id}
            >
              <motion.div
                className='z-10 mx-auto pt-10 bg-black bg-opacity-80'
                variants={projectVariants}
                initial='hidden'
                whileHover='hover'
              >
                <h1 className='text-center mb-8 text-2xl font-semibold'>
                  {project.name}
                </h1>
                <div className='flex flex-wrap justify-center mb-4 mx-3'>
                  {project &&
                    project.technologies.map((tech) => (
                      <span
                        className='px-3 py-2 mx-1 bg-gray-700 rounded-lg mb-2 shadow-md cursor-default'
                        key={tech}
                      >
                        {tech}
                      </span>
                    ))}
                </div>
                <div className='text-center'>
                  <motion.div
                    className='inline-block  p-4 bg-yellow-500 rounded-full text-center cursor-pointer'
                    variants={projectVariants}
                    whileHover='buttonHover'
                  >
                    <small>
                      View
                      <br />
                      Project
                    </small>
                  </motion.div>
                </div>
              </motion.div>
              <div className='absolute'>
                <img
                  src={project.image1}
                  alt=''
                  className='object-cover object-center'
                />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Projects;
