import React from "react";

const Experience = () => {
  return (
    <section className="w-full bg-[#e9e6df] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Award Badge */}
            <div className="mb-6">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-black text-xs font-semibold shadow-lg">
                2026<br />WINNER
              </div>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 leading-tight tracking-wide">
              AWARD WINNING <br /> EXPERIENCE
            </h2>

            {/* Paragraph */}
            <p className="mt-6 text-gray-600 text-sm md:text-base max-w-md leading-relaxed">
              Sukhavati is thrilled to announce that it has been awarded
              “The best luxury healing spa” in the 2026 World Spa Awards.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 border border-gray-700 text-gray-800 text-sm tracking-wide hover:bg-gray-800 hover:text-white transition">
                BOOK NOW
              </button>
              <button className="px-8 py-3 border border-gray-700 text-gray-800 text-sm tracking-wide hover:bg-gray-800 hover:text-white transition">
                PRICING
              </button>
            </div>
          </div>

          {/* RIGHT VIDEO */}
          <div className="w-full">

            {/* Responsive YouTube Embed */}
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full rounded-sm"
                src="https://www.youtube.com/embed/wfnAUFUGmaQ"
                title="Wellness Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;