import React from "react";

// Import your images correctly
import img1 from "./images/mind.jpg";
import img2 from "./images/mind1.jpg";
import img3 from "./images/mind2.jpg";
import img4 from "./images/mindful.jpg";
import img5 from "./images/mindfulness.jpg";
import img6 from "./images/OIP.jpg";

const WisdomSection = () => {
  return (
    <section className="bg-[#f3f3f3] py-14 px-4 md:px-10 lg:px-20">

      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
        Wisdom
      </h2>
      <p className="text-gray-500 mb-8">
        Love plus wisdom is bliss. Love minus wisdom is misery.
      </p>

      {/* 🔥 MAIN GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-5">

          {/* Top */}
          <div className="relative h-[180px] rounded-xl overflow-hidden group">
            <img src={img1} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <p className="absolute bottom-3 left-3 text-white font-semibold text-sm">
              Decoding Karma
            </p>
          </div>

          {/* Bottom */}
          <div className="relative h-[230px] rounded-xl overflow-hidden group">
            <img src={img4} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <p className="absolute bottom-3 left-3 text-white font-semibold text-xs md:text-sm">
              The Four Big Worries and How to Eliminate Them
            </p>
          </div>

        </div>

        {/* CENTER TALL */}
        <div className="relative h-[430px] rounded-xl overflow-hidden group">
          <img src={img2} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
          <p className="absolute bottom-4 left-4 text-white font-semibold text-sm md:text-base">
            How Love Can Remove Fear
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-5">

          {/* Top */}
          <div className="relative h-[200px] rounded-xl overflow-hidden group">
            <img src={img3} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <p className="absolute bottom-3 left-3 text-white font-semibold text-sm">
              How to Increase Willpower
            </p>
          </div>

          {/* Bottom */}
          <div className="relative h-[200px] rounded-xl overflow-hidden group">
            <img src={img5} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <p className="absolute bottom-3 left-3 text-white font-semibold text-xs md:text-sm">
              The Art of Effective Communication
            </p>
          </div>

        </div>

        {/* RIGHT BIG */}
        <div className="relative h-[430px] rounded-xl overflow-hidden group">
          <img src={img6} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
          <p className="absolute bottom-4 left-4 text-white font-semibold text-sm md:text-base">
            Personality Development Unlocked
          </p>
        </div>

      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-yellow-500 text-white px-6 py-2 rounded-full text-sm hover:bg-yellow-600 transition">
          Ask Gurudev (beta)
        </button>
      </div>

    </section>
  );
};

export default WisdomSection;