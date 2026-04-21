import React, { useState } from "react";

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
    "Pick-up and drop- to and from (DPS) Denpasar Bali Airport.",
    "Luxurious Accommodation in our tastefully and artistically designed rooms.",
    "Ayurveda Consultation and follow ups.",
    "Daily 1 major (90min) and 1 minor (45min) treatment.",
    "Ayurvedic meals (Breakfast, Lunch and Dinner).",
    "Daily Yoga and Meditation.",
    "Balinese Purification.",
    "1 Ayurvedic Cooking class.",
    "Trataka ( Yogic Visual Concentration).",
    "“Embrace Yourself” Romantic Dinner.",
    "Pre-Retreat assessment and preparation.",
    "Post-retreat follow-up",
  ],
  "5 Nights": [
  "Pick-up and drop- to and from (DPS) Denpasar Bali Airport.",
  "Luxurious Accommodation in our tastefully and artistically designed rooms.",
  "Ayurveda Consultation and follow ups.",
  "Daily 1 major (90min) and 1 minor (45min) treatment.",
  "Ayurvedic meals (Breakfast, Lunch and Dinner).",
  "Daily Yoga and Meditation.",
  "Balinese Purification.",
  "1 Ayurvedic Cooking class.",
  "Trataka ( Yogic Visual Concentration).",
  "“Embrace Yourself” Romantic Dinner.",
  "Pre-Retreat assessment and preparation.",
  "Post-retreat follow-up",
],

  "7 Nights": [
    "Pick-up and drop- to and from (DPS) Denpasar Bali Airport.",
    "Luxurious Accommodation in our tastefully and artistically designed rooms.",
    "Ayurveda Consultation and follow ups.",
    "Daily 1 major (90min) and 1 minor (45min) treatment.",
    "Ayurvedic meals (Breakfast, Lunch and Dinner).",
    "Daily Yoga and Meditation.",
    "Balinese Purification.",
    "Herbal Walk.",
    "Sound Healing",
    "1 Ayurvedic Cooking class.",
    "Trataka ( Yogic Visual Concentration).",
    "“Embrace Yourself” Romantic Dinner.",
    "Pre-Retreat assessment and preparation.",
    "Post-retreat follow-up",
  ],

  "10 Nights": [
    "Pick-up and drop- to and from (DPS) Denpasar Bali Airport.",
    "Luxurious Accommodation in our tastefully and artistically designed rooms.",
    "Ayurveda Consultation and follow ups.",
    "Daily 1 major (90min) and 1 minor (45min) treatment.",
    "Ayurvedic meals (Breakfast, Lunch and Dinner).",
    "Daily Yoga and Meditation.",
    "Balinese Purification.",
    "Herbal Walk.",
    "Sound Healing",
    "Batik Painting.",
    "1 Ayurvedic Cooking class.",
    "Trataka ( Yogic Visual Concentration).",
    "“Embrace Yourself” Romantic Dinner.",
    "Pre-Retreat assessment and preparation.",
    "Post-retreat follow-up",
  ],

  "14 Nights": [
    "Pick-up and drop- to and from (DPS) Denpasar Bali Airport.",
    "Luxurious Accommodation in our tastefully and artistically designed rooms.",
    "Ayurveda Consultation and follow ups.",
    "Daily 1 major (90min) and 1 minor (45min) treatment.",
    "Ayurvedic meals (Breakfast, Lunch and Dinner).",
    "Daily Yoga and Meditation.",
    "Balinese Purification.",
    "Herbal Walk.",
    "Sound Healing",
    "Batik Painting.",
    "Herbal Walk",
    "2 Ayurvedic Cooking class.",
    "Trataka ( Yogic Visual Concentration).",
    "“Embrace Yourself” Romantic Dinner.",
    "Pre-Retreat assessment and preparation.",
    "Post-retreat follow-up",
  ],

  "21 Nights": [
    "Pick-up and drop- to and from (DPS) Denpasar Bali Airport.",
    "Luxurious Accommodation in our tastefully and artistically designed rooms.",
    "Ayurveda Consultation and follow ups.",
    "Daily 1 major (90min) and 1 minor (45min) treatment.",
    "Ayurvedic meals (Breakfast, Lunch and Dinner).",
    "Daily Yoga and Meditation.",
    "Balinese Purification.",
    "Herbal Walk.",
    "Sound Healing",
    "Batik Painting.",
    "Herbal Walk",
    "Crystal Healing",
    "3 Ayurvedic Cooking class.",
    "Trataka ( Yogic Visual Concentration).",
    "“Embrace Yourself” Romantic Dinner.",
    "Pre-Retreat assessment and preparation.",
    "Post-retreat follow-up",
  ],

  "28 Nights": [
    "Pick-up and drop- to and from (DPS) Denpasar Bali Airport.",
    "Luxurious Accommodation in our tastefully and artistically designed rooms.",
    "Ayurveda Consultation and follow ups.",
    "Daily 1 major (90min) and 1 minor (45min) treatment.",
    "Ayurvedic meals (Breakfast, Lunch and Dinner).",
    "Daily Yoga and Meditation.",
    "Balinese Purification.",
    "Sound Healing",
    "Batik Painting.",
    "Herbal Walk",
    "Crystal Healing",
    "Visit to Tirta Empule Temple Bali",
    "4 Ayurvedic Cooking class.",
    "Trataka ( Yogic Visual Concentration).",
    "“Embrace Yourself” Romantic Dinner.",
    "Pre-Retreat assessment and preparation.",
    "Post-retreat follow-up",
  ],
};

const RetreatIncludesPage = () => {
  const [activeTab, setActiveTab] = useState("3 Nights");

  return (
    <section className="w-full bg-[#e9e6df] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-2xl md:text-4xl font-bold text-black mb-10">
          What’s Included in Your Panchakarma Retreat Experience
        </h2>

        {/* Tabs */}
        <div className="flex overflow-x-auto scrollbar-hide mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 whitespace-nowrap text-sm md:text-base font-medium border-r
                ${
                  activeTab === tab
                    ? "bg-gray-300 text-black"
                    : "bg-[#2fb5bb] text-white"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="bg-[#e4e69a] p-6 md:p-10">
          <ol className="list-decimal pl-5 space-y-3 text-sm md:text-base text-black">
            {data[activeTab].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>

      </div>
    </section>
  );
};

export default RetreatIncludesPage;