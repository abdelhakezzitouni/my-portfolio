import React from 'react';
import Info from './app/Info/Info';
import About from './app/About/About';
import Project from './app/Project/Project';
import Skills from './app/Skills/Skills';
import Footer from './app/Footer/Footer';

function App() {
  return (
    <div className="flex md:h-screen bg-background flex-col md:flex-row text-white px-5 md:px-0 ">

      <div className='md:w-1/2'>
        <Info />
      </div>
      
      <div className='md:w-1/2  md:overflow-auto flex flex-col lg:pr-20 md:pr-8 pt-20 '>
        <About />
        <Skills />
        <Project />
        <Footer />
      </div>
    </div>
  );
}

export default App;
