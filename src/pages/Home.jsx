import React from 'react'
import { NavLink } from 'react-router-dom'
import cube from '../assets/cube.png'

const cubesData = [
  { top: '10%', left: '5%', w: 40, anim: 4 },
  { top: '30%', right: '5%', w: 230, anim: 5 },
  { bottom: '20%', left: '20%', w: 100, anim: 3.5 },
  { top: '50%', left: '60%', w: 60, anim: 6 },
  { bottom: '10%', right: '15%', w: 30, anim: 4.5 },
]

const Home = () => {
  return (
    <div className='relative fira-code poppins-regular  p-4 mt-20 sm:p-6 md:p-10 h-[80vh] pt-[80px] overflow-hidden'>

      {/* Background cubes */}
      {cubesData.map((cubeItem, idx) => (
        <img
          key={idx}
          src={cube}
          alt=""
          className="absolute opacity-30 z-0 cube"
          style={{
            top: cubeItem.top || 'auto',
            bottom: cubeItem.bottom || 'auto',
            left: cubeItem.left || 'auto',
            right: cubeItem.right || 'auto',
            width: `${cubeItem.w}px`, // desktop size
            maxWidth: '80vw',          // prevents overflow on mobile
            animation: `float ${cubeItem.anim}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Content */}
      <div className="max-w-full md:max-w-[70vw] relative z-10 text-center md:text-left mx-auto md:mx-0">
        <h1 className='text-2xl poppins-semibold sm:text-3xl md:text-[30px] font-bold'>
          Hello I'm <span className='text-blue-500 text-3xl sm:text-4xl md:text-[50px]'>Ameer</span>
        </h1>
        <p className='mt-2 sm:mt-4 text-lg sm:text-xl md:text-[30px]'>
          I build elegant, responsive <span className='text-blue-500 font-bold'>web applications</span> with modern technologies. Focused on clean code and intuitive user experiences.
        </p>
        <NavLink to='/projects'>
          <button className='mt-4 poppins-semibold sm:mt-6 px-4 sm:px-6 md:px-6 py-2 sm:py-3 md:py-3 cursor-pointer bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'>
            View Projects →
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default Home
