import React from 'react'
import branchicon from '../assets/images/branch.svg'
import crossicon from '../assets/images/cross.svg'
import cautionicon from '../assets/images/caution.svg'
import bellicon from '../assets/images/bell.svg'
import tickicon from '../assets/images/tick.svg'
import reactlogo from '../assets/react.svg'

const Footer = () => {
  return (
    <div className='w-full px-2 sm:px-4 py-1 poppins-thin bg-gray-700 flex justify-between items-center flex-nowrap text-xs sm:text-sm text-white'>
      
      {/* Left Section */}
      <div className='flex items-center gap-2'>
        <a href='' className='flex items-center gap-1'>
          <img src={branchicon} alt="" className='w-3 sm:w-4 h-3 sm:h-4'/>
          <p>main</p>
        </a>

        <div className='flex items-center gap-2'>
          <div className='flex items-center gap-1'>
            <img src={crossicon} alt="" className='w-3 sm:w-4 h-3 sm:h-4'/>
            <p>0</p>
          </div>
          <div className='flex items-center gap-1'>
            <img src={cautionicon} alt="" className='w-3 sm:w-4 h-3 sm:h-4'/>
            <p>0</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className='flex items-center gap-3'>
        <div className='flex items-center gap-1'>
          <img src={reactlogo} alt="" className='w-3 sm:w-4 grayscale brightness-[200%] contrast-[100%]'/>
          <p>Powered by React.js</p>
        </div>
        <div className='flex items-center gap-1'>
          <img src={tickicon} alt="" className='w-3 sm:w-4'/>
          <p>Prettier</p>
        </div>
        <img src={bellicon} alt="" className='w-3 sm:w-4'/>
      </div>

    </div>
  )
}

export default Footer
