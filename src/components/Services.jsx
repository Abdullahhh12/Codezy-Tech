import React from 'react'
import ecom from  '../assets/ecom.jpeg'
import webdes from  '../assets/websdes.jpg'
import webdev from  '../assets/webdev.jpg'
import Nav from './Nav'

const Services = () => {
  return (
    <>
    <Nav/>
    <h1 className='text-center text-5xl font-mono pt-10 '>Services</h1>
    <p className='text-center pt-2 font-thin '>Transforming ideas into websites</p>
    <div className='flex justify-center flex-col items-center md:space-x-6 md:flex-row'>
      
    <div className='pt-10'>
        <img src={webdev} className='w-[300px] h-[180px] border-2 shadow-lg rounded-lg md:w-[400px] md:h-[300px]' alt="" />
        <span className='flex text-xl font-semibold justify-center'>Website Development</span>
      </div>

      <div className='pt-10'>
        <img src={ecom} className='w-[300px]  h-[180px] border-2  shadow-lg rounded-lg md:w-[400px] md:h-[300px]' alt="" />
        <span className='flex text-xl font-semibold justify-center'> E-Commerce Development</span>
      </div>
      
      <div className='pt-10'>
        <img src={webdes} className='w-[300px] h-[180px] border-2 shadow-lg rounded-lg md:w-[400px] md:h-[300px]' alt="" />
        <span className='flex  text-xl font-semibold justify-center'>Web Design</span>
      </div>
    </div>

    </>
  )
}

export default Services
