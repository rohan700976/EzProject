import React from 'react'
import Brand1 from '../assets/brandingImg/Branding Vector 01.svg'
import Brand2 from '../assets/brandingImg/Branding Vector 02.svg'
import Brand3 from '../assets/brandingImg/Branding Vector 03.svg'
import Brand4 from '../assets/brandingImg/Branding Vector 04.svg'
import frameImg from '../assets/brandingImg/frameImg.png'
import arrow from '../assets/FIlms/Arrow.svg'
import vector from'../assets/FIlms/Vector5.png'

function Branding() {
  return (
    <div className="relative bg-[#FAF6F3] min-h-screen overflow-hidden px-10 py-10">
          {/* Top Quote */}
          <div className="text-center mt-10">
            <h2 className="text-xl italic font-serif text-gray-800">
              A brand is a voice, and a product is a souvenir." - Lisa Gansky
            </h2>
            <img src={vector} alt="underline" className="mx-auto mt-2 w-1/2" />
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
              <div className="text-center py-3 font-medium text-gray-700">Branding</div>
            </div>
    
            {/* Right Text Section */}
            <div className="max-w-md text-gray-800 ml-5 text-lg">
              <p className="mb-4 ">
                A brand isn’t just what you see - it’s what
              </p>
              <p className="mb-4 ">
               you remember, what you carry home, and what you trust.
               We shape brands that people remember, return to, and fall in love with.

              </p>
              <p className="font-semibold mb-2">V crafts:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Branding & Communication</li>
                <li>Market Mapping</li>
                <li>Content Management</li>
                <li>Social Media Management</li>
                <li>Rebranding</li>
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
          <img src={Brand2} alt="" className="absolute bottom-15 left-30 w-20 opacity-70" />
          <img src={Brand4} alt="" className="absolute top-40 right-40 w-25 opacity-70" />
          <img src={Brand3} alt="" className="absolute bottom-80 right-55 w-25 opacity-70" />
          <img src={Brand1} alt="" className="absolute bottom-12 right-45 w-25 opacity-70" />
        </div>
  )
}

export default Branding