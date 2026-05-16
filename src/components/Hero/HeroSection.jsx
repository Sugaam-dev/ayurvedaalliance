import React, { useState } from "react";
import {
  Leaf,
  ArrowRight,
  Star,
  Play,
  ChevronDown,
  ChevronUp,
  Heart,
  Shield,
  Sparkles,
} from "lucide-react";

import heroImg from "../../assets/ayurvedabanner.jpg";

const reviews = [
  {
    name: "Sophia Williams",
    country: "Australia",
    review:
      "The most peaceful and luxurious wellness retreat I’ve ever experienced. Everything felt healing and deeply transformative.",
  },
  {
    name: "Daniel Carter",
    country: "United Kingdom",
    review:
      "The yoga sessions, Ayurvedic food, and the Bali-inspired atmosphere completely changed my lifestyle.",
  },
  {
    name: "Emma Johnson",
    country: "Canada",
    review:
      "A beautiful blend of luxury, spirituality, and wellness. I left feeling happier and healthier.",
  },
  {
    name: "Olivia Brown",
    country: "Germany",
    review:
      "The teachers and therapies were world-class. Truly a premium healing experience.",
  },
  {
    name: "Michael Scott",
    country: "United States",
    review:
      "This retreat helped me reconnect with myself and brought clarity, balance, and joy into my life.",
  },
  {
    name: "James Wilson",
    country: "Singapore",
    review:
      "Absolutely unforgettable. The hospitality, food, yoga, and atmosphere were exceptional.",
  },
];

const stats = [
  {
    icon: <Star size={18} />,
    text: "4.8/5 Rating | Google Reviews",
  },
  {
    icon: <Heart size={18} />,
    text: "1,200+ Students Globally",
  },
  {
    icon: <Leaf size={18} />,
    text: "Experienced Teachers | 20+ Years",
  },
  {
    icon: <Shield size={18} />,
    text: "Authentic Ayurveda | Healing",
  },
];

const HeroSection = () => {
  const [showMoreReviews, setShowMoreReviews] = useState(false);

  const visibleReviews = showMoreReviews
    ? reviews
    : reviews.slice(0, 3);

  return (
    <div className="w-full overflow-hidden bg-[#efe9de]">

      {/* ===================================================== */}
      {/* HERO SECTION */}
      {/* ===================================================== */}

      <section className="relative w-full min-h-[760px] sm:min-h-[820px] md:min-h-[850px] lg:min-h-screen overflow-hidden">

        {/* Background */}
        <img
          src={heroImg}
          alt="Wellness Retreat"
          className="absolute inset-0 w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-[4000ms]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20"></div>

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-[#2f6b3b]/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[320px] h-[320px] bg-[#d98942]/20 blur-3xl rounded-full"></div>

        {/* ===================================================== */}
        {/* CONTENT */}
        {/* ===================================================== */}

        <div className="relative z-20 flex items-center min-h-[760px] sm:min-h-[820px] md:min-h-[850px] lg:min-h-screen px-5 sm:px-7 md:px-10 lg:px-16 xl:px-24 pt-28 sm:pt-32 md:pt-36 pb-44 sm:pb-48 md:pb-52">

          <div className="max-w-7xl w-full">

            {/* Label */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-7 max-w-full">

              <Sparkles
                className="text-[#f2b24f] flex-shrink-0"
                size={16}
              />

              <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white font-medium whitespace-nowrap">
                Ayurveda | Yoga | Healing
              </p>
            </div>

            {/* ===================================================== */}
            {/* HEADING */}
            {/* ===================================================== */}

            <h1 className="font-serif text-white leading-[0.95] tracking-tight max-w-5xl">

              <span className="block text-[2.4rem] leading-[0.95] sm:text-[3.2rem] md:text-[4.2rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[4rem]">
                Restore Your Mind,
              </span>

              <span className="block text-[2.4rem] leading-[0.95] sm:text-[3.2rem] md:text-[4.2rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[4rem]">
                Body & Spirit Through
              </span>

              <span className="block italic text-[#f2b24f] text-[2.2rem] leading-[0.95] sm:text-[3rem] md:text-[4rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[4rem] mt-2">
                Ayurveda & Yoga
              </span>
            </h1>

            {/* ===================================================== */}
            {/* DESCRIPTION */}
            {/* ===================================================== */}

            <p className="mt-8 max-w-[850px] text-white/90 text-sm sm:text-base md:text-lg xl:text-[19px] 2xl:text-[22px] leading-[1.8]">
              Life-changing retreats and training in Bali & Rishikesh.
              Reconnect with your true self and create a life of balance,
              purpose, healing, and joy.
            </p>

            {/* ===================================================== */}
            {/* BUTTONS */}
            {/* ===================================================== */}

            <div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-5 w-full md:w-auto">

              {/* Primary */}
              <button className="group relative overflow-hidden w-full md:w-auto px-8 xl:px-10 py-4 rounded-full bg-[#d98942] text-white tracking-[0.15em] uppercase text-xs sm:text-sm shadow-[0_15px_40px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-all duration-500">

                <span className="absolute inset-0 bg-[#2f6b3b] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

                <span className="relative z-10 flex items-center justify-center gap-3">
                  Apply For Retreat
                  <ArrowRight size={16} />
                </span>
              </button>

              {/* Secondary */}
              <button className="group flex items-center justify-center gap-4 w-full md:w-auto px-8 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-[#2f2f2f] transition-all duration-500">

                <div className="w-11 h-11 rounded-full bg-white text-[#2f6b3b] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">

                  <Play className="fill-[#2f6b3b]" size={18} />
                </div>

                <span className="tracking-[0.12em] uppercase text-[11px] sm:text-xs md:text-sm whitespace-nowrap">
                  Book Free Consultation
                </span>
              </button>

            </div>

            {/* ===================================================== */}
            {/* SOCIAL PROOF */}
            {/* ===================================================== */}

            <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-5">

              {/* Avatars */}
              <div className="flex -space-x-3">

                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white bg-gradient-to-br from-[#d98942] to-[#2f6b3b]"
                  ></div>
                ))}
              </div>

              {/* Text */}
              <div>

                <div className="flex items-center gap-1 mb-1 flex-wrap">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      className="fill-[#f2b24f] text-[#f2b24f]"
                    />
                  ))}
                </div>

                <p className="text-white text-sm sm:text-base leading-relaxed">
                  1,200+ Students Transformed from 20+ Countries
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ===================================================== */}
        {/* FEATURE BAR */}
        {/* ===================================================== */}

        <div className="absolute bottom-0 left-0 w-full bg-[#245e31] border-t border-white/10">

          <div className="max-w-[2000px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 py-5">

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5 xl:gap-8">

              {stats.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-white/95"
                >

                  <div className="text-[#f2b24f] flex-shrink-0">
                    {item.icon}
                  </div>

                  <p className="text-[13px] sm:text-sm md:text-[15px] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* REVIEWS SECTION */}
      {/* ===================================================== */}

      {/* <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 overflow-hidden"> */}

        {/* Background Effects */}
        {/* <div className="absolute top-0 left-0 w-[280px] h-[280px] bg-[#2f6b3b]/10 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-[#d98942]/10 blur-3xl rounded-full"></div>

        <div className="relative max-w-[2000px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28"> */}

          {/* Heading */}
          {/* <div className="text-center max-w-4xl mx-auto mb-14">

            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2f6b3b]/10 border border-[#2f6b3b]/20 mb-6">

              <Leaf className="text-[#2f6b3b]" size={16} />

              <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-[#2f6b3b] font-medium">
                Student Experiences
              </p>
            </div> */}

            {/* <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[7rem] font-serif leading-[1.02] text-[#3d2b1f]">
              Guest
              <span className="block italic text-[#d98942]">
                Reviews
              </span>
            </h2>

            <div className="w-24 sm:w-32 h-[2px] bg-gradient-to-r from-[#2f6b3b] to-[#d98942] mx-auto mt-7 mb-8"></div>

            <p className="max-w-3xl mx-auto text-[#5f5a54] text-base sm:text-lg xl:text-[20px] leading-[1.9]">
              Discover why students and wellness seekers from around the world
              choose our Bali retreats for healing, transformation, happiness,
              and inner peace.
            </p>
          </div> */}

          {/* Review Cards */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-6">

            {visibleReviews.map((review, index) => (
              <div
                key={index}
                className="group h-full rounded-[28px] bg-white/70 backdrop-blur-xl border border-white/20 p-6 sm:p-7 shadow-[0_15px_50px_rgba(0,0,0,0.06)] hover:-translate-y-3 hover:shadow-[0_25px_70px_rgba(0,0,0,0.14)] transition-all duration-700"
              > */}

                {/* Stars */}
                {/* <div className="flex items-center gap-1 mb-5">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={15}
                      className="fill-[#f2b24f] text-[#f2b24f]"
                    />
                  ))}
                </div> */}

                {/* Review */}
                {/* <p className="text-[#4e4a45] leading-[1.9] text-sm sm:text-base">
                  “{review.review}”
                </p> */}

                {/* User */}
                {/* <div className="mt-6 pt-5 border-t border-[#e8ddd0]">

                  <p className="text-[#3d2b1f] font-semibold text-lg">
                    {review.name}
                  </p>

                  <p className="text-[#2f6b3b] text-sm mt-1">
                    {review.country}
                  </p>
                </div>
              </div>
            ))}

          </div> */}

          {/* Read More */}
          {/* <div className="flex justify-center mt-12">

            <button
              onClick={() =>
                setShowMoreReviews(!showMoreReviews)
              }
              className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[#2f6b3b] text-white tracking-[0.18em] uppercase text-xs sm:text-sm shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:bg-[#d98942] hover:-translate-y-1 transition-all duration-500"
            >
              {showMoreReviews ? (
                <>
                  Show Less Reviews
                  <ChevronUp size={18} />
                </>
              ) : (
                <>
                  Read More Reviews
                  <ChevronDown size={18} />
                </>
              )}
            </button>

          </div> */}
        {/* </div>
      </section> */}
    </div>
  );
};

export default HeroSection;