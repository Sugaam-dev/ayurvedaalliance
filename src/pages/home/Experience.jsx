import React from "react";
import { Play, Award, Leaf } from "lucide-react";

const Experience = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#ece7de] py-16 sm:py-20 md:py-24 lg:py-28 2xl:py-36">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#6d8b74]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#8b5e3c]/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-[2000px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-24 items-center">

          {/* ===================================================== */}
          {/* LEFT CONTENT */}
          {/* ===================================================== */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6d8b74]/10 border border-[#6d8b74]/20 mb-6">
              
              <Leaf className="text-[#6d8b74]" size={16} />

              <p className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#6d8b74] font-medium">
                Luxury Healing
              </p>
            </div>

            {/* Award Badge */}
            <div className="relative mb-8 group">
              
              <div className="absolute inset-0 rounded-full bg-[#6d8b74]/20 blur-xl scale-110 group-hover:scale-125 transition-all duration-700"></div>

              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#b08968] via-[#8b5e3c] to-[#5d3d2e] flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.18)] border border-white/20 transition-all duration-500 group-hover:-translate-y-2">
                
                <Award className="text-white mb-1" size={26} />

                <span className="text-[11px] sm:text-xs tracking-[0.2em] text-[#f8f3eb] uppercase">
                  2026 Winner
                </span>
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.4rem] lg:text-[4rem] xl:text-[4.5rem] 2xl:text-[5.5rem] leading-[1.05] font-serif text-[#3d2b1f]">
              Award Winning
              <span className="block italic text-[#6d8b74]">
                Experience
              </span>
            </h2>

            {/* Divider */}
            <div className="w-24 h-[2px] bg-gradient-to-r from-[#6d8b74] to-[#8b5e3c] mt-6 mb-8"></div>

            {/* Paragraph */}
            <p className="text-[#5f5a54] text-sm sm:text-base md:text-lg xl:text-[19px] 2xl:text-xl leading-relaxed max-w-xl">
              Sukhavati is honored to receive the prestigious
              <span className="font-semibold text-[#3d2b1f]">
                {" "}
                “Best Luxury Healing Spa”
              </span>{" "}
              award at the 2026 World Spa Awards — celebrating our commitment
              to holistic wellness, rejuvenation, and transformative healing.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

              {/* Primary Button */}
              <button className="group relative overflow-hidden px-8 xl:px-10 py-3.5 xl:py-4 rounded-full bg-[#6d8b74] text-white tracking-[0.15em] uppercase text-xs sm:text-sm shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                
                <span className="absolute inset-0 bg-[#8b5e3c] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

                <span className="relative z-10">
                  Book Now
                </span>
              </button>

              {/* Secondary Button */}
              <button className="group px-8 xl:px-10 py-3.5 xl:py-4 rounded-full border border-[#8b5e3c]/40 text-[#3d2b1f] tracking-[0.15em] uppercase text-xs sm:text-sm bg-white/50 backdrop-blur-sm hover:bg-[#8b5e3c] hover:text-white hover:border-[#8b5e3c] hover:-translate-y-1 transition-all duration-500 shadow-md hover:shadow-xl">
                Pricing
              </button>
            </div>
          </div>

          {/* ===================================================== */}
          {/* RIGHT VIDEO */}
          {/* ===================================================== */}
          <div className="relative group">

            {/* Decorative Border */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#6d8b74]/30 rounded-[32px]"></div>

            {/* Video Wrapper */}
            <div className="relative overflow-hidden rounded-[30px] shadow-[0_30px_80px_rgba(0,0,0,0.18)] bg-[#dcd3c4]">

              {/* Floating Play Badge */}
              <div className="absolute top-5 right-5 z-20 bg-white/85 backdrop-blur-md rounded-full p-4 shadow-xl border border-white/20">
                <Play className="text-[#6d8b74] fill-[#6d8b74]" size={24} />
              </div>

              {/* Video */}
              <div className="relative w-full aspect-video overflow-hidden">
                
                <iframe
                  className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105"
                  src="https://www.youtube.com/embed/wfnAUFUGmaQ"
                  title="Wellness Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Bottom Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 via-black/20 to-transparent px-5 sm:px-7 py-5 sm:py-6">
                
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-serif">
                  Bali Luxury Wellness Retreat
                </h3>

                <p className="text-white/80 text-sm sm:text-base mt-1">
                  Discover healing, relaxation, and transformation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;