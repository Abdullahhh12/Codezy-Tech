import React from 'react'
import Nav from './Nav'
import Cardproj from './Cardproj'
import watchcol from '../assets/watchcol.png'
import abayacol from '../assets/abayacol.png'

const Projects = () => {
  return (
    <>
    <Nav/>
    <h1 className='text-center text-5xl font-mono pt-3 '>Our Work</h1>
    <p className='text-center pt-2 font-thin '>Building Digital Dreams into Reality</p>
    <div className='flex justify-center  flex-wrap'>
      <Cardproj name="Her Abaya" imgSrc={abayacol} link={"https://herabaya.com"} />
      <Cardproj name="The Royal Collection" imgSrc={watchcol} link={"https://theroyalcollection.in"} />
      
       
    </div>
    
      
    </>
  )
}

export default Projects
