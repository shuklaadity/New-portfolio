import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [nav, setnav] = useState(false)
  const [link, setlink] = useState(false)
  return (
    <div className='p-5 bg-color1 sm:p-2'>
      {nav === false ?
        < button className='text-[0px] sm:block sm:text-2xl sm:text-white sm:px-2 sm:py-3 ' onClick={() => { setnav(true) }}><i class="fa-solid fa-bars"></i></button>
        :
        < button className='text-[0px] sm:block sm:text-2xl sm:text-white sm:px-2 sm:py-3 ' onClick={() => { setnav(false) }}><i class="fa-solid fa-xmark"></i></button>
      }
       <div className={`
           flex list-none w-2/2  items-center justify-between text-white text-xl  ml-[350px]
           sm:flex-col  gap-2 sm:w-full  sm:fixed sm:h-[90vh]  sm:bg-[#0a192fe2] 
           ${nav == true ? 'sm:right-[0px]' : 'sm:right-[1800px]'}
          
      `
      }
       >
       <ul className={`
           flex list-none w-full items-center  text-white text-[17px] ml-[50px]
           sm:flex-col  gap-10 sm:w-full  sm:fixed sm:h-[50vh] sm:bg-[#0a192fdb] sm:py-10
           sm:ml-0
          
      `
      }>
        <li onClick={() => {
          
          setnav(false)
        }}>
          <Link to="/" className='hover:text-color2'>Home</Link>
        </li>
        <li
          onClick={() => {
           
            setnav(false)
          }}>
          <Link to="/about" className='hover:text-color2'>About Us</Link>
        </li>
        <li
          onClick={() => {
            
            setnav(false)
          }}>
          <Link to="/project" className='hover:text-color2'>Projects</Link>
        </li>
        <li onClick={() => {
          
          setnav(false)
        }} className='px-5 py-2 bg-color2 text-white  hover:bg-color3 border-x-emerald-800'>
          <Link to="/contact" >Contact Us</Link>
        </li>
      </ul>
       </div>

    </div>
  ) 
}

export default Header
