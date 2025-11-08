import React from 'react'
import TED from '../assets/AboutUSImg/TED.png'
import mountainImg from '../assets/AboutUSImg/OBJECTS.png'

function AboutUs() {
  return (
    <div className='w-full min-h-screen flex  bg-[#fdf7f3] overflow-hidden'>

      {/* LEFT SIDE */}
      <div className='w-[45%] min-h-screen flex flex-col items-center border-r border-gray-200  border '>
        
        {/* Title */}
        <h2 className='font-[Halant] font-medium text-4xl text-gray-800 text-center mt-[180px] leading-relaxed'>
          A montage of familiar faces and names.
        </h2>

        {/* Description */}
        <p className='w-[400px] text-center mt-[50px]  leading-relaxed text-gray-700 font-[Instrument-sans] text-2xl'>
          Some stories come from the biggest names. Others begin with bold, rising voices.
          We’ve been fortunate to walk alongside both — listening, creating, and building stories that matter.
        </p>

        {/* Stat Cards */}
        <div className='relative mt-15 ml-10 h-[180px] w-[400px]'>
          {/* Card 1 */}
          <div className="absolute left-0 top-0 rotate-[8deg] bg-[#fde68a] shadow-md w-[180px] h-[160px] flex flex-col items-center justify-center rounded-md">
            <h1 className="text-4xl font-bold text-gray-800">85+</h1>
            <p className="text-sm text-gray-600">Projects</p>
          </div>

          {/* Card 2 */}
          <div className="absolute left-[150px] top-[10px] rotate-[10deg] bg-[#fcd34d] shadow-md w-[180px] h-[160px] flex flex-col items-center justify-center rounded-md">
            <h1 className="text-4xl font-bold text-gray-800">50+</h1>
            <p className="text-sm text-gray-600">Happy Clients</p>
          </div>

          {/* Card 3 */}
          <div className="absolute left-[300px] top-[20px] rotate-[12deg] bg-[#fde68a] shadow-md w-[180px] h-[160px] flex flex-col items-center justify-center rounded-md">
            <h1 className="text-4xl font-bold text-gray-800">10+</h1>
            <p className="text-sm text-gray-600">Awards</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className='w-[55%] min-h-screen flex flex-col items-center justify-start pt-[50px] relative'>
        
        {/* Handwritten Quote */}
        <div className='font-[Island-Moments] text-[36px] leading-loose text-gray-800 text-center italic w-[80%] '>
          <p>
            Every project is more than just a brief – <br />
            it’s a new chapter waiting to be written. <br />
            Together, we've crafted tales that inspire, <br />
            connect, and endure.
          </p>
        </div>

        {/* Logos + Illustration */}
        <div className='flex flex-col items-center mt-16 space-y-6'>
          <img src={TED} alt="TED logo" className='w-[600px] opacity-90 hover:opacity-100 transition relative ml-80' />
          <img src={mountainImg} alt="Mountain" className='absolute w-[400px] opacity-80 bottom-2 ml-50' />
        </div>
      </div>

    </div>
  )
}

export default AboutUs
