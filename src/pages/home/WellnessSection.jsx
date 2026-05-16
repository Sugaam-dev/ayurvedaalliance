import React from "react";
import sectionImg from "./images/abcd.jpg";
import approachImg from "./images/ourayurvedic.jpg";
import { Leaf, Sparkles } from "lucide-react";

const WellnessSection = () => {
  return (
    <section className="relative w-full bg-[#f4f0e8] overflow-hidden">
      
      {/* BACKGROUND BLURS */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#6d8b74]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#8b5e3c]/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-[2000px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 py-14 sm:py-16 md:py-20 lg:py-24 xl:py-28">

        {/* ===================================================== */}
        {/* SECTION 1 */}
        {/* ===================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center">

          {/* IMAGE */}
          <div className="flex justify-center items-center">
            
            <div className="group relative w-full max-w-[700px]">

              {/* Decorative Border */}
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#6d8b74]/30 rounded-[32px]"></div>

              {/* IMAGE CONTAINER */}
              <div className="relative w-full rounded-[30px] overflow-hidden bg-transparent shadow-[0_25px_70px_rgba(0,0,0,0.12)]">

                <img
                  src={sectionImg}
                  alt="Luxury Wellness"
                  className="w-full h-auto block transition-all duration-700 group-hover:scale-105"
                />

                {/* FLOATING CARD */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-white/85 backdrop-blur-md rounded-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-xl border border-white/30">
                  
                  <div className="flex items-center gap-3">

                    <div className="bg-[#6d8b74]/10 p-2 rounded-full">
                      <Sparkles className="text-[#6d8b74]" size={18} />
                    </div>

                    <div>
                      <h4 className="text-[#2d2d2d] font-semibold text-sm sm:text-base">
                        Premium Wellness
                      </h4>

                      <p className="text-gray-500 text-xs sm:text-sm">
                        Luxury healing experience
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="flex items-center">
            
            <div className="w-full text-center lg:text-left xl:pr-10">

              {/* LABEL */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6d8b74]/10 border border-[#6d8b74]/20 mb-6">
                
                <Leaf className="text-[#6d8b74]" size={16} />

                <p className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#6d8b74] font-medium">
                  Luxury Wellness
                </p>
              </div>

              {/* HEADING */}
              <h2 className="text-[2rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[4rem] leading-[1.08] font-serif text-[#3d2b1f]">
                Your Health
                <span className="block text-[#6d8b74] italic">
                  Transformation
                </span>
              </h2>

              {/* DIVIDER */}
              <div className="w-24 h-[2px] bg-gradient-to-r from-[#6d8b74] to-[#8b5e3c] mx-auto lg:mx-0 mt-6 mb-8"></div>

              {/* PARAGRAPH */}
              <p className="text-[#5f5a54] text-sm sm:text-base md:text-lg xl:text-[19px] 2xl:text-xl leading-relaxed max-w-xl xl:max-w-2xl mx-auto lg:mx-0">
                Sukhavati is a world-class boutique retreat designed to inspire
                deep healing, rejuvenation, and life-changing wellness.
                Nestled in the heart of Bali’s peaceful natural beauty, our
                sanctuary blends luxury with holistic care, helping you
                reconnect with balance, vitality, and inner peace.
              </p>

              {/* FEATURE CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-5 mt-8 xl:mt-10">

                <div className="bg-white/75 backdrop-blur-sm border border-[#d7d1c7] rounded-3xl p-5 sm:p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                  
                  <h4 className="text-[#3d2b1f] text-lg font-semibold mb-2">
                    Personalized Healing
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    Tailored wellness journeys designed by holistic experts.
                  </p>
                </div>

                <div className="bg-white/75 backdrop-blur-sm border border-[#d7d1c7] rounded-3xl p-5 sm:p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                  
                  <h4 className="text-[#3d2b1f] text-lg font-semibold mb-2">
                    Bali Serenity
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    Experience complete calm in a tropical luxury sanctuary.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* ===================================================== */}
        {/* SECTION 2 */}
        {/* ===================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-20 items-center mt-20 xl:mt-28">

          {/* TEXT */}
          <div className="flex items-center order-2 lg:order-1">
            
            <div className="w-full text-center lg:text-left xl:pr-10">

              {/* LABEL */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b5e3c]/10 border border-[#8b5e3c]/20 mb-6">
                
                <Leaf className="text-[#8b5e3c]" size={16} />

                <p className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#8b5e3c] font-medium">
                  Holistic Wisdom
                </p>
              </div>

              {/* HEADING */}
              <h2 className="text-[2rem] sm:text-[2.6rem] md:text-[3rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[4rem] leading-[1.08] font-serif text-[#3d2b1f]">
                Our Ayurvedic
                <span className="block text-[#6d8b74] italic">
                  Approach
                </span>
              </h2>

              {/* DIVIDER */}
              <div className="w-24 h-[2px] bg-gradient-to-r from-[#8b5e3c] to-[#6d8b74] mx-auto lg:mx-0 mt-6 mb-8"></div>

              {/* PARAGRAPH */}
              <p className="text-[#5f5a54] text-sm sm:text-base md:text-lg xl:text-[19px] 2xl:text-xl leading-relaxed max-w-xl xl:max-w-2xl mx-auto lg:mx-0">
                Rooted in the timeless science of Ayurveda, our programs are
                thoughtfully designed to restore harmony between mind, body,
                and spirit while offering luxury, healing, and rejuvenation.
              </p>

              {/* FEATURE CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-5 mt-8 xl:mt-10">

                <div className="bg-white/75 backdrop-blur-sm border border-[#d7d1c7] rounded-3xl p-5 sm:p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                  
                  <h4 className="text-[#3d2b1f] text-lg font-semibold mb-2">
                    Ancient Ayurveda
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    Timeless healing methods refined for modern lifestyles.
                  </p>
                </div>

                <div className="bg-white/75 backdrop-blur-sm border border-[#d7d1c7] rounded-3xl p-5 sm:p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
                  
                  <h4 className="text-[#3d2b1f] text-lg font-semibold mb-2">
                    Expert Guidance
                  </h4>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    Wellness programs led by experienced Ayurvedic doctors.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center items-center order-1 lg:order-2">
            
            <div className="group relative w-full max-w-[700px]">

              {/* Decorative Border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#8b5e3c]/30 rounded-[32px]"></div>

              {/* IMAGE CONTAINER */}
              <div className="relative w-full rounded-[30px] overflow-hidden bg-transparent shadow-[0_25px_70px_rgba(0,0,0,0.12)]">

                <img
                  src={approachImg}
                  alt="Ayurvedic Approach"
                  className="w-full h-auto block transition-all duration-700 group-hover:scale-105"
                />

                {/* FLOATING CARD */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-white/85 backdrop-blur-md rounded-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-xl border border-white/30">
                  
                  <div className="flex items-center gap-3">

                    <div className="bg-[#8b5e3c]/10 p-2 rounded-full">
                      <Leaf className="text-[#8b5e3c]" size={18} />
                    </div>

                    <div>
                      <h4 className="text-[#2d2d2d] font-semibold text-sm sm:text-base">
                        Ayurvedic Care
                      </h4>

                      <p className="text-gray-500 text-xs sm:text-sm">
                        Natural healing therapies
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WellnessSection;