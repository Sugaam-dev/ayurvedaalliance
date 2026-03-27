import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Sample images (replace with your real images)
import t1 from "./images/mindful.jpg";
import t2 from "./images/mindful.jpg";
import t3 from "./images/mindful.jpg";
import t4 from "./images/mindful.jpg";
import t5 from "./images/te.jpg";
import t6 from "./images/te.jpg";

const teachers = [
  { name: "Virat Chirania", img: t1 },
  { name: "Rohit Sabharwal", img: t2 },
  { name: "Mayur Karthik", img: t3 },
  { name: "Shilpa Sabharwal", img: t4 },
  { name: "Manikandan N.", img: t5 },
  { name: "Rohit Ranjan", img: t6 },
];

const TeachersSection = () => {
  const containerRef = useRef(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  // 🔥 Check scroll position
  const checkScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    setShowLeft(el.scrollLeft > 10);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  // 🔥 Scroll function
  const scroll = (dir) => {
    const el = containerRef.current;
    if (!el) return;

    el.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });

    setTimeout(checkScroll, 300);
  };

  return (
    <section className="bg-[#e4c29f] py-16 px-4 md:px-10 lg:px-20">
      
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
        Art of Living Teachers
      </h2>
      <p className="text-gray-600 mb-8">
        Changing the world one life at a time
      </p>

      <div className="relative">

        {/* LEFT ARROW */}
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 backdrop-blur-md text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/60"
          >
            {/* ‹ */}
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* RIGHT ARROW */}
        {showRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 backdrop-blur-md text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/60"
          >
            {/* › */}
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Cards */}
        <div
          ref={containerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-hidden scroll-smooth"
        >
          {teachers.map((item, index) => (
            <div
              key={index}
              className="min-w-[200px] md:min-w-[240px] h-[300px] rounded-2xl overflow-hidden relative group"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Name */}
              <p className="absolute bottom-4 left-4 text-white text-sm font-semibold">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button className="px-6 py-3 border border-yellow-500 rounded-full text-yellow-600 hover:bg-yellow-500 hover:text-white transition">
          I want to teach
        </button>
      </div>

    </section>
  );
};

export default TeachersSection;