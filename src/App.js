import { useState } from 'react';
import './App.css';
import Landing from './Components/Landing';
import ToTop from './Components/layouts/ToTop';
import Nav from './Components/Nav';
import Projects from './Components/Projects';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [navBarOpen, setNavbarOpen] = useState(false);
  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => setNavbarOpen(false)}
    >
      <div className='md:flex'>
        <Nav navBarOpen={navBarOpen} setNavbarOpen={setNavbarOpen} />
        <div className='w-full'>
          <Landing />
          <Projects />
          <h1 className='text-red-700'>Hello World</h1>
          <p>This is Bobby's portfolio!</p>
        </div>
        <ToTop />
      </div>
    </AnimatePresence>
  );
}

export default App;
