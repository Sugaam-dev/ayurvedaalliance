import React from "react";
import { Link } from "react-router-dom";

import img1 from "./images/treatment8.jpg"; // first image
import img2 from "./images/dose-juice.jpg"; // second image
import img3 from "./images/katherine-hanlon.jpg"; // third image

const articles = [
  {
    title:
      "Serious toxins removed in just 5-7 days with Ayurvedic Panchakarma",
    image: img1,
    link: "/ayurveda/video",
  },
  {
    title:
      "What to expect from a liver detox retreat at Sukhavati",
    image: img2,
    link: "/ayurveda/liver",
  },
  {
    title:
      "Should you do a liver detox if you're already healthy?",
    image: img3,
    link: "/ayurveda/detox",
  },
];

const VideosArticles = () => {
  return (
    <section className="bg-[#8c8f7c] py-16 md:py-24 px-4 md:px-10 lg:px-20">
      
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <p className="text-xs tracking-[3px] uppercase text-white mb-3">
          Videos & Articles
        </p>

        <h2 className="text-lg md:text-xl lg:text-2xl text-white mb-12 font-light">
          Learn from our team with helpful resources on our blog.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {articles.map((item, index) => (
            <Link to={item.link} key={index}>
              
              <div className="group cursor-pointer">

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[250px] md:h-[300px] lg:h-[320px] object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Title */}
                <p className="text-white text-xs md:text-sm uppercase tracking-[1px] mt-4 leading-snug text-left">
                  {item.title}
                </p>

              </div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

export default VideosArticles;