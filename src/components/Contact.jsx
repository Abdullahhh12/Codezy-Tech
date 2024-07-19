
import React, { useEffect, useState } from 'react';

import Nav from './Nav'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d9b1d28d-c194-4082-afb9-6518f4e09394");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
    <Nav/>
    <div className='bg-white text-black w-full h-screen'>
      <h1 className='flex justify-center flex-wrap pt-10 font-semibold text-3xl'> Contact Us</h1>
      <form onSubmit={onSubmit}>
        <div className='flex justify-center items-center md:space-x-3 flex-col md:flex-row pt-10'>

          <div >
          <label htmlFor="">Name</label>
          <input className='bg-white border-2 ml-2 border-black rounded' type="text"  name="" required placeholder="Enter Name.." />
          </div>

          <div className='pt-10 md:pt-0'> 
          <label htmlFor="">E-mail</label>
          <input  className='bg-white border-2 ml-2 border-black rounded' type="email" name="" required placeholder="Enter E-Mail.." />
          </div>
        </div>

        <div className='flex justify-center mt-20'>
          <label htmlFor="">Message</label>
          <textarea name="Message" className='bg-white border-2 ml-2 border-black rounded' required rows="5" id=""></textarea>
        </div>
        
        <div className='flex justify-center items-center'>
        <button type='submit' className='border-2 bg-green-400  border-gray-400 mt-10  rounded p-2 text-black'>Submit</button>
        </div>

      </form>
      <span>{result}</span>
    </div>
   
    </>
  )
}

export default Contact
