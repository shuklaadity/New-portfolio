import React, { useState } from 'react'
import Sectionheading from '../../Component/Sectionheading'
import { Expi } from '../../Resorces/Expireances'
import { Pdata } from '../../Resorces/Projectsdata'
import { useSelector } from 'react-redux'

function Projects() {
  const [ExpActive, setExpActive] = useState(0)
  const {loading,portfoliodata} = useSelector((state)=>state.root)
  const {project}=portfoliodata;
  return (
    <div>
      <Sectionheading title="Projects" />
      <div className='flex items-center py-10 gap-20  sm:flex-col'>
        <div className='flex flex-col gap-10 border-l-2 border-color3 w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
          {
            project.map((ex, ind) => {

              return <div
                onClick={() => {
                  setExpActive(ind)
                }}
                className='cursor-pointer'>
                <h1
                  className={
                    `text-xl px-5 ${ExpActive === ind
                      ? 'text-color3 border-l-4 border-white -ml-[3px] py-3 bg-[#0e88a7b6]'
                      : 'text-white'}`}>
                  {ex.title}
                </h1>
              </div>
            })
          }

        </div>
        <div className='flex items-center justify-center gap-10 sm:flex-col'>
          <div className='w-1/3 sm:w-full'>
            <img src={project[ExpActive].img} className='w-72 h-40 sm:w-full sm:h-48 sm:px-2' />
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-xl text-color2 font-semibold'>{project[ExpActive].title}</h1>
            <h1 className='text-xl text-color3'>{project[ExpActive].tech}</h1>
            <p className='text-white'>{project[ExpActive].description}</p>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects
