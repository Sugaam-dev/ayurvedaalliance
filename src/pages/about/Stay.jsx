import React from "react";
import stayImg from "./images/auau.jpg"; // your spa image
   import retreatImg from "./images/bpstay.jpg";
   
import villa1 from "./images/white-tara-used.jpg";
import villa2 from "./images/bpstay.jpg";
import chefImg from "./images/chefstay.jpg";


import poolImg from "./images/bpstay.jpg";
import relaxImg from "./images/relex.jpg";
import riverImg from "./images/river.jpg";
import shalaImg from "./images/shala.jpg";
import bannerImg from "./images/bpstay.jpg"; // use your pool image


import mainImg from "./images/dg1.jpg";
import img1 from "./images/dg2.jpg";
import img2 from "./images/dg3.jpg";
import img3 from "./images/dg4.jpg";
import img4 from "./images/dg5.jpg";

const Stay = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative w-full h-screen">

        {/* BACKGROUND IMAGE */}
        <img
          src={stayImg}
          alt="Stay Experience"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          
          {/* SMALL LABEL */}
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-white mb-4">
            Ayurvedic Wellness
          </p>

          {/* HEADING */}
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-serif max-w-2xl leading-snug mb-6">
            Feel your best with our life-changing holistic approach
          </h1>

          {/* BUTTON */}
          <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
            Book Now
          </button>

        </div>

      </section>


   

{/* ================= AYURVEDIC RETREAT SECTION ================= */}
<section className="w-full bg-[#ffffff] py-20 md:py-28">
  <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* LEFT IMAGE */}
    <div className="w-full">
      <div className="w-full h-[350px] md:h-[450px] lg:h-[520px] overflow-hidden">
        <img
          src={retreatImg}
          alt="Ayurvedic Retreat"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div className="max-w-xl">
      
      <p className="text-xs tracking-[0.25em] uppercase text-gray-600 mb-4">
        Your Sukhavati Experience
      </p>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-700 mb-6">
        Ayurvedic Retreat
      </h2>

      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
        At Sukhavati, we believe in providing you with a holistic approach to
        health and wellness that is why we specialise in Ayurvedic Medicine.
        Ayurveda takes into account your emotional, psychological and spiritual
        well-being as well as your physical well-being in order to help you
        achieve peak health.
      </p>

      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
        Everything we provide is based on your individual needs to ensure an
        optimal experience and results.
      </p>

      <ul className="text-gray-600 text-sm md:text-base space-y-2 list-disc list-inside">
        <li>Luxury private villa accommodations</li>
        <li>Ayurvedic treatments and doctor therapies</li>
        <li>Health consultations with expert Ayurvedic doctors</li>
        <li>Nourishing and delicious Ayurvedic vegetarian cuisine</li>
        <li>Daily yoga classes</li>
        <li>Lectures and workshops on Ayurveda and wellness</li>
        <li>Ongoing support from our staff</li>
        <li>Cultural experiences</li>
      </ul>

    </div>

  </div>
</section>



{/* ================= VILLAS SECTION ================= */}
<section className="w-full bg-[#d4d6ca] py-20 md:py-28">
  <div className="max-w-7xl mx-auto px-6 md:px-10">

    {/* HEADER */}
    <div className="text-center mb-16">
      <p className="text-xs tracking-[0.25em] uppercase text-gray-600 mb-4">
        Our Luxury Villas
      </p>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-700 mb-6">
        Where you’ll stay at Sukhavati
      </h2>

      <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
        Staying at Sukhavati is a boutique experience, with only 8 private villas
        on the property. Beautifully furnished, each villa hosts a king size bed
        and a private breakfast balcony offering tranquil views of the surrounding estate.
      </p>
    </div>

    {/* CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* CARD 1 */}
      <div className="bg-white">
        <div className="w-full h-[300px] md:h-[350px] overflow-hidden">
          <img
            src={villa1}
            alt="Garden Villa"
            className="w-full h-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="text-sm tracking-[0.2em] uppercase text-gray-600 mb-3">
            Luxury Garden Villa
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Our garden villas offer an intimate and luxurious escape, designed for
            ultimate relaxation and privacy. Each villa features lush tropical gardens.
          </p>

          <button className="border border-gray-700 text-gray-700 px-5 py-2 text-xs tracking-widest uppercase hover:bg-gray-700 hover:text-white transition">
            See Details
          </button>
        </div>
      </div>

      {/* CARD 2 */}
      <div className="bg-white">
        <div className="w-full h-[300px] md:h-[350px] overflow-hidden">
          <img
            src={villa2}
            alt="Pool Villa"
            className="w-full h-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="text-sm tracking-[0.2em] uppercase text-gray-600 mb-3">
            Luxury Pool Villa
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Our private pool villas offer an intimate and luxurious escape with
            private pools and tranquil surroundings for complete relaxation.
          </p>

          <button className="border border-gray-700 text-gray-700 px-5 py-2 text-xs tracking-widest uppercase hover:bg-gray-700 hover:text-white transition">
            See Details
          </button>
        </div>
      </div>

    </div>

  </div>
</section>



{/* ================= DINING EXPERIENCE SECTION ================= */}
<section className="w-full bg-[#ffffff] py-20 md:py-28">
  <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <div className="max-w-xl">
      
      <p className="text-xs tracking-[0.25em] uppercase text-gray-600 mb-4">
        Dining Experience
      </p>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-700 mb-6">
        Chef-prepared Ayurvedic meals
      </h2>

      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
        Sukhavati’s team of specialized cooks create beautiful, flavourful,
        Ayurveda-based meals for breakfast, lunch, and dinner. The food at
        Sukhavati is one of our guests’ favourite highlights, bringing
        nourishment and satisfaction at every meal.
      </p>

      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
        Mealtimes are shared as a group at our dining pavilion or river deck,
        giving you the joy of connecting with other guests sharing the
        Panchakarma experience.
      </p>

      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        You may also opt to have meals brought to your own villa, if you wish to
        experience deeper silence and privacy.
      </p>

    </div>

    {/* RIGHT IMAGE */}
    <div className="w-full">
      <div className="w-full h-[350px] md:h-[450px] lg:h-[520px] overflow-hidden">
        <img
          src={chefImg}
          alt="Ayurvedic Meals"
          className="w-full h-full object-cover transition duration-700 hover:scale-105"
        />
      </div>
    </div>

  </div>
</section>



{/* ================= WELLNESS FACILITIES SECTION ================= */}
<section className="w-full bg-[#d4d6ca] py-20 md:py-28">
  <div className="max-w-7xl mx-auto px-6 md:px-10">

    {/* HEADER */}
    <div className="max-w-3xl mb-12">
      <p className="text-xs tracking-[0.25em] uppercase text-gray-600 mb-4">
        All-inclusive Wellness Retreat
      </p>

      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-700 mb-6">
        Wellness Facilities
      </h2>

      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
        During your stay, you can enjoy daily yoga classes with our expert
        instructors, swimming in our magnesium mineral pool, and bathing in the
        sounds of Bali’s serene nature from our Riverview spa, and relaxation
        areas. Unwind in our lounge, complete with comfortable sofas and a
        library of books on Ayurveda, meditation, and wellness.
      </p>
    </div>

    {/* IMAGE GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* ITEM 1 */}
      <div>
        <div className="w-full h-[260px] md:h-[300px] overflow-hidden">
          <img
            src={shalaImg}
            alt="Yoga Shala"
            className="w-full h-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
        <p className="mt-3 text-xs tracking-[0.2em] uppercase text-gray-600">
          Yoga Shala
        </p>
      </div>

      {/* ITEM 2 */}
      <div>
        <div className="w-full h-[260px] md:h-[300px] overflow-hidden">
          <img
            src={poolImg}
            alt="Magnesium Pool"
            className="w-full h-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
        <p className="mt-3 text-xs tracking-[0.2em] uppercase text-gray-600">
          Magnesium Pools
        </p>
      </div>

      {/* ITEM 3 */}
      <div>
        <div className="w-full h-[260px] md:h-[300px] overflow-hidden">
          <img
            src={relaxImg}
            alt="Relaxing Area"
            className="w-full h-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
        <p className="mt-3 text-xs tracking-[0.2em] uppercase text-gray-600">
          Relaxing Areas
        </p>
      </div>

      {/* ITEM 4 */}
      <div>
        <div className="w-full h-[260px] md:h-[300px] overflow-hidden">
          <img
            src={riverImg}
            alt="River Spa"
            className="w-full h-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
        <p className="mt-3 text-xs tracking-[0.2em] uppercase text-gray-600">
          Riverview Spa
        </p>
      </div>

    </div>

  </div>
</section>




{/* ================= DAILY TIMELINE SECTION ================= */}
<section className="w-full bg-[#e6e7e1] py-20 md:py-28">
  <div className="max-w-5xl mx-auto px-6">

    {/* HEADER */}
    <h2 className="text-3xl md:text-4xl font-serif text-gray-700 mb-16">
      A day in the life at Sukhavati
    </h2>

    {/* TIMELINE */}
    <div className="relative">

      {/* VERTICAL LINE */}
      <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gray-400"></div>

      {/* ITEM */}
      {[
        {
          time: "6AM - GUIDED RICE PADDY WALK",
          text: "Start your day with a peaceful guided walk through nearby rice paddies."
        },
        {
          time: "7AM - MORNING YOGA",
          text: "Awaken your body and mind with a morning yoga session."
        },
        {
          time: "8AM - BREAKFAST",
          text: "Enjoy a nourishing breakfast with fresh, Ayurvedic dishes."
        },
        {
          time: "MORNING & AFTERNOON",
          text: "Enjoy treatments or free time to relax, meditate or unwind."
        },
        {
          time: "12PM - SILENT MEDITATION",
          text: "Meditate in quiet guided sessions to reset your mind."
        },
        {
          time: "12:30PM - LUNCH",
          text: "Savor nutritious meals crafted for your wellness journey."
        },
        {
          time: "5PM - EVENING YOGA",
          text: "End your day with a calming yoga session."
        },
        {
          time: "6:15PM - DINNER",
          text: "Enjoy a peaceful communal dinner with other guests."
        },
        {
          time: "WEEKLY ACTIVITIES",
          text: "Cultural events, cooking classes and Balinese experiences."
        }
      ].map((item, index) => (
        <div key={index} className="relative pl-12 mb-10">

          {/* DOT */}
          <div className="absolute left-2 top-1 w-4 h-4 bg-black rounded-full"></div>

          {/* CONTENT */}
          <h3 className="text-xs tracking-[0.2em] uppercase text-gray-700 mb-2">
            {item.time}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed max-w-md">
            {item.text}
          </p>

        </div>
      ))}

    </div>
  </div>
</section>



{/* ================= FINAL BANNER SECTION ================= */}
<section className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh]">

  {/* BACKGROUND IMAGE */}
  <img
    src={bannerImg}
    alt="Retreat Banner"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* TEXT */}
  <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
    <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-serif">
      A life-changing retreat for the soul
    </h2>
  </div>

</section>





{/* ================= LOCATION SECTION ================= */}
<section className="w-full bg-[#d4d6ca] py-20 md:py-28">
  <div className="max-w-7xl mx-auto px-6 md:px-10">

    {/* TOP GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-12">

      {/* LEFT TEXT */}
      <div className="max-w-xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-700 mb-6">
          Beautiful Quiet Location
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Nestled in a quiet Balinese village, Sukhavati offers a true sanctuary
          surrounded by lush nature. The serene setting, away from the bustle of
          city life, immerses you in an atmosphere of peace and tranquility.
          Unlike other resorts in the heart of busy Bali, you will be encircled
          by tropical gardens, a flowing river, rice paddies and open skies.
          The healing powers of nature are a beautiful complement to your
          wellness experience with us.
        </p>
      </div>

      {/* RIGHT LARGE IMAGE */}
      <div className="w-full">
        <div className="w-full h-[350px] md:h-[450px] lg:h-[520px] overflow-hidden">
          <img
            src={mainImg}
            alt="Location"
            className="w-full h-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </div>

    </div>

    {/* BOTTOM SMALL GRID */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {[img1, img2, img3, img4].map((img, i) => (
        <div key={i} className="w-full h-[160px] md:h-[200px] overflow-hidden">
          <img
            src={img}
            alt="Gallery"
            className="w-full h-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      ))}

    </div>

  </div>
</section>

    </div>
  );
};

export default Stay;