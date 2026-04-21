import React from "react";
import sectionImg from "./images/abcd.jpg"; // your image
import approachImg from "./images/ourayurvedic.jpg";

const WellnessSection = () => {
  return (
    <>
    <section className="w-full bg-[#efeee8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT IMAGE */}
          <div className="w-full flex justify-center lg:justify-start">
            <div className="w-full max-w-md md:max-w-lg lg:max-w-md">
              <img
                src={sectionImg}
                alt="Wellness Retreat"
                className="w-full h-[500px] md:h-[600px] object-cover rounded-sm"
              />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="text-center lg:text-left">
            
            {/* Small Label */}
            <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4">
              Luxury Wellness
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 leading-tight">
              Your Health Transformation
            </h2>

            {/* Paragraph */}
            <p className="mt-6 text-gray-600 text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              Sukhavati is a world-class, boutique retreat designed to help you achieve profound, 
              life-changing health transformation in a serene, natural environment. Nestled in a quiet 
              Balinese village, our luxurious sanctuary provides a peaceful escape from the demands of 
              modern life. By personalized wellness and rejuvenating treatments, Sukhavati allows you to 
              deeply relax, rejuvenate, heal, and begin to integrate a lifestyle of balance and vitality 
              for your best long-term well-being.
            </p>

          </div>

        </div>
      </div>
    </section>

    <section className="w-full bg-[#efeee8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT TEXT */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            
            {/* Label */}
            <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4">
              Holistic Wisdom
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 leading-tight">
              Our Ayurvedic Approach
            </h2>

            {/* Paragraph */}
            <p className="mt-6 text-gray-600 text-sm md:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
              Sukhavati’s stunning results over the past 13 years are based on the timeless wisdom 
              of Ayurvedic medicine. Our unique approach is in making Ayurveda simple, practical and 
              easily applicable for everyone. Whether you already love Ayurveda, or have yet to experience 
              its benefits, we’re here to guide you. If you simply want to rest and relax in the ultimate 
              luxury, or get the profound benefits of a deep cleanse, you will receive a comprehensive 
              program tailored specifically to your needs by our world-class doctors.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
              <img
                src={approachImg}
                alt="Ayurvedic Approach"
                className="w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-sm"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
    </>

  );
};

export default WellnessSection;