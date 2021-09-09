import React from 'react';
import logo2 from './img/logo2.png';
import Hamburger from 'hamburger-react';
import { motion } from 'framer-motion';

const smNavVariants = {
  hidden: {
    y: '-100vh',
  },
  animateIn: {
    y: 0,
    transition: {
      y: {
        duration: 0.3,
        when: 'beforeChildren',
        staggerChildren: 0.4,
      },
    },
  },
  animateOut: {
    y: '-100vh',
    transition: {
      y: {
        duration: 0.3,
        when: 'afterChildren',
        staggerChildren: 0.3,
      },
    },
  },
};

const menuVariants = {
  logoIni: {
    y: '-100vh',
  },
  logoIn: {
    y: 0,
    transition: {
      delay: 0.3,
      type: 'spring',
      mass: 1,
      damping: 10,
    },
  },
  logoOut: {
    y: '-100vh',
  },
  menuIni: {
    x: '-100vw',
  },
  menuIniMd: {
    y: '-100vh',
  },
  menuIn: {
    x: 0,
    transition: {
      delay: 0.3,
      type: 'spring',
      mass: 1,
      damping: 10,
    },
  },
  menuInMd: {
    y: 0,
    transition: {
      delay: 0.3,
      type: 'spring',
      mass: 1,
      damping: 10,
    },
  },
  menuOut: {
    x: '-100vw',
  },
  iconIni: {
    opacity: 0,
  },
  iconIn: {
    opacity: 1,
    transition: {
      delay: 0.6,
    },
  },
  iconOut: {
    opacity: 0,
  },
};

const hoverVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.1,

    transition: {
      duration: 0.3,
    },
  },
};

const logoMotion = {
  initial: {
    backgroundColor: '#fff',
  },
  animate: {
    backgroundColor: ['#fff', '#00feda', '#ec4899', '#00feda', '#fff'],
    transition: {
      duration: 2,
      ease: 'linear',
      repeat: Infinity,
    },
  },
};

const Nav = ({ navBarOpen, setNavbarOpen }) => {
  // const [navBarOpen, setNavbarOpen] = useState(false);
  return (
    <div className='z-50 sticky top-0 font-inter text-white'>
      <nav className='hidden md:block md:sticky md:top-0 w-40 h-screen bg-black items-center shadow-lg transition ease-in'>
        <motion.div
          className='pt-16 pb-8 mx-auto self-center'
          variants={menuVariants}
          initial='logoIni'
          animate='logoIn'
        >
          <div className='text-center'>
            <a href='/' className='inline-block mb-4 align-middle'>
              <motion.img
                src={logo2}
                alt='logo'
                className='mx-auto w-1/2 p-2 rounded-full'
                variants={logoMotion}
                initial='initial'
                animate='animate'
              />
            </a>
            <h1 className='text-2xl font-semibold align-middle py-2 mx-auto'>
              BOBBY KIM
            </h1>
          </div>
        </motion.div>
        <motion.div
          className='w-full text-lg self-center text-center align-middle overflow-hidden'
          variants={menuVariants}
          initial='menuIniMd'
          animate='menuInMd'
        >
          <motion.div
            className='hover:bg-gray-800 hover:text-[#00feda] py-4 transition ease-in'
            variants={hoverVariants}
            initial='initial'
            whileHover='hover'
            animate='initial'
          >
            <a href='/#projects'>PROJECTS</a>
          </motion.div>
          <motion.div
            className='hover:bg-gray-800 hover:text-[#00feda] py-4 transition ease-in'
            variants={hoverVariants}
            initial='initial'
            whileHover='hover'
            animate='initial'
          >
            <a href='/'>ABOUT</a>
          </motion.div>

          <motion.div
            className='hover:bg-gray-800 hover:text-[#00feda] py-4 transition ease-in'
            variants={hoverVariants}
            initial='initial'
            whileHover='hover'
            animate='initial'
          >
            <a href='/'>CONTACT</a>
          </motion.div>
        </motion.div>
        <motion.div
          className='absolute bottom-0 w-full mb-6 md:mb-20'
          variants={menuVariants}
          initial='iconIni'
          animate='iconIn'
        >
          <div className='relative flex flex-wrap py-4 justify-center text-2xl'>
            <a
              href='https://github.com/bobbykim89'
              target='_blank'
              rel='noreferrer'
              className='inline-block text-white mr-4 hover:text-[#00feda]'
            >
              <i className='fab fa-github-square' />
            </a>
            <a
              href='https://www.linkedin.com/in/bobby-kim-9baa17165/'
              target='_blank'
              rel='noreferrer'
              className='inline-block text-white mr-4 hover:text-[#00feda]'
            >
              <i className='fab fa-linkedin' />
            </a>
            <a
              href='mailto:bobby.sihun.kim@gmail.com'
              target='_blank'
              rel='noreferrer'
              className='inline-block text-white hover:text-[#00feda]'
            >
              <i className='fas fa-envelope' />
            </a>
          </div>
        </motion.div>
      </nav>
      <div className='relative block lg:hidden '>
        <button
          className='absolute z-50 top-o right-0 flex items-center px-3 py-2 text-xl font-bold text-white'
          type='button'
          onClick={() => setNavbarOpen(!navBarOpen)}
        >
          <Hamburger size={23} toggled={navBarOpen} toggle={setNavbarOpen} />
        </button>
      </div>
      <motion.nav
        className='md:hidden w-full absolute h-screen inset-0 bg-black items-center shadow-lg transition ease-in'
        variants={smNavVariants}
        initial='hidden'
        animate={navBarOpen ? 'animateIn' : 'animateOut'}
      >
        <motion.div
          className='pt-16 pb-8 mx-auto self-center'
          variants={menuVariants}
          initial='logoIni'
          animate={navBarOpen ? 'logoIn' : 'logoOut'}
        >
          <div className='text-center'>
            <a href='/' className='inline-block mb-4 align-middle '>
              <motion.img
                src={logo2}
                alt='logo'
                className='mx-auto w-1/2 p-2 rounded-full'
                variants={logoMotion}
                initial='initial'
                animate='animate'
              />
            </a>
            <h1 className='text-2xl font-semibold align-middle py-2 mx-auto'>
              BOBBY KIM
            </h1>
          </div>
        </motion.div>
        <motion.div
          className='w-full text-lg self-center text-center align-middle'
          variants={menuVariants}
          initial='menuIni'
          animate={navBarOpen ? 'menuIn' : 'menuOut'}
        >
          <div className='hover:bg-gray-800 hover:text-[#00feda] py-4 transition ease-in'>
            <a href='/'>PROJECTS</a>
          </div>
          <div className='hover:bg-gray-800 hover:text-[#00feda] py-4 transition ease-in'>
            <a href='/'>ABOUT</a>
          </div>

          <div className='hover:bg-gray-800 hover:text-[#00feda] py-4 transition ease-in'>
            <a href='/'>CONTACT</a>
          </div>
        </motion.div>
        <motion.div
          className='absolute bottom-0 w-full mb-6 md:mb-20'
          variants={menuVariants}
          initial='iconIni'
          animate={navBarOpen ? 'iconIn' : 'iconOut'}
        >
          <div className='relative flex flex-wrap py-4 justify-center text-2xl'>
            <a
              href='https://github.com/bobbykim89'
              target='_blank'
              rel='noreferrer'
              className='inline-block text-white mr-4 hover:text-[#00feda]'
            >
              <i className='fab fa-github-square' />
            </a>
            <a
              href='https://www.linkedin.com/in/bobby-kim-9baa17165/'
              target='_blank'
              rel='noreferrer'
              className='inline-block text-white mr-4 hover:text-[#00feda]'
            >
              <i className='fab fa-linkedin' />
            </a>
            <a
              href='mailto:bobby.sihun.kim@gmail.com'
              target='_blank'
              rel='noreferrer'
              className='inline-block text-white hover:text-[#00feda]'
            >
              <i className='fas fa-envelope' />
            </a>
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Nav;
