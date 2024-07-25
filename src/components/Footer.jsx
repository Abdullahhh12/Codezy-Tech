import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-black border-t '>
    <div className='flex justify-center  pt-4 space-x-2 h-7 '>
        <SocialIcon bgColor='black' fgColor='white' network='instagram' url='https://instagram.com/codezy.tech/'  target='_blank'/>
        <SocialIcon bgColor='black' fgColor='white' network='youtube' url='https://www.youtube.com/@codezytech/' target='_blank'/>
        <SocialIcon bgColor='black' fgColor='white' network='whatsapp' url='https://wa.me/+918828096513/' target='_blank'/>
    </div>
        <p className='text-center text-xs md:text-sm pt-12'> Copyright&copy; {currentYear} CodezyTech.</p>  
    </footer>

    

  )
}

export default Footer
