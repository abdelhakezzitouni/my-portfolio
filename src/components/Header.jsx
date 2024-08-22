import React from 'react'

function Header({ title }) {
  return (
    <div className='flex justify-center items-center gap-3'>
        <h1 className='text-2xl font-semibold'>{title}</h1>
        <hr className='w-full border-2 mt-2' />
    </div>
  )
}

export default Header