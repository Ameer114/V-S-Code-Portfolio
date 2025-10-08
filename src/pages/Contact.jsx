import React from 'react'

const Contact = () => {
  return (
    <div className='m-auto fira-code w-full max-w-[600px] px-4 mt-14'>
      <h1 className='text-blue-500 text-4xl font-medium poppins-bold text-center'>Contact Me</h1>
      <p className='md:text-center text-justify poppins-regular  text-lg sm:text-xl mt-3 mb-7'>
        Feel free to reach out to me through any of the social platforms below. I'm always open to new opportunities and connections.
      </p>

      <div className='border-t-[5px] border-blue-500 flex flex-row sm:flex-row text-md sm:text-2xl  py-6 rounded-md bg-gray-900 mt-4'>

        {/* Line Numbers */}
        <div className='flex flex-col sm:flex-col justify-start sm:justify-start mx-2 gap-2 sm:gap-1 text-gray-500 leading-[19.7px] text-md sm:leading-8 mb-4 sm:mb-0'>
          {[1,2,3,4,5,6,7,8].map(n => <h2 key={n}>{n}</h2>)}
          <h2 className='sm:hidden'>9</h2>
        </div>

        {/* Content */}
        <div className='space-y-1 sm:ml-6 '>
          <p className='text-blue-400'>.socials <span className='text-white'>{"{"}</span></p>
          <div className='mx-2 sm:mx-5 space-y-1'>
            <p>website: <a href="" className='text-blue-400'>Ameer.com</a>;</p>
            <p>email: <a href="mailto:ameernagarasi6@gmail.com" className='text-blue-400'>ameernagarasi6@gmail.com</a>;</p>
            <p>github: <a href="https://github.com/Ameer114" className='text-blue-400'>Github</a>;</p>
            <p>linkedin: <a href="https://www.linkedin.com/in/ameer-nagarasi/" className='text-blue-400'>Ameer Nagarasi</a>;</p>
            <p>instagram: <a href="https://www.instagram.com/coderwithcoffee" className='text-blue-400'>coderwithcoffee</a>;</p>
            <p>twitter: <a href="https://x.com/AmeerNagar76085" className='text-blue-400'>ameer114</a> ;</p>
          </div>
          <p className='mt-[2px] text-white'>{"}"}</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
