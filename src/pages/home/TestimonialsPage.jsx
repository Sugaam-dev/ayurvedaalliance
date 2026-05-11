import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

import {
  Quote,
  Leaf,
  Star,
} from "lucide-react";

import img1 from "./images/te.jpg";
import img2 from "./images/teac.jpg";
import img3 from "./images/teach.jpeg";
import img4 from "./images/teachers.jpg";
import img5 from "./images/yogiranjan.jpeg";

import img6 from "./images/bphdr.jpg";
import img7 from "./images/dsc.jpg";
import img8 from "./images/dsc0.jpg";
import img9 from "./images/dsc07.jpg";

const testimonials = [
  {
    text: "Absolute luxury from start to finish. Divine.",
    name: "Nathan Buckley",
    role: "AFL Legend",
    img: img1,
  },
  {
    text: "I’ve never been so pampered in all my life – lavish, indulgent, next level.",
    name: "Gus Worland",
    role: "MMM Sydney & Gotcha4Life Founder",
    img: img2,
  },
  {
    text: "There’s nothing like the serenity of Sukhavati – a premiere Ayurvedic resort.",
    name: "Laura Poole",
    role: "Meditation Teacher",
    img: img3,
  },
  {
    text: "What brings me back each time is the all-round luxury here.",
    name: "Cody Weightman",
    role: "AFL Star",
    img: img4,
  },
  {
    text: "An unforgettable healing journey. Truly life-changing experience.",
    name: "Yogi Ranjan",
    role: "Yoga Expert",
    img: img5,
  },
];

const programs = [
  {
    img: img6,
    title: "Luxury Retreat",
  },
  {
    img: img7,
    title: "Personalised Wellness",
  },
  {
    img: img8,
    title: "Ayurvedic Treatments",
  },
  {
    img: img9,
    title: "Nourishing Meals",
  },
];

const TestimonialsPage = () => {
  return (
    <>
      {/* ================================================= */}
      {/* TESTIMONIAL SECTION */}
      {/* ================================================= */}

      <section className="relative w-full overflow-hidden bg-[#ece7de] py-16 sm:py-20 md:py-24 lg:py-28 2xl:py-36">

        {/* Background Blur */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#6d8b74]/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#8b5e3c]/10 blur-3xl rounded-full"></div>

        <div className="relative max-w-[2000px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28">

          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto mb-14 xl:mb-20">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6d8b74]/10 border border-[#6d8b74]/20 mb-6">
              
              <Leaf className="text-[#6d8b74]" size={16} />

              <p className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#6d8b74] font-medium">
                Guest Experiences
              </p>
            </div>

            <h2 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.8rem] 2xl:text-[5.8rem] leading-[1.05] font-serif text-[#3d2b1f]">
              What Our Guests
              <span className="block italic text-[#6d8b74]">
                Are Saying
              </span>
            </h2>

            <div className="w-24 h-[2px] bg-gradient-to-r from-[#6d8b74] to-[#8b5e3c] mx-auto mt-6 mb-8"></div>

            <p className="text-[#5f5a54] text-sm sm:text-base md:text-lg xl:text-[19px] leading-relaxed max-w-3xl mx-auto">
              Discover how our wellness retreats have transformed lives through
              luxury healing, Ayurveda, yoga, and holistic rejuvenation.
            </p>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={28}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>

                <div className="group relative h-full rounded-[30px] overflow-hidden border border-white/20 bg-white/50 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_80px_rgba(0,0,0,0.16)] transition-all duration-700 hover:-translate-y-3">

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6d8b74]/5 to-[#8b5e3c]/10 opacity-0 group-hover:opacity-100 transition duration-700"></div>

                  <div className="relative p-7 sm:p-8 xl:p-10 min-h-[360px] flex flex-col justify-between">

                    {/* Quote Icon */}
                    <div className="flex justify-between items-start mb-6">

                      <div className="w-14 h-14 rounded-full bg-[#6d8b74]/10 flex items-center justify-center">
                        <Quote className="text-[#6d8b74]" size={24} />
                      </div>

                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={14}
                            className="fill-[#b08968] text-[#b08968]"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Text */}
                    <p className="text-[#3d2b1f] text-lg sm:text-xl xl:text-[22px] leading-relaxed font-serif">
                      “{item.text}”
                    </p>

                    {/* User */}
                    <div className="flex items-center gap-4 mt-10">

                      <div className="relative">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                        />

                        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#6d8b74] border-2 border-white"></div>
                      </div>

                      <div>
                        <p className="text-[#3d2b1f] font-semibold text-base">
                          {item.name}
                        </p>

                        <p className="text-[#6d6a65] text-sm">
                          {item.role}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ================================================= */}
      {/* PROGRAM OVERVIEW */}
      {/* ================================================= */}

      <section className="relative w-full overflow-hidden bg-[#f4f0e8] py-16 sm:py-20 md:py-24 lg:py-28 2xl:py-36">

        {/* Background */}
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#8b5e3c]/10 blur-3xl rounded-full"></div>

        <div className="relative max-w-[2000px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28">

          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-14 xl:mb-20">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8b5e3c]/10 border border-[#8b5e3c]/20 mb-6">
              
              <Leaf className="text-[#8b5e3c]" size={16} />

              <p className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#8b5e3c] font-medium">
                Wellness Programs
              </p>
            </div>

            <h2 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.8rem] 2xl:text-[5.8rem] leading-[1.05] font-serif text-[#3d2b1f]">
              Program
              <span className="block italic text-[#6d8b74]">
                Overview
              </span>
            </h2>

            <div className="w-24 h-[2px] bg-gradient-to-r from-[#8b5e3c] to-[#6d8b74] mx-auto mt-6 mb-8"></div>

            <p className="text-[#5f5a54] text-sm sm:text-base md:text-lg xl:text-[19px] leading-relaxed">
              Discover transformative wellness journeys crafted through
              Ayurveda, yoga, healing therapies, mindful living, and nourishing
              experiences tailored for your complete rejuvenation.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">

            {programs.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[28px] bg-white/50 backdrop-blur-md border border-white/20 shadow-[0_15px_50px_rgba(0,0,0,0.08)] hover:-translate-y-3 hover:shadow-[0_25px_70px_rgba(0,0,0,0.16)] transition-all duration-700"
              >

                {/* Image */}
                <div className="relative overflow-hidden">

                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[320px] sm:h-[360px] md:h-[420px] xl:h-[480px] 2xl:h-[580px] object-cover transition-all duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                  {/* Floating Tag */}
                  <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/85 backdrop-blur-md text-[#3d2b1f] text-[11px] tracking-[0.2em] uppercase shadow-lg">
                    Wellness
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-6">

                    <h3 className="text-white text-2xl xl:text-3xl font-serif leading-tight">
                      {item.title}
                    </h3>

                    <div className="w-16 h-[2px] bg-[#6d8b74] mt-4 group-hover:w-24 transition-all duration-500"></div>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsPage;