import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'

const Navbar = () => {
  return (
    <div className='bg-gray-900 h-18 flex items-center justify-between text-white'>
        <div className='flex flex-row gap-2  relative left-8'>
            <img src={logo} className='w-8 '/>
            <h1 className='font-extrabold text-xl'>ProjectFolio</h1>
        </div>
        <nav className='flex gap-7 relative right-8 text-lg'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
           
            
        </nav>
    </div>
  )
}

export default Navbar