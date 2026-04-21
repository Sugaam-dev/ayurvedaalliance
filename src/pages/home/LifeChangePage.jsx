import React from "react";
import heroImg from "./images/greenhouse.jpg";


const LifeChangePage = () => {
  return (
    <div className="w-full bg-[#e9e6df]">

      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] md:h-[90vh]">
        
        {/* Background */}
        <img
          src={heroImg}
          alt="Retreat"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          
          <h2 className="text-white text-xl md:text-3xl lg:text-4xl font-serif mb-4">
            Ready to change your life?
          </h2>

          <p className="text-gray-200 text-xs md:text-sm max-w-md leading-relaxed">
            A stronger, more vibrant and healthier you is only a booking away.
            Contact us to book your stay or to ask your questions and find out
            more about how a program can benefit you.
          </p>

          <button className="mt-6 px-6 py-3 border border-white text-white text-xs tracking-widest hover:bg-white hover:text-black transition">
            BOOK NOW
          </button>

        </div>
      </section>

    </div>
  );
};

export default LifeChangePage;