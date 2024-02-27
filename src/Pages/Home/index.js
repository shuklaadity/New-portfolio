import React from 'react'

import Intro from './Intro'
import About from './About'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'


import { useSelector } from 'react-redux'


const Home = () => {
  const {portfoliodata} = useSelector((state)=>state.root)
  return (
    <div >
      {
        portfoliodata && (
          
      <div className='bg-color1'>
    
      <Intro/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      
     
     
      </div>
        )
      }
    </div>
  )
}

export default Home

