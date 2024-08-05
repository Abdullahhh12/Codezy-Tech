import {Menu,X} from 'lucide-react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [nav, setnav] = useState(true);

    const handlenav =()=>{
        setnav(!nav)
    }
  return (
    <>
    
    <div className="sticky top-0 flex border-b-2 mx-auto bg-black border-gray-600 z-10 items-center justify-between">
        <h1 className="font-bold w-full mt-4  mb-4 text-3xl bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-800 text-center md:text-left ">CodezyTech</h1>
        <ul className="hidden space-x-10 mr-5 md:flex ">
                <li className="p-4 font-semibold  hover:text-[#00df9a]"><Link to="/">Home</Link></li>
                <li className="p-4 font-semibold  hover:text-[#00df9a]"><Link to="/projects">Projects</Link></li>
                <li className="p-4 font-semibold  hover:text-[#00df9a]"><Link to="/services">Services</Link></li>
                <li className="p-4 font-semibold  hover:text-[#00df9a]"><Link to="/contact">Contact</Link></li>
            </ul>
             
             <div  className="z-30 mr-3 block md:hidden" onClick={handlenav}>
                {!nav ? <X size={30}/> : <Menu size={30}/>}
            
             </div>

            <div className= {!nav ? 'fixed right-0 top-0 border-l  border-l-gray-600 h-full w-[60%]  ease-in-out duration-500 bg-gray-900' : 'fixed hidden right-[-10]'}>

                <ul className='pt-20  uppercase'>

                <li className="p-4 font-semibold border-b-2 border-gray-600 hover:text-[#00df9a]"><Link to="/">Home</Link></li>
                <li className="p-4 font-semibold border-b-2 border-b-gray-600 hover:text-[#00df9a]"><Link  to="/projects">Projects</Link></li>
                <li className="p-4 font-semibold border-b-2 border-b-gray-600 hover:text-[#00df9a]"><Link to="/services">Services</Link></li>
                <li className="p-4 font-semibold  hover:text-[#00df9a]"><Link to="/contact">Contact</Link></li>

                </ul>

            </div>
    </div>
    
    </>
  )
}

export default Nav
