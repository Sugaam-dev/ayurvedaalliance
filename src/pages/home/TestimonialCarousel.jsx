import React, { useEffect, useState } from "react";

// Import images
import t1 from "./images/te.jpg";
import t2 from "./images/teac.jpg";
import t3 from "./images/teach.jpeg";
import t4 from "./images/teachers.jpg";

const testimonials = [
  {
    text: "My energy levels increased, and very importantly I got a tool which can flush the negativity out of my system. I can completely rely on the Sudarshan Kriya when I've…",
    name: "Shashank Dixit, 40",
    role: "IT Security Specialist",
    img: t1,
  },
  {
    text: "The best part is, I'm able to achieve more in a short time and do things which I always wanted to do. I can focus on my work, I can…",
    name: "Aman K Lohia, 35",
    role: "Software Professional",
    img: t2,
  },
  {
    text: "I used to think sadness was normal but since practicing the Sudarshan Kriya my name has been changed to “Khush” (happiness). Now happiness is a way of life for me.",
    name: "Sylajja, 38",
    role: "Trainer, IT Professional",
    img: t3,
  },
  {
    text: "After Sudarshan Kriya, I have been able to expand my skills e.g. my ability in organizing and coordinating events have improved. It has helped me cope with different types of…",
    name: "Saurabh Paul",
    role: "Engineer & Tabla Player",
    img: t4,
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f1f1f1] py-16 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto text-center px-4">

        {/* Quote Section */}
        <div className="relative mb-10">

          {/* Left Quote */}
          <span className="text-yellow-500 text-3xl md:text-4xl absolute left-0 md:left-10 top-0">
            “
          </span>

          {/* Text */}
          <p className="text-gray-600 italic text-base md:text-lg lg:text-xl leading-relaxed px-6 md:px-16">
            {testimonials[current].text}
          </p>

          {/* Right Quote */}
          <span className="text-yellow-500 text-3xl md:text-4xl absolute right-0 md:right-10 top-0">
            ”
          </span>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center justify-center mb-6">
          <img
            src={testimonials[current].img}
            alt={testimonials[current].name}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover mb-3"
          />

          <h3 className="font-semibold text-gray-800">
            {testimonials[current].name}
          </h3>

          <p className="text-gray-500 text-sm">
            {testimonials[current].role}
          </p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-4">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                current === index
                  ? "bg-yellow-500 scale-110"
                  : "bg-yellow-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialCarousel;