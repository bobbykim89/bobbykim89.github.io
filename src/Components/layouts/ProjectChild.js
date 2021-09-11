import React from 'react';
import { motion, useCycle } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const ProjectChild = ({ project }) => {
  const [show, cycleShow] = useCycle('hidden', 'hover');
  return (
    <div className='relative overflow-hidden aspect-w-1 aspect-h-1 border border-[#00feda]'>
      <motion.div
        className='z-10 mx-auto pt-10 md:pt-4 2xl:pt-10 bg-black bg-opacity-80'
        variants={projectVariants}
        initial='hidden'
        whileHover='hover'
        animate={show}
        onTap={() => cycleShow()}
      >
        <h1 className='text-center mb-8 md:mb-4 2xl:mb-8 text-2xl font-semibold'>
          {project.name}
        </h1>
        <div className='flex flex-wrap justify-center mb-4 mx-3'>
          {project &&
            project.technologies.map((tech, i) => (
              <span
                className='px-2 py-1 2xl:px-3 2xl:py-2 mx-1 text-base lg:text-sm 2xl:text-base bg-gray-800 rounded-lg mb-2 shadow-md cursor-default'
                key={i}
              >
                {tech}
              </span>
            ))}
        </div>
        <div className='text-center'>
          <motion.div
            className='inline-block  py-3 px-4 bg-[#00feda] rounded-full text-center text-black cursor-pointer'
            variants={projectVariants}
            animate='buttonHover'
          >
            <Link to={`/projects/${project.id}`}>
              <small>
                View
                <br />
                Project
              </small>
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <div className='absolute'>
        <img
          src={project.thumb}
          alt=''
          className='h-full object-cover object-center'
        />
      </div>
    </div>
  );
};

export default ProjectChild;
