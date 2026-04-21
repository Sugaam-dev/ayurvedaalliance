import React from "react";
import heroImg from "./images/dsc.jpg";
// import interiorImg from "./images/chair.jpg";

const RetreatPage = () => {
  return (
    <div className="w-full bg-[#e9e6df]">

      {/* HERO SECTION */}
      <section className="relative w-full h-[50vh] md:h-[55vh]">
        
        {/* Background */}
        <img
          src={heroImg}
          alt="Retreat"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-xs md:text-sm tracking-[0.3em] uppercase text-center">
            A Life-Changing <br /> Retreat For The Soul
          </p>
        </div>
      </section>

     

    </div>
  );
};

export default RetreatPage;