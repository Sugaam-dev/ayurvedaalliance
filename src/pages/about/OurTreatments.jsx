import React from "react";
import abhyangaImg from "./images/abhyanga.jpg";
import shirodharaImg from "./images/shirodhara.jpg";
import patraImg from "./images/patrapotali.jpg";
import udvartanaImg from "./images/ubtan.jpg";
import pizhichilImg from "./images/pizhichil.jpg";
import takradharaImg from "./images/takradhara.jpg";
import navarakizhiImg from "./images/navarakizhi.jpg";
import nasyaImg from "./images/nasya.jpg";
import svedanaImg from "./images/svedana.jpg";
import karnaImg from "./images/karna.jpg";
import droneImg from "./images/drone.jpg";


const treatmentsData = [
  {
    id: 1,
    label: "Ayurvedic Full Body Massage",
    title: "Abhyanga",
    description:
      "An authentic Ayurvedic full-body massage given with warm medicated oil. At Sukhavati, it is uniquely performed by 2 technicians. Helps restore balance of doshas and promotes longevity.",
    points: [
      "Rejuvenates the body and delays aging",
      "Stimulates internal organs",
      "Calms the nervous system",
      "Improves circulation",
      "Helps detoxification",
    ],
    image: abhyangaImg,
  },
  {
    id: 2,
    label: "Mind & Nervous System Relaxation",
    title: "Shirodhara",
    description:
      "Medicated oils are streamed continuously onto the forehead to calm the nervous system and deeply relax the mind.",
    points: [
      "Promotes deep relaxation",
      "Reduces stress & anxiety",
      "Calms emotional imbalances",
      "Improves sleep",
      "Supports mental clarity",
    ],
    image: shirodharaImg,
  },
  {
    id: 3,
    label: "Nourishing Poultice Massage",
    title: "Patra Potali",
    description:
      "Herbal leaf bundles are dipped in medicated oil and applied to the body to relieve pain and inflammation.",
    points: [
      "Relieves muscle & joint pain",
      "Improves circulation",
      "Reduces stiffness",
      "Enhances mobility",
      "Promotes detox",
    ],
    image: patraImg,
  },
   {
    id: 4,
    label: "Ayurvedic Body Scrub",
    title: "Udvartana",
    description:
      "A rejuvenating herbal body scrub made with medicated powders applied to the body to stimulate circulation and improve skin texture.",
    points: [
      "Exfoliates dead skin cells",
      "Improves blood circulation",
      "Reduces excess fat",
      "Enhances skin glow",
      "Promotes lymphatic drainage",
    ],
    image: udvartanaImg,
  },
  {
    id: 5,
    label: "Soothing Oil Therapy",
    title: "Pizhichil",
    description:
      "A luxurious treatment where warm medicated oils are poured over the body in rhythmic streams to deeply relax muscles and nourish tissues.",
    points: [
      "Relieves joint & muscle pain",
      "Strengthens the nervous system",
      "Improves circulation",
      "Deeply relaxes the body",
      "Enhances flexibility",
    ],
    image: pizhichilImg,
  },
  {
    id: 6,
    label: "Mind & Nervous System Relaxation",
    title: "Takradhara",
    description:
      "A calming therapy where medicated buttermilk is poured continuously on the forehead to soothe the mind and balance emotions.",
    points: [
      "Reduces stress & anxiety",
      "Improves sleep quality",
      "Cools the body & mind",
      "Balances hormones",
      "Enhances mental clarity",
    ],
    image: takradharaImg,
  },
  {
    id: 7,
    label: "Strengthening poultice treatment",
    title: "Navarakizhi",
    description:
      "Cloth bags are filled with Navar rice, soaked in medicated milk and then used to massage the entire body as in Abhyanga.",
    points: [
      "Reduces stress & anxiety",
      "Improves sleep quality",
      "Cools the body & mind",
      "Balances hormones",
      "Enhances mental clarity",
    ],
    image: navarakizhiImg,
  },
  {
    id: 8,
    label: "Medicated Nasal Drops",
    title: "Nasya",
    description:
      "Nasya is one of the five pillars of Panchakarma. Medicated oils are gently dropped into the nostrils to help eliminate toxins from the head and improve overall wellbeing.",
    points: [
      "Strengthens brain and nervous system",
      "Relieves sinus congestion",
      "Improves voice clarity",
      "Enhances mental focus",
      "Reduces stress & emotional imbalance",
    ],
    image: nasyaImg,
  },
  {
    id: 9,
    label: "Ayurvedic Steam Treatment",
    title: "Svedana",
    description:
      "A deeply relaxing steam therapy that helps open pores, remove toxins, and improve circulation throughout the body.",
    points: [
      "Opens pores & detoxifies skin",
      "Relieves muscle stiffness",
      "Improves blood circulation",
      "Reduces body pain",
      "Enhances flexibility",
    ],
    image: svedanaImg,
  },
  {
    id: 10,
    label: "Medicated Ear Therapy",
    title: "Karna Purana",
    description:
      "A soothing therapy where warm medicated oils are gently poured into the ears to improve ear health and calm the nervous system.",
    points: [
      "Improves hearing clarity",
      "Relieves ear discomfort",
      "Reduces stress & anxiety",
      "Calms the nervous system",
      "Helpful for headaches & migraines",
    ],
    image: karnaImg,
  },
];

const OurTreatments = () => {
  return (
    <div className="w-full bg-[#e9ebe4]">

      {/* HEADER */}
      <section className="py-20 md:py-28   bg-[#d4d6ca] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs tracking-[0.25em] uppercase text-gray-600 mb-6">
            Authentic Ayurveda
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-700 mb-8">
            Treatments
          </h1>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            You will receive 90 minutes of daily treatments as part of your
            program. Below are the authentic Ayurvedic treatments that will help
            to relax, nourish, detoxify, strengthen and rejuvenate you.
          </p>
        </div>
      </section>

     


      {treatmentsData.map((item) => (
  <section key={item.id} className="py-20 md:py-28   bg-[#e6e7e1]">
    <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* LEFT TEXT */}
      <div className="max-w-md">
        <p className="text-xs tracking-[0.25em] uppercase text-gray-600 mb-4">
          {item.label}
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-700 mb-6">
          {item.title}
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
          {item.description}
        </p>

        <ul className="text-gray-600 text-sm md:text-base space-y-2 list-disc list-inside">
          {item.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full">
        <div className="w-full h-[350px] md:h-[450px] lg:h-[520px] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  </section>
))}

{/* ================= CTA / HERO SECTION ================= */}
<section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
  
  {/* BACKGROUND IMAGE */}
  <img
    src={droneImg}
    alt="Resort View"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* CONTENT */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
    
    <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-serif mb-4">
      Ready to change your life?
    </h2>

    <p className="text-white/80 text-sm md:text-base mb-6 max-w-md">
      Begin your journey towards balance, healing and inner peace with our
      authentic Ayurvedic programs.
    </p>

    <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
      Contact Us
    </button>

  </div>
</section>
    </div>
  );
};

export default OurTreatments;