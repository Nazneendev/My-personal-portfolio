import React from 'react'
import Container from '../pages/Container'
import Flex from '../Flex'
import { MdOutlineWebAssetOff } from "react-icons/md";
import { FaConnectdevelop } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";
import { DiResponsive } from "react-icons/di";
import { GrDocumentTime } from "react-icons/gr";
import { MdOutlineSupport } from "react-icons/md";

const Services = () => {
  return (
   <>
   <section id='service'>
 <div className="py-[100px] animate__animated animate__fadeInUp ">
        <div className="">
            <h3 className="font-bold font-sora text-[45px] leading-[56px] text-center  bg-gradient-to-r from-[#10023afd] via-[#a784ff] to-[#FFFFFF] text-transparent bg-clip-text">My Quiality Services</h3>
            <p className='lg:w-[640px] m-auto text-center pt-5 text-[16px] leading-[24px]  text-textColor  font-sora'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            <Container>
                <Flex className={"justify-between flex-wrap gap-y-7 gap-2 pt-20"}>
                {/* first row */}
                    <div className='w-full lg:w-[30%] sm:w-[90%] sm:m-auto p-5 bg-boxColor rounded-[20px] hover hover:border-[1px] hover:border-btnColor '>
                    <div className="text-[40px] text-white bg-gradient-to-r from-[#8750F7] to-[#432085] rounded-full w-[60px] h-[60px] flex items-center justify-center mb-5">
                    <MdOutlineWebAssetOff />
                    </div>
                        <h4 className='text-[24px] text-textColor font-bold font-sora'>Web Design</h4>
                        <p className='text-textColor font-sora  text-[16px] leading-[24px] pt-2'>We create unique and modern web designs that are tailored to your needs and preferences,driving more traffic and potential customers to your business.</p>
                    </div>
                    <div className='w-full lg:w-[30%] sm:w-[90%] sm:m-auto p-5 bg-boxColor rounded-[20px] hover hover:border-[1px] hover:border-btnColor '>
                     <div className="text-[40px] text-white bg-gradient-to-r from-[#8750F7] to-[#432085] rounded-full w-[60px] h-[60px] flex items-center justify-center mb-5">
                      <FaConnectdevelop />
                    </div>
                 
                        <h4 className='text-textColor font-bold font-sora text-[24px]'>Web Development</h4>
                        <p className='text-textColor font-sora  text-[16px] leading-[24px] pt-2'>Our team of developers builds robust and scalable web applications that deliver exceptional user experiences,driving more traffic and potential customers  </p>
                    </div>
                    <div className='w-full lg:w-[30%] sm:w-[90%] sm:m-auto p-5 bg-boxColor rounded-[20px] hover hover:border-[1px] hover:border-btnColor '>
                      <div className="text-[40px] text-white bg-gradient-to-r from-[#8750F7] to-[#432085] rounded-full w-[60px] h-[60px] flex items-center justify-center mb-5">
                     <GrOptimize />
                    </div>
                        <h4 className='text-[24px] text-textColor font-bold font-sora'>SEO Optimization</h4>
                        <p className='text-textColor  font-sora text-[16px] leading-[24px] pt-2'>We optimize your website to improve its visibility on search engines, driving more traffic and potential customers to your business and potential customers to your business.</p>
                    </div>
                    {/* second row */}
                    <div className='w-full lg:w-[30%] sm:w-[90%] sm:m-auto p-5 bg-boxColor rounded-[20px] hover hover:border-[1px] hover:border-btnColor '>
                    <div className="text-[40px] text-white bg-gradient-to-r from-[#8750F7] to-[#432085] rounded-full w-[60px] h-[60px] flex items-center justify-center mb-5">
                  <DiResponsive />
                    </div>
                        <h4 className='text-[24px] text-textColor font-bold font-sora'>Responsive Design</h4>
                        <p className='text-textColor  font-sora text-[16px] leading-[24px] pt-2'>We create unique and modern web designs that are tailored to your needs and preferences,driving more traffic and potential customers to your business.</p>
                    </div>
                    <div className='w-full lg:w-[30%] sm:w-[90%] sm:m-auto p-5 bg-boxColor rounded-[20px] hover hover:border-[1px] hover:border-btnColor '>
                     <div className="text-[40px] text-white bg-gradient-to-r from-[#8750F7] to-[#432085] rounded-full w-[60px] h-[60px] flex items-center justify-center mb-5">
                    <GrDocumentTime />
                    </div>
                 
                        <h4 className='text-textColor font-bold font-sora text-[24px]'>Well Documented</h4>
                        <p className='text-textColor font-sora  text-[16px] leading-[24px] pt-2'>Our team of developers builds robust and scalable web applications that deliver exceptional user experiences,driving more traffic and potential customers  </p>
                    </div>
                    <div className='w-full lg:w-[30%] sm:w-[90%] sm:m-auto p-5 bg-boxColor rounded-[20px] hover hover:border-[1px] hover:border-btnColor '>
                      <div className="text-[40px] text-white bg-gradient-to-r from-[#8750F7] to-[#432085] rounded-full w-[60px] h-[60px] flex items-center justify-center mb-5">
                    <MdOutlineSupport />
                    </div>
                        <h4 className='text-[24px] text-textColor font-bold font-sora'>Support</h4>
                        <p className='text-textColor font-sora  text-[16px] leading-[24px] pt-2'>We optimize your website to improve its visibility on search engines, driving more traffic and potential customers to your business and potential customers to your business.</p>
                    </div>
                </Flex>
            </Container>
        </div>
    </div>
   </section>
   
   </>
  )
}

export default Services