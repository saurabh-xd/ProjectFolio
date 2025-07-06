import React from 'react'

const Home = () => {
  return (
    <div className='bg-[#0f0f0f] h-200 flex justify-center items-center flex-col text-white'>
        <div className=' flex items-center flex-col gap-3 relative bottom-35'>
            <h1 className='font-bold text-6xl'>Welcome to ProjectFolio</h1>
            <p>Your one-stop platform to discover, build, and share real-world projects </p>
        </div>
        <div>
            <button className='bg-orange-300 rounded-full w-20 h-8 cursor-pointer'>Start</button>
        </div>
    </div>
  )
}

export default Home