import React, { useState } from 'react'
import mandala from '../assets/heroImg/Hero Mandala.png'
import logo1 from '../assets/navabarLogos/logo1.png'

function Hero() {
    const [isRotating, setIsRotating] = useState(false);

    const handleMandalaClick = () => {
        setIsRotating(!isRotating);
    };

    return (
        <div>
            <div className='w-full min-h-screen flex bg-[#f8f5f2]'>
                <div className="w-[40%] min-h-screen  flex items-center justify-center">
                    {/* Parent container should be relative */}
                    <div className="relative mt-15 ml-20">
                        <img
                            src={mandala}
                            alt="Mandala"
                            onClick={handleMandalaClick}
                            className={`w-[480px] h-[480px] cursor-pointer transition-all duration-500 ease-linear 
                                ${isRotating ? 'animate-anticlockwise' : ''}`}
                        />
                        <img
                            src={logo1}
                            alt="Logo"
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                </div>

                <div className='w-[60%] min-h-screen '>
                    <div className=' h-[170px] mt-40 ml-[70px] text-center text-[#0F3255]  space-y-5'>
                        <p className='font-[Island_Moments] font-normal text-[50px] leading-[100%] tracking-[0]'>
                            Varnan is where stories find
                        </p>
                        <p className='font-[Island_Moments] font-normal text-[50px] leading-[100%] tracking-[0]'>
                            their voice and form
                        </p>
                    </div>

                    <div>
                        <h2 className='font-[Halant] font-normal text-[40px] leading-[100%] tracking-[0] text-center text-[#F15D2B]'>
                            Films . Brands . Art
                        </h2>
                    </div>

                    <div className='w-100 h-28 mt-13 ml-70 text-center'>
                        <p>
                            Since 2009, V’ve been telling stories - stories of people, their journeys, and the places that shape them.
                            Some begin in polished boardrooms, others in humble village squares. But every story starts the same way - by listening with intention. V believes it takes trust, patience, and an eye for the unseen to capture what truly matters.
                            V doesn’t just tell stories - V honors them.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
