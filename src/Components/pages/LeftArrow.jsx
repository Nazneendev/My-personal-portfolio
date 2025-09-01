import React from 'react'
import { IoIosArrowDropleft } from "react-icons/io";

const LeftArrow = ({onClick}) => {
  
   
  return (
   
   
      <div className={"text-[30px] text-btnColor absolute top-1/2 left-7 z-10 -translate-y-1/2 "} onClick={onClick}>
        <IoIosArrowDropleft />
      </div>
  )
}

export default LeftArrow