import React from 'react'
import myimg from '../assets/myimg.png'

const About = () => {
  const skills = [
    "Java","Programming in C","Javascript","Data Structures","Algorithms",
    "OOPS","NodeJs","ReactJs","MongoDB","ExpressJs","SQL","MySql",
    "Python","Figma","Git","GitHub","HTML","CSS","Tailwind CSS"
  ]

  return (
    <div className='w-full fira-code custom-scroll px-4 pb-20 sm:px-10 md:px-20 mb-4 py-6 h-full overflow-y-auto'>

      {/* Profile Image */}
      <img 
        src={myimg} 
        className='w-32 sm:w-40 md:w-52 h-32 sm:h-40 md:h-52 object-cover m-auto rounded-full' 
        alt="Ameer" 
      />

      {/* Intro Paragraph */}
      <p className='text-lg sm:text-xl md:text-2xl my-4 text-justify'>
Hey, I’m <span className='text-blue-400'> Ameer Nagarasi👋</span>, a FullStack Developer passionate about building clean, responsive web applications. I specialize in crafting intuitive and visually appealing websites, and I also have experience in web UI/UX design. Check out my <a href="/projects" className='text-blue-500'>projects</a> to see my work.      </p>

      {/* Resume Button */}
      <button className='bg-blue-500 px-4 sm:px-5 py-1 sm:py-2 text-base sm:text-lg md:text-xl rounded-md block mx-auto my-6 hover:bg-blue-600 transition cursor-pointer'>
        Resume
      </button>

      {/* Skills Section */}
<div className='w-full my-6 border-t border-gray-400 pt-4'>
  <p className='text-center text-lg sm:text-xl md:text-2xl text-blue-500 poppins-regular mb-4'>My Expertise</p>
  <div className='flex flex-wrap gap-2 justify-center max-h-52 sm:max-h-40 md:max-h-56 h-full p-1'>
    {skills.map((item, idx) => (
      <button key={idx} className='bg-gray-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base'>
        {item}
      </button>
    ))}
  </div>
</div>

      
    </div>
  )
}

export default About
