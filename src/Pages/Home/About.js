import React from 'react'
import Sectionheading from '../../Component/Sectionheading'

import { useSelector } from 'react-redux'


const About = () => {
  const {portfoliodata} = useSelector((state)=>state.root)
  const {about}=portfoliodata;
  const {lotiurl,discription1,discription2,skills,tools}=about;
   
  return (
    <div>
       
       <Sectionheading title="About"/>
       <div className='flex sm:flex-col w-full items-center'>
           <div className='h-[70vh] w-1/2 sm:w-full'>
            <dotlottie-player 
            src={lotiurl} 
            autoplay>

            </dotlottie-player>
           </div>
           <div className='flex flex-col gap-10 w-1/2 sm:w-full'>
                 <p className='text-white'>
                 {
                  discription1
                 }
                 </p>
                 <p className='text-white'>
                 {
                  discription2
                 }
                 </p>
           </div>
           
       </div>
       <h1 className='text-color2 text-xl py-5 m-2 font-semibold' >My Skills</h1>
       <div className='flex flex-wrap  gap-10 py-10 '>
           {
              skills.map((skill,index)=>{
                      return <div className='border border-color3 py-2 px-10'> 
                              <h1 className='text-color3'>{skill}</h1>
                        </div>
              })
           }

        </div>

        <h1 className='text-color2 text-xl py-5 m-2 font-semibold'>Tools</h1>
        <div className='flex flex-wrap  gap-10 py-10'>
        {
              tools.map((tools,index)=>{
                      return <div className='border border-color3 py-2 px-10'> 
                              <h1 className='text-color3'>{tools}</h1>
                        </div>
              })
           }

        </div>
       
    </div>
  )
}

export default About
