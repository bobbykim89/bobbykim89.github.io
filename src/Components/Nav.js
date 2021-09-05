import React, { useState } from 'react';
import logo2 from './img/logo2.png';
import Hamburger from 'hamburger-react';

const Nav = () => {
  const [navBarOpen, setNavbarOpen] = useState(false);
  return (
    <div className='z-50 sticky top-0 font-inter text-white'>
      <div className='relative block lg:hidden '>
        <button
          className='absolute top-o right-0 flex items-center px-3 py-2 text-xl font-bold text-red-600'
          type='button'
          onClick={() => setNavbarOpen(!navBarOpen)}
        >
          <Hamburger size={23} toggled={navBarOpen} toggle={setNavbarOpen} />
        </button>
      </div>
      <nav
        className={
          'w-full md:sticky md:top-0 md:w-40 md:h-screen text-white bg-black items-center shadow-lg transition ease-in' +
          (navBarOpen ? ' h-screen inset-0' : ' hidden md:block')
        }
      >
        <div className='pt-16 pb-8 mx-auto self-center'>
          <div className='text-center'>
            <a href='/' className='inline-block mb-4 align-middle '>
              <img
                src={logo2}
                alt='logo'
                className='mx-auto w-1/2 bg-white p-2 rounded-full'
              />
            </a>
            <h1 className='text-2xl font-semibold align-middle py-2 mx-auto'>
              BOBBY KIM
            </h1>
          </div>
        </div>
        <div className='w-full text-lg self-center text-center align-middle'>
          <div className='hover:bg-gray-800 hover:text-green-400 py-4 transition ease-in'>
            <a href='/'>PROJECTS</a>
          </div>
          <div className='hover:bg-gray-800 hover:text-green-400 py-4 transition ease-in'>
            <a href='/'>ABOUT</a>
          </div>

          <div className='hover:bg-gray-800 hover:text-green-400 py-4 transition ease-in'>
            <a href='/'>CONTACT</a>
          </div>
        </div>
        <div className='absolute bottom-0 w-full mb-6 md:mb-20'>
          <div className='relative flex flex-wrap py-4 justify-center text-2xl'>
            <a
              href='https://github.com/bobbykim89'
              target='_blank'
              rel='noreferrer'
              className='inline-block text-white mr-4 hover:text-green-400'
            >
              <i className='fab fa-github-square' />
            </a>
            <a
              href='https://www.linkedin.com/in/bobby-kim-9baa17165/'
              target='_blank'
              rel='noreferrer'
              className='inline-block text-white mr-4 hover:text-green-400'
            >
              <i className='fab fa-linkedin' />
            </a>
            <a
              href='mailto:bobby.sihun.kim@gmail.com'
              target='_blank'
              rel='noreferrer'
              className='inline-block text-white hover:text-green-400'
            >
              <i className='fas fa-envelope' />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
