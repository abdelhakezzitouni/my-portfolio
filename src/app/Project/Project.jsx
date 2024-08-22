import React from 'react'
import Header from '../../components/Header'
import CardPro from '../../components/card-project'
import { Data } from '../../../public/data'

function Project() {

  const da = ['html','css', 'java']
  
  return (
    <div className='mt-10'>
        <Header title='Projects'/>
        <div className='mt-5 ml-4 flex flex-col gap-3'>
            {
              Data.map((item,index)=>(<CardPro title={item.name} description={item.description} skills={item.skills} key={index} />))
            }
        </div>
    </div>
  )
}

export default Project