import React, { useMemo, useState } from "react";
import {
  MapPin,
  Calendar,
  Users,
  ArrowRight,
  Filter,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import heroImg from "../../assets/forest.jpg";

const retreats = [
  {
    id: 1,
    title: "Yoga TTC Certification",
    category: "Yoga TTC",
    location: "Bali",
    year: "2026",
    duration: "21 Days",
    price: "$2,400",
    spots: "3 spots left",
    date: "June 15 – July 6, 2026",
    image: heroImg,
  },
  {
    id: 2,
    title: "Ayurveda Healing Retreat",
    category: "Ayurveda",
    location: "Rishikesh",
    year: "2026",
    duration: "14 Days",
    price: "$1,850",
    spots: "8 spots left",
    date: "July 10 – July 24, 2026",
    image: heroImg,
  },
  {
    id: 3,
    title: "Wellness & Detox Retreat",
    category: "Wellness",
    location: "Bali",
    year: "2026",
    duration: "7 Days",
    price: "$1,200",
    spots: "5 spots left",
    date: "August 5 – August 12, 2026",
    image: heroImg,
  },
  {
    id: 4,
    title: "Yoga TTC Certification",
    category: "Yoga TTC",
    location: "Rishikesh",
    year: "2026",
    duration: "21 Days",
    price: "$2,200",
    spots: "10 spots left",
    date: "September 1 – September 22, 2026",
    image: heroImg,
  },
  {
    id: 5,
    title: "Ayurveda Healing Retreat",
    category: "Ayurveda",
    location: "Bali",
    year: "2026",
    duration: "14 Days",
    price: "$2,100",
    spots: "2 spots left",
    date: "October 10 – October 24, 2026",
    image: heroImg,
  },
  {
    id: 6,
    title: "Wellness & Detox Retreat",
    category: "Wellness",
    location: "Rishikesh",
    year: "2026",
    duration: "7 Days",
    price: "$1,050",
    spots: "12 spots left",
    date: "November 5 – November 12, 2026",
    image: heroImg,
  },
  {
    id: 7,
    title: "Yoga TTC Certification",
    category: "Yoga TTC",
    location: "Bali",
    year: "2027",
    duration: "21 Days",
    price: "$2,400",
    spots: "12 spots left",
    date: "January 15 – February 5, 2027",
    image: heroImg,
  },
  {
    id: 8,
    title: "Ayurveda Healing Retreat",
    category: "Ayurveda",
    location: "Rishikesh",
    year: "2027",
    duration: "14 Days",
    price: "$1,850",
    spots: "10 spots left",
    date: "February 15 – March 1, 2027",
    image: heroImg,
  },
  {
    id: 9,
    title: "Wellness & Detox Retreat",
    category: "Wellness",
    location: "Bali",
    year: "2027",
    duration: "7 Days",
    price: "$1,200",
    spots: "15 spots left",
    date: "March 10 – March 17, 2027",
    image: heroImg,
  },
];

const reviews = [
  {
    name: "Sophia Williams",
    review:
      "The retreat atmosphere was peaceful, healing, and truly life-changing.",
  },
  {
    name: "Daniel Carter",
    review:
      "Luxury wellness, authentic Ayurveda, and beautiful Bali energy.",
  },
  {
    name: "Emma Johnson",
    review:
      "One of the best healing experiences I have ever had in my life.",
  },
  {
    name: "Olivia Brown",
    review:
      "Perfect balance of yoga, luxury, wellness, and deep rejuvenation.",
  },
  {
    name: "Michael Scott",
    review:
      "The teachers, therapies, and nature experience were unforgettable.",
  },
  {
    name: "James Wilson",
    review:
      "Everything felt premium, calming, and emotionally transformative.",
  },
];

const FilterChip = ({ active, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-xs sm:text-sm transition-all duration-300 border whitespace-nowrap
      ${
        active
          ? "bg-[#c6843d] border-[#c6843d] text-white shadow-lg"
          : "bg-[#f5efe7] border-[#ead8c4] text-[#5b4b3f] hover:bg-[#e8dbc8]"
      }`}
    >
      {label}
    </button>
  );
};

const RetreatFilterPage = () => {
  const [location, setLocation] = useState("All");
  const [program, setProgram] = useState("All");
  const [year, setYear] = useState("All");

  const [showMoreReviews, setShowMoreReviews] = useState(false);

  const filteredRetreats = useMemo(() => {
    return retreats.filter((item) => {
      const locationMatch =
        location === "All" || item.location === location;

      const programMatch =
        program === "All" || item.category === program;

      const yearMatch = year === "All" || item.year === year;

      return locationMatch && programMatch && yearMatch;
    });
  }, [location, program, year]);

  const visibleReviews = showMoreReviews
    ? reviews
    : reviews.slice(0, 3);

  return (
    <div className="w-full bg-[#f4f1eb] overflow-hidden">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10">

        <div className="max-w-[1800px] mx-auto px-5 sm:px-8 lg:px-14 xl:px-20">

          {/* Heading */}
          <div className="text-center max-w-5xl mx-auto">

            <h2 className="font-serif text-[#1f2a44] leading-none text-[2rem] sm:text-[2.2rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[4rem]">
              Upcoming Retreats
            </h2>

            <div className="w-24 sm:w-32 h-[2px] bg-gradient-to-r from-[#2f6b3b] to-[#c6843d] mx-auto mt-6"></div>

            <p className="mt-7 text-[#6c6257] text-sm sm:text-base md:text-lg leading-[1.9] max-w-3xl mx-auto">
              Find the perfect time and place for your transformation.
              Our retreats intentionally maintain small group sizes to
              ensure deeply personalized wellness experiences.
            </p>
          </div>

          {/* ================================================= */}
          {/* FILTER SECTION */}
          {/* ================================================= */}

          <div className="mt-12 rounded-[32px] border border-[#e7d8c8] bg-[#f8f4ee]/90 backdrop-blur-xl shadow-[0_15px_50px_rgba(0,0,0,0.04)] p-5 sm:p-7 lg:p-8">

            <div className="flex flex-col gap-7">

              {/* Top Row */}
              <div className="flex items-center gap-3 text-[#6d5a4a]">

                <div className="w-10 h-10 rounded-full bg-[#efe1d1] flex items-center justify-center">
                  <Filter size={18} />
                </div>

                <div>
                  <h3 className="font-semibold text-base sm:text-lg">
                    Filter Retreats
                  </h3>

                  <p className="text-sm text-[#8c7c6f]">
                    Find your perfect Bali wellness journey
                  </p>
                </div>
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* LOCATION */}
                <div>

                  <p className="text-[11px] tracking-[0.25em] uppercase text-[#8f7d6f] mb-3">
                    Location
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {["All", "Bali", "Rishikesh"].map((item) => (
                      <FilterChip
                        key={item}
                        label={item}
                        active={location === item}
                        onClick={() => setLocation(item)}
                      />
                    ))}
                  </div>
                </div>

                {/* PROGRAM */}
                <div>

                  <p className="text-[11px] tracking-[0.25em] uppercase text-[#8f7d6f] mb-3">
                    Program
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {[
                      "All",
                      "Yoga TTC",
                      "Ayurveda",
                      "Wellness",
                    ].map((item) => (
                      <FilterChip
                        key={item}
                        label={item}
                        active={program === item}
                        onClick={() => setProgram(item)}
                      />
                    ))}
                  </div>
                </div>

                {/* YEAR */}
                <div>

                  <p className="text-[11px] tracking-[0.25em] uppercase text-[#8f7d6f] mb-3">
                    Year
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {["All", "2026", "2027"].map((item) => (
                      <FilterChip
                        key={item}
                        label={item}
                        active={year === item}
                        onClick={() => setYear(item)}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* CARDS */}
          {/* ================================================= */}

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">

            {filteredRetreats.map((item) => (
              <div
                key={item.id}
                className="group h-full rounded-[32px] overflow-hidden bg-[#faf7f2] border border-[#ead9c8] shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,0,0,0.10)] transition-all duration-700"
              >

                {/* IMAGE */}
                <div className="relative h-[240px] sm:h-[260px] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[4000ms]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"></div>

                  {/* Top Tags */}
                  <div className="absolute top-5 left-5">

                    <div className="px-4 py-2 rounded-full bg-[#f7e4d0]/95 text-[#c6843d] text-[11px] tracking-[0.2em] uppercase font-semibold backdrop-blur-md">
                      {item.category}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="absolute top-5 right-5">

                    <div className="px-4 py-2 rounded-full bg-black/30 backdrop-blur-md text-white text-xs flex items-center gap-2">
                      <MapPin size={13} />
                      {item.location}
                    </div>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-5 left-5 right-5">

                    <h3 className="font-serif text-white text-[1.7rem] sm:text-[2rem] leading-tight">
                      {item.title}
                    </h3>
                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-6 sm:p-7 flex flex-col h-[320px]">

                  {/* Date */}
                  <div className="flex items-center gap-2 text-[#5f5144] text-sm sm:text-base">

                    <Calendar size={15} className="text-[#c6843d]" />

                    <p>{item.date}</p>
                  </div>

                  {/* Duration */}
                  <p className="mt-4 text-[#8a7c6f] text-sm">
                    {item.duration}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-[#ead8c6] my-6"></div>

                  {/* Bottom */}
                  <div className="mt-auto">

                    <div className="flex items-end justify-between">

                      <div>

                        <p className="text-[#8a7c6f] text-sm">
                          From
                        </p>

                        <h4 className="text-[#1f2a44] font-bold text-3xl">
                          {item.price}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2 text-[#2f6b3b] text-sm">

                        <Users size={14} />

                        <p>{item.spots}</p>
                      </div>

                    </div>

                    {/* Button */}
                    <button className="group/btn mt-7 w-full py-4 rounded-full bg-[#c6843d] text-white text-sm tracking-[0.15em] uppercase hover:bg-[#2f6b3b] transition-all duration-500 flex items-center justify-center gap-3">

                      Apply Now

                      <ArrowRight
                        size={15}
                        className="group-hover/btn translate-x-1 transition-transform duration-300"
                      />
                    </button>

                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* ================================================= */}
          {/* CUSTOM DATES */}
          {/* ================================================= */}

          <div className="mt-20 flex justify-center">

            <div className="w-full max-w-4xl rounded-[40px] border border-[#ead8c6] bg-[#f9f5ef] px-7 sm:px-12 py-12 sm:py-14 text-center shadow-[0_15px_40px_rgba(0,0,0,0.04)]">

              <h3 className="font-serif text-[#1f2a44] text-[2rem] sm:text-[2.5rem]">
                Can’t find your dates?
              </h3>

              <p className="mt-6 text-[#75685d] leading-[1.9] max-w-2xl mx-auto">
                We also offer private and custom retreats tailored
                to your schedule and wellness goals. Contact our
                coordinators to design your perfect Bali-inspired
                healing experience.
              </p>

              <button className="mt-8 px-8 sm:px-10 py-4 rounded-full bg-[#c6843d] text-white uppercase tracking-[0.15em] text-sm hover:bg-[#2f6b3b] hover:-translate-y-1 transition-all duration-500 shadow-lg">
                Contact Us For Custom Dates
              </button>
            </div>
          </div>

          {/* ================================================= */}
          {/* REVIEWS */}
          {/* ================================================= */}

          <div className="mt-24">

            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto">

              <h3 className="font-serif text-[#1f2a44] text-[2.4rem] sm:text-[2.2rem] md:text-[4rem]">
                Guest Reviews
              </h3>

              <div className="w-24 h-[2px] bg-gradient-to-r from-[#2f6b3b] to-[#c6843d] mx-auto mt-5"></div>

              <p className="mt-6 text-[#6d6258] leading-[1.9]">
                Real experiences from guests who transformed their
                lives through our Bali wellness retreats.
              </p>
            </div>

            {/* Cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

              {visibleReviews.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[30px] bg-[#faf7f2] border border-[#ead8c6] p-7 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:-translate-y-2 transition-all duration-500"
                >

                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-5">

                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={16}
                        className="fill-[#f2b24f] text-[#f2b24f]"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-[#5c5146] leading-[1.9]">
                    “{item.review}”
                  </p>

                  {/* User */}
                  <div className="mt-7 pt-5 border-t border-[#ead8c6]">

                    <h4 className="font-semibold text-[#1f2a44]">
                      {item.name}
                    </h4>

                    <p className="text-[#2f6b3b] text-sm mt-1">
                      Verified Guest
                    </p>
                  </div>

                </div>
              ))}

            </div>

            {/* Expand Button */}
            <div className="flex justify-center mt-12">

              <button
                onClick={() =>
                  setShowMoreReviews(!showMoreReviews)
                }
                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-[#2f6b3b] text-white tracking-[0.18em] uppercase text-xs sm:text-sm shadow-[0_15px_40px_rgba(0,0,0,0.10)] hover:bg-[#c6843d] hover:-translate-y-1 transition-all duration-500"
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

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RetreatFilterPage;