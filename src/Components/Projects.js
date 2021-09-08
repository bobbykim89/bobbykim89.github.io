import React from 'react';
import ProjectList from './data/ProjectList';
import ProjectChild from './layouts/ProjectChild';

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
            <ProjectChild project={project} key={project.id} />
          ))}
      </div>
    </section>
  );
};

export default Projects;
