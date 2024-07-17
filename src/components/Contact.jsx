import React from 'react'
import Nav from './Nav'

const Contact = () => {
  return (
    <>
    <Nav/>
    <div className='bg-white text-black w-full h-screen'>
      <h1 className='flex justify-center flex-wrap pt-10 font-semibold text-3xl'> Contact Us</h1>
      <form action="">
        <div className='flex justify-center items-center md:space-x-3 flex-col md:flex-row pt-10'>

          <div >
          <label htmlFor="">Name</label>
          <input className='bg-white border-2 ml-2 border-black rounded' type="text"  name="" placeholder="Enter Name.." />
          </div>

          <div className='pt-10 md:pt-0'> 
          <label htmlFor="">E-mail</label>
          <input  className='bg-white border-2 ml-2 border-black rounded' type="email" name="" placeholder="Enter E-Mail.." />
          </div>
        </div>

        <div className='flex justify-center mt-20'>
          <label htmlFor="">Message</label>
          <textarea name="Message" className='bg-white border-2 ml-2 border-black rounded' rows="5" id=""></textarea>
        </div>
        
        <div className='flex justify-center items-center'>
        <button type='submit' className='border-2 bg-green-400  border-gray-400 mt-10  rounded p-2 text-black'>Submit</button>
        </div>

      </form>
    </div>
   
    </>
  )
}

export default Contact
