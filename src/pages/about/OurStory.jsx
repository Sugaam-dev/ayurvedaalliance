// import React from "react";
// import ourStoryImg from "./images/ourstory.jpg";

// const OurStory = () => {
//   return (
//     <section className="w-full bg-[#f3f2ee] py-16 md:py-24">
//       <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        
//         {/* LEFT CONTENT */}
//         <div className="text-left">
//           <h2 className="text-3xl md:text-5xl mb-6 text-gray-700 font-serif">
//             Our Story
//           </h2>

//           <p className="text-gray-600 mb-4 text-sm leading-relaxed font-light">
//             Nestled in the lush, tropical paradise of Bali, Sukhavati – the
//             ‘Abode of Bliss’ – has been a sanctuary for healing and rejuvenation
//             since 2011.
//           </p>

//           <p className="text-gray-600 mb-4 text-sm leading-relaxed font-light">
//             Our goal is to provide a serene space where people can truly
//             transform their wellbeing and return to their natural state of
//             exceptional mental, physical and spiritual health. At Sukhavati, we
//             aim to gently introduce people to the profound, ancient wisdom of
//             Ayurvedic medicine, with the comforts of modern luxury.
//           </p>

//           <p className="text-gray-600 text-sm leading-relaxed font-light">
//             Located in a small Balinese village, amidst tranquil gardens and
//             picturesque rice paddies, we offer a holistic approach to wellness,
//             guided by a team of highly skilled Ayurvedic doctors, therapists,
//             and caring staff. We are dedicated to educating, empowering and
//             pampering you to help you achieve and maintain optimal health and a
//             vibrant, fulfilling life.
//           </p>
//         </div>

//         {/* RIGHT IMAGE */}
//         <div className="w-full">
//           <img
//             src={ourStoryImg}
//             alt="Our Story"
//             className="w-full h-auto object-cover rounded-md shadow-md"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurStory;






import React from "react";
import ourStoryImg from "./images/ourstory.jpg";

const OurStory = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#2f3e34] to-[#5a3e2b] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-left">
          <h2 className="text-3xl md:text-5xl mb-6 text-[#e6dcc6] font-serif">
            Our Story
          </h2>

          <p className="text-[#d6cfb8] mb-4 text-sm leading-relaxed font-light">
            Nestled in the lush, tropical paradise of Bali, Sukhavati – the
            ‘Abode of Bliss’ – has been a sanctuary for healing and rejuvenation
            since 2011.
          </p>

          <p className="text-[#d6cfb8] mb-4 text-sm leading-relaxed font-light">
            Our goal is to provide a serene space where people can truly
            transform their wellbeing and return to their natural state of
            exceptional mental, physical and spiritual health. At Sukhavati, we
            aim to gently introduce people to the profound, ancient wisdom of
            Ayurvedic medicine, with the comforts of modern luxury.
          </p>

          <p className="text-[#d6cfb8] text-sm leading-relaxed font-light">
            Located in a small Balinese village, amidst tranquil gardens and
            picturesque rice paddies, we offer a holistic approach to wellness,
            guided by a team of highly skilled Ayurvedic doctors, therapists,
            and caring staff. We are dedicated to educating, empowering and
            pampering you to help you achieve and maintain optimal health and a
            vibrant, fulfilling life.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full">
          <img
            src={ourStoryImg}
            alt="Our Story"
            className="w-full h-auto object-cover rounded-md shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;