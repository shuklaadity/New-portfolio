import React from 'react'

const Sectionheading = (props) => {
  return (
    <div className='flex gap-10 items-center py-10'>
       <h1 className=' text-2xl text-color2 font-semibold'>{props.title}</h1>
       <div className='w-60 h-[1px] bg-color3'>

       </div>
    </div>
  )
}

export default Sectionheading
