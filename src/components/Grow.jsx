import React from 'react'
import video1 from '../assets/video1.mp4'
import { Link } from 'react-router-dom'

const Grow = () => {
  return (
    <div className='w-full flex bg-black border-t-2 border-b-2 border-gray-400 mt-20 py-16 px-4'>
    
        <div className='max-w-[1240px] mx-auto ml-14 grid md:grid-cols-2'>
            <video autoPlay loop muted className="w-3/4 border-white rounded border-2">
            <source src={video1} type='video/mp4'/>
            your browser deose not support 
            </video>
            
            <div>
            <p className='text-base md:text-2xl mt-10'>
             Let's innovate together and make your online presence remarkable.
            </p>
              
            <Link to="/contact">
            <button className='border-green-300 rounded p-2 mt-3 border-2'>Contact  Us</button>
            </Link>
            </div>

        
            
        
        </div>
      
    </div>
  )
}

export default Grow
