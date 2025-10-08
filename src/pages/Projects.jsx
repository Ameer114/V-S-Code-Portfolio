import React from 'react'
import vscodeicon from '../assets/logos/vscode_icon.svg'
import spotify from '../assets/spotify.png'


const Projects = () => {

  const projectslist = [
    {
      logo: <img src={vscodeicon} alt='' className="w-12 h-12 sm:w-14 sm:h-14"/>,
      title: "VS Code Portfolio",
      desc:
        "A developer portfolio inspired by Visual Studio Code, crafted using React and Tailwind CSS to showcase projects in a clean, code-themed interface.",
      url:"/"
    },
    {
      logo: <h1 className='font-extrabold text-blue-700 text-2xl sm:text-3xl'>CC</h1>,
      title: "CloudsCart",
      desc:
        "A full-stack eCommerce platform packed with features like JWT authentication, Google Sign-In, payment gateway integration, pagination, and more.",
      url:"https://cloudscart.netlify.app/"
    },
    {
      logo: <img src={spotify} alt='' className="w-12 h-12 sm:w-14 sm:h-14"/>,
      title: "Amify",
      desc:
        "A sleek Spotify-inspired music app built with responsive design, offering rich playback controls including play, pause, volume, and so on.",
      url:"https://ameer114.github.io/Amify/"
    },
    {
      logo: <h1 className='font-extrabold text-red-700 text-2xl sm:text-3xl'>FC</h1>,
      title: "FaceCrypt",
      desc:
        "An IoT-powered face recognition door security system that automatically unlocks doors, integrates with live databases, and sends instant email notifications.",
      url:"https://github.com/Ameer114/FaceCrypt"
    },
    {
      logo: <h1 className='font-extrabold text-blue-300 text-2xl sm:text-3xl'>WT</h1>,
      title: "WorldTick",
      desc:
        "A smart clock widget that fetches real-time data for any country, stores searches in local storage, and displays live time instantly on every visit.",
      url:"https://worldtick.netlify.app/"
    },
  ]

  return (
    <div className='w-full px-4 sm:px-10 md:px-20 py-10 h-full overflow-y-auto custom-scroll pb-20'>
      {/* Header */}
      <div className='text-center mb-10'>
        <h1 className='text-4xl sm:text-4xl font-medium poppins-bold text-blue-500'>My Projects</h1>
        <p className='text-lg sm:text-xl text-gray-300 poppins-regular mt-2'>
          Here's a collection of my recent work. These projects showcase my skills in web development, AI, and problem-solving.
        </p>
      </div>

      {/* Project Cards */}
      <div className='flex flex-wrap poppins-regular justify-center gap-6'>
        {projectslist.map((item, idx) => (
          <a key={idx} href={item.url} target='_blank' rel='noopener noreferrer' className='w-full sm:w-[45%] md:w-[30%]'>
            <div className='bg-gray-900 border-t-[3px] border-blue-500 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/40 hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col justify-between'>
              {/* Logo */}
              <div className='flex items-center justify-center mb-4'>
                {item.logo}
              </div>

              {/* Title */}
              <h2 className='text-xl sm:text-2xl font-semibold text-white text-center mb-2'>{item.title}</h2>

              {/* Description */}
              <p className='text-gray-400 text-sm sm:text-base text-center'>{item.desc}</p>

              {/* Button */}
              <div className='flex justify-center mt-4'>
                <span className='bg-blue-500 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-600 transition-colors cursor-pointer'>
                  View Project
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Projects
