import { easeIn, motion } from 'framer-motion';
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

function Landing() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.3' className='w-full h-screen bg-[#F1F1F1]'>
        <div className="textstructure pt-20 px-16">
          {["we create"," eye-opening", "presentations"].map((item,index) => {
            return <div className="masker flex">
              <div className='w-fit flex items-end overflow-hidden'>
                {index === 1 && (
                  <motion.div initial={{width:0}} animate={{width:"100%"}} transition={{ease: [0.45, 0, 0.55, 1], duration: 1}} className='mr-[1.2vw] w-[9vw] rounded-md h-[5.7vw]  relative bg-green-500 overflow-hidden'>
                    <img className='h-[100%] w-[100%] object-cover' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                  </motion.div>
                )}
              </div>
            <h1 className="font-['Founders_Grotesk'] uppercase text-[9vw] text-[#212121] font-[600] leading-[6.5vw]">{item}</h1>
         </div>
})}
            
             </div>
             <div className='border-t-[2px] border-zinc-300 mt-24 flex justify-between items-center py-5 px-20 font-[Neue Montreal]'>
              {['For public and private companies', 'From the first pitch to IPO'].map((item,index) =>(
                <p className='text-md font-normal tracking-tight leading-none'>{item}</p>
              ))}

              <div className="start group flex items-center gap-8">
                <div className='px-4 py-2 border-2 rounded-full border-zinc-800 font-normal text-sm uppercase group-hover:bg-[#212121] group-hover:text-white transition duration-300' >start the project</div>
                <div className='w-10 h-10 rounded-full border-zinc-800 border-[1px] flex items-center justify-center font-semibold group-hover:bg-[#212121] group-hover:text-white transition duration-300'>
                <span className='text-xl'><MdOutlineArrowOutward /></span>
                </div>
              </div>
             </div>
        </div>
  )
}

export default Landing
