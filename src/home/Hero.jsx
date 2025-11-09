import React, { useState } from "react";
import mandala from "../assets/heroImg/Hero Mandala.png";
import logo1 from "../assets/navabarLogos/logo1.png";

function Hero() {
  const [isRotating, setIsRotating] = useState(false);

  const handleMandalaClick = () => {
    setIsRotating(!isRotating);
  };

  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row bg-[#f8f5f2] overflow-hidden">

      <div className="w-full lg:w-[40%] min-h-[50vh] lg:min-h-screen flex items-center justify-center py-10 lg:py-0">
        <div className="relative flex items-center justify-center">
          <img
            src={mandala}
            alt="Mandala"
            onClick={handleMandalaClick}
            className={`cursor-pointer transition-all duration-500 ease-linear
              w-[200px] sm:w-[280px] md:w-[360px] lg:w-[480px]
              h-[200px] sm:h-[280px] md:h-[360px] lg:h-[480px]
              ${isRotating ? "animate-anticlockwise" : ""}`}
          />
          <img
            src={logo1}
            alt="Logo"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   w-[80px] sm:w-[100px] md:w-[130px] lg:w-[160px]" />
        </div>
      </div>


      <div className="w-full lg:mt-[-120px] lg:w-[60%] min-h-[50vh] lg:min-h-screen flex flex-col items-center lg:items-start justify-center px-4 sm:px-8 md:px-12 lg:px-0">

        <div className="h-auto lg:h-[170px] mt-10 lg:mt-40 lg:ml-[70px] text-center lg:text-center text-[#0F3255] space-y-3 sm:space-y-4 lg:space-y-5">
          <p className="font-[Island_Moments] font-normal text-[24px] sm:text-[32px] md:text-[42px] lg:text-[65px] leading-[100%] tracking-[0]">
            Varnan is where stories find
          </p>
          <p className="font-[Island_Moments] font-normal text-[24px] sm:text-[32px] md:text-[42px] lg:text-[50px] leading-[100%] tracking-[0]">
            their voice and form
          </p>
        </div>


        <div className="mt-4 lg:mt-6">
          <h2 className="font-[Halant] font-normal text-[20px] sm:text-[26px] md:text-[34px] lg:text-[40px] lg:ml-45 leading-[100%] tracking-[0] text-center md: text-[#F15D2B]">
            Films . Brands . Art
          </h2>
        </div>

        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mt-6 lg:mt-12 text-center lg:text-left px-3 sm:px-5 lg:ml-16">
          <p className="text-[14px] sm:text-[15px] md:text-[17px] lg:text-[18px] leading-relaxed text-gray-800 font-[Instrument-Sans]">
            Since 2009, V’ve been telling stories — stories of people, their journeys,
            and the places that shape them. Some begin in polished boardrooms, others
            in humble village squares. But every story starts the same way — by listening
            with intention. V believes it takes trust, patience, and an eye for the unseen
            to capture what truly matters. V doesn’t just tell stories — V honors them.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
