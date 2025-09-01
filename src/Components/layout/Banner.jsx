import React from "react";
import Images from "../Images";
import TypewriterComponent from "../TypewriterComponent";
import Container from "../pages/Container";
import { CiFacebook } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import whiteme from "/src/assets/whiteme.png";
import 'animate.css';
import { IoLogoGithub } from "react-icons/io5";

const Banner = () => {
  return (
    <>
      <div className="pb-[100px] pt-[200px] bg-gradient-to-r from-[#0c0124] to-[#291352] ">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between gap-[40px]">
            {/* LEFT SECTION */}
            <div className="w-full lg:w-[45%] text-center lg:text-left">
              <TypewriterComponent />
              <h1 className="font-sora pt-7 font-bold text-[40px] md:text-[50px] lg:text-[65px] leading-tight md:leading-[60px] lg:leading-[78px] bg-gradient-to-r from-[#634bdd] via-[#7b57e7] to-[#FFFFFF] text-transparent bg-clip-text">
                Next-Level Web Developer.
              </h1>
              <p className="text-textColor pt-5 font-normal font-sora leading-[28px] text-[18px] md:text-[20px]">
                I break down complex user experience problems to create
                integrity-focused solutions that connect billions of people
              </p>
              <button className="mt-6 font-medium font-sora text-[18px] md:text-[20px] text-btnColor px-4 py-2 border border-btnColor hover:text-white hover:bg-btnColor rounded-[20px]">
                Download CV
              </button>
            </div>

            {/* RIGHT SECTION */}
            <div className="w-full lg:w-[45%] flex justify-center">
              <div className=" animate__animated animate__backInRight animate__delay-1s w-[300px] md:w-[360px] h-auto bg-boxColor rounded-[20px] shadow-[37px_37px_80px_0px_#0000001A] p-5">
                <div className="rounded-[20px] border w-[200px] md:w-[250px] h-[200px] md:h-[250px] overflow-hidden mx-auto">
                  <Images
                    imgSrc={whiteme}
                    imgAlt={whiteme}
                    className="h-full object-cover w-full"
                  />
                </div>

                <h3 className="text-textColor font-sora font-semibold text-[18px] md:text-[20px] text-center mt-6">
                  Nazneen Akter
                </h3>
                <h3 className="bg-gradient-to-r from-[#634bdd] via-[#7b57e7] to-[#FFFFFF] text-transparent bg-clip-text font-sora font-semibold text-[16px] md:text-[18px] text-center mt-1">
                  Web Developer
                </h3>
                <h3 className="text-textColor font-semibold font-sora text-[16px] md:text-[18px] text-center">
                 nazneenzaman195@gmail.com
                </h3>

                <div className="w-[80%] h-[1px] bg-white m-auto mt-2"></div>

                <div className="flex justify-center items-center gap-5 mt-5 text-white text-[22px] md:text-[25px] font-bold font-sora">
                  <div className="hover:text-btnColor">
                    <CiFacebook />
                  </div>
                  <div className="hover:text-btnColor">
                   <a 
        href="https://www.linkedin.com/in/nazneen-dev-ba98a6377/" 
        target="_blank" 
        rel="noopener noreferrer"
       
      >
         <TiSocialLinkedinCircular />
      </a>
               
                   
                  </div>
                  <div className="hover:text-btnColor">
                    <IoLogoInstagram />
                  </div>
                  <div className="hover:text-btnColor">
                  <a 
        href="https://github.com/Nazneendev" 
        target="_blank" 
        rel="noopener noreferrer"
       
      >
        <IoLogoGithub />
      </a>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Banner;

