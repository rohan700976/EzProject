import React from 'react';
import { motion } from 'framer-motion';
import vector5 from '../assets/servicesImg/vector 5.svg';
import tape from '../assets/servicesImg/image 6.png';
import serviceImage1 from '../assets/servicesImg/service1.png';
import serviceImage2 from '../assets/servicesImg/service2.png';
import serviceImage3 from '../assets/servicesImg/service3.png';
import footerImg from '../assets/servicesImg/Frame 33.svg';

function Service({ onMouseEnter }) {
  const spring = {
    type: "spring",
    mass: 1,
    stiffness: 80,
    damping: 20,
  };

  return (
    <div className="w-full min-h-screen bg-[#f8f5f2] py-12 sm:py-14 md:py-16 flex flex-col justify-between overflow-hidden">

      <div>
        <div className="text-center mb-10 sm:mb-12 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-3xl font-medium font-[Halant] text-gray-800">
            The storyboard reveals the breadth of our craft.
          </h1>
          <img src={vector5} alt="" className="mx-auto mt-2 w-[100px] sm:w-[140px] md:w-[500px]" />
        </div>

   
        <div className="flex justify-center flex-wrap gap-8 sm:gap-10 md:gap-14 mt-10 md:mt-20">
          
          <motion.div
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={spring}
            onMouseEnter={onMouseEnter}
            className="relative bg-white w-[260px] sm:w-[280px] md:w-72 shadow-md rotate-[5deg] cursor-pointer"
          >
            <img
              src={tape}
              alt=""
              className="absolute -top-3 sm:-top-4 left-2 -translate-x-1/2 rotate-[-15deg] w-[60px] sm:w-[70px] md:w-[140px]"
            />
            <img
              src={serviceImage2}
              alt=""
              className="w-full h-[320px] sm:h-[340px] md:h-80 object-cover rounded-sm"
            />
            <p className="text-center mt-3 font-medium text-gray-800 pb-4 text-sm sm:text-base">
              Film Production
            </p>
          </motion.div>

     
          <motion.div
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={spring}
            className="relative bg-white w-[260px] sm:w-[280px] md:w-72 shadow-md cursor-pointer"
          >
            <img
              src={tape}
              alt=""
              className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 w-[30px] sm:w-[70px] md:w-[130px]"
            />
            <img
              src={serviceImage1}
              alt=""
              className="w-full h-[320px] sm:h-[340px] md:h-80 object-cover rounded-sm"
            />
            <p className="text-center mt-3 font-medium text-gray-800 pb-4 text-sm sm:text-base">
              Branding
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={spring}
            className="relative bg-white w-[260px] sm:w-[280px] md:w-72 shadow-md rotate-[-5deg] cursor-pointer"
          >
            <img
              src={tape}
              alt=""
              className="absolute -top-3 sm:-top-5 -right-6 sm:-right-8 rotate-[33deg] w-[60px] sm:w-[70px] md:w-[140px]"
            />
            <img
              src={serviceImage3}
              alt=""
              className="w-full h-[320px] sm:h-[340px] md:h-80 object-cover rounded-sm"
            />
            <p className="text-center mt-3 font-medium text-gray-800 pb-4 text-sm sm:text-base">
              Art Curation
            </p>
          </motion.div>
        </div>
      </div>

      <div className="w-full mt-12 sm:mt-16 md:mt-20">
        <img
          src={footerImg}
          alt="Footer"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default Service;
