import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const TypewriterComponent = () => {
  return (
     <h3 className="text-textColor font-sora font-bold lg:text-[36px]  leading-[54px]">
      HELLO! I'M{" "}
      <span className="text-textColor font-sora font-bold lg:text-[36px] leading-[54px]">
        <Typewriter
          words={["Web Developer", "Designer", "Freelancer"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h3>
   
  )
}

export default TypewriterComponent