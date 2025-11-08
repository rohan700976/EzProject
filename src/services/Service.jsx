import React from 'react'
import { motion } from 'framer-motion'
import vector5 from '../assets/servicesImg/vector 5.svg'
import tape from '../assets/servicesImg/image 6.png'
import serviceImage2 from '../assets/servicesImg/service1.png'
import serviceImage1 from '../assets/servicesImg/service2.png'
import serviceImage3 from '../assets/servicesImg/service3.png'
import footerImg from '../assets/servicesImg/Frame 33.svg'
function Service() {
    const spring = {
        type: "spring",
        mass: 1,
        stiffness: 80,
        damping: 20,
    }

    return (
        <div className="w-full min-h-screen bg-[#f8f5f2] py-16 flex flex-col justify-between">

            {/* Header */}
            <div>
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-medium font-[Halant] text-gray-800">
                        The storyboard reveals the breadth of our craft.
                    </h1>
                    <img src={vector5} alt="" className="mx-auto mt-2" />
                </div>

                {/* Service Cards */}
                <div className="flex justify-center gap-14 flex-wrap mt-30">

                    {/* Card 1 */}
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 0 }}
                        transition={spring}
                        className="relative bg-white w-72 shadow-md rotate-[5deg] cursor-pointer"
                    >
                        <img src={tape} alt="" className="absolute -top-4 left-2 -translate-x-1/2 rotate-[-15deg] w-30" />
                        <img
                            src={serviceImage1}
                            alt=""
                            className="w-full h-80 object-cover rounded-sm"
                        />
                        <p className="text-center mt-3 font-medium text-gray-800 pb-4">
                            Film Production
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 0 }}
                        transition={spring}
                        className="relative bg-white w-72 shadow-md cursor-pointer"
                    >
                        <img src={tape} alt="" className="absolute -top-5 left-1/2 -translate-x-1/2 w-30" />
                        <img
                            src={serviceImage2}
                            alt=""
                            className="w-full h-80 object-cover rounded-sm"
                        />
                        <p className="text-center mt-3 font-medium text-gray-800 pb-4">
                            Branding
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{ scale: 1.05, rotate: 0 }}
                        transition={spring}
                        className="relative bg-white w-72 shadow-md rotate-[-5deg] cursor-pointer"
                    >
                        <img src={tape} alt="" className="absolute -top-5 -right-25 -translate-x-1/2 rotate-[33deg] w-30" />
                        <img
                            src={serviceImage3}
                            alt=""
                            className="w-full h-80 object-cover rounded-sm"
                        />
                        <p className="text-center mt-3 font-medium text-gray-800 pb-4">
                            Art Curation
                        </p>
                    </motion.div>

                </div>
            </div>

            {/* Footer Image */}
            <div className="w-full mt-20">
                <img
                    src={footerImg}
                    alt="Footer"
                    className="w-full h-auto object-cover"
                />
            </div>
        </div>
    )
}

export default Service
