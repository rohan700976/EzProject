import React from "react";
import textImg from "../assets/ourTeamImg/textImg.png";
import indiaGate from "../assets/ourTeamImg/indiaGate.svg";
import groupImg from "../assets/ourTeamImg/Group 2.svg";
import vectorLeft from "../assets/ourTeamImg/vector.svg";
import vectorFilmMakers from "../assets/ourTeamImg/vector (1).svg";
import vectorArt from "../assets/ourTeamImg/vector (2).svg";

function OurTeam() {
  return (
    <div className="w-full min-h-screen bg-[#f8f5f2] flex flex-col lg:flex-row relative overflow-hidden px-4 sm:px-6 md:px-8">
     
      <div className="w-full lg:w-[35%] flex flex-col items-center justify-center relative mt-10 lg:mt-0">
       
        <div className="relative w-[280px] sm:w-[350px] md:w-[380px] lg:w-[420px] h-auto rotate-[-4deg] drop-shadow-xl">
          <img src={textImg} alt="text" className="w-full h-full object-contain" />
        </div>

        
        <div className="relative w-[220px] sm:w-[260px] md:w-[300px] mt-8 sm:mt-10 lg:mt-12 ml-0 lg:ml-10">
          <img src={indiaGate} alt="India Gate" className="w-full" />

          <img
            src={vectorLeft}
            alt="arrow"
            className="absolute top-[-25%] left-[110%] sm:left-[120%] md:left-[130%] lg:left-[150%] w-[100px] sm:w-[130px] md:w-[150px] lg:w-[160px] rotate-[2deg] hidden sm:block"
          />

          <p className="absolute top-[30%] left-[105%] sm:left-[120%] md:left-[130%] lg:left-[135%] text-xs sm:text-sm italic text-gray-700 whitespace-nowrap hidden sm:block">
            Branding Experts
          </p>
        </div>
      </div>

     
      <div className="w-full lg:w-[65%] relative flex flex-col items-center justify-center mt-10 lg:mt-0">
      
        <img
          src={vectorFilmMakers}
          alt="Film Makers Arrow"
          className="absolute top-[10%] sm:top-[12%] md:top-[15%] left-[10%] sm:left-[15%] md:left-[20%] w-[100px] sm:w-[130px] md:w-[160px] hidden sm:block"
        />
        <p className="absolute top-[9%] sm:top-[11%] md:top-[13%] left-[16%] md:left-[27%] italic text-gray-700 text-xs sm:text-sm hidden sm:block">
          Film Makers
        </p>

       
        <img
          src={vectorArt}
          alt="Art Curators Arrow"
          className="absolute top-[22%] sm:top-[26%] md:top-[30%] right-[4%] sm:right-[6%] md:right-[8%] w-[100px] sm:w-[130px] md:w-[160px] hidden sm:block"
        />
        <p className="absolute top-[19%] sm:top-[23%] md:top-[26%] right-[3%] sm:right-[4%] md:right-[5%] italic text-gray-700 text-xs sm:text-sm hidden sm:block">
          Art Curators
        </p>

     
        <div className="mt-10 sm:mt-16 lg:mt-20">
          <img
            src={groupImg}
            alt="Our Team"
            className="w-[300px] sm:w-[400px] md:w-[480px] lg:w-[520px]"
          />
        </div>

    
        <div className="mt-6 sm:mt-8 text-center px-4">
          <p className="text-sm sm:text-base md:text-lg font-light text-gray-700 font-[Halant]">
            Take a closer look at the stories V bring to life.
          </p>
          <button className="mt-4 bg-[#ec5b2b] text-white px-4 sm:px-5 py-2 rounded-full text-sm hover:scale-105 transition-transform">
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
