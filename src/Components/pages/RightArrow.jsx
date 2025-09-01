import React from 'react'
import { IoIosArrowDropright } from "react-icons/io";

const RightArrow = ({onClick}) => {
    
  return (
    
    <div className={"text-[30px] text-btnColor absolute top-1/2 right-7 -translate-y-1/2"} onClick={onClick} >
       <IoIosArrowDropright />
    </div>
  )
}

export default RightArrow