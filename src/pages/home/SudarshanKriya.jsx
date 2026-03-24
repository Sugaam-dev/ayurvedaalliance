import React from "react";
import yogaImg from "./images/Yoga.jpg"; // use your image

const SudarshanKriya = () => {
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
            Life changing breathing technique
          </p>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Sudarshan Kriya™
          </h2>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
            The cornerstone of Art of Living courses, the Sudarshan Kriya™ technique has helped millions around the world to reduce stress, to get better rest and to improve the quality of life.
          </p>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
            Studies conducted on four continents and published in peer reviewed journals, including at Yale and Harvard, have demonstrated a comprehensive range of benefits from reduction in cortisol, the stress hormone, to increasing overall life satisfaction.
          </p>

          <button className="text-orange-400 font-semibold hover:text-orange-300 transition">
            Origin and Benefits
          </button>

        </div>
      </div>
    </section>
  );
};

export default SudarshanKriya;