import React from 'react'
import Container from '../pages/Container'
import Flex from '../Flex'
import Images from '../Images'
import nova from "../../assets/novaride.png";
import fashion from "../../assets/fashion.png";
import orebi from "../../assets/orebi.png";
import quarter from "../../assets/quarter.png";
import innovate from "../../assets/innovate.png";
import furniro from "../../assets/furniro 2.png";

const Portfolio = () => {
  return (
   <>
    <section id="portfolio">
  <Container>
  <div className="animate__animated animate__fadeInUp animate__fadeInUp-4s py-[60px] md:py-[80px] lg:py-[100px] bg-gradient-to-r from-[#0c0124] via-[#291352] to-[#0c0124] ">
         <h3 className="font-bold font-sora text-[32px] md:text-[40px] lg:text-[45px]  md:leading-[48px] lg:leading-[56px] leading-[56px] text-center  bg-gradient-to-r from-[#10023afd] via-[#a784ff] to-[#FFFFFF] text-transparent bg-clip-text">My Recent works</h3>
            <p className='lg:w-[640px] m-auto text-center pt-5 md:pt-5 text-[15px] md:text-[16px] leading-[24px]  text-textColor  font-sora'>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>

               <Flex className="justify-between flex-wrap  md:justify-between gap-5 lg:gap-y-[30px] pt-10 md:pt-16">
           
            <div className=" w-full sm:w-[48%] lg:w-[30%] h-[250px] md:h-[300px] lg:h-[340px] overflow-hidden rounded-md shadow-md">
                <Images imgSrc={fashion} imgAlt={fashion} className="w-full h-full "/>
            </div>
             <div className="w-full sm:w-[48%] lg:w-[30%] h-[250px] md:h-[300px] lg:h-[340px] overflow-hidden rounded-md shadow-md">
                <Images imgSrc={nova} imgAlt={nova} className="w-full h-full "/>
            </div>
            <div className=" w-full sm:w-[48%] lg:w-[30%] h-[250px] md:h-[300px] lg:h-[340px] overflow-hidden rounded-md shadow-md">
                <Images imgSrc={orebi} imgAlt={orebi} className="w-full h-full "/>
            </div>
           
            <div className="w-full sm:w-[48%] lg:w-[30%] h-[250px] md:h-[300px] lg:h-[340px] overflow-hidden rounded-md shadow-md">
                <Images imgSrc={quarter} imgAlt={quarter} className="w-full h-full "/>
            </div>
             <div className="w-full sm:w-[48%] lg:w-[30%] h-[250px] md:h-[300px] lg:h-[340px] overflow-hidden rounded-md shadow-md">
                <Images imgSrc={innovate} imgAlt={innovate} className="w-full h-full "/>
            </div>
            <div className=" w-full sm:w-[48%] lg:w-[30%] h-[250px] md:h-[300px] lg:h-[340px] overflow-hidden rounded-md shadow-md">
                <Images imgSrc={furniro} imgAlt={furniro} className="w-full h-full "/>
            </div>
           
        </Flex>
    </div>
   
     
   
    </Container>
  
    </section>
  

  
   </>
  )
}

export default Portfolio