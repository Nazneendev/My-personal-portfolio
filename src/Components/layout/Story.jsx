
import Container from '../pages/Container'
import Images from '../Images'
import t1 from "../../assets/t1.jpg";
import t2 from "../../assets/t2.jpg";
import t3 from "../../assets/t3.jpg";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from '../pages/LeftArrow';
import RightArrow from '../pages/RightArrow';



const Story = () => {
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
     centerPadding: "0",
     prevArrow: <LeftArrow/>,
     nextArrow: <RightArrow/>,
  };
  return (
    <>
    <section id="story">
 <Container>
 <div className="animate__animated animate__fadeInDown animate__fadeInDown-3s py-[60px] md:py-[80px] lg:py-[100px] ">
            <h3 className="font-bold font-sora text-[32px] md:text-[40px] lg:text-[45px] md:leading-[48px] lg:leading-[56px] leading-[56px] text-center bg-gradient-to-r from-[#10023afd] via-[#a784ff] to-[#FFFFFF] text-transparent bg-clip-text">My Client's Stories</h3>
            <p className='lg:w-[640px] m-auto text-center pt-5 md:pt-5 text-[15px] md:text-[16px] leading-[24px] text-textColor font-sora'>Empowering people in new a digital journey with my super services</p>
  <div className="w-[80%] mx-auto relative mt-10">
 <Slider {...settings}>
  <div className="bg-[#190e2b] m-auto mt-20 w-[850px] h-[450px] rounded-[20px] relative">
             <div className="w-[100px] h-[100px] rounded-full overflow-hidden absolute top-[60px] lg:left-[425px] sm:left-[225px] md:left-[300px]  mx-auto">
                        <Images
                          imgSrc={t1}
                          imgAlt={t1}
                          className={"h-full object-cover w-full"}
                        />
                      </div>
                      <div className="absolute top-[190px]">
                        <h3 className="font-sora font-semibold text-[25px] text-textColor top-[60px] text-center">
                          Paul Freeman
                        </h3>
                        <h6 className="font-sora font-semibold text-[18px] text-btnColor  text-center">
                          <i>Interior Designer</i>
                        </h6>
                        <p className="font-sora font-medium text-[14px] p-5 text-textColor text-center">
                          lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Doloribus, cumque.lorem ipsum dolor sit amet,
                          consectetur adipisicing elit. Doloribus, cumque.lorem
                          ipsum dolor sit amet, consectetur adipisicing elit.
                          Doloribus, cumque.
                        </p>
                      </div>
            </div>
  <div className="bg-[#190e2b] m-auto mt-20 w-[850px] h-[450px] rounded-[20px] relative">
             <div className="w-[100px] h-[100px] rounded-full overflow-hidden absolute top-[60px] lg:left-[425px] sm:left-[225px] md:left-[300px]  mx-auto">
                        <Images
                          imgSrc={t2}
                          imgAlt={t2}
                          className={"h-full object-cover w-full"}
                        />
                      </div>
                      <div className="absolute top-[190px]">
                        <h3 className="font-sora font-semibold text-[25px] text-textColor top-[60px] text-center">
                          Paul Freeman
                        </h3>
                        <h6 className="font-sora font-semibold text-[18px] text-btnColor  text-center">
                          <i>Interior Designer</i>
                        </h6>
                        <p className="font-sora font-medium text-[14px] p-5 text-textColor text-center">
                          lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Doloribus, cumque.lorem ipsum dolor sit amet,
                          consectetur adipisicing elit. Doloribus, cumque.lorem
                          ipsum dolor sit amet, consectetur adipisicing elit.
                          Doloribus, cumque.
                        </p>
                      </div>
            </div>
  <div className="bg-[#190e2b] m-auto mt-20 w-[850px] h-[450px] rounded-[20px] relative">
             <div className="w-[100px] h-[100px] rounded-full overflow-hidden absolute top-[60px] lg:left-[425px] sm:left-[225px] md:left-[300px]  mx-auto">
                        <Images
                          imgSrc={t3}
                          imgAlt={t3}
                          className={"h-full object-cover w-full"}
                        />
                      </div>
                      <div className="absolute top-[190px]">
                        <h3 className="font-sora font-semibold text-[25px] text-textColor top-[60px] text-center">
                          Paul Freeman
                        </h3>
                        <h6 className="font-sora font-semibold text-[18px] text-btnColor  text-center">
                          <i>Interior Designer</i>
                        </h6>
                        <p className="font-sora font-medium text-[14px] p-5 text-textColor text-center">
                          lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Doloribus, cumque.lorem ipsum dolor sit amet,
                          consectetur adipisicing elit. Doloribus, cumque.lorem
                          ipsum dolor sit amet, consectetur adipisicing elit.
                          Doloribus, cumque.
                        </p>
                      </div>
            </div>
 
             </Slider>
  </div>
            
          
        </div>
    </Container>
       
    </section>
   
    </>
  )
}

export default Story

{/* <IoIosArrowDropleft /> */}
{/* <IoIosArrowDropright /> */}