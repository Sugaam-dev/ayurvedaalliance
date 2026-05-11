import React from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "./images/well.jpg"; // use your main background image

import img1 from "./images/well1.jpg"; // roots image
import img2 from "./images/well2.jpg"; 

import benefit1 from "./images/treatment8.jpg";
import benefit2 from "./images/treatment7.jpg";
import benefit3 from "./images/treatment11.jpg";
import benefit4 from "./images/well2.jpg";
import benefit5 from "./images/well1.jpg";


const YourWellnessGoals = () => {

    const navigate = useNavigate();
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section
        className="relative h-[70vh] md:h-[85vh] flex items-center justify-center text-center"
      >
        {/* Background Image */}
        <img
          src={heroImg}
          alt="Detox Wellness"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 px-4 max-w-3xl">

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
            Detox
          </h1>

          <p className="text-xs md:text-sm uppercase tracking-[3px] text-gray-300 mb-3">
            At our Ayurvedic wellness retreat
          </p>

          <p className="text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed">
            At Sukhavati Ayurvedic retreat, detoxing is one of many health concerns
            that we can assist with
          </p>

        </div>
      </section>

      {/* ================= SECTION 1 ================= */}
      <section className="bg-[#dfe3d3] py-16 md:py-24 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* IMAGE LEFT */}
          <div>
            <img
              src={img1}
              alt="Roots"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

          {/* TEXT RIGHT */}
          <div className="max-w-md mx-auto lg:mx-0">
            <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-4">
              A holistic approach to Detox.
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              According to Ayurveda, detoxification is much more than simply cleansing
              the body—it’s about purifying mind, body and spirit at the deepest level
              and creating a foundation for lasting health and vitality.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              This transformative approach not only supports physical rejuvenation but
              also improves digestion, boosts energy, and enhances mental clarity.
              Guests frequently report feeling lighter, more energized, and deeply
              refreshed after their stay.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SECTION 2 ================= */}
      <section className="bg-[#efefec] py-16 md:py-24 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* TEXT LEFT */}
          <div className="max-w-md mx-auto lg:mx-0">
            <p className="text-xs uppercase tracking-[3px] text-gray-500 mb-2">
              About Sukhavati
            </p>

            <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-4">
              A personalised wellness retreat in Bali
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              Sukhavati is a world-class, boutique retreat designed to help you
              achieve profound, life-changing health transformation in a serene,
              natural environment.
            </p>

            {/* BUTTON */}
            <button className="border border-gray-500 px-6 py-2 text-sm text-gray-700 hover:bg-gray-800 hover:text-white transition">
              Learn More
            </button>
          </div>

          {/* IMAGE RIGHT */}
          <div>
            <img
              src={img2}
              alt="Shirodhara"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>

        </div>
      </section>



      {/* ================= EXPLORE BENEFITS ================= */}
<section className="bg-[#cfd5c3] py-16 md:py-24 px-4 md:px-10 lg:px-20">

  <div className="max-w-7xl mx-auto text-center">

    {/* Top Label */}
    <p className="text-xs uppercase tracking-[3px] text-gray-600 mb-3">
      All-inclusive wellness retreat
    </p>

    {/* Heading */}
    <h2 className="text-2xl md:text-4xl font-serif text-gray-800 mb-4">
      Explore Benefits
    </h2>

    {/* Description */}
    <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto mb-12">
      Discover the life-changing benefits of holistic wellness. From renewed
      energy and improved digestion to a calmer mind and uplifted spirit,
      experience profound, lasting transformations that enhance every aspect
      of your wellbeing.
    </p>

    {/* IMAGE GRID */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

      {[
        { img: benefit1, label: "Treating arthritis pain" },
        { img: benefit2, label: "Autoimmune conditions" },
        { img: benefit3, label: "Burnout and fatigue" },
        { img: benefit4, label: "Stress, anxiety and insomnia" },
        { img: benefit5, label: "Weight loss" },
      ].map((item, index) => (
        <div key={index} className="group cursor-pointer">

          {/* Image */}
          <div className="overflow-hidden">
            <img
              src={item.img}
              alt={item.label}
              className="w-full h-[180px] md:h-[220px] lg:h-[260px] object-cover transition duration-500 group-hover:scale-105"
            />
          </div>

          {/* Caption */}
          <p className="text-[10px] md:text-xs uppercase tracking-[1px] text-gray-600 mt-3 text-left">
            {item.label}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>


    <section className="bg-[#cfd5c3] py-20 px-4 text-center">

      <div className="max-w-2xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-serif text-gray-800 mb-4">
          Ready to change your life?
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base mb-8 leading-relaxed">
          A stronger, more vibrant and healthier you is only a booking away.
          Contact us to book your stay or to ask your questions and find out
          more about how a program can benefit you.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/contact")}
          className="border border-gray-700 px-6 py-3 text-xs md:text-sm uppercase tracking-[2px] text-gray-700 hover:bg-gray-800 hover:text-white transition"
        >
          Book your personalised retreat
        </button>

      </div>

    </section>


    </div>
  );
};

export default YourWellnessGoals;