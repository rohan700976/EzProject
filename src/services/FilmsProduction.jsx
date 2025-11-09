import React from "react";
import camera1 from "../assets/FIlms/Camera 01.svg";
import camera2 from "../assets/FIlms/Camera 02.svg";
import camera3 from "../assets/FIlms/Camera 03.svg";
import camera4 from "../assets/FIlms/Camera 04.svg";
import frameImg from "../assets/FIlms/filmImg.png";
import Vector from "../assets/FIlms/Vector 5.png";
import arrow from "../assets/FIlms/Arrow.svg";

function FilmsProduction({ onMouseLeave }) {
  return (
    <div className="relative bg-[#FAF6F3] min-h-screen overflow-hidden px-4 sm:px-8 md:px-10 py-10 font-[Halant]">

      <div className="text-center mt-10">
        <h2 className="text-base sm:text-lg md:text-2xl font-[Halant] text-gray-800 px-4">
          "Filmmaking is a chance to live many lifetimes." – Robert Altman
        </h2>
        <img
          src={Vector}
          alt="underline"
          className="mx-auto mt-2 w-3/4 sm:w-2/3 md:w-1/2"
        />
      </div>

      <button
        onClick={onMouseLeave}
        className="absolute left-4 sm:left-8 md:left-10 top-6 sm:top-8 border border-[#FF6B3D] text-[#FF6B3D] px-3 sm:px-4 py-1 rounded-full hover:bg-[#FF6B3D] hover:text-white transition text-sm sm:text-base"
      >
        &lt; Back
      </button>


      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 sm:gap-12 mt-16 sm:mt-20">
 
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64 sm:w-72">
          <img
            src={frameImg}
            alt="Film Production"
            onMouseLeave={onMouseLeave}
            className="w-full h-72 sm:h-80 object-cover"
          />
          <div className="text-center py-3 font-medium text-gray-700 text-sm sm:text-base">
            Film Production
          </div>
        </div>


        <div className="max-w-md text-gray-800 text-base sm:text-lg px-2 lg:px-5 text-center lg:text-left font-[Instrument_Sans]">
          <p className="mb-4">Who says films are just an escape?</p>
          <p className="mb-4">
            We see them as a way to live many lives – to feel, to explore, and to
            tell stories that stay. And with each film, we carry new memories and
            new reasons to keep creating.
          </p>
          <p className="font-semibold mb-2">V crafts:</p>
          <ul className="list-disc ml-6 text-left space-y-1">
            <li>Documentaries</li>
            <li>Corporate Videos</li>
            <li>2D Animation Videos</li>
            <li>3D Animation Videos</li>
          </ul>

          <div className="mt-6 text-center lg:text-left">
            <p className="text-sm text-gray-600 mb-1">Explore Now</p>
            <div className="flex justify-center lg:justify-start items-center">
              <img src={arrow} alt="arrow" className="w-16 sm:w-20" />
            </div>
          </div>
        </div>
      </div>

      <img
        src={camera1}
        alt=""
        className="absolute bottom-10 left-10 w-12 sm:w-16 md:w-20 opacity-70"
      />
      <img
        src={camera3}
        alt=""
        className="absolute top-28 sm:top-40 right-10 sm:right-20 md:right-40 w-16 sm:w-20 md:w-24 opacity-70"
      />
      <img
        src={camera4}
        alt=""
        className="absolute bottom-60 sm:bottom-72 right-16 sm:right-32 md:right-56 w-16 sm:w-20 md:w-24 opacity-70"
      />
      <img
        src={camera2}
        alt=""
        className="absolute bottom-6 right-8 sm:right-16 md:right-40 w-16 sm:w-20 md:w-24 opacity-70"
      />
    </div>
  );
}

export default FilmsProduction;
