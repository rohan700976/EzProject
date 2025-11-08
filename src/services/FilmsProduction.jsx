import React from "react";
import camera1 from "../assets/FIlms/Camera 01.svg";
import camera2 from "../assets/FIlms/Camera 02.svg";
import camera3 from "../assets/FIlms/Camera 03.svg";
import camera4 from "../assets/FIlms/Camera 04.svg";
import frameImg from "../assets/FIlms/filmImg.png";
import Vector from "../assets/FIlms/Vector 5.png";
import arrow from '../assets/FIlms/Arrow.svg'

function FilmsProduction() {
  return (
    <div className="relative bg-[#FAF6F3] min-h-screen overflow-hidden px-10 py-10">
      {/* Top Quote */}
      <div className="text-center mt-10">
        <h2 className="text-xl italic font-serif text-gray-800">
          "Filmmaking is a chance to live many lifetimes." – Robert Altman
        </h2>
        <img src={Vector} alt="underline" className="mx-auto mt-2 w-1/2" />
      </div>

      {/* Back Button */}
      <button className="absolute left-55 top-20 border border-[#FF6B3D] text-[#FF6B3D] px-4 py-1 rounded-full hover:bg-[#FF6B3D] hover:text-white transition">
        &lt; Back
      </button>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mt-20">
        {/* Left Image Section */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={frameImg} alt="Film Production" className="w-72 h-80 object-cover" />
          <div className="text-center py-3 font-medium text-gray-700">Film Production</div>
        </div>

        {/* Right Text Section */}
        <div className="max-w-md text-gray-800 ml-5 text-lg">
          <p className="mb-4 ">
            Who says films are just an escape?
          </p>
          <p className="mb-4 ">
            We see them as a way to live many lives – to feel, to explore, and to tell stories that stay.
            And with each film, we carry new memories and new reasons to keep creating.
          </p>
          <p className="font-semibold mb-2">V crafts:</p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Documentaries</li>
            <li>Corporate Videos</li>
            <li>2D Animation Videos</li>
            <li>3D Animation Videos</li>
          </ul>

          {/* Explore Now */}
          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-1">Explore Now</p>
            <div className="flex items-center">
              <img src={arrow} alt="arrow" className="w-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Camera Icons */}
      <img src={camera1} alt="" className="absolute bottom-15 left-30 w-20 opacity-70" />
      <img src={camera3} alt="" className="absolute top-40 right-40 w-25 opacity-70" />
      <img src={camera4} alt="" className="absolute bottom-80 right-55 w-25 opacity-70" />
      <img src={camera2} alt="" className="absolute bottom-12 right-45 w-25 opacity-70" />
    </div>
  );
}

export default FilmsProduction;
