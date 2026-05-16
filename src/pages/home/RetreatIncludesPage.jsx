import React, { useState } from "react";
import {
  Leaf,
  Check,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Star,
} from "lucide-react";

const tabs = [
  "3 Nights",
  "5 Nights",
  "7 Nights",
  "10 Nights",
  "14 Nights",
  "21 Nights",
  "28 Nights",
];

const data = {
  "3 Nights": [
    "Pick-up and drop to and from (DPS) Denpasar Bali Airport.",
    "Luxurious Accommodation in artistically designed rooms.",
    "Ayurveda Consultation and follow ups.",
    "Daily 1 major and 1 minor treatment.",
    "Ayurvedic meals (Breakfast, Lunch and Dinner).",
    "Daily Yoga and Meditation.",
    "Balinese Purification.",
    "1 Ayurvedic Cooking class.",
    "Romantic Dinner Experience.",
    "Pre-Retreat assessment and preparation.",
    "Post-retreat follow-up",
  ],

  "5 Nights": [
    "Luxury airport transfers included.",
    "Luxury accommodation experience.",
    "Daily wellness therapies.",
    "Ayurvedic detox meals.",
    "Daily yoga sessions.",
    "Meditation and mindfulness.",
    "Balinese healing ritual.",
    "Cooking workshop.",
    "Luxury romantic dinner.",
    "Post retreat guidance.",
  ],

  "7 Nights": [
    "Luxury airport transfers included.",
    "Luxury accommodation experience.",
    "Daily wellness therapies.",
    "Ayurvedic detox meals.",
    "Daily yoga sessions.",
    "Meditation and mindfulness.",
    "Balinese healing ritual.",
    "Herbal Walk.",
    "Sound Healing.",
    "Cooking workshop.",
    "Luxury romantic dinner.",
    "Post retreat guidance.",
  ],

  "10 Nights": [
    "Luxury airport transfers included.",
    "Luxury accommodation experience.",
    "Daily wellness therapies.",
    "Ayurvedic detox meals.",
    "Daily yoga sessions.",
    "Meditation and mindfulness.",
    "Balinese healing ritual.",
    "Herbal Walk.",
    "Sound Healing.",
    "Batik Painting.",
    "Cooking workshop.",
    "Luxury romantic dinner.",
    "Post retreat guidance.",
  ],

  "14 Nights": [
    "Luxury airport transfers included.",
    "Luxury accommodation experience.",
    "Daily wellness therapies.",
    "Ayurvedic detox meals.",
    "Daily yoga sessions.",
    "Meditation and mindfulness.",
    "Balinese healing ritual.",
    "Herbal Walk.",
    "Sound Healing.",
    "Batik Painting.",
    "2 Ayurvedic Cooking classes.",
    "Luxury romantic dinner.",
    "Post retreat guidance.",
  ],

  "21 Nights": [
    "Luxury airport transfers included.",
    "Luxury accommodation experience.",
    "Daily wellness therapies.",
    "Ayurvedic detox meals.",
    "Daily yoga sessions.",
    "Meditation and mindfulness.",
    "Balinese healing ritual.",
    "Crystal Healing.",
    "Batik Painting.",
    "3 Ayurvedic Cooking classes.",
    "Luxury romantic dinner.",
    "Post retreat guidance.",
  ],

  "28 Nights": [
    "Luxury airport transfers included.",
    "Luxury accommodation experience.",
    "Daily wellness therapies.",
    "Ayurvedic detox meals.",
    "Daily yoga sessions.",
    "Meditation and mindfulness.",
    "Balinese healing ritual.",
    "Crystal Healing.",
    "Temple Visit Experience.",
    "4 Ayurvedic Cooking classes.",
    "Luxury romantic dinner.",
    "Post retreat guidance.",
  ],
};

const reviews = [
  {
    name: "Sophia Williams",
    text: "The most peaceful and luxurious wellness retreat I’ve ever experienced in Bali.",
  },
  {
    name: "Daniel Carter",
    text: "Everything felt magical — yoga, healing, food, nature, and the luxury atmosphere.",
  },
  {
    name: "Emma Johnson",
    text: "This retreat completely transformed my body and mind. Truly unforgettable.",
  },
  {
    name: "Olivia Brown",
    text: "Beautiful people, calming energy, and world-class Ayurvedic treatments.",
  },
  {
    name: "Michael Scott",
    text: "An experience filled with healing, happiness, and inner peace.",
  },
  {
    name: "James Wilson",
    text: "I loved every moment here. Premium experience with authentic Balinese vibes.",
  },
];

const RetreatIncludesPage = () => {
  const [activeTab, setActiveTab] = useState("3 Nights");
  const [showMoreReviews, setShowMoreReviews] = useState(false);

  const visibleReviews = showMoreReviews
    ? reviews
    : reviews.slice(0, 3);

  return (
    <section className="relative w-full overflow-hidden bg-[#f4efe6] py-16 sm:py-20 md:py-24 lg:py-28 2xl:py-36">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#6d8b74]/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#d98942]/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-[2000px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="max-w-5xl mx-auto text-center mb-14 xl:mb-20">

          {/* Label */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#6d8b74]/10 border border-[#6d8b74]/20 mb-6">
            
            <Leaf className="text-[#6d8b74]" size={16} />

            <p className="text-[11px] sm:text-xs tracking-[0.28em] uppercase text-[#6d8b74] font-medium">
              Bali Luxury Wellness
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-[2.3rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[4rem] leading-[1.02] font-serif text-[#3d2b1f]">
            Your Panchakarma
            <span className="block italic text-[#d98942]">
              Retreat Experience
            </span>
          </h2>

          {/* Divider */}
          <div className="w-24 sm:w-32 h-[2px] bg-gradient-to-r from-[#6d8b74] to-[#d98942] mx-auto mt-7 mb-8"></div>

          {/* Description */}
          <p className="max-w-4xl mx-auto text-[#5f5a54] text-base sm:text-lg xl:text-[20px] leading-[1.9]">
            Immerse yourself in a deeply healing Balinese wellness retreat
            designed to restore balance, happiness, relaxation, and inner peace
            through Ayurveda, yoga, luxury therapies, and mindful living.
          </p>
        </div>

        {/* ================================================= */}
        {/* MAIN CONTENT */}
        {/* ================================================= */}

        <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-8 xl:gap-12">

          {/* LEFT SIDEBAR */}
          <div className="relative">

            <div className="sticky top-10 bg-white/60 backdrop-blur-xl border border-white/30 rounded-[32px] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

              <div className="flex items-center gap-3 mb-6 px-2">
                
                <Sparkles className="text-[#d98942]" size={20} />

                <h3 className="text-[#3d2b1f] font-semibold text-lg">
                  Retreat Plans
                </h3>
              </div>

              <div className="flex xl:flex-col gap-3 overflow-x-auto xl:overflow-visible scrollbar-hide pb-2 xl:pb-0">

                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`group relative overflow-hidden whitespace-nowrap rounded-2xl px-6 py-4 text-left transition-all duration-500 min-w-fit xl:w-full ${
                      activeTab === tab
                        ? "bg-[#6d8b74] text-white shadow-xl"
                        : "bg-[#f8f3eb] text-[#3d2b1f] hover:bg-[#d98942] hover:text-white"
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-between">
                      {tab}

                      <span className="text-xs opacity-80">
                        Retreat
                      </span>
                    </span>
                  </button>
                ))}

              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[36px] bg-white/55 backdrop-blur-xl border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.08)] p-6 sm:p-8 md:p-10 xl:p-14">

              {/* Glow */}
              <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-[#6d8b74]/10 blur-3xl rounded-full"></div>

              {/* Header */}
              <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

                <div>
                  <p className="text-[#6d8b74] uppercase tracking-[0.25em] text-xs mb-3">
                    Wellness Package
                  </p>

                  <h3 className="text-[2rem] sm:text-[2.5rem] xl:text-[3rem] font-serif text-[#3d2b1f] leading-tight">
                    {activeTab}
                    <span className="block italic text-[#d98942]">
                      Retreat Includes
                    </span>
                  </h3>
                </div>

                {/* Badge */}
                <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#d98942]/10 border border-[#d98942]/20 w-fit">
                  
                  <Star
                    className="fill-[#d98942] text-[#d98942]"
                    size={16}
                  />

                  <span className="text-[#3d2b1f] text-sm font-medium">
                    Premium Wellness
                  </span>
                </div>
              </div>

              {/* Included Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {data[activeTab].map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 rounded-2xl bg-[#faf6ef] hover:bg-white p-5 border border-[#ede4d6] hover:border-[#6d8b74]/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                  >

                    <div className="w-10 h-10 rounded-full bg-[#6d8b74]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#6d8b74] transition-all duration-500">
                      
                      <Check
                        size={18}
                        className="text-[#6d8b74] group-hover:text-white transition-all duration-500"
                      />
                    </div>

                    <p className="text-[#4e4a45] text-sm sm:text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            {/* ================================================= */}
            {/* REVIEWS */}
            {/* ================================================= */}

            {/* <div className="mt-14"> */}

              {/* Review Header */}
              {/* <div className="text-center mb-10"> */}

                {/* <h3 className="text-[2rem] sm:text-[2.5rem] xl:text-[3rem] font-serif text-[#3d2b1f]">
                  Guest
                  <span className="italic text-[#d98942]">
                    {" "}Reviews
                  </span>
                </h3>

                <div className="w-20 h-[2px] bg-gradient-to-r from-[#6d8b74] to-[#d98942] mx-auto mt-5"></div>
              </div> */}

              {/* Review Grid */}
              {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {visibleReviews.map((review, index) => (
                  <div
                    key={index}
                    className="group rounded-[28px] bg-white/60 backdrop-blur-xl border border-white/20 p-6 shadow-[0_15px_50px_rgba(0,0,0,0.06)] hover:-translate-y-3 hover:shadow-[0_25px_70px_rgba(0,0,0,0.14)] transition-all duration-700"
                  > */}

                    {/* Stars */}
                    {/* <div className="flex items-center gap-1 mb-5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={15}
                          className="fill-[#d98942] text-[#d98942]"
                        />
                      ))}
                    </div> */}

                    {/* Text */}
                    {/* <p className="text-[#4e4a45] leading-[1.9] text-sm sm:text-base">
                      “{review.text}”
                    </p> */}

                    {/* User */}
                    {/* <div className="mt-6 pt-5 border-t border-[#e8ddd0]">
                      
                      <p className="text-[#3d2b1f] font-semibold">
                        {review.name}
                      </p>

                      <p className="text-[#6d8b74] text-sm mt-1">
                        Verified Guest
                      </p>
                    </div>
                  </div>
                ))}

              </div> */}

              {/* Read More */}
              {/* <div className="flex justify-center mt-10">

                <button
                  onClick={() =>
                    setShowMoreReviews(!showMoreReviews)
                  }
                  className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[#6d8b74] text-white tracking-[0.18em] uppercase text-xs sm:text-sm shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:bg-[#d98942] hover:-translate-y-1 transition-all duration-500"
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
            {/* </div> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default RetreatIncludesPage;