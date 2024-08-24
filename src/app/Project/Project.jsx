import React from 'react'
import Header from '../../components/Header'
import CardPro from '../../components/card-project'
import { Data } from '../../../public/data'

function Project() {

  
  
  return (
    <div className='mt-10'>
        <Header title='Projects'/>
        <div className='mt-5 md:ml-3 flex flex-col gap-3'>
            {
              Data.map((item,index)=>(<CardPro title={item.name} description={item.description} skills={item.skills} github={item.github} view={item.view} key={index} />))
            }
        </div>
    </div>
  )
}

export default Project