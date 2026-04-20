import React from "react";
import heroImg from "../../assets/ourprogram.jpg"; // top image
import stayImg from "./images/white-tara-used.jpg"; // second section image
import dscImg from "./images/dsc.jpg"; 
import mealImg from "./images/meal.jpg"; 
import consultImg from "./images/consul.jpg"; 
import herbalImg from "./images/herbal.jpg"; 
import anulashaImg from "./images/Anulasha.png";
import hrishanthImg from "./images/Hrishanth.jpeg";
import raviImg from "./images/RaviSir.jpeg";

import natureImg from "./images/jungle-used.jpg";
const OurProgram = () => {
  return (
    <div className="w-full">

      {/* ================= HERO IMAGE ================= */}
      <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">

  {/* Background Image */}
  <img
    src={heroImg}
    alt="Ayurveda Program"
    className="w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    
    <p className="text-white text-xs tracking-[0.3em] mb-4 uppercase">
      Ayurvedic Wellness
    </p>

    <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif leading-tight max-w-3xl mb-8">
      Transform your health with <br />
      our life-changing treatments
    </h1>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4">
      <button className="border border-white text-white px-8 py-3 text-xs tracking-[0.2em] hover:bg-white hover:text-black transition duration-300">
        BOOK NOW
      </button>

      <button className="border border-white text-white px-8 py-3 text-xs tracking-[0.2em] hover:bg-white hover:text-black transition duration-300">
        PRICING
      </button>
    </div>

  </div>
</section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="bg-[#f3f2ee] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl text-gray-700 font-serif mb-3">
              About Sukhavati Retreat
            </h2>
            <p className="text-gray-500 text-sm">
              A sneak peak of your experience at Sukhavati.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT IMAGE */}
            <div>
              <img
                src={stayImg}
                alt="Stay at Sukhavati"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="text-left">
              <p className="uppercase text-xs tracking-[0.25em] text-gray-500 mb-3">
                Our Luxury Retreat
              </p>

              <h3 className="text-2xl md:text-4xl font-serif text-gray-700 mb-4">
                Staying at Sukhavati
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Located amidst lush greenery and tranquil landscapes, Sukhavati
                Bali is a sanctuary of peace and natural beauty. Our stunning
                surroundings enhance your healing experience, offering a serene
                backdrop for self-reflection and renewal.
              </p>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Experience the gentle sounds of nature, enjoy scenic rice paddy
                walks, weekly bike rides, or herb garden tours.
              </p>

              {/* BUTTON */}
              <button className="border border-gray-600 px-6 py-3 text-xs tracking-[0.2em] text-gray-700 hover:bg-gray-700 hover:text-white transition duration-300">
                VIEW ACCOMMODATION
              </button>
            </div>

          </div>
        </div>
      </section>

     

{/* ================= PERSONALISED APPROACH ================= */}
<section className="bg-[#f3f2ee] py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT TEXT */}
    <div>
      <p className="uppercase text-xs tracking-[0.3em] text-gray-500 mb-3">
        The Ayurvedic Approach
      </p>

      <h3 className="text-2xl md:text-4xl font-serif text-gray-700 mb-4">
        Personalised Approach
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        At Sukhavati, every treatment is individually tailored to your unique
        health needs and goals. Our experienced Ayurvedic doctors and skilled
        therapists create a personalized plan designed just for you.
      </p>

      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        This ensures each therapy promotes optimal healing and rejuvenation.
      </p>

      {/* BUTTON */}
      <button className="border border-gray-600 px-6 py-3 text-xs tracking-[0.2em] text-gray-700 hover:bg-gray-700 hover:text-white transition duration-300">
        EXPLORE TREATMENTS
      </button>
    </div>

    {/* RIGHT IMAGE */}
    <div>
      <img
        src={dscImg}
        alt="Personalised Approach"
        className="w-full h-auto object-cover"
      />
    </div>

  </div>
</section>




{/* ================= PROGRAM OVERVIEW ================= */}
<section className="bg-[#e9e7df] py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 md:px-8">

    {/* Heading */}
    <div className="text-center max-w-2xl mx-auto mb-14">
      <p className="uppercase text-xs tracking-[0.3em] text-gray-500 mb-3">
        All-Inclusive Wellness Retreat
      </p>

      <h2 className="text-3xl md:text-5xl font-serif text-gray-700 mb-4">
        Program Overview
      </h2>

      <p className="text-gray-600 text-sm leading-relaxed">
        Experience a journey of profound transformation based on the timeless
        wisdom of Ayurvedic medicine. Nestled in serene natural surroundings,
        you will experience divine food and profound, age-old therapies to
        rejuvenate and renew every cell of your body.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div className="bg-white">
        <img
          src={mealImg}
          alt="Meals"
          className="w-full h-[300px] object-cover"
        />
        <div className="p-6">
          <p className="uppercase text-xs tracking-[0.2em] text-gray-500 mb-2">
            Nutritious Meals
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Sukhavati’s team of specialized cooks create beautiful, flavorful,
            Ayurveda-based meals for breakfast, lunch, and dinner—bringing
            nourishment and satisfaction at every meal.
          </p>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-white">
        <img
          src={consultImg}
          alt="Consultation"
          className="w-full h-[300px] object-cover"
        />
        <div className="p-6">
          <p className="uppercase text-xs tracking-[0.2em] text-gray-500 mb-2">
            Daily Consultations
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our expert Ayurvedic doctors meet with you regularly to monitor your
            progress, answer questions, and fine-tune your program every step of
            your journey.
          </p>
        </div>
      </div>

      {/* CARD 3 */}
      <div className="bg-white">
        <img
          src={herbalImg}
          alt="Herbal Support"
          className="w-full h-[300px] object-cover"
        />
        <div className="p-6">
          <p className="uppercase text-xs tracking-[0.2em] text-gray-500 mb-2">
            Free Herbal Support
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Receive complimentary herbal preparations crafted on-site to support
            your health needs and enhance your overall wellbeing.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>



{/* ================= EXPERT SUPPORT ================= */}
<section className="bg-[#f3f2ee] py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT IMAGE GRID */}
    <div className="grid grid-cols-2 gap-4">

      {/* LEFT BIG IMAGE */}
      <div className="col-span-1 row-span-2">
        <img
          src={anulashaImg}
          alt="Expert"
          className="w-full h-full object-cover"
        />
      </div>

      {/* TOP RIGHT */}
      <div>
        <img
          src={hrishanthImg}
          alt="Expert"
          className="w-full h-full object-cover"
        />
      </div>

      {/* BOTTOM RIGHT */}
      <div>
        <img
          src={raviImg}
          alt="Expert"
          className="w-full h-full object-cover"
        />
      </div>

    </div>

    {/* RIGHT TEXT */}
    <div className="max-w-md">
      <p className="uppercase text-xs tracking-[0.3em] text-gray-500 mb-3">
        Expert Support
      </p>

      <h3 className="text-2xl md:text-4xl font-serif text-gray-700 mb-4 leading-snug">
        International medical expertise & practices.
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
       At the heart of Sukhavati Bali is a team of expert Ayurvedic doctors and health experts. Dr Komang Sudarmi has over 
       11 years of international training. Along with Dr Dwija Permana, they offer highly effective and holistic medical outcomes .
        Together with Mark Bunn, 
       an international wellness author, speaker & Head of Ayurvedic Education at Sukhavati, you are in great hands,
      </p>
    </div>

  </div>
</section>



{/* ================= HEALING IN NATURE ================= */}
<section className="bg-[#f3f2ee] py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT TEXT */}
    <div className="max-w-md">
      <p className="uppercase text-xs tracking-[0.3em] text-gray-500 mb-3">
        Nature's Medicine
      </p>

      <h3 className="text-2xl md:text-4xl font-serif text-gray-700 mb-4">
        Healing in nature
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        At Sukhavati, the healing power of nature surrounds you. Our resort is
        nestled amidst lush tropical gardens, flowing river, and tranquil
        landscapes, creating a serene environment that nurtures deep rest and
        rejuvenation.
      </p>

      <p className="text-gray-600 text-sm leading-relaxed mt-4">
        The natural beauty and peace of the surroundings will greatly enhance
        your healing journey, helping make it an unforgettable and transformative
        experience.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div>
      <img
        src={natureImg}
        alt="Healing in Nature"
        className="w-full h-auto object-cover"
      />
    </div>

  </div>
</section>


{/* ================= FINAL CTA ================= */}
<section className="bg-[#2f3e34] py-20 md:py-28 text-center">
  <div className="max-w-2xl mx-auto px-4">

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-serif text-[#e6dcc6] mb-6">
      Ready to change your life?
    </h2>

    {/* Subtext */}
    <p className="text-[#cfc7b2] text-sm leading-relaxed mb-8">
      A stronger, more vibrant and healthier you is only a booking away.
      Contact us to book your stay or to ask your questions and find out more
      about how our program can benefit you.
    </p>

    {/* Button */}
    <button className="border border-[#e6dcc6] text-[#e6dcc6] px-8 py-3 text-xs tracking-[0.2em] 
    hover:bg-[#e6dcc6] hover:text-[#2f3e34] transition duration-300">
      CONTACT US
    </button>

  </div>
</section>
    </div>
  );
};

export default OurProgram;