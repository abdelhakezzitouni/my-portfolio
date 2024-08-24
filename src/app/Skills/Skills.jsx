import React from 'react'
import Header from '../../components/Header'
import CardSkill from '../../components/card-skill'

function Skills() {

    const skills = ['HTML','CSS','Java Script','React','Type Script','Next','Tailwind','SCSS','Material UI','Gasp','Framer Motion']
    
  return (
    <div className='mt-10'>
        <Header title='Skills'/>
        <div className='mt-5 flex flex-wrap gap-3 md:ml-3'>
            {
                skills.map((skill,index)=>(
                    <CardSkill skill={skill} key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default Skills