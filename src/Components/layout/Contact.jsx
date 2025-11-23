import React from 'react'
import Container from '../pages/Container'
import Flex from '../Flex'
import { MdWifiCalling3 } from "react-icons/md";
import { FaMessage } from "react-icons/fa6";
import { ImLocation2 } from "react-icons/im";


const Contact = () => {

 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!"); 
  };


  return (
  <>
  <section id="contact">
 <div className="py-[100px]">
<Container>
<div className="flex flex-col lg:flex-row lg:justify-between lg:gap-[80px] px-4 lg:px-0">
  {/* Left */}
  <div className="w-full lg:w-[55%]">
    <div className="bg-[#190e2b] w-full rounded-[20px] animate__animated animate__backInLeft animate__delay-1s p-6 lg:p-10">
      <h3 className="font-bold font-sora text-[32px] lg:text-[45px] leading-[44px] lg:leading-[56px] bg-gradient-to-r from-[#683fe4fd] via-[#a784ff] to-[#FFFFFF] text-transparent bg-clip-text">
        Let's work together!
      </h3>

      <p className="text-[16px] leading-[24px] text-textColor font-sora mt-4 mb-8">
        I design and code beautifully simple things and I love what I do. Just simple like that!
      </p>

      <div className="bg-[#1a0b2e] text-white p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First name"
              className="w-full md:w-1/2 p-3 rounded-md bg-black/80"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-full md:w-1/2 p-3 rounded-md bg-black/80"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full md:w-1/2 p-3 rounded-md bg-black/80"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="w-full md:w-1/2 p-3 rounded-md bg-black/80"
            />
          </div>

          <textarea
            placeholder="Message"
            className="w-full p-3 rounded-md bg-black/80"
            rows={4}
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>

  {/* Right*/}
  <div className="w-full lg:w-[40%] mt-10 lg:mt-0 animate__animated animate__backInRight animate__delay-1s">
   
    <div className="flex gap-5 items-start mb-6">
      <div className="text-[30px] text-white bg-gradient-to-r from-[#8750F7] to-[#432085] rounded-full w-[60px] h-[60px] flex items-center justify-center">
        <MdWifiCalling3 />
      </div>
      <div>
        <h6 className="text-gray-500 font-sora font-medium text-[16px]">Phone</h6>
        <h3 className="text-white font-sora font-medium text-[20px]">+8801533541158</h3>
      </div>
    </div>

  
    <div className="flex gap-5 items-start mb-6">
      <div className="text-[30px] mt-2 text-white bg-gradient-to-r from-[#8750F7] to-[#432085] rounded-full w-[60px] h-[60px] flex items-center justify-center">
        <FaMessage />
      </div>
      <div>
        <h6 className="text-gray-500 font-sora font-medium text-[16px]">Email</h6>
        <h3 className="text-white font-sora font-medium text-[20px]">nazneenzaman195@gmail.com</h3>
      </div>
    </div>

    
    <div className="flex gap-5 items-start">
      <div className="text-[30px] mt-2 text-white bg-gradient-to-r from-[#8750F7] to-[#432085] rounded-full w-[60px] h-[60px] flex items-center justify-center">
        <ImLocation2 />
      </div>
      <div>
        <h6 className="text-gray-500 font-sora font-medium text-[16px]">Address</h6>
        <h3 className="text-white font-sora font-medium text-[20px]">Dhanmondi,Dhaka,Bangladesh</h3>
      </div>
    </div>
  </div>
</div>

  
</Container>
    </div>
  </section>
   
  </>
  )
}


export default Contact 


