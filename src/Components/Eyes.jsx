import React, { useEffect, useState } from 'react'

function Eyes() {
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
    <div className='w-full h-screen bg-[#F6F6F6] flex items-center justify-center relative -top-[3vw] overflow-hidden'>
      <div data-scroll data-scroll-speed='-.7' className="relative h-[100%] bg-blue-950 w-[100vw] bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-center">
        <div data-scroll data-scroll-speed='.2' className='absolute flex gap-10 justify-center top-1/3 left-1/3 -translate-x-[50%] -translate-y-[50%] h-1/3'>
            <div className='w-[15vw] h-[15vw] rounded-full bg-white flex justify-center items-center'>
                <div className='w-2/3 h-2/3 flex items-center justify-center bg-[#212121] rounded-full relative'>
                   <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute w-full h-10  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                   <div className='w-[1.3vw] h-[1.3vw] rounded-full bg-white'></div>
                   </div>
                </div>
            </div>
            <div className='w-[15vw] h-[15vw] rounded-full bg-white flex justify-center items-center'>
            <div  className='w-2/3 h-2/3 bg-[#212121] rounded-full flex justify-center items-center relative'>
            <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line absolute w-full h-10  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
                   <div className='w-[1.3vw] h-[1.3vw] rounded-full bg-white'></div>
                   </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Eyes
