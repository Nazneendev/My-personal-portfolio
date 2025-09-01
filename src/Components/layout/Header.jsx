import React from 'react'
import Container from '../pages/Container'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <>
   <section id='home'>
 <div className="bg-gradient-to-r from-[#0c0124] to-[#2A1454] py-5 fixed top-0 left-0 w-full z-50">
   <Container>
 <div className="navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost text-btnColor lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded-box z-1 mt-3 w-52 p-2 shadow">
       <li className="font-sora font-semibold text-[16px] text-btnColor hover hover:text-btnColor"><a href="#home">Home</a></li>
      <li className="font-sora font-semibold text-[16px] text-btnColor hover hover:text-btnColor"><a href="#resume">Resume</a></li>
      <li className="font-sora font-semibold text-[16px] text-btnColor hover hover:text-btnColor"><a href="#service">Services</a></li>
      <li className="font-sora font-semibold text-[16px] text-btnColor hover hover:text-btnColor"><a href="#portfolio">portfolio</a></li>
     
      <li className="font-sora font-semibold text-[16px] text-btnColor hover hover:text-btnColor"><a href="#contact">Contact</a></li>
    
    
      </ul>
    </div>
    <a className="bg-gradient-to-r from-[#4f39bf] via-[#7b52f7] to-[#FFFFFF] text-transparent bg-clip-text font-bold font-sora text-[35px]">Nazneen</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   

      <li className="font-sora font-semibold text-[16px] text-white hover hover:text-btnColor"><a href="#home">Home</a></li>
      <li className="font-sora font-semibold text-[16px] text-white hover hover:text-btnColor"><a href="#resume">Resume</a></li>
      <li className="font-sora font-semibold text-[16px] text-white hover hover:text-btnColor"><a href="#service">Services</a></li>
      <li className="font-sora font-semibold text-[16px] text-white hover hover:text-btnColor"><a href="#portfolio">portfolio</a></li>
    
      <li className="font-sora font-semibold text-[16px] text-white hover hover:text-btnColor"><a href="#contact">Contact</a></li>
    
    </ul>
  </div>
  <div className="navbar-end">
   <button className="text-white font-bold font-sora   rounded-[20px] px-7 py-3 bg-gradient-to-r from-[#8750F7] to-[#432085]">
  Hire Me
</button>

   
  </div>
</div>
   </Container>

   </div>
   </section>
  
   
   </>
  )
}

export default Header