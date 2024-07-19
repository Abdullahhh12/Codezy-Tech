import React from 'react'

const Cardproj = ({name,link,imgSrc}) => {
  return (
    <div >
        <div className='border-2 border-white bg-white text-black  rounded-lg m-5'>
            <a href={link} target='__blank'>
            <img className= ' w-[300px] h-[170px] md:w-[600px] md:h-[350px] ' src={imgSrc}  alt="" />
            <p className='text-center md:text-2xl font-semibold '>{name}</p>
            </a>
        </div>
      
    </div>
  )
}

export default Cardproj
