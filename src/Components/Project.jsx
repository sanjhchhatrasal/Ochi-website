import React, { useEffect, useState } from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

function Project() {
        const [rotate, setRotate] = useState(0)
    
        useEffect(()=>{
            window.addEventListener("mousemove", (e)=>{
                let mouseX = e.clientX;
                let mouseY = e.clientY;
    
                let deltaX = mouseX - window.innerWidth/2;
                let deltaY = mouseY - window.innerHeight/2;
    
                var angle = Math.atan2(deltaY , deltaX) *(180/Math.PI);
                setRotate(angle - 180);
            })
        })

  return (
    <div data-scroll data-scroll-speed='.1' className='font-["Founders_Grotesk"] w-full bg-[#CDEA68] flex flex-col items-center pt-[10vw] relative'>
      <h1 className='text-[15vw] leading-[11vw] font-bold text-[#212121]'>READY</h1>
      <h1 className='text-[15vw] leading-[11vw] font-bold text-[#212121]'>TO START</h1>
      <h1 className='text-[15vw] leading-[11vw] font-bold text-[#212121]'>THE PROJECT?</h1>
      <div className='absolute flex gap-10 justify-center top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-1/3'>
            <div className='w-[12vw] h-[12vw] rounded-full bg-white flex justify-center items-center'>
                <div className='w-2/3 h-2/3 flex items-center justify-center bg-[#212121] rounded-full relative'>
                   <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute w-full h-10  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                   <div className='w-[1.3vw] h-[1.3vw] rounded-full bg-white'></div>
                   </div>
                </div>
            </div>
            <div className='w-[12vw] h-[12vw] rounded-full bg-white flex justify-center items-center'>
            <div  className='w-2/3 h-2/3 bg-[#212121] rounded-full flex justify-center items-center relative'>
            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute w-full h-10  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                   <div className='w-[1.3vw] h-[1.3vw] rounded-full bg-white'></div>
                   </div>
            </div>
            </div>
        </div>
     <div className="buttons mb-[10vw] font-[Neue Montreal]">
     <button className='group transition duration-300 hover:bg-[#000] bg-[#212121] text-white rounded-full p-2 pl-10 text-[1.3vw] flex items-center gap-5 mt-[6vw] font-normal'>
            START THE PROJECT
            <div className="circle transition duration-300 h-9 w-9 bg-slate-100 rounded-full flex items-center justify-center scale-[0.3] group-hover:scale-100">
              <span className='transition duration-150 arrow text-xl text-[#000] text-opacity-0 group-hover:text-opacity-100'><MdOutlineArrowOutward /></span>
              </div>
              </button>
              <h6 className='ml-[7vw] text-[1.3vw] pt-[1vw] pb-[1vw]'>OR</h6>
              <button className='group transition duration-300 hover:bg-[#000] hover:text-white bg-transparent border-black border-[1px] text-black rounded-full p-2 pl-11 font-[500] flex items-center gap-5'>
             HELLO@OCHI.DESIGN 
            <div className="circle transition duration-300 h-9 w-9 bg-[#000] group-hover:bg-zinc-100 rounded-full flex items-center justify-center scale-[0.3] group-hover:scale-100">
              <span className='transition duration-150 arrow text-xl text-[#000] text-opacity-0 group-hover:text-opacity-100'><MdOutlineArrowOutward /></span>
              </div>
              </button>
     </div>
    </div>
  )
}

export default Project
