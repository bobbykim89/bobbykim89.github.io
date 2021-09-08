import { useState } from 'react';
import './App.css';
import Landing from './Components/Landing';
import ToTop from './Components/layouts/ToTop';
import Nav from './Components/Nav';
import Projects from './Components/Projects';
import SingleProject from './Components/layouts/SingleProject';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
          <Router>
            <Switch>
              <Route exact path='/'>
                <Landing />
                <Projects />
              </Route>
              <Route path='/projects/:id' component={SingleProject} />

              <h1 className='text-red-700'>Hello World</h1>
              <p>This is Bobby's portfolio!</p>
            </Switch>
          </Router>
        </div>
        <ToTop />
      </div>
    </AnimatePresence>
  );
}

export default App;
