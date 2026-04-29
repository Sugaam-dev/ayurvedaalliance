import React from "react";

import img1 from "./images/treatment.jpg";
import img2 from "./images/treatment1.jpg";
import img3 from "./images/treatment2.jpg";
import img4 from "./images/treatment3.jpg";
import img5 from "./images/treatment4.jpg";
import img6 from "./images/treatment5.jpg";
import img7 from "./images/treatment6.jpg";
import img8 from "./images/treatment7.jpg";
import img9 from "./images/treatment8.jpg";
import img10 from "./images/treatment9.jpg";
import img11 from "./images/treatment10.jpg";
import img12 from "./images/treatment11.jpg";
import img13 from "./images/treatment13.jpg";
import img14 from "./images/treatment14.jpg";
import img15 from "./images/treatment15.jpg";
import img16 from "./images/treatment16.jpg";


import ctaImg from "./images/ayur4.jpg";

const treatmentsData = [
  {
    label: "Ayurvedic full body massage",
    title: "Abhyanga",
    description:
      "A rhythmic Ayurvedic full body massage using warm medicated oil. It is deeply relaxing and helps improve circulation.",
    points: [
      "Promotes deep relaxation",
      "Stimulates circulation",
      "Enhances skin glow",
      "Relieves stress & tension",
    ],
    image: img1,
  },
  {
    label: "Mind & nervous system relaxation",
    title: "Shirodhara",
    description:
      "Medicated oils are poured onto the forehead in a continuous stream to calm the mind and nervous system.",
    points: [
      "Reduces stress & anxiety",
      "Improves sleep quality",
      "Enhances mental clarity",
      "Deep relaxation",
    ],
    image: img2,
  },
  {
    label: "Nourishing poultice massage",
    title: "Patra Potali",
    description:
      "Warm herbal bundles are applied to relieve pain, stiffness, and improve circulation.",
    points: [
      "Relieves muscle pain",
      "Improves blood flow",
      "Detoxifies tissues",
      "Promotes healing",
    ],
    image: img3,
  },
  {
    label: "Ayurvedic body scrub",
    title: "Ubtan",
    description:
      "A herbal scrub made with natural ingredients to cleanse and rejuvenate the skin.",
    points: [
      "Exfoliates dead skin",
      "Brightens complexion",
      "Improves skin texture",
      "Leaves skin soft & glowing",
    ],
    image: img4,
  },
  {
  label: "Soothing oil therapy",
  title: "Pizhichil",
  description:
    "A luxurious therapy where warm medicated oils are continuously poured over the body, deeply relaxing muscles and improving circulation.",
  points: [
    "Relieves joint pain & stiffness",
    "Improves blood circulation",
    "Nourishes skin & tissues",
    "Promotes deep relaxation",
  ],
  image: img5,
},
{
  label: "Mind & nervous system relaxation",
  title: "Takradhara",
  description:
    "A calming treatment using medicated buttermilk poured in a rhythmic stream over the forehead.",
  points: [
    "Balances the nervous system",
    "Relieves stress & anxiety",
    "Improves sleep",
    "Useful for migraines & insomnia",
  ],
  image: img6,
},
{
  label: "Strengthening poultice treatment",
  title: "Navarakizhi",
  description:
    "A rejuvenating therapy using warm rice boluses to nourish tissues and improve strength.",
  points: [
    "Strengthens muscles",
    "Improves circulation",
    "Enhances body tone",
    "Rejuvenates tissues",
  ],
  image: img7,
},
{
  label: "Medicated nasal drops",
  title: "Nasya",
  description:
    "A detoxifying therapy involving herbal oils administered through the nasal passage to cleanse the head region.",
  points: [
    "Clears sinuses",
    "Improves breathing",
    "Enhances mental clarity",
    "Supports ENT health",
  ],
  image: img8,
},
{
  label: "Ayurvedic steam treatment",
  title: "Swedana",
  description:
    "Performed in a specially designed steam cabin, Swedana helps open the pores, eliminate toxins, and relax the muscles.",
  points: [
    "Relieves muscle stiffness",
    "Promotes detoxification",
    "Improves circulation",
    "Prepares body for further therapies",
  ],
  image: img9,
},
{
  label: "Medicated ear therapy",
  title: "Karna Purana",
  description:
    "A soothing therapy where warm medicated oil is gently poured into the ears to nourish and cleanse the ear canal.",
  points: [
    "Relieves ear discomfort",
    "Improves hearing clarity",
    "Reduces tension in neck & jaw",
    "Calms the nervous system",
  ],
  image: img10,
},
{
  label: "Medicated copper bath",
  title: "Avagaham",
  description:
    "A rejuvenating herbal bath in a copper tub that helps detoxify the body and relax the mind.",
  points: [
    "Detoxifies the body",
    "Improves skin health",
    "Relaxes muscles",
    "Enhances circulation",
  ],
  image: img11,
},
{
  label: "Low back / lumbar spine treatment",
  title: "Kati Basti",
  description:
    "A deeply nourishing treatment where warm medicated oil is retained over the lower back using a dough ring.",
  points: [
    "Relieves lower back pain",
    "Strengthens spine",
    "Reduces stiffness",
    "Improves flexibility",
  ],
  image: img12,
},

{
  label: "Ayurvedic eye treatment",
  title: "Netra Tarpana",
  description:
    "A soothing therapy where medicated ghee is retained around the eyes to nourish and rejuvenate.",
  points: [
    "Relieves eye strain",
    "Improves vision clarity",
    "Reduces dryness",
    "Soothes tired eyes",
  ],
  image: img13,
},

{
  label: "Medicated bandage",
  title: "Medicated bandage",
  description:
    "A targeted treatment where herbal pastes are applied and wrapped to support healing.",
  points: [
    "Reduces inflammation",
    "Supports tissue healing",
    "Improves circulation",
    "Effective for joint pain",
  ],
   image: img16,
//   images: [img14, img15], // 👈 IMPORTANT (plural)
},

{
  label: "Neck / upper spine treatment",
  title: "Greeva Basti",
  description:
    "Warm medicated oil is retained over the neck area to relieve stiffness and pain.",
  points: [
    "Relieves neck pain",
    "Improves flexibility",
    "Reduces stiffness",
    "Strengthens muscles",
  ],
  image: img14,
},

{
  label: "Heart / chest therapy",
  title: "Hridaya Basti",
  description:
    "A deeply calming therapy where warm oil is retained over the chest region.",
  points: [
    "Supports heart health",
    "Relieves stress",
    "Balances emotions",
    "Promotes relaxation",
  ],
  image: img15,
},
];

const Treatments = () => {
  return (
    <>
    <section className="bg-[#e9ebe1] min-h-[70vh] flex items-center justify-center px-4 md:px-10">
      
      <div className="max-w-3xl text-center">

        {/* Small Label */}
        <p className="text-xs md:text-sm tracking-[3px] uppercase text-gray-600 mb-4">
          Authentic Ayurveda
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-light text-gray-800 mb-6">
          Treatments
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
          You will receive 90 minutes of daily treatments as part of your program.
          Below are the authentic Ayurvedic treatments that will help to relax,
          nourish, detoxify, strengthen and rejuvenate you. They are performed by
          our experienced spa technicians, with care and comfort. Warm oils are
          mixed with medicinal herbs onsite according to your individual needs,
          as prescribed by our doctors.
        </p>

      </div>
    </section>


    <section className="bg-[#efefec] py-16 md:py-24 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {treatmentsData.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16"
          >
            {/* TEXT */}
            <div className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}>
              
              <p className="text-xs tracking-[2px] uppercase text-gray-500 mb-2">
                {item.label}
              </p>

              <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-4">
                {item.title}
              </h2>

              <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed max-w-md">
                {item.description}
              </p>

              <ul className="list-disc pl-5 text-sm md:text-base text-gray-600 space-y-1">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>

            {/* IMAGE */}
            <div className={`${index % 2 !== 0 ? "lg:order-1" : ""}`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[350px] md:h-[450px] lg:h-[520px] object-cover"
              />
            </div>
          </div>
        ))}

      </div>
    </section>





    
        <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
    
          {/* Background Image */}
          <img
            src={ctaImg}
            alt="Retreat"
            className="absolute inset-0 w-full h-full object-cover"
          />
    
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
    
          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <div className="max-w-2xl text-white">
    
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-4">
                Ready to change your life?
              </h2>
    
              <p className="text-sm md:text-base opacity-80 mb-2">
               Feeling inspired to start or continue your journey to your healthiest self?
              </p>
{/*     
              <p className="text-sm md:text-base opacity-80 mb-6">
                Contact us to book your stay or to ask your questions and find out
                more about how a program can benefit you.
              </p> */}
    
              <button className="bg-white text-black px-6 md:px-8 py-3 text-xs md:text-sm tracking-[2px] uppercase hover:bg-gray-200 transition">
                CONTACT US
              </button>
    
            </div>
          </div>
        </section>

    </>
  );
};

export default Treatments;