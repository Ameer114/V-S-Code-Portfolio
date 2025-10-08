import React, { useState } from 'react'
import markicon from '../assets/images/mark.svg'
import Dropdownmenu from '../components/Dropdownmenu'
const explorer = () => {
  const [show,setshow]=useState(true);
  const handleDropdown=()=>{
    setshow(!show)
  }


  return (
    <div className='h-[calc(100vh-35px-28px)] poppins-regular w-[230px] min-w-fit cursor-pointer p-2 text-white bg-gray-800 border-r-[1px] border-gray-700'>
      <h2 className='px-4 text-white mb-3'>EXPLORER</h2>
      <div className="dropbutton flex items-center cursor-pointer" onClick={handleDropdown} > <span><img src={markicon} className={`h-4 transform transition-transform duration-100 ${
    show ? "rotate-90" : ""
  }`} alt="" /></span> PORTFOLIO</div>
      {show && <Dropdownmenu/>}
    </div> 
  )
}

export default explorer
