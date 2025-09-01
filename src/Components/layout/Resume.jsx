import React from 'react'
import Container from '../pages/Container'
import { FaGraduationCap } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { FaReact, FaBootstrap, FaNodeJs, FaJs, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import Flex from '../Flex';

const Resume = () => {
  return (
   <>
   <section id="resume">
 <div className="py-[100px]">
  <Container>
    {/* Heading */}
    <div>
      <h3 className=" animate__animated animate__fadeInDown sm:pl-[20px] font-sora font-bold text-[36px] md:text-[50px] bg-gradient-to-r from-[#6938ff] via-[#fefeff] to-[#fffcfc] text-transparent bg-clip-text ">
        My Resume
      </h3>
    </div>

    {/* Education & Experience Columns */}
    <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mt-20">

      {/* Education Section */}
      <div className="w-full lg:w-1/2">
        <h3 className=" font-sora font-bold text-[28px] md:text-[35px] text-textColor mb-10 sm:ml-[20px]">Education</h3>
        <div className="animate__animated animate__backInLeft animate__delay-1s flex gap-6 relative">
         
          <div className="w-[1px] bg-boxColor relative ml-[20px]">
            <div className="h-full flex flex-col justify-between py-2">
               <div
                  className="absolute top-0 left-[-5px] w-[10px] h-[10px] bg-gray-400 rounded-full"
                ></div>
                <div
                  className="absolute top-[177px] left-[-5px] w-[10px] h-[10px] bg-gray-400 rounded-full"
                ></div>
                <div
                  className="absolute top-[360px] left-[-5px] w-[10px] h-[10px] bg-gray-400 rounded-full"
                ></div>
            </div>
          </div>

         
          <div className="flex flex-col gap-14 text-white ml-6">
            {/* Entry 1 */}
            <div className="flex items-start gap-4">
              <div className="bg-boxColor w-[50px] h-[50px] rounded-full flex justify-center items-center text-[24px]">
                <FaGraduationCap />
              </div>
              <div>
                <h3 className="text-btnColor font-sora font-bold text-[18px]">2015-2019</h3>
                <h3 className="font-sora font-bold text-[22px]">Bachelor of Arts</h3>
                <h6 className="text-textColor font-sora font-semibold text-[16px]">University of Dhaka</h6>
              </div>
            </div>

            {/* Entry 2 */}
            <div className="flex items-start gap-4">
              <div className="bg-boxColor w-[50px] h-[50px] rounded-full flex justify-center items-center text-[24px]">
                <FaGraduationCap />
              </div>
              <div>
                <h3 className="text-btnColor font-sora font-bold text-[18px]">2020-2021</h3>
                <h3 className="font-sora font-bold text-[22px]">Masters of Arts </h3>
                <h6 className="text-textColor font-sora font-semibold text-[16px]">University of Dhaka</h6>
              </div>
            </div>

            {/* Entry 3 */}
            <div className="flex items-start gap-4">
              <div className="bg-boxColor w-[50px] h-[50px] rounded-full flex justify-center items-center text-[24px]">
                <FaGraduationCap />
              </div>
              <div>
                <h3 className="text-btnColor font-sora font-bold text-[18px]">2025-2026</h3>
                <h3 className="font-sora font-bold text-[22px]">Diploma in Full Stack Web Development</h3>
                <h6 className="text-textColor font-sora font-semibold text-[16px]">Creative IT Institute</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="w-full lg:w-1/2">
        <h3 className="font-sora font-bold text-[28px] md:text-[35px] text-textColor mb-10 sm:ml-[20px]">Experience</h3>
        <div className="animate__animated animate__backInRight animate__delay-1s flex gap-6 relative">
         
          <div className=" w-[1px] bg-boxColor relative ml-[20px]">
            <div className="h-full flex flex-col justify-between py-2">
              <div
                  className="absolute top-0 left-[-5px] w-[10px] h-[10px] bg-gray-400 rounded-full"
                ></div>
                <div
                  className="absolute top-[177px] left-[-5px] w-[10px] h-[10px] bg-gray-400 rounded-full"
                ></div>
                <div
                  className="absolute top-[360px] left-[-5px] w-[10px] h-[10px] bg-gray-400 rounded-full"
                ></div>
            </div>
          </div>

          {/* Entries */}
          <div className="flex flex-col gap-14 text-white ml-6">
            {/* Entry 1 */}
            <div className="flex items-start gap-4">
              <div className=" bg-boxColor w-[50px] h-[50px] rounded-full flex justify-center items-center text-[24px]">
                <FaShoppingBag />
              </div>
              <div>
                <h3 className="text-btnColor font-sora font-bold text-[18px]">2024-2025</h3>
                <h3 className="font-sora font-bold text-[22px]">Programming Course</h3>
                <h6 className="text-textColor font-sora font-semibold text-[16px]">Creative IT Institute</h6>
              </div>
            </div>

            {/* Entry 2 */}
            <div className="flex items-start gap-4">
              <div className="bg-boxColor w-[50px] h-[50px] rounded-full flex justify-center items-center text-[24px]">
                <FaShoppingBag />
              </div>
              <div>
                <h3 className="text-btnColor font-sora font-bold text-[18px]">2024-2025</h3>
                <h3 className="font-sora font-bold text-[22px]">Front-End Development with React</h3>
                <h6 className="text-textColor font-sora font-semibold text-[16px]">Creative IT Institute</h6>
              </div>
            </div>

            {/* Entry 3 */}
            <div className="flex items-start gap-4">
              <div className="bg-boxColor w-[50px] h-[50px] rounded-full flex justify-center items-center text-[24px]">
                <FaShoppingBag />
              </div>
              <div>
                <h3 className="text-btnColor font-sora font-bold text-[18px]">2025-2026</h3>
                <h3 className="font-sora font-bold text-[22px]">Back-End Development with Node js</h3>
                <h6 className="text-textColor font-sora font-semibold text-[16px]">Creative IT Institute</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    
  </Container>
</div>
{/* SKILLS SECTION */}
<div className="py-[100px] bg-gradient-to-r from-[#0c0124] to-[#291352]">
    <div>
        <h3 className="text-[30px] md:text-[40px] font-bold font-sora text-center bg-gradient-to-r from-[#1404a3] via-[#a486ff] to-[#ffffff] text-transparent bg-clip-text">
  My Skills
</h3>
<h3 className='text-[22px] md:text-[28px] font-sora font-bold text-white text-center mt-5'>Offerd Services</h3>

    </div>
    <Container>
 <Flex className={"flex-wrap justify-center items-center gap-5 mt-10"}>
 <div className=''>
  <div className="animate__animated animate__bounce animate__delay-2s bg-gray-800 p-4 rounded-[20px] shadow-lg h-[165px] w-[170px] flex flex-col justify-center items-center">
    <FaReact color="#61DBFB" size={60} />
    <h6 className="text-textColor pt-4 font-medium font-sora ">89%</h6>
 </div>
     <h3 className="text-textColor font-medium font-sora text-[20px] text-center pt-4">React</h3>
 </div>
 <div className=''>
  <div className="animate__animated animate__bounce animate__delay-2s bg-gray-800 p-4 rounded-[20px] shadow-lg h-[165px] w-[170px] flex flex-col justify-center items-center">
   <FaBootstrap color="#7952B3" size={60} />
    <h6 className="text-textColor pt-4 font-medium font-sora ">90%</h6>
 </div>
     <h3 className="text-textColor font-medium font-sora text-[20px] text-center pt-4">Bootstrap</h3>
 </div>
 <div className=''>
  <div className="animate__animated animate__bounce animate__delay-3s bg-gray-800 p-4 rounded-[20px] shadow-lg h-[165px] w-[170px] flex flex-col justify-center items-center">
  <FaJs color="#F0DB4F" size={60} />
    <h6 className="text-textColor pt-4 font-medium font-sora ">90%</h6>
 </div>
     <h3 className="text-textColor font-medium font-sora text-[20px] text-center pt-4">Javascript</h3>
 </div>
 <div className=''>
  <div className="animate__animated animate__bounce animate__delay-3s bg-gray-800 p-4 rounded-[20px] shadow-lg h-[165px] w-[170px] flex flex-col justify-center items-center">
 <FaFigma color="#F24E1E" size={60} />
    <h6 className="text-textColor pt-4 font-medium font-sora ">89%</h6>
 </div>
     <h3 className="text-textColor font-medium font-sora text-[20px] text-center pt-4">Figma</h3>
 </div>
 <div className=''>
  <div className="animate__animated animate__bounce animate__delay-3s bg-gray-800 p-4 rounded-[20px] shadow-lg h-[165px] w-[170px] flex flex-col justify-center items-center">
 <SiTailwindcss color="#38BDF8" size={60} />
    <h6 className="text-textColor pt-4 font-medium font-sora ">92%</h6>
 </div>
     <h3 className="text-textColor font-medium font-sora text-[20px] text-center pt-4">Tailwindcss</h3>
 </div>
 <div className=''>
  <div className="animate__animated animate__bounce animate__delay-3s bg-gray-800 p-4 rounded-[20px] shadow-lg h-[165px] w-[170px] flex flex-col justify-center items-center">
<SiNextdotjs color="black" size={60} />
    <h6 className="text-textColor pt-4 font-medium font-sora ">80%</h6>
 </div>
     <h3 className="text-textColor font-medium font-sora text-[20px] text-center pt-4">Next.js</h3>
 </div>
 
    </Flex>
    </Container>
   
   
</div>
   </section>
  

   </>
  )
}

export default Resume
