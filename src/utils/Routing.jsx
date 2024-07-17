
import React from 'react'
import { Route, Routes } from 'react-router'
import Contact from '../components/Contact'
import Home from '../components/Home'
import Services from '../components/Services'
import Projects from '../components/Projects'

const Routing = () => {
  return (
    <div>
       
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/projects' element={<Projects/>} />
            <Route path='/Services' element={<Services/>} />

        </Routes>
      
    </div>
  )
}

export default Routing
