import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo1 from "../assets/navabarLogos/logo1.png";
import Navbar from "../assets/navabarLogos/Navbar.png";
import Menu from "../assets/navabarLogos/Menu.svg";

function Header() {
    const [isShow, setIsShow] = useState(false);

    const handleClick = () => {
        setIsShow(!isShow);
    };

    return (
        <div
            className="fixed top-0 left-0 w-full h-[90px] bg-[#FFFBFB59] 
                       p-5 flex items-center justify-between overflow-hidden z-50 "
        >
            <AnimatePresence mode="wait">
                {!isShow ? (
                    <motion.div
                        key="normal-header"
                        className="w-full flex justify-between items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div className="w-[174px] h-[63px] pt-[5px] pr-[25px] pb-[10px] pl-[25px] ">
                            <img src={logo1} alt="Logo" className="w-[124px] h-[48px]" />
                        </div>

                        {/* Menu Icon on Right */}
                        <div
                            className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer"
                            onClick={handleClick}
                        >
                            <img src={Menu} alt="Menu" />
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="animated-header"
                        className="w-full h-screen flex items-center justify-center cursor-pointer"
                        onClick={handleClick}
                        initial={{ x: "100vw" }}  // Start from right
                        animate={{ x: 0 }}        // Slide into view
                        exit={{ x: "100vw" }}     // Slide out to right
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <motion.img
                            src={Navbar}
                            alt="Navbar Background"
                            className="w-full h-[103px]"
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100vw" }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Header;
