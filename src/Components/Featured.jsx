import { motion, useAnimation } from 'framer-motion';
import { Power4 } from 'gsap/all';
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

function Featured() {
const cardsall = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

     const handleHover = (index) =>{
        cardsall[index].start({y:"0"})
    } ;
    const handleHoverEnd = (index)=>{
        cardsall[index].start({y: "100%"})
    };

  return (
    <div className='w-full py-10 font-[Neue Montreal] bg-[#F1F1F1]'>
      <div className='w-full px-16 border-b-2 pb-8 border-gray-300'>
      <h1 className='text-[4vw] tracking-tighter text-[#333]'>Featured projects</h1>
      </div>
      <div className="px-16">
        <div className="cards w-full flex gap-5 mt-10">
            <div className="cardcontainer relative w-1/2 h-[80vh]">
            <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=> handleHoverEnd(0)} className="card w-full h-full rounded-xl bg-sky-400 overflow-hidden">
                    <h1 className='absolute flex text-[8vw] text-[#CDEA68] z-[9] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 font-["Founders_Grotesk"] overflow-hidden'>
                        {"FYDE".split('').map((item,index)=><motion.span className='inline-block' initial={{y:"100%"}} animate={cardsall[0]} transition={{ease :[0.22, 1, 0.36, 1].easeInOut , delay: index*.06}} >{item}</motion.span>)}
                    </h1>
                    <img className='h-full w-full object-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                </motion.div>
            </div>
            <div className="cardcontainer relative w-1/2 h-[80vh]">
                <motion.div  onHoverStart={()=>handleHover(1)} onHoverEnd={()=> handleHoverEnd(1)}  className="card w-full h-full rounded-xl bg-sky-400 overflow-hidden">
                <h1 className='absolute flex overflow-hidden text-[8vw] text-[#CDEA68] z-[9] right-full translate-x-1/2 top-1/2 -translate-y-1/2 font-["Founders_Grotesk"]'>                  
                    {"VISE".split('').map((item,index)=><motion.span  initial={{y:"100%"}} animate={cardsall[1]} transition={{ease :[0.22, 1, 0.36, 1].easeInOut , delay: index*.06}} className='inline-block'>{item}</motion.span>)}
                    </h1>
                    <img className='h-full w-full object-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                </motion.div>
            </div>
        </div>
        <div className="cards w-full flex gap-5 mt-20">
            <div className="cardcontainer relative w-1/2 h-[80vh]">
                <motion.div  onHoverStart={()=>handleHover(2)} onHoverEnd={()=> handleHoverEnd(2)}  className="card w-full h-full rounded-xl bg-sky-400 overflow-hidden">
                <h1 className='absolute flex overflow-hidden text-[8vw] text-[#CDEA68] z-[9] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 font-["Founders_Grotesk"]'>
                {"TRAWA".split('').map((item,index)=><motion.span  initial={{y:"100%"}} animate={cardsall[2]} transition={{ease :[0.22, 1, 0.36, 1].easeInOut , delay: index*.06}}  className='inline-block'>{item}</motion.span>)}
                </h1>
                    <img className='h-full w-full object-cover' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" />
                </motion.div>
            </div>
            <div className="cardcontainer relative w-1/2 h-[80vh]">
                <motion.div  onHoverStart={()=>handleHover(3)} onHoverEnd={()=> handleHoverEnd(3)}  className="card w-full h-full rounded-xl bg-sky-400 overflow-hidden">
                <h1 className='absolute flex overflow-hidden text-[8vw] text-[#CDEA68] z-[9] right-full translate-x-1/2 top-1/2 -translate-y-1/2 font-["Founders_Grotesk"]'>
                {"PREMIUMBLEND".split('').map((item,index)=><motion.span  initial={{y:"100%"}} animate={cardsall[3]} transition={{ease :[0.22, 1, 0.36, 1].easeInOut , delay: index*.06}}  className='inline-block' >{item}</motion.span>)}
                </h1>
                    <img className='h-full w-full object-cover' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" />
                </motion.div>
            </div>
        </div>
        <button className='group transition duration-300 hover:bg-[#000] bg-[#212121] text-white rounded-full p-2 pl-6 font-[500] flex items-center gap-5 mt-[8vw] ml-[37vw]'>
            VIEW ALL CASE STUDIES
            <div className="circle transition duration-300 h-9 w-9 bg-slate-100 rounded-full flex items-center justify-center scale-50 group-hover:scale-100">
              <span className='transition duration-150 arrow text-xl text-[#000] text-opacity-0 group-hover:text-opacity-100'><MdOutlineArrowOutward /></span>
              </div>
              </button>
      </div>
    </div>
  )
}

export default Featured
