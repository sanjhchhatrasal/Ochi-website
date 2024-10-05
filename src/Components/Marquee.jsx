import React from 'react'
import { motion } from "framer-motion"

function Marquee() {
  return (
    <div data-scroll data-scroll-speed='.2' className='w-full h-screen py-10 bg-[#004D43] rounded-t-[1.5vw]'>
        <div className=" text border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap overflow-hidden mt-20 gap-10">
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[27vw] text-white font-[900] leading-none -mb-[2vw] -mt-[5vw] font-["Founders_Grotesk"] uppercase'>we are ochi</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 10}} className='text-[27vw] text-white font-[900] leading-none -mb-[2vw] -mt-[5vw] font-["Founders_Grotesk"] uppercase'>we are ochi</motion.h1>
        </div>
      
    </div>
  )
}

export default Marquee
