import React from 'react';
import ProjectList from './data/ProjectList';
import ProjectChild from './layouts/ProjectChild';

const Projects = () => {
  return (
    <section
      id='projects'
      className='font-inter bg-gray-800 font-montserrat text-white pt-20'
    >
      <h1 className='text-4xl md:text-5xl text-center md:text-left md:ml-12  font-bold font-inter tracking-wider mb-8'>
        <i className='fas fa-code' /> PROJECTS
      </h1>
      <div className='text-lg text-justify md:text-left md:ml-12 text-gray-200 mb-8 w-11/12 md:w-1/2 mx-auto md:mx-0'>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          enim cupiditate! In, eos? Excepturi voluptates assumenda veritatis
          illum, numquam nostrum sequi incidunt temporibus? Veniam debitis eaque
          sapiente sit cumque repellat.
        </span>
      </div>
      <div className='grid grid-flow-row md:grid-cols-4 mb-20'>
        {ProjectList &&
          ProjectList.map((project) => (
            <ProjectChild project={project} key={project.id} />
          ))}
      </div>
      <div
        className='relative top-auto bottom-0 left-0 right-0 w-full pointer-events-none overflow-hidden'
        style={{ height: '70px' }}
      >
        <svg
          className='absolute bottom-0 overflow-hidden'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          version='1.1'
          viewBox='0 0 2560 100'
          x='0'
          y='0'
        >
          <polygon
            className='text-gray-700 fill-current'
            points='0 0 2560 100 0 100'
          ></polygon>
        </svg>
      </div>
    </section>
  );
};

export default Projects;
