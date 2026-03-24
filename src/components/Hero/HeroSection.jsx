import React, { useRef } from "react";
import heroVideo from "../../assets/video/sunrise.webm";

const solutions = [
  { name: "Stress", icon: "https://www.artofliving.org/in-en/app/plugins/elementor_artofliving/widgets/circle_icons/stress.svg" },
  { name: "Mental Health", icon: "https://www.artofliving.org/in-en/app/plugins/elementor_artofliving/widgets/circle_icons/mental-health.svg" },
  { name: "Weight Loss", icon: "https://www.artofliving.org/in-en/app/plugins/elementor_artofliving/widgets/circle_icons/weight-loss.svg" },
  { name: "Depression", icon: "https://www.artofliving.org/in-en/app/plugins/elementor_artofliving/widgets/circle_icons/depression.svg" },
  { name: "Anger", icon: "https://www.artofliving.org/in-en/app/plugins/elementor_artofliving/widgets/circle_icons/anger.svg" },
  { name: "Sleep", icon: "https://www.artofliving.org/in-en/app/plugins/elementor_artofliving/widgets/circle_icons/sleep.svg" },
  { name: "Wellness", icon: "https://www.artofliving.org/in-en/app/plugins/elementor_artofliving/widgets/circle_icons/wellness.svg" },
  { name: "Relationships", icon: "https://www.artofliving.org/in-en/app/plugins/elementor_artofliving/widgets/circle_icons/relationships.svg" },
  { name: "Parenting", icon: "https://www.artofliving.org/in-en/app/plugins/elementor_artofliving/widgets/circle_icons/parenting.svg" },
  { name: "Back Pain", icon: "https://www.artofliving.org/in-en/app/plugins/elementor_artofliving/widgets/circle_icons/backpain.svg" },
  { name: "Fatigue", icon: "https://www.artofliving.org/in-en/app/plugins/elementor_artofliving/widgets/circle_icons/fatigue.svg" },
  { name: "Immunity", icon: "https://www.artofliving.org/in-en/app/plugins/elementor_artofliving/widgets/circle_icons/immunity.svg" },
];

const HeroSection = () => {
  const scrollRef = useRef();

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full h-[calc(100vh-80px)] overflow-hidden text-white">

      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/webm" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 h-full flex flex-col justify-center container mx-auto px-6">

        {/* TEXT */}
        <div className="max-w-xl mb-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Making Life a Celebration
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Fostering well-being through breath,
            meditation & yoga programs since 1981
          </p>
        </div>

        {/* TITLE */}
        <h3 className="text-xl text-yellow-300 mb-6">
          Find a solution for...
        </h3>

        {/* ICON ROW */}
        <div className="relative flex items-center">

          {/* LEFT */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 z-30 
            w-12 h-12 items-center justify-center rounded-full 
            border border-white/40 bg-black/40 backdrop-blur-md"
          >
            ‹
          </button>

          {/* SCROLLER */}
          <div
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto no-scrollbar"
          >
            {solutions.map((item, i) => (
              <div key={i} className="flex flex-col items-center min-w-[110px]">

                <div className="w-[90px] h-[90px] rounded-full bg-white/50 flex items-center justify-center backdrop-blur-md">
                  <img src={item.icon} alt={item.name} className="w-8" />
                </div>

                <p className="mt-3 text-sm text-white-300">
                  {item.name}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 z-30 
            w-12 h-12 items-center justify-center rounded-full 
            border border-white/40 bg-black/40 backdrop-blur-md"
          >
            ›
          </button>
        </div>

        {/* STATS */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-3">
            A global movement...
          </h2>

          <ul className="flex gap-8 text-sm md:text-base">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              45 years legacy
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              10,000+ centres in 182 countries
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              80 crore+ lives touched
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;