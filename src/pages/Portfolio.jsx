import React from "react";
import videoImg from "../assets/portfolioImg/video.png";
import cam from "../assets/portfolioImg/Cam Group.svg";
import footerImg from "../assets/portfolioImg/Footer Vector.png";
import leftArrow from "../assets/portfolioImg/leftArrow.png";
import rightArrow from "../assets/portfolioImg/rightArrow.png";

function Portfolio() {
  return (
    <div className="relative w-full min-h-screen bg-[#f8f5f2] overflow-hidden">
      {/* Background Decorations */}
      <img
        src={cam}
        alt="camera"
        className="absolute left-15 top-1/6 w-52 opacity-60"
      />
      <img
        src={footerImg}
        alt="footer design"
        className="absolute right-0 bottom-0 w-72  rotate-[23deg] opacity-60 pl-15"
      />

      {/* Section Header */}
      <div className="text-center pt-20 font-[Halant]">
        <h1 className="text-4xl text-gray-800 font-medium">
          The Highlight Reel
        </h1>
        <p className="text-lg mt-4 text-gray-600">
          Watch the magic we’ve captured.
        </p>
      </div>

      {/* Video Section */}
      <div className="relative flex justify-center items-center mt-12">
        {/* Left Arrow */}
        <div className="w-[80px] h-[305px] bg-[#FFFFFF] absolute left-105 p-3">

        <img
          src={leftArrow}
          alt="left"
          className="absolute left-4 w-10 cursor-pointer hover:scale-110 transition-transform top-22"
        />
        </div>

        {/* Video Frame */}
        <div className="relative w-[700px]">
          {/* Film Strip Frame */}
          {/* <div className="absolute inset-0 bg-[url('../assets/portfolioImg/filmstrip.png')] bg-contain bg-center bg-no-repeat"></div> */}

          {/* Main Video */}
          <img
            src={videoImg}
            alt="highlight video"
            className="relative z-10 w-full rounded-md shadow-lg"
          />

          {/* Play Button Overlay */}
          {/* <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg">
            ▶
          </button> */}
        </div>

        {/* Right Arrow */}
        <div className="w-[80px] h-[305px] bg-white absolute right-106">

        <img
          src={rightArrow}
          alt="right"
          className="absolute right-3 w-10 cursor-pointer hover:scale-110 transition-transform top-22"
        />

        </div>
      </div>
    </div>
  );
}

export default Portfolio;
