import React, { useRef, useState, useEffect } from "react";
import heroVideo from "../../assets/video/Sunrise.webm";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const updateScroll = () => {
      setScrollPosition(container.scrollLeft);
      setMaxScroll(container.scrollWidth - container.clientWidth);
    };

    updateScroll();
    container.addEventListener("scroll", updateScroll);

    return () => {
      container.removeEventListener("scroll", updateScroll);
    };
  }, []);

  const scroll = (dir) => {
    const container = scrollRef.current;
    const scrollAmount = 300;

    container.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    // <section className="relative w-full min-h-screen pt-[110px] overflow-hidden text-white">
<section className="relative w-full min-h-screen overflow-hidden text-white">
 
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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a4d68]/60 via-black/40 to-black/85" />

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col justify-start pt-20 md:pt-24 max-w-[1100px] mx-auto px-4 md:px-8">

        {/* TEXT */}
        <div className="max-w-xl mb-10">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
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
        <div className="relative flex items-center w-full mt-4">

          {/* LEFT BUTTON */}
          {scrollPosition > 5 && (
            <button
  onClick={() => scroll("left")}
  className="absolute left-0 z-30 w-10 h-10 flex items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
>
  <ChevronLeft className="w-5 h-5 text-white" />
</button>
          )}

          {/* SCROLLER WRAPPER */}
          <div className="w-full overflow-hidden">

            {/* SCROLLER */}
            <div
              ref={scrollRef}
              className="flex gap-5 w-full overflow-x-auto md:overflow-hidden no-scrollbar scroll-smooth px-4 md:px-8 snap-x snap-mandatory"
            >
              {solutions.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center min-w-[85px] md:min-w-[95px] snap-start"
                >
                  <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-black/60 flex items-center justify-center backdrop-blur-md">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-8 filter brightness-0 invert"
                    />
                  </div>

                  <p className="mt-3 text-sm text-gray-200 text-center">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT BUTTON */}
          {scrollPosition < maxScroll - 5 && (
            <button
  onClick={() => scroll("right")}
  className="absolute right-0 z-30 w-10 h-10 flex items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
>
  <ChevronRight className="w-5 h-5 text-white" />
</button>
          )}
        </div>

        {/* STATS */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-7">
            A global movement...
          </h2>

          <ul className="flex gap-6 text-sm md:text-base flex-wrap">
            <li className="flex items-center gap-2  mb-5">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              45 years legacy
            </li>
            <li className="flex items-center gap-2  mb-5">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              10,000+ centres in 182 countries
            </li>
            <li className="flex items-center gap-2  mb-5">
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