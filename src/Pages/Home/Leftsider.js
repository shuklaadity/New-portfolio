import React from 'react'

const Leftsider = () => {
  return (
    <div>
        <div className='flex flex-col items-center fixed bottom-3 left-2 gap-3 opacity-40 sm:flex-row sm:justify-around sm:w-full sm:h-16 sm:bg-color4 sm:opacity-[30] sm:left-0 sm:bottom-0'> 
        
                      
                      <a href='https://www.linkedin.com/in/aditya-shukla-232948262/'><i class="fa-brands fa-facebook text-2xl sm:text-2xl text-color3 cursor-pointer hover:text-color2"></i></a>
                      <a href='https://www.linkedin.com/in/aditya-shukla-232948262/'><i class="fa-brands fa-linkedin text-2xl sm:text-2xl text-color3 cursor-pointer hover:text-color2"></i></a>
                      <a href='https://www.linkedin.com/in/aditya-shukla-232948262/'><i class="fa-brands fa-instagram text-2xl sm:text-2xl text-color3 cursor-pointer hover:text-color2"></i></a>
                      <a href='https://www.linkedin.com/in/aditya-shukla-232948262/'><i class="fa-brands fa-youtube text-2xl sm:text-2xl text-color3 cursor-pointer hover:text-color2"></i></a>
                      <a href='https://www.linkedin.com/in/aditya-shukla-232948262/'><i class="fa-brands fa-github text-2xl sm:text-2xl text-color3 cursor-pointer hover:text-color2"></i></a>
                     
                      <hr className='w-[1px] h-40 bg-color3 sm:hidden'/>
        </div>
    </div>
  )
}

export default Leftsider
