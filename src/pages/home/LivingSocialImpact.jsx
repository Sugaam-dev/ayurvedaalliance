import React from "react";
import yogaImg from "./images/senior_living_social_media.jpg"; // use your image

const LivingSocialImpact = () => {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      
      {/* Background Image */}
      <img
        src={yogaImg}
        alt="Sudarshan Kriya"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Gradient Overlay (right side darker) */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-end px-6 md:px-12 lg:px-20">
        <div className="max-w-lg text-white">
          
          <p className="text-sm md:text-base text-gray-300 mb-2">
            
           We care, we share
          </p>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Art of Living's Social Impact
          </h2>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
            Strengthen your roots, broaden your vision and be of service to humanity are the underlying principles of the Art of Living. From child education to river rejuvenation, from pesticide free farming to ethics in business, from conflict resolution to disaster relief, the Art of Living has become a platform for people from around India and the world to serve humanity.
          </p>

          {/* <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
            Studies conducted on four continents and published in peer reviewed journals, including at Yale and Harvard, have demonstrated a comprehensive range of benefits from reduction in cortisol, the stress hormone, to increasing overall life satisfaction.
          </p> */}

          <button className="text-orange-400 font-semibold hover:text-orange-300 transition">
            Learn more
          </button>

        </div>
      </div>
    </section>
  );
};

export default LivingSocialImpact;