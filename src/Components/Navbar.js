import React, { useState } from 'react';
import logo from './img/logo.png';
import Hamburger from 'hamburger-react';
import PropTypes from 'prop-types';

const Navbar = ({ title, about, skills, projects, contact }) => {
  const [navBarOpen, setNavbarOpen] = useState(false);
  const [navScroll, setNavScroll] = useState(false);

  window.addEventListener('scroll', (e) => {
    if (window.scrollY >= 200) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  });
  return (
    <nav className='container w-full top-0 md:sticky flex flex-wrap items-center z-50 transition ease-in duration-500 delay justify-between font-inter'>
      <div className='flex flex-shrink-0 mr-6 py-2 self-center'>
        <a href='/'>
          <span className='inline-block text-black text-2xl font-bold align-middle pl-6'>
            <div className='inline-block w-7 mr-4 mb-1 align-middle'>
              <img src={logo} alt='logo' />
            </div>
            {title}
          </span>
        </a>
      </div>
      <div className='block lg:hidden'>
        <button
          className='flex items-center px-3 py-2 text-xl font-bold text-black'
          type='button'
          onClick={() => setNavbarOpen(!navBarOpen)}
        >
          <Hamburger size={23} toggled={navBarOpen} toggle={setNavbarOpen} />
        </button>
      </div>
      <div
        className={
          'flex-grow w-full lg:flex lg:w-auto flex-wrap items-center' +
          (navBarOpen ? ' block' : ' hidden')
        }
      >
        <div className='flex flex-row lg:flex-grow mx-auto justify-center lg:justify-start text-md md:text-lg md:ml-12 items-center align-middle'>
          <a
            href='/'
            className='block lg:inline-block text-black font-semibold align-middle mr-4'
          >
            {about}
          </a>
          <span className='inline-block lg:hidden pt-1 mb-1 text-black text-sm pr-4'>
            |
          </span>
          <a
            href='/'
            className='block lg:inline-block text-black font-semibold align-middle mr-4'
          >
            {skills}
          </a>
          <span className='inline-block lg:hidden pt-1 mb-1 text-black text-sm pr-4'>
            |
          </span>
          <a
            href='/'
            className='block lg:inline-block text-black font-semibold align-middle mr-4'
          >
            {projects}
          </a>
          <span className='inline-block lg:hidden pt-1 mb-1 text-black text-sm pr-4'>
            |
          </span>
          <a
            href='/'
            className='block lg:inline-block text-black font-semibold align-middle'
          >
            {contact}
          </a>
        </div>
        <div className='flex flex-wrap pt-3 pb-2 lg:pb-0 lg:pt-1 justify-center'>
          <a
            href='https://github.com/bobbykim89'
            target='_blank'
            rel='noreferrer'
            className='inline-block text-red-600 text-2xl mx-2 hover:text-black'
          >
            <i className='fab fa-github-square' />
          </a>
          <a
            href='https://www.linkedin.com/in/bobby-kim-9baa17165/'
            target='_blank'
            rel='noreferrer'
            className='inline-block text-red-600 text-2xl mx-2 hover:text-black'
          >
            <i className='fab fa-linkedin' />
          </a>
          <a
            href='mailto:bobby.sihun.kim@gmail.com'
            target='_blank'
            rel='noreferrer'
            className='inline-block text-red-600 text-2xl mx-2 hover:text-black'
          >
            <i className='fas fa-envelope' />
          </a>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired,
  projects: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'BOBBY KIM',
  about: 'ABOUT',
  skills: 'SKILLS',
  projects: 'PROJECTS',
  contact: 'CONTACT',
};

export default Navbar;
