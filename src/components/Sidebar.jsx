import React from 'react'
import { NavLink } from 'react-router-dom'
import docimage from '../assets/images/doc.svg'
import account from '../assets/images/account.svg'
import code from '../assets/images/code.svg'
import git from '../assets/images/git.svg'
import message from '../assets/images/message.svg'
import pen from '../assets/images/pen.svg'
import setting from '../assets/images/setting.svg'

const Sidebar = () => {
  const mainNav = [
    { path: "/", icon: docimage },
    { path: "/github", icon: git },
    { path: "/projects", icon: code },
    { path: "/about", icon: pen },
    { path: "/contact", icon: message },
  ]

  const bottomNav = [
    { path: "/about", icon: account },
    { path: "/settings", icon: setting },
  ]

  return (
    <div className="flex flex-col justify-between bg-gray-800 
                    w-14 sm:w-16 md:w-20 h-[calc(100vh-35px-28px)] 
                    shrink-0 transition-all duration-300 border-r-1 border-gray-700">
      
      {/* Top Navigation */}
      <ul className="flex flex-col items-center ">
        {mainNav.map((item, idx) => (
          <li key={idx} className="w-full">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `w-full flex justify-center items-center h-15 md:h-20
                ${isActive ? "border-l-4 border-gray-300 bg-gray-700" : "bg-gray-800"}`
              }
            >
              {({ isActive }) => (
                <img
                  src={item.icon}
                  alt=""
                  className={`w-8 sm:w-10 ${isActive ? "grayscale brightness-[200%] contrast-[100%]" : ""}`}
                />
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Bottom Navigation */}
      <ul className="flex flex-col items-center">
        {bottomNav.map((item, idx) => (
          <li key={idx} className="w-full">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `w-full flex justify-center items-center h-15 md:h-20 
                ${isActive ? "border-l-4 border-gray-300 bg-gray-700" : "bg-gray-800"}`
              }
            >
              {({ isActive }) => (
                <img
                  src={item.icon}
                  alt=""
                  className={`w-8 sm:w-10 ${isActive ? "grayscale brightness-[200%] contrast-[100%]" : ""}`}
                />
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
