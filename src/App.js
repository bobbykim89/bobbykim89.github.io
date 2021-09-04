import './App.css';
import Landing from './Components/Landing';
import ToTop from './Components/layouts/ToTop';
import Nav from './Components/Nav';

function App() {
  return (
    <div className='md:flex'>
      <Nav />
      <div className='w-full'>
        <Landing />
        <h1 className='text-red-700'>Hello World</h1>
        <p>This is Bobby's portfolio!</p>
      </div>
      <ToTop />
    </div>
  );
}

export default App;
