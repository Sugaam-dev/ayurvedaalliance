// import React from "react";

// // Import images (based on your folder)
// import mind from "./images/mind.jpg";
// import mind1 from "./images/mind1.jpg";
// import mind2 from "./images/mind2.jpg";
// import mindful from "./images/mindful.jpg";
// import mindfulness from "./images/mindfulness.jpg";
// import oip from "./images/OIP.jpg";

// const MeditationPrograms = () => {
//   return (
//     <div className="bg-[#f3f3f3] py-10 px-4 md:px-10 lg:px-16">
//       {/* Heading */}
//       <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
//         Meditation Programs
//       </h2>
//       <p className="text-gray-500 mb-8">
//         If you want to be happy and healthy, you need to meditate.
//       </p>

//       {/* Grid Layout */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        
//         {/* LEFT BIG CARD */}
//         <div className="relative col-span-2 row-span-2 rounded-xl overflow-hidden group">
//           <img
//             src={mind}
//             alt="Beginner in person"
//             className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//           />
//           <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
//           <p className="absolute bottom-4 left-4 text-white font-semibold text-sm md:text-base">
//             Beginner (in person)
//           </p>
//         </div>

//         {/* SMALL CARDS */}
//         <div className="relative rounded-xl overflow-hidden group">
//           <img
//             src={mind1}
//             alt="Beginner online"
//             className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//           />
//           <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
//           <p className="absolute bottom-3 left-3 text-white text-sm font-medium">
//             Beginner (online)
//           </p>
//         </div>

//         <div className="relative rounded-xl overflow-hidden group">
//           <img
//             src={mind2}
//             alt="Intuition Process"
//             className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//           />
//           <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
//           <p className="absolute bottom-3 left-3 text-white text-sm font-medium">
//             Intuition Process
//           </p>
//         </div>

//         {/* RIGHT BIG CARD */}
//         <div className="relative row-span-2 rounded-xl overflow-hidden group">
//           <img
//             src={mindfulness}
//             alt="Follow-ups"
//             className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//           />
//           <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
//           <p className="absolute bottom-4 left-4 text-white font-semibold text-sm md:text-base">
//             Follow-ups
//           </p>
//         </div>

//         {/* BOTTOM SMALL */}
//         <div className="relative rounded-xl overflow-hidden group">
//           <img
//             src={mindful}
//             alt="Youth"
//             className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//           />
//           <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
//           <p className="absolute bottom-3 left-3 text-white text-sm font-medium">
//             Youth
//           </p>
//         </div>

//         <div className="relative rounded-xl overflow-hidden group">
//           <img
//             src={oip}
//             alt="Advanced"
//             className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
//           />
//           <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
//           <p className="absolute bottom-3 left-3 text-white text-sm font-medium">
//             Advanced
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MeditationPrograms;



import React from "react";

import mind from "./images/mind.jpg";
import mind1 from "./images/mind1.jpg";
import mind2 from "./images/mind2.jpg";
import mindful from "./images/mindful.jpg";
import mindfulness from "./images/mindfulness.jpg";
import oip from "./images/OIP.jpg";

const MeditationPrograms = () => {
  return (
    <section className="bg-[#f3f3f3] py-12 px-4 md:px-10 lg:px-16">
      
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Meditation Programs
      </h2>
      <p className="text-gray-500 mb-8">
        If you want to be happy and healthy, you need to meditate.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[250px]">
        
        {/* LEFT BIG */}
        <div className="relative col-span-2 row-span-2 rounded-xl overflow-hidden group">
          <img src={mind} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
          <p className="absolute bottom-4 left-4 text-white font-semibold">
            Beginner (in person)
          </p>
        </div>

        {/* SMALL */}
        {[ 
          { img: mind1, text: "Beginner (online)" },
          { img: mind2, text: "Intuition Process" }
        ].map((item, i) => (
          <div key={i} className="relative rounded-xl overflow-hidden group">
            <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <p className="absolute bottom-3 left-3 text-white text-sm">
              {item.text}
            </p>
          </div>
        ))}

        {/* RIGHT BIG */}
        <div className="relative row-span-2 rounded-xl overflow-hidden group">
          <img src={mindfulness} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
          <p className="absolute bottom-4 left-4 text-white font-semibold">
            Follow-ups
          </p>
        </div>

        {/* BOTTOM */}
        {[ 
          { img: mindful, text: "Youth" },
          { img: oip, text: "Advanced" }
        ].map((item, i) => (
          <div key={i} className="relative rounded-xl overflow-hidden group">
            <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
            <p className="absolute bottom-3 left-3 text-white text-sm">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeditationPrograms;