import React from 'react'
import reacticon from '../assets/logos/react_icon.svg'
import htmlicon from '../assets/logos/html_icon.svg'
import cssicon from '../assets/logos/css_icon.svg'
import jsicon from '../assets/logos/js_icon.svg'
import mdicon from '../assets/logos/markdown_icon.svg'
import { NavLink } from 'react-router-dom'


const Dropdownmenu = () => {
    
  return (
    <div className='transition-all duration-100 ease-in-out opacity-0 animate-fadeIn'>
        <ul className='w-full'>
             <NavLink to='/'> <li className='flex min-w-fit w-[100%] items-center align-middle text-white px-3 py-0.5 hover:bg-gray-700'><img src={reacticon} className='w-5 h-5 mr-2' alt="" /> Home.jsx</li></NavLink>
             <NavLink to='/about'> <li className='flex min-w-fit w-[100%] items-center align-middle text-white px-3 py-0.5 hover:bg-gray-700'><img src={htmlicon} className='w-[20px] h-5 mr-2' alt="" />about.html</li></NavLink>
             <NavLink to='/contact'> <li className='flex min-w-fit w-[100%] items-center align-middle text-white px-3 py-0.5 hover:bg-gray-700'><img src={cssicon} className='w-[18px] h-4 mr-[10px]' alt="" />contact.css</li></NavLink>
             <NavLink to='/projects'> <li className='flex min-w-fit w-[100%] items-center align-middle text-white px-3 py-0.5 hover:bg-gray-700'><img src={jsicon} className='w-5 h-5 mr-2' alt="" />projects.js</li></NavLink>
             <NavLink to='/github'><li className='flex min-w-fit w-[100%] items-center align-middle text-white px-3 py-0.5 hover:bg-gray-700'><img src={mdicon} className='w-6 h-6 mr-1' alt="" />github.md</li></NavLink>
        </ul>
    </div>
  )
}

export default Dropdownmenu
