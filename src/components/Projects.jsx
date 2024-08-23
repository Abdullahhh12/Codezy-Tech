import React from 'react'
import Nav from './Nav'
import Cardproj from './Cardproj'
import watchcol from '../assets/watchcol.png'
import abayacol from '../assets/abayacol.png'
import ameera from '../assets/ameera.png'
import dori from '../assets/dori.webp'

const Projects = () => {
  return (
    <>
    <Nav/>
    <div className='min-h-screen'>
    <h1 className='text-center text-3xl md:text-5xl font-mono pt-3 '>Our Work</h1>
    <p className='text-center pt-2 font-thin '>Building Digital Dreams into Reality</p>
    <div className='animate-slideInFromBottom flex justify-center  flex-wrap '>
      <Cardproj  name="The Dori" imgSrc={dori} link={"https://thedorii.com"}  />
      <Cardproj  name="Alameera collection" imgSrc={ameera} link={"https://alameeracollection.com"}  />
      <Cardproj  name="Her Abaya" imgSrc={abayacol} link={"https://herabaya.com"}  />
      <Cardproj name="The Royal Collection" imgSrc={watchcol} link={"https://theroyalcollection.in"} />
    
    </div>
    </div>
    
      
    </>
  )
}

export default Projects
