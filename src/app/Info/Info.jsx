import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";




function Info() {
  return (
    <div className=' pl-20 pt-32 relative h-screen overflow-hidden'>
  <div className='flex flex-col gap-2 relative z-50'>
    <p className='text-color'>Hi, my name is</p>
    <h1 className='text-6xl font-semibold '>Abdelhak Ezzitouni.</h1>
    <h2 className='text-4xl text-white/80'>Front-end Developer</h2>
  </div>
  <button className='px-8 mt-12 py-3 rounded-md bg-color font-semibold border-2 border-color hover:bg-transparent hover:text-color duration-200'>
    Contact me
  </button>
  <div className=' flex gap-3 mt-16'>
    <FiGithub size={35} className='cursor-pointer hover:text-color duration-200'/>
    <FaInstagram size={35} className='cursor-pointer hover:text-color duration-200'/>
    <RiLinkedinLine size={35} className='cursor-pointer hover:text-color duration-200'/>
  </div>
  <div 
    className='bg-[#1f4670] size-96 blur-[300px] absolute left-[-400px] bottom-[-100px] z-[0]'
  />
</div>

  )
}

export default Info