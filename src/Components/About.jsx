import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";

export default function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.3' className='font-[Neue Montreal] bg-[#CDEA68] rounded-t-[1.5vw] relative -top-10'>
       <h1 className='text-[3.8vw] leading-none pt-20 pl-16 pr-32'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
       <div className="middle mt-12 pt-5 pb-24 flex text-[#333] justify-between border-t-[0.1vw] border-b-[0.1vw] border-zinc-500">
          <div className="left pl-16 text-md w-[50%]">
            <h6>What you can expect:</h6>
          </div>
          <div className="right w-[50%] flex justify-between">
            <div className="para w-[40%] text-[1.1vw]">
              <p className='pb-10'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
              <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
            </div>
            <div className="links mr-40 text-[1.2vw] pt-20">
              <h6>S:</h6>
              <h6>Instagram</h6>
              <h6>Bahance</h6>
              <h6>Facebook</h6>
              <h6>Linkedin</h6>
            </div>
          </div>
       </div>
       <div className="bottom h-[80vh] w-full flex justify-between">
        <div className="left pl-16">
          <h1 className='text-6xl pb-8'>Our approach:</h1>
          <button className='group transition duration-300 hover:bg-[#000] bg-[#212121] text-white rounded-full p-3 pl-6 font-[500] flex items-center gap-5'>
            READ MORE 
            <div className="circle transition duration-300 h-9 w-9 bg-slate-100 rounded-full flex items-center justify-center scale-50 group-hover:scale-100">
              <span className='transition duration-150 arrow text-xl text-[#000] text-opacity-0 group-hover:text-opacity-100'><MdOutlineArrowOutward /></span>
              </div>
              </button>
        </div>
        <div className="right h-[85%] w-[50%] rounded-2xl mt-5 mr-12 overflow-hidden">
          <img className='h-[100%] w-[100%] object-cover' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
       </div>
    </div>
  )
}
