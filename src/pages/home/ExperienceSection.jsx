import React, { useState, useRef, useEffect } from "react";

// Import images
import img1 from "./images/te.jpg";
import img2 from "./images/te.jpg";
import img3 from "./images/te.jpg";
import img4 from "./images/te.jpg";
import img5 from "./images/te.jpg";
import img6 from "./images/te.jpg";

const data = [
  {
    name: "Kunal Kapoor",
    role: "Bollywood actor",
    quote: "Centeredness and capability",
    desc: "My experiences after Sudarshan Kriya: I feel a sense of joy and calmness...",
    img: img1,
  },
  {
    name: "Ravichandran Ashwin",
    role: "Indian Cricketer",
    quote: "I feel that in the morning after...",
    desc: "I feel that in the morning after I do the Sudarshan Kriya...",
    img: img2,
  },
  {
    name: "Vibhavari Deshpande",
    role: "Actress, writer and director",
    quote: "Earlier you start better it is for...",
    desc: "Sudarshan Kriya has helped me not only to build my immunity...",
    img: img3,
  },
  {
    name: "Rajkumar Hirani",
    role: "Bollywood producer & filmmaker",
    quote: "Re-energizes me and my crew",
    desc: "It has helped me stay focused and energized...",
    img: img4,
  },
  {
    name: "Krishna Bharadwaj",
    role: "Television Actor",
    quote: "Came out of depression",
    desc: "Meditation helped me come out of depression...",
    img: img5,
  },
  {
    name: "Farhan Akhtar",
    role: "Indian actor, director, producer",
    quote: "More rejuvenating than a month's vacation",
    desc: "It’s more rejuvenating than a month’s vacation...",
    img: img6,
  },
];

const ExperienceSection = () => {
  const [active, setActive] = useState(null);

  // 👉 NEW: slider refs + state
  const containerRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  // 👉 check scroll position
  const checkScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    setShowLeft(el.scrollLeft > 10);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  // 👉 scroll function
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
    <section className="bg-[#e9dcc3] py-16 px-4 md:px-10 lg:px-20">
      
      {/* Heading */}
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8">
        A life changing experience
      </h2>

      <div className="relative">

        {/* LEFT ARROW */}
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 backdrop-blur-md text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/60"
          >
            ‹
          </button>
        )}

        {/* RIGHT ARROW */}
        {showRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/40 backdrop-blur-md text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/60"
          >
            ›
          </button>
        )}

        {/* Cards */}
        <div
          ref={containerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-hidden scroll-smooth"
        >
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => setActive(item)}
              className="min-w-[220px] md:min-w-[260px] h-[320px] relative rounded-2xl overflow-hidden cursor-pointer group"
            >
              <img
                src={item.img}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                alt={item.name}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs italic mb-1">“{item.quote}”</p>
                <h3 className="font-semibold text-sm">{item.name}</h3>
                <p className="text-xs text-gray-300">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
          
          <div className="bg-white max-w-3xl w-full rounded-2xl p-6 md:p-8 relative shadow-2xl">
            
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 text-gray-500 text-xl hover:text-black"
            >
              ×
            </button>

            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
              {active.name}
            </h3>

            <p className="text-gray-500 italic mb-4">{active.role}</p>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              {active.desc}
            </p>

          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;