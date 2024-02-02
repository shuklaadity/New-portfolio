import React from 'react'

const Intro = () => {
  return (
    <div className='h-[80vh] bg-color1 flex flex-col items-start justify-center gap-8'>
        <h1 className='text-white'>Hi, I am </h1>
        <h1 className=' text-7xl text-color2 font-semibold'>Aditya Shukla</h1>
        <h1 className=' text-6xl text-white font-semibold'>I build things for the web.</h1>
        <p className=' text-white w-2/3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim.</p>
        <button className='border-2 border-color3 text-color3 px-10 py-3 rounded'>Get Started</button>

       
    </div>
  )
}

export default Intro
