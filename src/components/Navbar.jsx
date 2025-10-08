import React from 'react'
import reacticon from '../assets/logos/react_icon.svg'
import htmlicon from '../assets/logos/html_icon.svg'
import cssicon from '../assets/logos/css_icon.svg'
import jsicon from '../assets/logos/js_icon.svg'
import mdicon from '../assets/logos/markdown_icon.svg'
import { NavLink } from 'react-router-dom'

const navbar = () => {
  return (
<div className="w-[calc(100vw-4.5vw-250px)] poppins-light min-w-full overflow-x-auto bg-gray-700">
  <ul className="flex h-fit min-w-auto overflow-x-auto">
    <li className='min-w-fit'>
      <NavLink
        to="/"
        className={(e) =>
          `flex min-w-fit items-center align-middle bg-gray-600 text-white px-4 py-2 border-x border-gray-900 ${
            e.isActive ? "bg-gray-900" : ""
          }`
        }
      >
        <img src={reacticon} className="w-5 h-5 mr-1" alt="" />
        Home.jsx
      </NavLink>
    </li>

    <li className='min-w-fit'>
      <NavLink
        to="/about"
        className={(e) =>
          `flex min-w-fit items-center align-middle bg-gray-600 text-white px-4 py-2 border-x border-gray-900 ${
            e.isActive ? "bg-gray-900" : ""
          }`
        }
      >
        <img src={htmlicon} className="w-[22px] h-6 mr-1" alt="" />
        about.html
      </NavLink>
    </li>

    <li className='min-w-fit'>
      <NavLink
        to="/contact"
        className={(e) =>
          `flex min-w-fit items-center align-middle bg-gray-600 text-white px-4 py-2 border-x border-gray-900 ${
            e.isActive ? "bg-gray-900" : ""
          }`
        }
      >
        <img src={cssicon} className="w-[19px] h-5 mr-2" alt="" />
        contact.css
      </NavLink>
    </li>

    <li className='min-w-fit'>
      <NavLink
        to="/projects"
        className={(e) =>
          `flex min-w-fit items-center align-middle bg-gray-600 text-white px-4 py-2 border-x border-gray-900 ${
            e.isActive ? "bg-gray-900" : ""
          }`
        }
      >
        <img src={jsicon} className="w-5 h-5 mr-2" alt="" />
        projects.js
      </NavLink>
    </li>

    <li className='min-w-fit'>
      <NavLink
        to="/github"
        className={(e) =>
          `flex min-w-fit items-center align-middle bg-gray-600 text-white px-4 py-2 border-x border-gray-900 ${
            e.isActive ? "bg-gray-900" : ""
          }`
        }
      >
        <img src={mdicon} className="w-5 mt-1 mr-2" alt="" />
        github.md
      </NavLink>
    </li>
  </ul>
</div>

  )
}

export default navbar
