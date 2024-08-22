import React from 'react'

export default function CardSkill({skill}) {
  return (
    <div className='bg-white/10 px-4 py-1.5 rounded-md inline-block'>
        <span className='font-[500] text-base'>{skill}</span>
    </div>
  )
}
