import React from 'react'

function Footer() {
  return (
    <div className='mt-10'>
        <div className='text-center'>Designed & Built withand ❤️ <br/>by <span className='text-color hover:underline cursor-pointer' onClick={()=>location.reload()}>Abdelhak Ezzitouni</span></div>
    </div>
  )
}

export default Footer