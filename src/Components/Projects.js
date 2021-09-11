import React from 'react';
import ProjectList from './data/ProjectList';
import ProjectChild from './layouts/ProjectChild';

const Projects = () => {
  return (
    <section
      id='projects'
      className='font-inter font-montserrat text-white pt-20'
    >
      <h1 className='text-4xl md:text-5xl text-center md:text-left md:ml-12 font-inter tracking-wider mb-8'>
        PROJECTS
      </h1>
      <div className='text-lg text-justify md:text-left md:ml-12 text-gray-200 mb-8 w-11/12 md:w-2/5 mx-auto md:mx-0'>
        <p>
          This is a gallery of my personal projects and works. Click on view
          project to see the project details page.
        </p>
      </div>
      <div className='grid grid-flow-row md:grid-cols-2 xl:grid-cols-4 gap-3 mb-20 mx-2'>
        {ProjectList &&
          ProjectList.map((project) => (
            <ProjectChild project={project} key={project.id} />
          ))}
      </div>
    </section>
  );
};

export default Projects;
