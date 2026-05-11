import React from "react";
import heroImg from "./images/dsc.jpg";
import { Leaf, Play, ArrowDown } from "lucide-react";

const RetreatPage = () => {
  return (
    <div className="w-full bg-[#ece7de] overflow-hidden">

      {/* ===================================================== */}
      {/* HERO SECTION */}
      {/* ===================================================== */}
      <section className="relative w-full min-h-[100svh] sm:min-h-[85vh] lg:min-h-screen overflow-hidden">

        {/* Background Image */}
        <img
          src={heroImg}
          alt="Luxury Retreat"
          className="absolute inset-0 w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-[4000ms]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/65"></div>

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[300px] sm:w-[350px] h-[300px] sm:h-[350px] bg-[#6d8b74]/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[350px] h-[300px] sm:h-[350px] bg-[#8b5e3c]/20 blur-3xl rounded-full"></div>

        {/* Floating Circle */}
        <div className="absolute top-[16%] right-[8%] hidden xl:flex items-center justify-center w-32 h-32 rounded-full border border-white/20 backdrop-blur-md bg-white/5">
          
          <div className="text-center">
            <p className="text-white text-[11px] tracking-[0.25em] uppercase">
              Bali
            </p>

            <p className="text-[#d7c0a6] text-2xl font-serif italic mt-1">
              Retreat
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[100svh] sm:min-h-[85vh] lg:min-h-screen px-5 sm:px-8 md:px-12 pt-24 pb-16">

          <div className="max-w-6xl mx-auto text-center">

            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-6 sm:mb-8 max-w-full">
              
              <Leaf className="text-[#d7c0a6]" size={16} />

              <p className="text-[10px] sm:text-xs tracking-[0.24em] sm:tracking-[0.28em] uppercase text-white font-medium whitespace-nowrap">
                Luxury Wellness Escape
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-white font-serif leading-[0.95] tracking-tight">

              <span className="block text-[3rem] leading-[0.9] sm:text-[3.8rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] 2xl:text-[8.5rem]">
                A Life-
                <br className="sm:hidden" />
                Changing
              </span>

              <span className="block italic text-[#d7c0a6] text-[2.6rem] leading-[0.95] sm:text-[3.3rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] 2xl:text-[8rem] mt-2">
                Retreat For The Soul
              </span>
            </h1>

            {/* Divider */}
            <div className="w-24 sm:w-32 h-[2px] bg-gradient-to-r from-[#6d8b74] to-[#b08968] mx-auto mt-7 sm:mt-8 mb-7 sm:mb-8"></div>

            {/* Description */}
            <p className="max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto text-white/85 text-base sm:text-base md:text-lg xl:text-[20px] 2xl:text-[24px] leading-[1.8] px-2 sm:px-0">
              Discover a sanctuary where Ayurveda, yoga, luxury healing,
              and mindful living come together to create a transformative
              wellness experience inspired by the beauty of Bali.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full">

              {/* Primary Button */}
              <button className="group relative overflow-hidden w-full sm:w-auto px-8 xl:px-10 py-4 rounded-full bg-[#6d8b74] text-white tracking-[0.18em] uppercase text-xs sm:text-sm shadow-[0_15px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-all duration-500">
                
                <span className="absolute inset-0 bg-[#8b5e3c] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

                <span className="relative z-10">
                  Book Your Retreat
                </span>
              </button>

              {/* Video Button */}
              <button className="group flex items-center justify-center gap-4 w-full sm:w-auto px-6 py-3 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-[#3d2b1f] transition-all duration-500">

                <div className="w-11 h-11 rounded-full bg-white text-[#6d8b74] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                  
                  <Play className="fill-[#6d8b74]" size={18} />
                </div>

                <span className="tracking-[0.15em] uppercase text-xs sm:text-sm whitespace-nowrap">
                  Watch Experience
                </span>
              </button>

            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/80 animate-bounce">
          
          <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-2">
            Scroll
          </p>

          <ArrowDown size={18} />
        </div>

      </section>
    </div>
  );
};

export default RetreatPage;