// import React, { useEffect, useState } from "react";

// const slides = [
//   {
//     text: "Life Changing",
//     brand: "CNN",
//   },
//   {
//     text: "The easy breathing technique that can lower your anxiety 44%",
//     brand: "Prevention",
//   },
//   {
//     text: "Sudarshan kriya helps to infuse harmony in the body",
//     brand: "Dainik Bhaskar",
//   },
// ];

// const MediaCarousel = () => {
//   const [current, setCurrent] = useState(0);

//   // Auto slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full bg-[#e9dcc3] py-16 md:py-20 lg:py-24">
//       <div className="max-w-4xl mx-auto text-center px-4">
        
//         {/* Quote */}
//         <div className="relative">
//           {/* Left Quote */}
//           <span className="text-yellow-500 text-3xl md:text-4xl absolute -left-4 md:-left-10 top-0">
//             “
//           </span>

//           {/* Text */}
//           <p className="text-gray-700 text-lg md:text-xl lg:text-2xl italic px-6">
//             {slides[current].text}
//           </p>

//           {/* Right Quote */}
//           <span className="text-yellow-500 text-3xl md:text-4xl absolute -right-4 md:-right-10 top-0">
//             ”
//           </span>
//         </div>

//         {/* Brand */}
//         <h2
//           className={`mt-6 text-3xl md:text-5xl font-bold ${
//             slides[current].brand === "CNN"
//               ? "text-red-600"
//               : slides[current].brand === "Prevention"
//               ? "text-green-500"
//               : "text-black"
//           }`}
//         >
//           {slides[current].brand}
//         </h2>

//         {/* Dots */}
//         <div className="flex justify-center mt-6 gap-3">
//           {slides.map((_, index) => (
//             <span
//               key={index}
//               onClick={() => setCurrent(index)}
//               className={`w-3 h-3 rounded-full cursor-pointer transition ${
//                 current === index
//                   ? "bg-yellow-500 scale-110"
//                   : "bg-yellow-300"
//               }`}
//             ></span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MediaCarousel;



import React, { useEffect, useState } from "react";

const slides = [
  {
    text: "Life Changing",
    brand: "CNN",
  },
  {
    text: "The easy breathing technique that can lower your anxiety 44%",
    brand: "Prevention",
  },
  {
    text: "Sudarshan kriya helps to infuse harmony in the body",
    brand: "Dainik Bhaskar",
  },
];

const MediaCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#e9dcc3] py-16 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto text-center px-4">

        {/* Quote Section */}
        <div className="flex items-start justify-center gap-2 md:gap-4">
          
          {/* Left Quote */}
          <span className="text-yellow-500 text-2xl md:text-4xl leading-none mt-1">
            “
          </span>

          {/* Text */}
          <p className="text-gray-700 text-lg md:text-xl lg:text-2xl italic max-w-2xl">
            {slides[current].text}
          </p>

          {/* Right Quote */}
          <span className="text-yellow-500 text-2xl md:text-4xl leading-none mt-1">
            ”
          </span>

        </div>

        {/* Brand */}
        <h2
          className={`mt-6 text-3xl md:text-5xl font-bold ${
            slides[current].brand === "CNN"
              ? "text-red-600"
              : slides[current].brand === "Prevention"
              ? "text-green-500"
              : "text-black"
          }`}
        >
          {slides[current].brand}
        </h2>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                current === index
                  ? "bg-yellow-500 scale-110"
                  : "bg-yellow-300"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default MediaCarousel;