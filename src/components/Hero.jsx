import React from 'react'
import { Link } from 'react-router-dom'
import { ReactTyped } from 'react-typed'

const Hero = () => {
  const handleClick=()=>{
    window.open("https://wa.me/+918828096513",'_blank')

  }
  return (
    <div className='text-white  '>
        <div className='max-w-[800px] animate-zoomIn mt-[100px] w-full  mx-auto flex flex-col items-center'>
            <p className=' bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-800 text-sm sm:text-xl '>Crafting seamless online store solutions</p>
            <h1 className=' pt-5 pb-5 md:text-8xl sm:text-6xl text-5xl'>Grow With us</h1>
            <div>
         

            <ReactTyped  className=" items-center text-xs sm:text-xl" 
            strings={['Fast','Affordable','Scalable']}
            typeSpeed={30} backSpeed={50} loop
            />

            </div>
           <div className='flex justify-center'>
          <button className='border-2 border-gray-400 mt-10 rounded p-3 bg-gradient-to-r from-green-500 to-green-800 text-white' onClick={handleClick}>Get Started</button>
          <Link to="/projects"><button className='border-2 border-gray-400 mt-10 ml-5 rounded p-3  text-white'>My Projects</button></Link>
          
           </div>

        </div>
      
    </div>
  )
}

export default Hero
