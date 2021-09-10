import { useState } from 'react';
import './App.css';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ToTop from './Components/layouts/ToTop';
import Nav from './Components/Nav';
import SingleProject from './Components/layouts/SingleProject';
import NotFound from './Components/layouts/NotFound';
import Home from './Components/layouts/Home';

function App() {
  const [navBarOpen, setNavbarOpen] = useState(false);
  return (
    <AnimatePresence exitBeforeEnter>
      <div className='md:flex bg-gray-800'>
        <Router>
          <Nav navBarOpen={navBarOpen} setNavbarOpen={setNavbarOpen} />
          <div className='w-full'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/projects/:id' component={SingleProject} />
              <Route path='*' component={NotFound} />
            </Switch>
          </div>
          <ToTop />
        </Router>
      </div>
    </AnimatePresence>
  );
}

export default App;
