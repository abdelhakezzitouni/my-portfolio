import React from 'react';
import Info from './app/Info/Info';
import About from './app/About/About';
import Project from './app/Project/Project';

function App() {
  return (
    <div className="flex h-screen bg-background text-white pr-14">

      <div className='w-1/2'>
        <Info />
      </div>
      
      <div className='w-1/2 p-4 overflow-auto flex flex-col'>
        <About />
        <Project />
      </div>
    </div>
  );
}

export default App;
