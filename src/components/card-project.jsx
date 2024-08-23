import React from 'react'
import { FiGithub } from "react-icons/fi";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

import CardSkill from './card-skill';


export default function CardPro({ title, description, skills, github, view}) {
  return (
    <div className='bg-white/10 py-3 px-4 rounded-lg'>
        <div className='flex justify-between items-center '>
            <h1 className='text-xl font-semibold'>{title}</h1>
            <div className='flex justify-center items-center gap-2'>
              <a href={view} target='_blank'>
                <HiArrowTopRightOnSquare
                  size={24} 
                  className='cursor-pointer hover:text-color duration-200'
                />
              </a>
              <a href={github} target='_blank'>
              <FiGithub 
                size={24}
                className='cursor-pointer hover:text-color duration-200'
              />
              </a>
            </div>
        </div>
        <p className='mt-2 ml-1 w-[90%]'>{description}</p>
        <div className='mt-4 flex flex-wrap gap-2 mb-1'>
            {
              skills.map((item, index) => (
                <CardSkill 
                  skill={item} key={index}
                />   
              ))
            }
        </div>
    </div>
  )
}