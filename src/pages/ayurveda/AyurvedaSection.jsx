import React from "react";
import heroImg from "./images/main-ayurvedic-skincare-tips.jpg";
import AyurvedaFAQ from "./AyurvedaFAQ";
import ctaImg from "./images/ayur4.jpg";
import relaxImg from "./images/relex.jpg";
const data = [
  {
    title: "Roots of Ayurveda",
    text: `Dating back over 6000 years, Ayurveda or Ayurvedic Medicine is recognised by the World Health Organisation as the world’s oldest continuous system of natural health care. ‘Veda’, means pure knowledge or science, and ‘Ayus’ means life or lifespan. Thus, Ayurveda is understood as ‘a complete knowledge or science of life’.`,
    image: "/src/pages/ayurveda/images/ayur1.jpg",
  },
  {
    title: "Key Principles",
    text: `Ayurveda is based on the knowledge of the fundamental ‘laws of nature’.

A key wisdom is the infinite intelligence that governs the entire universe is the same intelligence that governs our individual mind and body.

We humans are intimately connected to Mother Nature and are comprised of the same basic elements – space, air, fire, water and earth. Ayurveda allows us to gain greater control over our mind, body, health and happiness.`,
    image: "/src/pages/ayurveda/images/ayur2.jpg",
  },
  {
    title: "Individualised Wellness",
    text: `The understanding of body-types - known as the doshas - are fundamental to the effectiveness of Ayurvedic treatments.

Sukhavati’s Head of Ayurvedic Education, Mark Bunn explains:
“According to Ayurveda, each one of us is comprised of a unique mix of three mind-body principles known as ‘doshas’. 
The doshas are the governing principles of intelligence for everything in the universe . . .
 including you! The doshas, and the combination of them, is what forms the foundation of our unique physical, 
 mental and emotional characteristics. In Ayurveda, the first step to achieving optimal health is knowing who we are. 
 What is our unique mix of the principles that govern everything from digestion to elimination to focus to weight gain,
  energy production, and sleep?
Vata, Pitta & Kapha:
The three doshas are known as Vata, Pitta, & Kapha. Vata relates to air & space. Pitta to fire and water, 
and Kapha to earth and water. By understanding these three doshas and how to influence them, you hold the reins of 
life in your hands. As the doshas govern everything, if we know how to balance them, we can go a long way to eliminating
 ill-health, creating mind-body balance and enjoying sustainable good health.`,
    image: "/src/pages/ayurveda/images/ayur3.jpg",
  },
];

const AyurvedaSection = () => {
  return (
    <div className="w-full">
     {/* ================= HERO SECTION ================= */}
          <section className="relative w-full h-[70vh] md:h-[85vh] lg:h-screen">
            
            {/* Background Image */}
            <img
              src={heroImg}
              alt="Ayurveda"
              className="absolute inset-0 w-full h-full object-cover"
            />
    
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
    
            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
              <div className="text-white max-w-2xl">
                
                <p className="text-xs md:text-sm tracking-[3px] uppercase mb-3 opacity-80">
                  The Science of Life
                </p>
    
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-light mb-4">
                  About Ayurveda
                </h1>
    
                <p className="text-sm md:text-base opacity-80">
                  An ancient approach to holistic wellness and long lasting health
                </p>
    
              </div>
            </div>
          </section>
   
    <section className="bg-[#efefec]">
      <div className="max-w-7xl mx-auto">
        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6 md:px-12 lg:px-20 py-16 md:py-24"
          >
            {/* TEXT */}
            <div
              className={`${
                index % 2 !== 0 ? "lg:order-2" : ""
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-serif text-[#7a4f3a] mb-4">
                {item.title}
              </h2>

              <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-md">
                {item.text}
              </p>
            </div>

            {/* IMAGE */}
            <div
              className={`${
                index % 2 !== 0 ? "lg:order-1" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[350px] md:h-[450px] lg:h-[550px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
    <AyurvedaFAQ />


    <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">

      {/* Background Image */}
      <img
        src={ctaImg}
        alt="Retreat"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="max-w-2xl text-white">

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-4">
            Ready to change your life?
          </h2>

          <p className="text-sm md:text-base opacity-80 mb-2">
            A stronger, more vibrant and healthier you is only a booking away.
          </p>

          <p className="text-sm md:text-base opacity-80 mb-6">
            Contact us to book your stay or to ask your questions and find out
            more about how a program can benefit you.
          </p>

          <button className="bg-white text-black px-6 md:px-8 py-3 text-xs md:text-sm tracking-[2px] uppercase hover:bg-gray-200 transition">
            Book Your Personalised Retreat
          </button>

        </div>
      </div>
    </section>


        <section className="bg-[#efefec] py-16 md:py-24 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div className="flex flex-col justify-center lg:pl-10">
          
          <p className="text-xs tracking-[3px] uppercase text-gray-600 mb-4">
            About Sukhavati
          </p>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif text-gray-800 mb-6">
            A personalised wellness retreat
          </h2>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-6 max-w-md">
            At Sukhavati, everything we do is individually tailored to your unique
            health needs and goals. Our experienced Ayurvedic doctors and skilled
            therapists create a personalised plan designed just for you. This
            ensures each therapy promotes optimal healing and rejuvenation.
          </p>

          <button className="border border-gray-600 px-6 py-3 text-xs md:text-sm tracking-[2px] uppercase w-fit hover:bg-black hover:text-white transition">
            Learn More
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src={relaxImg}
            alt="Wellness Retreat"
            className="w-full h-[350px] md:h-[450px] lg:h-[550px] object-cover"
          />
        </div>

      </div>
    </section>


     </div>
  );
};

export default AyurvedaSection;