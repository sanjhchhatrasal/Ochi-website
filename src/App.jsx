import React from 'react'
import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Clients from './Components/Clients'
import Project from './Components/Project'
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './Components/Footer'


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen bg-[#F1F1F1]'>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Clients/>
      <Project/>
      <Footer/>
    </div>
  )
}

export default App
