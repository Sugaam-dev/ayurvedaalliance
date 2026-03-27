import React from "react";
import bgImg from "./images/yogiranjan.jpeg"; // your image

const GurudevSection = () => {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[550px] overflow-hidden flex items-center">
      
      {/* Background Image */}
      <img
        src={bgImg}
        alt="Gurudev Sri Sri Ranjanji"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-xl text-white">
          
          <p className="text-sm md:text-base text-gray-300 mb-2">
            Founder, The Art of Living
          </p>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Gurudev Sri Sri Ranjanji
          </h2>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
            Gurudev Sri Sri Ranjanji is a global humanitarian, spiritual leader and ambassador of peace. Gurudev’s vision of personal and social transformation through mental health and wellness has ignited a global movement in over 182 countries, uplifting the lives of more than 80 crore+ people.
          </p>

          <button className="text-orange-400 font-semibold hover:text-orange-300 transition">
            Biography
          </button>

        </div>
      </div>

    </section>
  );
};

export default GurudevSection;