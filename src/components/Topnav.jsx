import React from 'react'
import logo from "../assets/logos/vscode_icon.svg"

const Topnav = () => {
  return (
    <div className='flex bg-[#2f3747] poppins-light text-white w-full h-[35px] items-center justify-between px-2 sm:px-4 md:px-6'>
      
      {/* Left */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
        <img src={logo} className='w-4 sm:w-5 md:w-6' alt="" />
        <ul className='flex gap-2 sm:gap-3 md:gap-4 text-xs sm:text-sm md:text-base'>
          <li>File</li>
          <li>Edit</li>
          <li>View</li>
          <li>Run</li>
          <li>Terminal</li>
          <li>Help</li>
        </ul>
      </div>

      {/* Middle */}
      <div className="flex-1 mx-2 max-w-[600px]  hidden sm:block text-center  sm:mx-4 md:mx-6 bg-gray-700 border border-gray-500 text-gray-300 px-2 sm:px-4 md:px-6 rounded-sm truncate">
        Ameer Nagarasi - V S Code Style Portfolio
      </div>

      {/* Right */}
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <div className='w-[14px] h-[14px] rounded-full bg-yellow-500'></div>
        <div className='w-[14px] h-[14px] rounded-full bg-green-600'></div>
        <div className='w-[14px] h-[14px] rounded-full bg-red-600'></div>
      </div>
    </div>
  )
}

export default Topnav
