import Image from 'next/image'
import React from 'react'
import backGround from '../../../Resources/bg.png'
import {AiOutlineArrowDown} from "react-icons/ai"
function Career() {
  return (
    <>
    <div className="flex items-center p-20 gap-10   w-full  " style={{
      position:"relative",
      height:'250px',
      background:`url(${backGround.src})`
      
    }} >
      <p className='text-3xl Poppins'>Course</p>
      <div className="flex items-center gap-1 border-2 border-black px-5 rounded-full py-1">
      <button className=" w-fit h-fit border-4 border-black    text-lg Poppins">View Vacancy</button>
      <AiOutlineArrowDown/>
      </div>
    </div>
    </>
  )
}

export default Career
 