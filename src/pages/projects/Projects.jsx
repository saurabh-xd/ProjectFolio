import React from 'react'
import image1 from './weather.png'
import image2 from './to-do.png'
import image3 from './calc.png'


const Projects = () => {
  return (
    <div className=' bg-gradient-to-br from-black via-gray-900 to-gray-800
 py-20 px-4 flex justify-center items-center flex-col text-white'>

           {/* javascript section */}
        <div className=' w-full h-200 relative flex justify-center flex-col items-center'>
          <div className='relative bottom-39.5 '>
   <h1 className='font-display text-4xl text-emerald-400'>javascript projects</h1>
          </div>
          <div className='flex  gap-40'>
 <img src={image1} className='w-90 h-80 rounded-xl object-cover transition duration-300 transform hover:scale-105 hover:ring-2 hover:ring-emerald-400'/>
 <img src={image2} className='w-90 h-80 rounded-xl  transition duration-300 transform hover:scale-105 hover:ring-2 hover:ring-emerald-400'/>
 <img src={image3} className='w-90 h-80 rounded-xl object-cover transition duration-300 transform hover:scale-105 hover:ring-2 hover:ring-emerald-400'/>
          </div>
          <div className='flex gap-80 relative top-4.5'>
            <h2 className='relative right-39'>weather-app</h2>
            <h2>To-do</h2>
            <h2 className='relative left-39'>calculator</h2>
          </div>
        </div>

              {/* react section */}

       <div className=' w-full h-200 relative flex justify-center flex-col items-center'>
          <div className='relative bottom-39.5 '>
   <h1 className='font-display text-4xl text-emerald-400'>React projects</h1>
          </div>
          <div className='flex  gap-40'>
 <img src={image1} className='w-90 h-80 rounded-xl object-cover transition duration-300 transform hover:scale-105 hover:ring-2 hover:ring-emerald-400'/>
 <img src={image2} className='w-90 h-80 rounded-xl  transition duration-300 transform hover:scale-105 hover:ring-2 hover:ring-emerald-400'/>
 <img src={image3} className='w-90 h-80 rounded-xl object-cover transition duration-300 transform hover:scale-105 hover:ring-2 hover:ring-emerald-400'/>
          </div>
          <div className='flex gap-80 relative top-4.5'>
            <h2 className='relative right-39'>weather-app</h2>
            <h2>To-do</h2>
            <h2 className='relative left-39'>calculator</h2>
          </div>
        </div>


    </div>
  )
}

export default Projects