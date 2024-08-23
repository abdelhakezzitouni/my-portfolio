import React from 'react';
import Info from './app/Info/Info';
import About from './app/About/About';
import Project from './app/Project/Project';
import Skills from './app/Skills/Skills';
import Footer from './app/Footer/Footer';

function App() {
  return (
    <div className="flex h-screen bg-background text-white">

      <div className='w-1/2'>
        <Info />
      </div>
      
      <div className='w-1/2 p-4 overflow-auto flex flex-col pr-20 pt-20'>
        <About />
        <Skills />
        <Project />
        <Footer />
      </div>
    </div>
  );
}

export default App;
