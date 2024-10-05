import React from 'react'

function Clients() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.3' className='font-[Neue Montreal] h-screen w-full bg-[#F1F1F1]'>
      <h1 className='text-[4vw] pl-[5vw] border-b-[1px] border-[#999] pb-[1.7vw]'>Clients' reviews</h1>
      <div className="cards h-[70vh] w-full flex items-center justify-center gap-5">
        <div className="card1 h-[80%] w-[45%] bg-[#004D43] rounded-xl flex items-center justify-center">
          <img className='w-[10vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        </div>
        <div className="card2 h-[80%] w-[23%] bg-[#212121] rounded-xl flex items-center justify-center">
          <img className='w-[10vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
        </div>
        <div className="card2 h-[80%] w-[25%] bg-[#212121] rounded-xl flex items-center justify-center">
          <img className='w-[7vw]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Clients
