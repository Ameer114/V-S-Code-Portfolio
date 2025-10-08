import React from 'react'
import myimg from '../assets/myimg.png'

const Github = () => {
  return (
    <div className="w-full px-4 sm:px-10 md:px-20 py-10 h-full overflow-y-auto">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl poppins-bold text-center text-blue-500 font-semibold">
        GitHub
      </h1>

      {/* Subtitle */}
      <p className="text-center poppins-regular mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-[600px] mx-auto leading-relaxed">
        Browse through my GitHub repositories and see what I've been working on.
      </p>

      {/* Profile Card */}
      <div className="w-full sm:w-[80%] poppins-regular md:w-[70%] lg:w-[65%] mx-auto mt-10 flex flex-col sm:flex-row items-center sm:justify-between gap-5 border border-gray-700 bg-gray-900 rounded-2xl shadow-md p-6 sm:p-8 transition-all hover:shadow-blue-500/30 hover:-translate-y-1">
        
        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-3 sm:gap-5">
          <img
            src={myimg}
            alt="Ameer"
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border-2 border-blue-500 shadow-md"
          />
          <div>
            <p className="text-lg sm:text-xl font-semibold text-white">
              <span className="text-blue-500">@</span>AMEER114
            </p>
            <p className="text-gray-400 text-sm sm:text-base">Full-Stack Developer</p>
          </div>
        </div>

        {/* GitHub Button */}
        <a
          href="https://github.com/Ameer114"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 sm:mt-0 px-6 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors duration-200 text-sm sm:text-base shadow-md"
        >
          Browse My Git
        </a>
      </div>
    </div>
  )
}

export default Github
