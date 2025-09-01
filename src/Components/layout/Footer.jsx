import React from 'react'
import Container from '../pages/Container'

const Footer = () => {
  return (
   <>

    <div className="py-[100px] bg-[#190e2b]">
    <Container>
  <div className="">
      <h3 className="text-white text-center font-sora font-bold text-[24px]">NAZNEEN</h3>
      <div className="lg:ml-[450px] sm:ml-[210px] md:ml-[400px] mt-5">
 <ul className="flex gap-x-4 text-white ">
        <li className='font-sora font-semibold text-[16px] text-white hover hover:text-btnColor'>Resume</li>
        <li className='font-sora font-semibold text-[16px] text-white hover hover:text-btnColor'>Services</li>
        <li className='font-sora font-semibold text-[16px] text-white hover hover:text-btnColor'>Portfolio</li>
        <li className='font-sora font-semibold text-[16px] text-white hover hover:text-btnColor'>Contact</li>
      </ul>
      </div>
     
      <h6 className='text-gray-500 text-center font-sora font-semibold text-[16px]  mt-5 hover hover:text-btnColor'>© 2025 All rights reserved by<span className='text-white'>ThemeJunction</span> </h6>
    </div>
    </Container>
  

    </div>
   </>
  )
}

export default Footer
