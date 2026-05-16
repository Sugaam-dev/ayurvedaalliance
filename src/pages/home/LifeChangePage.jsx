import React from "react";
import heroImg from "./images/greenhouse.jpg";
import { Leaf, ArrowRight, Sparkles } from "lucide-react";

const LifeChangePage = () => {
  return (
    <div className="w-full bg-[#efe9de] overflow-hidden">

      {/* ===================================================== */}
      {/* HERO SECTION */}
      {/* ===================================================== */}
      <section className="relative w-full min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen overflow-hidden">

        {/* Background Image */}
        <img
          src={heroImg}
          alt="Luxury Wellness Retreat"
          className="absolute inset-0 w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-[4000ms]"
        />

        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/70"></div>

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-[#6d8b74]/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-[#d98942]/20 blur-3xl rounded-full"></div>

        {/* Floating Glass Card */}
        <div className="absolute top-8 right-8 hidden xl:flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-4 shadow-xl">
          
          <div className="w-12 h-12 rounded-full bg-[#6d8b74]/20 flex items-center justify-center">
            <Sparkles className="text-[#d7c0a6]" size={22} />
          </div>

          <div>
            <p className="text-white text-xs tracking-[0.25em] uppercase">
              Bali Wellness
            </p>

            <p className="text-[#d7c0a6] text-lg font-serif italic">
              Luxury Healing
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[85vh] sm:min-h-[90vh] lg:min-h-screen px-5 sm:px-8 md:px-12 py-16">

          <div className="max-w-5xl mx-auto text-center">

            {/* Label */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-7">
              
              <Leaf className="text-[#d7c0a6]" size={16} />

              <p className="text-[10px] sm:text-xs tracking-[0.28em] uppercase text-white font-medium">
                Transform Your Life
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-serif leading-[0.95] tracking-tight text-white">

              <span className="block text-[2rem] sm:text-[2.2rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[4rem]">
                Ready To
              </span>

              <span className="block italic text-[#d7c0a6] text-[2rem] sm:text-[2.2rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[4rem] mt-2">
                Change Your Life?
              </span>
            </h1>

            {/* Divider */}
            <div className="w-24 sm:w-32 h-[2px] bg-gradient-to-r from-[#6d8b74] to-[#d98942] mx-auto mt-8 mb-8"></div>

            {/* Description */}
            <p className="max-w-3xl mx-auto text-white/85 text-base sm:text-lg md:text-xl xl:text-[22px] leading-[1.9] px-2">
              A stronger, healthier, and more vibrant version of yourself is
              waiting. Experience luxury wellness, Ayurveda, yoga, healing,
              and deep rejuvenation in the heart of Bali’s peaceful beauty.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">

              {/* Primary Button */}
              <button className="group relative overflow-hidden w-full sm:w-auto px-8 xl:px-10 py-4 rounded-full bg-[#6d8b74] text-white tracking-[0.18em] uppercase text-xs sm:text-sm shadow-[0_15px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-all duration-500">

                <span className="absolute inset-0 bg-[#d98942] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

                <span className="relative z-10 flex items-center justify-center gap-3">
                  Book Your Retreat
                  <ArrowRight size={16} />
                </span>
              </button>

              {/* Secondary Button */}
              <button className="group w-full sm:w-auto px-8 xl:px-10 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white tracking-[0.18em] uppercase text-xs sm:text-sm hover:bg-white hover:text-[#3d2b1f] hover:-translate-y-1 transition-all duration-500 shadow-lg">

                Contact Us
              </button>

            </div>

            {/* Bottom Stats */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">

              {/* Card 1 */}
              <div className="group rounded-[28px] bg-white/10 backdrop-blur-md border border-white/15 px-6 py-7 hover:bg-white/15 hover:-translate-y-2 transition-all duration-500">

                <h3 className="text-white text-3xl sm:text-4xl font-serif">
                  10+
                </h3>

                <p className="text-white/75 text-sm uppercase tracking-[0.2em] mt-3">
                  Years Experience
                </p>
              </div>

              {/* Card 2 */}
              <div className="group rounded-[28px] bg-white/10 backdrop-blur-md border border-white/15 px-6 py-7 hover:bg-white/15 hover:-translate-y-2 transition-all duration-500">

                <h3 className="text-white text-3xl sm:text-4xl font-serif">
                  5K+
                </h3>

                <p className="text-white/75 text-sm uppercase tracking-[0.2em] mt-3">
                  Happy Guests
                </p>
              </div>

              {/* Card 3 */}
              <div className="group rounded-[28px] bg-white/10 backdrop-blur-md border border-white/15 px-6 py-7 hover:bg-white/15 hover:-translate-y-2 transition-all duration-500">

                <h3 className="text-white text-3xl sm:text-4xl font-serif">
                  100%
                </h3>

                <p className="text-white/75 text-sm uppercase tracking-[0.2em] mt-3">
                  Luxury Wellness
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeChangePage;