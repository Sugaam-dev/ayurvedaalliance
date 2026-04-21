import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

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

const TestimonialsPage = () => {
  return (
    <>
    <section className="w-full bg-[#e9e6df] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-serif text-gray-800 mb-12">
          What our guests are saying
        </h2>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#8f9085] text-white p-8 md:p-10 flex flex-col justify-between min-h-[320px] transition duration-300 hover:-translate-y-2 hover:shadow-xl">

                {/* Quote */}
                <p className="text-lg md:text-xl leading-relaxed font-serif">
                  "{item.text}"
                </p>

                {/* User */}
                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white"
                  />
                  <div className="text-sm">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-200 text-xs">{item.role}</p>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>

    <section className="w-full bg-[#e9e6df] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          
          {/* Small Label */}
          <p className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">
            All-Inclusive Wellness Retreat
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 leading-tight">
            Program Overview
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-600 text-sm md:text-base leading-relaxed">
            At Sukhavati, we offer a range of transformative solutions tailored to your unique health goals. 
            Whether you are seeking rejuvenation, detoxification, or a wellness reset, our programs combine 
            ancient Ayurvedic treatments, yoga, cooking classes, and nutritious meals to support your journey.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div>
            <img
              src={img6}
              alt="Luxury Retreat"
              className="w-full h-[350px] md:h-[420px] object-cover"
            />
            <p className="mt-3 text-xs tracking-[0.15em] uppercase text-gray-500">
              Luxury Retreat
            </p>
          </div>

          {/* Card 2 */}
          <div>
            <img
              src={img7}
              alt="Personalised Wellness"
              className="w-full h-[350px] md:h-[420px] object-cover"
            />
            <p className="mt-3 text-xs tracking-[0.15em] uppercase text-gray-500">
              Personalised Wellness
            </p>
          </div>

          {/* Card 3 */}
          <div>
            <img
              src={img8}
              alt="Ayurvedic Treatments"
              className="w-full h-[350px] md:h-[420px] object-cover"
            />
            <p className="mt-3 text-xs tracking-[0.15em] uppercase text-gray-500">
              Ayurvedic Treatments
            </p>
          </div>

          {/* Card 4 */}
          <div>
            <img
              src={img9}
              alt="Nourishing Meals"
              className="w-full h-[350px] md:h-[420px] object-cover"
            />
            <p className="mt-3 text-xs tracking-[0.15em] uppercase text-gray-500">
              Nourishing Meals
            </p>
          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default TestimonialsPage;