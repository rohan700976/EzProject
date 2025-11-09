import React from "react";
import videoImg from "../assets/portfolioImg/video.png";
import cam from "../assets/portfolioImg/Cam Group.svg";
import footerImg from "../assets/portfolioImg/Footer Vector.png";
import leftArrow from "../assets/portfolioImg/leftArrow.png";
import rightArrow from "../assets/portfolioImg/rightArrow.png";

function Portfolio() {
  return (
    <div className="relative w-full min-h-screen bg-[#f8f5f2] overflow-hidden">

      <img
        src={cam}
        alt="camera"
        className="absolute left-[3%] sm:left-[8%] lg:left-[15%] top-[10%] sm:top-[15%] lg:top-1/6 w-28 sm:w-40 lg:w-52 opacity-60 "
      />
      <img
        src={footerImg}
        alt="footer design"
        className="absolute right-0 bottom-0 w-40 sm:w-56 lg:w-72 rotate-[23deg] opacity-60"
      />


      <div className="text-center pt-16 sm:pt-20  px-4">
        <h1 className="text-2xl font-[Halant] sm:text-3xl md:text-4xl text-gray-800 font-medium">
          The Highlight Reel
        </h1>
        <p className="text-sm sm:text-base md:text-lg mt-3 text-gray-600 font-[Instrument_Sans]">
          Watch the magic we’ve captured.
        </p>
      </div>


      <div className="relative flex justify-center items-center mt-10 sm:mt-12">

        <div className="w-[50px] md:ml-78 sm:w-[70px] md:w-[80px] h-[200px] sm:h-[260px] md:h-[305px] bg-[#FFFFFF] absolute left-[5%] sm:left-[10%] md:left-[105px] flex justify-center items-center shadow-md">
          <img
            src={leftArrow}
            alt="left"
            className="w-6 sm:w-8 md:w-10 cursor-pointer hover:scale-110 transition-transform"
          />
        </div>


        <div className="relative w-[85%] sm:w-[75%] md:w-[650px] lg:w-[700px]">
          <img
            src={videoImg}
            alt="highlight video"
            className="relative z-10 w-full rounded-md shadow-lg"
          />
        </div>

        <div className="w-[50px] md:mr-78 sm:w-[70px] md:w-[80px]  h-[200px] sm:h-[260px] md:h-[305px] bg-[#FFFFFF] absolute right-[5%] sm:right-[10%] md:right-[106px] flex justify-center items-center shadow-md">
          <img
            src={rightArrow}
            alt="right"
            className="w-6 sm:w-8 md:w-10 cursor-pointer hover:scale-110 transition-transform"
          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
