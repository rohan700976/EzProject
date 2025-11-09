import React from 'react';
import TED from '../assets/AboutUSImg/TED.png';
import mountainImg from '../assets/AboutUSImg/OBJECTS.png';

function AboutUs() {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row bg-[#fdf7f3] overflow-hidden">

      <div className="w-full lg:w-[45%] min-h-[60vh] lg:min-h-screen flex flex-col items-center  px-6 sm:px-8 md:px-10 py-10 lg:py-0 ">


        <h2 className="font-[Halant] font-medium text-2xl sm:text-3xl md:text-4xl text-gray-800 text-center mt-10  lg:mt-[180px] leading-relaxed">
          A montage of familiar faces and names.
        </h2>

        <p className="w-full sm:w-[90%] md:w-[400px] text-center mt-8 sm:mt-10 leading-relaxed text-gray-700 font-[Instrument_Sans] text-lg md:text-[17px] sm:text-xl md:text-2xl">
          Some stories come from the biggest names. Others begin with bold, rising voices.
          We’ve been fortunate to walk alongside both — listening, creating, and building stories that matter.
        </p>


        <div className="relative mt-12 lg:mt-16 h-[160px] sm:h-[180px] w-full sm:w-[360px] md:w-[400px] flex justify-center">

          <div className="absolute left-[5%] sm:left-0 top-0 rotate-[8deg] bg-[#fde68a] shadow-md w-[120px] sm:w-[150px] md:w-[180px] h-[120px] sm:h-[140px] md:h-[160px] flex flex-col items-center justify-center rounded-md">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">85+</h1>
            <p className="text-xs sm:text-sm text-gray-600">Projects</p>
          </div>


          <div className="absolute left-[35%] sm:left-[150px] top-[10px] rotate-[10deg] bg-[#fcd34d] shadow-md w-[120px] sm:w-[150px] md:w-[180px] h-[120px] sm:h-[140px] md:h-[160px] flex flex-col items-center justify-center rounded-md">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">50+</h1>
            <p className="text-xs sm:text-sm text-gray-600">Happy Clients</p>
          </div>

          <div className="absolute left-[65%] sm:left-[300px] top-[20px] rotate-[12deg] bg-[#fde68a] shadow-md w-[120px] sm:w-[150px] md:w-[180px] h-[120px] sm:h-[140px] md:h-[160px] flex flex-col items-center justify-center rounded-md">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">10+</h1>
            <p className="text-xs sm:text-sm text-gray-600">Awards</p>
          </div>
        </div>
      </div>


      <div className="w-full lg:w-[55%] min-h-[40vh] lg:min-h-screen flex flex-col items-center justify-start pt-8 sm:pt-10 md:pt-[50px] relative px-6 sm:px-10">


        <div className="font-[Island_Moments] text-[22px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-loose text-gray-800 text-center italic w-full sm:w-[85%] md:w-[80%]">
          <p>
            Every project is more than just a brief – <br />
            it’s a new chapter waiting to be written. <br />
            Together, we've crafted tales that inspire, <br />
            connect, and endure.
          </p>
        </div>


        <div className="flex flex-col items-center mt-10 sm:mt-14 md:mt-16 relative w-full">
          <img
            src={TED}
            alt="TED logo"
            className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] opacity-90 hover:opacity-100 transition"
          />
          <img
            src={mountainImg}
            alt="Mountain"
            className="absolute w-[220px] sm:w-[300px] md:w-[350px] lg:w-[400px] opacity-80 bottom-[-10px]"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
