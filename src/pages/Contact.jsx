import React, { useState } from "react";
import topRightImg from "../assets/contactImg/Footer Vector (1).png";
import bottomLeftImg from "../assets/contactImg/Footer Vector (2).png";
import axios from 'axios'

function Contact() {

    const [formData, SetFormData] = useState(
        {
            name: "",
            email: "",
            mobile: "",
            message: "",

        }
    )

    const handleSubmit =async (e) => {
         e.preventDefault();
        // console.log("hello");
        try {

            const response =await axios.post('https://vernanbackend.ezlab.in/api/contact-us/', {

                name: formData.name,
                email: formData.email,
                phone: formData.mobile,
                message: formData.message,

            });
            // console.log(response.data);
            if (response.status == 201) {
                alert('form submit Succesfully !');
            }
        } catch (error) {
            console.log("error", error);
        }

    }
    return (
        <div className="relative w-full min-h-screen bg-[#f8f5f2] flex justify-between items-center px-20 font-[Halant] overflow-hidden">
            {/* Background Designs */}
            <img
                src={topRightImg}
                alt="decor top right"
                className="absolute top-0 right-0 w-72 opacity-70"
            />
            <img
                src={bottomLeftImg}
                alt="decor bottom left"
                className="absolute bottom-0 left-0 w-72 opacity-70"
            />

            {/* Left Section */}
            <div className="w-[45%] text-gray-800 leading-relaxed">
                <p className="text-xl font-medium">
                    Whether you have an idea, a question, or simply want to explore how V
                    can work together, V’re just a message away.
                    <br />
                    Let’s catch up over coffee.
                    <br />
                    Great stories always begin with a good conversation.
                </p>
            </div>

            {/* Right Section (Form) */}
            <div className="w-[45%]">
                <h1 className="text-3xl font-medium text-center mb-2">Join the Story</h1>
                <p className="text-center text-gray-600 mb-8">
                    Ready to bring your vision to life? Let’s talk.
                </p>

                <form 
                 onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-full">
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => SetFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name*"
                        className="p-3 border border-gray-300 bg-gray-100 focus:outline-none focus:border-gray-500"
                    />
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => SetFormData({ ...formData, email: e.target.value })}
                        placeholder="Your email*"
                        className="p-3 border border-gray-300 bg-gray-100 focus:outline-none focus:border-gray-500"
                    />
                    <input
                        type="text"
                        value={formData.mobile}
                        onChange={(e) => SetFormData({ ...formData, mobile: e.target.value })}
                        placeholder="Phone"
                        className="p-3 border border-gray-300 bg-gray-100 focus:outline-none focus:border-gray-500"
                    />
                    <textarea
                        placeholder="Your message*"
                        value={formData.message}
                        onChange={(e) => SetFormData({ ...formData, message: e.target.value })}
                        rows="4"
                        className="p-3 border border-gray-300 bg-gray-100 focus:outline-none focus:border-gray-500"
                    ></textarea>

                    <button
                       
                        type="submit"
                        className="bg-[#e25b2a] text-white w-32 py-2 mx-auto mt-2 rounded-full hover:bg-[#c94b1f] transition-all"


                    >
                        Submit
                    </button>
                </form>

                <div className="text-center mt-8 text-sm text-[#e25b2a] font-medium">
                    <p>vemita@varnafilms.co.in &nbsp; | &nbsp; +91 98736 84567</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
