import React from 'react'
import { useSelector } from 'react-redux'

const Intro = () => {
  const {loading,portfoliodata} = useSelector((state)=>state.root)
  const {intro}=portfoliodata;
  const {firstname,lastname,welcometext,caption,discription}=intro;
  return (
    <div className='h-[80vh] bg-color1 flex flex-col items-start justify-center gap-8'>
        <h1 className='text-white'>{welcometext||''}</h1>
        <h1 className=' text-7xl sm:text-3xl text-color2 font-semibold'>{firstname||''} {lastname||''}</h1>
        <h1 className=' text-6xl sm:text-3xl  text-white font-semibold'>{caption}</h1>
        <p className=' text-white w-2/3'> {discription}</p>
        <button className='border-2 border-color3 text-color3 px-10 py-3 rounded' >Get Started </button>

       
    </div>
  )
}

export default Intro
