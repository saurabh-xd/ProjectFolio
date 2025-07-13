import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>

     </Routes>
     <Footer/>
    </>
  )
}

export default App
