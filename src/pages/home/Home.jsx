import React from 'react'

const Home = () => {
  return (
    <div className='bg-[#0f0f0f] h-200 flex justify-center items-center flex-col text-white'>
        <div className=' flex items-center flex-col gap-3 relative bottom-35'>
            <h1 className='font-bold text-6xl'>Welcome to ProjectFolio</h1>
            <p>Your one-stop platform to discover, build, and share real-world projects </p>
        </div>
        <div>
            <button className='text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-24 h-8 cursor-pointer'>Get started</button>
            
        </div>
    </div>
  )
}

export default Home