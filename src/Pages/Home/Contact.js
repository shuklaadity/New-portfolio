import React from 'react'
import Sectionheading from '../../Component/Sectionheading';
import { useSelector } from 'react-redux';

const Contact = () => {
    const info={
        name:"Aditya Shukla",
        age:null,
        gender:"Male",
        email:"aditya02shukla1@gmail.com",
        mobile:"8085894358",
        coontry:"INDIA",
    };
    const {loading,portfoliodata} = useSelector((state)=>state.root)
    const {contact}=portfoliodata;
  return (
    <div>
        <Sectionheading title="Say Hello" key=""/>
        <div className='flex items-center justify-between sm:flex-col' >
        <div className='w-1/2 h-[500px] sm:w-full'>
               

               <dotlottie-player 
               src="https://lottie.host/1dbeda8f-080b-473a-bfca-913911ad177a/yBiJEjS7Qg.json" 
               background="transparent" 
               speed="1"  
               autoplay>

               </dotlottie-player>
              </div>
               <div className='flex flex-col gap-3 text-sm'>
               <h1 className='text-color3'>{'{'}</h1>
               {
                Object.keys(contact).map((key)=>{
                 return  <h1 className='text-color3'>
                     <span className='text-color3'>{key}</span>:{" "}<span className='text-color3'>{contact[key]}</span>
                   </h1>
                })
               }
               <h1 className='text-color3'>{'}'}</h1>
               </div>
              

        </div>
    </div>
  )
}

export default Contact
