import React from "react";
import contactImg from "./images/contact.jpg";
import logo from "./images/logo.jpg";
import bgImage from "./images/contactimage.jpg"; // <-- your background

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex flex-col items-center px-4 py-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#f5f1ea]/80 backdrop-blur-[2px]"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full flex flex-col items-center">

        {/* Logo + Heading */}
        <div className="text-center mb-10">
          <img
            src={logo}
            alt="Logo"
            className="mx-auto w-32 md:w-40 object-contain"
          />

          <h1 className="text-3xl md:text-4xl font-serif text-[#3d4a3e] mt-4">
            Contact Us
          </h1>

          <p className="text-[#5f6f60] mt-3 max-w-xl mx-auto text-sm md:text-base">
            We're here to assist you with any questions, bookings, or information you may need.
            Please reach out and begin your journey to wellness.
          </p>
        </div>

        {/* Main Card */}
        <div className="w-full max-w-6xl bg-white/70 backdrop-blur-lg rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden border border-white/40">

          {/* Left Section */}
          <div className="p-6 md:p-10 border-b md:border-b-0 md:border-r border-gray-200">
            
            <img
              src={contactImg}
              alt="Contact"
              className="rounded-xl mb-6 w-full h-48 md:h-56 object-cover shadow-md"
            />

            <div className="space-y-4 text-[#3d4a3e] text-sm md:text-base">
              <p className="font-medium">📞 +91 9876 543 210</p>
              <p className="text-xs text-gray-500">(Available on Whatsapp)</p>

              <p>✉️ info@ayurvedaalliance.com</p>
              <p>📍 Your Address Here</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6 text-[#3d4a3e] text-lg">
              <i className="fab fa-facebook hover:text-[#a67c52] cursor-pointer"></i>
              <i className="fab fa-instagram hover:text-[#a67c52] cursor-pointer"></i>
              <i className="fab fa-whatsapp hover:text-[#a67c52] cursor-pointer"></i>
            </div>
          </div>

          {/* Right Section */}
          <div className="p-6 md:p-10">
            <h2 className="text-xl md:text-2xl font-serif text-[#3d4a3e] mb-2">
              Send us a message
            </h2>

            <p className="text-sm text-gray-600 mb-6">
              We’ll get back to you as soon as possible.
            </p>

            <form className="space-y-4">
              
              <div>
                <label className="text-sm text-[#3d4a3e]">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c4a484] bg-white/80"
                />
              </div>

              <div>
                <label className="text-sm text-[#3d4a3e]">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c4a484] bg-white/80"
                />
              </div>

              <div>
                <label className="text-sm text-[#3d4a3e]">Phone</label>
                <div className="flex gap-2">
                  <select className="px-3 py-2 border rounded-lg bg-white/80">
                    <option>+91</option>
                    <option>+1</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Enter phone number"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c4a484] bg-white/80"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-[#3d4a3e]">Message</label>
                <textarea
                  rows="4"
                  placeholder="Type your message..."
                  className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#c4a484] bg-white/80"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#c4a484] to-[#a67c52] text-white py-2 rounded-full hover:opacity-90 transition shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;