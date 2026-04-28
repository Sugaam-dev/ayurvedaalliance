import React from "react";
import doctorsImg from "./images/doctors.jpg"; 
import meditationImg from "./images/meditate12.jpg";

const OtherServices = () => {
  return (
     <div className="w-full bg-[#e9ebe4]">
    <section className="w-full bg-[#e9ebe4] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-700 mb-6">
            Book an Online Consultation
          </h1>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            If you have in depth questions regarding your specific health
            condition, we recommend booking an online consultation with one of
            our Ayurvedic physicians. They will be able to guide you personally
            in preparation for your Panchakarma program.
          </p>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            An online consultation can also be beneficial if you are not ready
            for Panchakarma right now, but would like personalised expert
            guidance to achieve excellent long-term health.
          </p>

          <p className="text-gray-600 text-sm md:text-base mb-3">
            Please contact us directly for available dates and times.
          </p>

          <p className="text-gray-600 text-sm md:text-base mb-2">
            Full consultation: 45 minutes
          </p>

          <p className="text-gray-600 text-sm md:text-base mb-6">
            Cost: USD $100 + tax and service
          </p>

          <button className="border border-gray-600 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-700 hover:text-white transition-all duration-300">
            Book Consultation
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-md lg:max-w-lg overflow-hidden rounded-md">
            <img
              src={doctorsImg}
              alt="Doctors"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>


      {/* ================= SECOND SECTION ================= */}
      <section className="py-16 md:py-24 bg-[#e6e8e1]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="w-full max-w-md lg:max-w-lg overflow-hidden rounded-md">
              <img
                src={meditationImg}
                alt="Meditation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-center lg:text-left order-2 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-700 mb-6">
              Learn to Meditate at Sukhavati
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
             At Sukhavati, we offer a daily 30 minute silent group meditation where anyone can come to do their own quiet practice. If you do not yet have a meditation practice, we welcome you to learn the wonderful, health-promoting benefits of TM meditation during your stay.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              Transcendental Meditation (TM) has been the go-to meditation technique for many of the world’s highest performers over several decades. The likes of Hugh Jackman, Katy Perry, Jerry Seinfeld, Arianna Huffington, Ellen DeGeneres, and Ray Dalio, have practised the technique for decades and public promote it as one of the key reasons for their sustained success.
            </p>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
             More recently, the likes of Tim Ferris, Oprah Winfrey, and many of the world’s top athletes, artists and businesspeople have also learned. A simple, effortless technique that anyone can do, TM is taught over 4 consecutive days (about 60-90 minutes a day) and can be learnt at Sukhavati in conjunction with any treatment program.
            </p>
{/* <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
              He also leads the ‘Education for World Peace Project’ in Bali (E4P). Working closely with the government, they have taught Transcendental Meditation to thousands of schoolchildren across Bali, helping students’ study without stress, develop their total brain capacity, and contribute to creating greater peace throughout Bali. Learning TM at Sukhavati helps Wayan and others continue this great work.
</p> */}
            <p className="text-gray-600 text-sm md:text-base mb-4">
              Course fee = US $750*
            </p>

            <p className="text-gray-500 text-xs">
              * Includes lifetime follow-up at any recognized TM centres worldwide
            </p>
          </div>

        </div>
      </section>


    </div>
  );
};

export default OtherServices;