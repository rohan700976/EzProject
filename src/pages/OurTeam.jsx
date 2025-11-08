import React from "react";
import textImg from "../assets/ourTeamImg/textImg.png";
import indiaGate from "../assets/ourTeamImg/indiaGate.svg";
import groupImg from "../assets/ourTeamImg/Group 2.svg";
import vectorLeft from "../assets/ourTeamImg/vector.svg";
import vectorFilmMakers from "../assets/ourTeamImg/vector (1).svg";
import vectorArt from "../assets/ourTeamImg/vector (2).svg";

function OurTeam() {
  return (
    <div className="w-full min-h-screen bg-[#f8f5f2] flex relative overflow-hidden">
      {/* Left Section */}
      <div className="w-[35%] flex flex-col items-center justify-center relative">
        {/* Pinned Note */}
        <div className="relative w-[420px] h-[320px] rotate-[-4deg] drop-shadow-xl">
          <img src={textImg} alt="text" className="w-full h-full object-contain" />
        </div>

        {/* India Gate + Branding Expert */}
        {/* India Gate + Branding Expert */}
<div className="relative w-[300px] mt-12 ml-10">
  {/* India Gate */}
  <img src={indiaGate} alt="India Gate" className="w-full" />

  {/* Curved Arrow */}
  <img
    src={vectorLeft}
    alt="arrow"
    className="absolute top-[-30%] left-[150%]  w-[160px] rotate-[2deg]"
  />

  {/* Label */}
  <p className="absolute top-[28%] left-[135%] text-sm italic text-gray-700 whitespace-nowrap">
    Branding Experts
  </p>
</div>

      </div>

      {/* Right Section */}
      <div className="w-[65%] relative flex flex-col items-center justify-center">
        {/* Arrows */}
        <img
          src={vectorFilmMakers}
          alt="Film Makers Arrow"
          className="absolute top-[15%] left-[20%] w-[160px]"
        />
        <p className="absolute top-[13%] left-[27%] italic text-gray-700">
          Film Makers
        </p>

        <img
          src={vectorArt}
          alt="Art Curators Arrow"
          className="absolute top-[30%] right-[8%] w-[160px]"
        />
        <p className="absolute top-[26%] right-[5%] italic text-gray-700">
          Art Curators
        </p>

        {/* Team Silhouettes */}
        <div className="mt-20">
          <img src={groupImg} alt="Our Team" className="w-[520px]" />
        </div>

        {/* Bottom Text + Button */}
        <div className="mt-8 text-center">
          <p className="text-lg font-light text-gray-700">
            Take a closer look at the stories V bring to life.
          </p>
          <button className="mt-4 bg-[#ec5b2b] text-white px-5 py-2 rounded-full text-sm hover:scale-105 transition-transform">
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
