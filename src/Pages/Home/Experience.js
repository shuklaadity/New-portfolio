import React, { useState } from 'react'
import Sectionheading from '../../Component/Sectionheading'
import { Expi } from '../../Resorces/Expireances'
import { useSelector } from 'react-redux'

const Experience = () => {
    const [ExpActive, setExpActive] = useState(0)
    const {loading,portfoliodata} = useSelector((state)=>state.root)
    const {experience}=portfoliodata;
    return (
        <div>
            <Sectionheading title="Experiences" />
            <div className='flex py-10 gap-20  sm:flex-col'>
                <div className='flex flex-col gap-10 border-l-2 border-color3 w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {
                        experience.map((ex, ind) => {

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
                                    {ex.period}
                                </h1>
                            </div>
                        })
                    }

                </div>
                <div className='flex flex-col gap-5'>
                      <h1 className='text-xl text-color2 font-semibold'>{experience[ExpActive].title}</h1>
                      <h1 className='text-xl text-color3'>{experience[ExpActive].company}</h1>
                      <p className='text-white'>{experience[ExpActive].description}</p>

                </div>
            </div>
        </div>
    )
}

export default Experience
