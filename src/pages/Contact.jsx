import React, { useState } from "react";
import topRightImg from "../assets/contactImg/Footer Vector (1).png";
import bottomLeftImg from "../assets/contactImg/Footer Vector (2).png";
import axios from "axios";

function Contact() {
    const [formData, SetFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://vernanbackend.ezlab.in/api/contact-us/", {
                name: formData.name,
                email: formData.email,
                phone: formData.mobile,
                message: formData.message,
            });

            if (response.status === 201) {
                alert("Form submitted successfully!");
                SetFormData({ name: "", email: "", mobile: "", message: "" });
            }
        } catch (error) {
            console.log("error", error);
            alert("Something went wrong. Please try again!");
        }
    };

    return (
        <div className="relative w-full min-h-screen bg-[#f8f5f2] flex flex-col md:flex-row justify-between items-center px-6 sm:px-10 md:px-16 lg:px-20 font-[Halant] overflow-hidden py-12 md:py-0">

            <img
                src={topRightImg}
                alt="decor top right"
                className="absolute top-0 right-0 w-[150px] sm:w-[200px] md:w-72 opacity-70"
            />
            <img
                src={bottomLeftImg}
                alt="decor bottom left"
                className="absolute bottom-0 left-0 w-[150px] sm:w-[200px] md:w-72 opacity-70"
            />

            <div className="w-full md:w-[45%] text-gray-800 leading-relaxed text-center md:text-left mb-10 md:mb-0 px-2 sm:px-0">
                <p className="text-[16px] sm:text-xl font-[400px] font-[Instrument_Sans]">
                    Whether you have an idea, a question, or simply want to explore how V can work together,
                    V’re just a message away.
                    <br />
                    Let’s catch up over coffee.
                    <br />
                    Great stories always begin with a good conversation.
                </p>
            </div>


            <div className="w-full md:w-[45%] bg-white/0 p-4 sm:p-0">
                <h1 className="text-2xl sm:text-3xl font-medium text-center mb-2 font-[Halant]">
                    Join the Story
                </h1>
                <p className="text-center text-gray-600 mb-8 text-sm sm:text-base font-[Instrument_Sans]">
                    Ready to bring your vision to life? Let’s talk.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 w-full max-w-lg mx-auto"
                >
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => SetFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name*"
                        required
                        className="p-3 border border-gray-300 bg-gray-100 focus:outline-none focus:border-gray-500 rounded"
                    />
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => SetFormData({ ...formData, email: e.target.value })}
                        placeholder="Your email*"
                        required
                        className="p-3 border border-gray-300 bg-gray-100 focus:outline-none focus:border-gray-500 rounded"
                    />
                    <input
                        type="text"
                        value={formData.mobile}
                        onChange={(e) => SetFormData({ ...formData, mobile: e.target.value })}
                        placeholder="Phone"
                        className="p-3 border border-gray-300 bg-gray-100 focus:outline-none focus:border-gray-500 rounded"
                    />
                    <textarea
                        placeholder="Your message*"
                        value={formData.message}
                        onChange={(e) => SetFormData({ ...formData, message: e.target.value })}
                        rows="4"
                        required
                        className="p-3 border border-gray-300 bg-gray-100 focus:outline-none focus:border-gray-500 rounded resize-none"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-[#e25b2a] text-white w-32 py-2 mx-auto mt-2 rounded-full hover:bg-[#c94b1f] transition-all"
                    >
                        Submit
                    </button>
                </form>

                <div className="text-center mt-8 text-sm sm:text-base text-[#e25b2a] font-medium">
                    <p>vemita@varnafilms.co.in &nbsp; | &nbsp; +91 98736 84567</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
