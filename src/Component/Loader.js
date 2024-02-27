import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center fixed inset-0 bg-color1'>
          <div className='flex items-center justify-center gap-5'>
            <h2 className='text-6xl text-color2 font-semibold sm:text-4xl a '>A</h2>
            <h2 className='text-6xl text-white font-semibold sm:text-4xl d'>D</h2>
            <h2 className='text-6xl text-color3 font-semibold sm:text-4xl s'>S</h2>
          </div>
    </div>
  )
}

export default Loader
