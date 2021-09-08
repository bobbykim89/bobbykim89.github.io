import React from 'react';

const About = () => {
  return (
    <section className='min-h-85v bg-gray-700 font-montserrat text-white pt-20'>
      <h1 className='text-3xl md:text-5xl text-center md:text-left md:ml-12  font-bold font-inter tracking-wider mb-8'>
        <i className='fas fa-info-circle' /> About
      </h1>
      <div className='text-lg text-justify md:text-left md:ml-12 text-gray-200 mb-8 w-11/12 md:w-1/2 mx-auto md:mx-0'>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
          enim cupiditate! In, eos? Excepturi voluptates assumenda veritatis
          illum, numquam nostrum sequi incidunt temporibus? Veniam debitis eaque
          sapiente sit cumque repellat.
        </span>
      </div>
    </section>
  );
};

export default About;
