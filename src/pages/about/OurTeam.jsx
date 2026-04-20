import React from "react";
import teamImg from "./images/customer.jpg";
import doctorsImg from "./images/doctors.jpg"; // your image
import educationImg from "./images/education.jpg"; // use your image path
import yogaImg from "./images/yogainstructors.jpg"; // use correct image if different
import spaImg from "./images/spa.jpg"; // use correct image from your folder
import drivingImg from "./images/driving.jpg"; // use correct image if different

import kitchenImg from "./images/kitchen.jpg"; // use correct image from your folder
import houseImg from "./images/housekeeping.jpg";
import securityImg from "./images/security.jpg";
import maintenanceImg from "./images/maintenance.jpg";
const OurTeam = () => {
  return (
    <>
      {/* ================= INTRO ================= */}
      <section className="w-full bg-[#efeee8] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">

          <p className="uppercase text-xs tracking-[0.3em] text-[#6b6f66] mb-4">
            Dedicated to your wellness
          </p>

          <h2 className="text-3xl md:text-5xl font-serif text-[#2f3e34] mb-6">
            Our Team
          </h2>

          <p className="text-[#5a5f57] text-sm md:text-base leading-relaxed">
            For our guests, the service provided by our staff is one of the
            highlights of their experience with us. Many of our team members have
            been with us since the beginning, bringing their years of experience
            and commitment to each guest’s wellness transformation. They will
            welcome you with bright smiles and make you feel right at home.
          </p>

        </div>
      </section>

      {/* ================= MANAGEMENT TEAM ================= */}
      <section className="w-full bg-[#efeee8] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div>
            <img
              src={teamImg}
              alt="Management Team"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-md">
            <h3 className="text-2xl md:text-4xl mb-5 text-[#2f3e34] font-serif">
              Management & Customer Service Team
            </h3>

            <p className="text-[#5a5f57] text-sm leading-relaxed mb-4">
              At Sukhavati, our 38 wonderful staff provide impeccable service to help
              make your wellness experience enjoyable and effective.
            </p>

            <p className="text-[#5a5f57] text-sm leading-relaxed mb-4">
              Our General Manager Denny (Adi Astawa Putra), Guest Relations Manager
              Kadek Muliani, Reservations Officer Sri Arlini and receptionist Trianti,
              bring their experience and attention to managing the details of your
              stay with us.
            </p>

            <p className="text-[#5a5f57] text-sm leading-relaxed">
              Together they coordinate all our guests and ensure that every aspect of
              your stay runs smoothly and will always endeavour to make your
              experience as comfortable as possible.
            </p>
          </div>

        </div>
      </section>


    

{/* ================= AYURVEDIC DOCTORS ================= */}
<section className="w-full bg-[#efeee8] py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="max-w-md">
      <h3 className="text-2xl md:text-4xl mb-5 text-[#2f3e34] font-serif">
        Our Ayurvedic Doctors
      </h3>

      <p className="text-[#5a5f57] text-sm leading-relaxed mb-4">
        Our resident Ayurvedic doctors provide expert medical guidance to our
        guests, treating a wide array of health conditions.
      </p>

      <p className="text-[#5a5f57] text-sm leading-relaxed mb-4">
        Dr. Komang Sudarmi is the first local Indonesian to become an Ayurvedic
        doctor, completing her formal education in India, with years of
        experience working at Gujarat Ayurveda University & Hospital. She is
        committed to fulfilling her responsibility to educate, inspire and
        support others to understand and apply Ayurveda so they can experience
        health, happiness and longevity.
      </p>

      <p className="text-[#5a5f57] text-sm leading-relaxed">
        Dr. Dwija Permana, radiating his positively supportive nature, guides
        our guests through their wellness journey here at Sukhavati. He is
        Indonesian, who completed his Ayurveda degree at one of the top
        government Ayurveda hospitals and colleges in India. He worked in their
        hospital for several years, gaining incredible experience and insight
        into various types of medical cases and their treatments.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div>
      <img
        src={doctorsImg}
        alt="Ayurvedic Doctors"
        className="w-full h-auto object-cover"
      />
    </div>

  </div>
</section>




{/* ================= HEAD OF EDUCATION ================= */}
<section className="w-full bg-[#efeee8] py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT IMAGE */}
    <div>
      <img
        src={educationImg}
        alt="Head of Ayurvedic Education"
        className="w-full h-auto object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="max-w-md">
      <h3 className="text-2xl md:text-4xl mb-5 text-[#2f3e34] font-serif">
        Sukhavati’s Head of Ayurvedic Education
      </h3>

      <p className="text-[#5a5f57] text-sm leading-relaxed mb-4">
        Meet Mark Bunn, international Wellness Speaker & the founder of Dharmic Living.
        Mark has spent the last 25 years studying the ancient wisdoms of health,
        happiness and higher consciousness.
      </p>

      <p className="text-[#5a5f57] text-sm leading-relaxed mb-4">
        Combining formal training in both Western health-science and Ayurveda plus
        the timeless teachings of Maharishi Mahesh Yogi, his passion is for helping
        people make good health simple, practical and fun.
      </p>

      <p className="text-[#5a5f57] text-sm leading-relaxed mb-4">
        Mark’s first book, ‘Ancient Wisdom for Modern Health’ is a three-time
        best-seller, and he has been one of Australasia’s most booked corporate
        health speakers – presenting on all things wellness, Ayurveda,
        transcendence and consciousness – for over 20 years.
      </p>

      <p className="text-[#5a5f57] text-sm leading-relaxed mb-4">
        Mark spends about 3 months a year at Sukhavati, most commonly in June - August.
        If you are lucky to be here at the same time, you will benefit from his
        weekly talks, practical knowledge and helpful support.
      </p>

      {/* Links style */}
      <p className="text-[#5a5f57] text-sm mt-4">
        For more visit his
      </p>

      <p className="text-[#2f3e34] text-sm font-medium mt-2 cursor-pointer hover:underline">
        Dharmic Living Website
      </p>

      <p className="text-[#2f3e34] text-sm font-medium mt-2 cursor-pointer hover:underline">
        Speaker Website for Corporates & Schools
      </p>
    </div>

  </div>
</section>




{/* ================= YOGA INSTRUCTORS ================= */}
<section className="w-full bg-[#efeee8] py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="max-w-md">
      <h3 className="text-2xl md:text-4xl mb-5 text-[#2f3e34] font-serif">
        Yoga Instructors
      </h3>

      <p className="text-[#5a5f57] text-sm leading-relaxed">
        Our resident instructors will guide you through yoga, pranayama,
        and meditation classes. Yoga is a key component to our Panchakarma
        program. We offer classes twice a day, open to all guests at any
        level of experience with yoga, from beginner to experienced.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div>
      <img
        src={yogaImg}
        alt="Yoga Instructor"
        className="w-full h-auto object-cover"
      />
    </div>

  </div>
</section>



{/* ================= WELLNESS & SPA TECHNICIANS ================= */}
<section className="w-full bg-[#efeee8] py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT IMAGE */}
    <div>
      <img
        src={spaImg}
        alt="Wellness & Spa Technicians"
        className="w-full h-auto object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="max-w-md">
      <h3 className="text-2xl md:text-4xl mb-5 text-[#2f3e34] font-serif">
        Wellness & Spa Technicians
      </h3>

      <p className="text-[#5a5f57] text-sm leading-relaxed">
        During your time with us you will meet our amazing team of spa and
        wellness technicians. They provide all of the traditional,
        personally-prescribed Ayurvedic treatments throughout your stay.
      </p>

      <p className="text-[#5a5f57] text-sm leading-relaxed mt-3">
        Our team of technicians are dedicated to ensuring that you experience
        deep levels of rest and relaxation during your treatments.
      </p>
    </div>

  </div>
</section>




{/* ================= KITCHEN TEAM ================= */}
<section className="w-full bg-[#efeee8] py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="max-w-md">
      <h3 className="text-2xl md:text-4xl mb-5 text-[#2f3e34] font-serif">
        Kitchen Team
      </h3>

      <p className="text-[#5a5f57] text-sm leading-relaxed">
        Our kitchen includes a team of 6 chefs, led by head chef Putu Anggreni.
        The Ayurvedic cuisine is a major component of our Panchakarma program.
        Our chefs put an incredible amount of love into preparing all of the
        Ayurvedic, vegetarian meals, all made from local produce.
      </p>

      <p className="text-[#5a5f57] text-sm leading-relaxed mt-3">
        They can also cater to all allergies and food intolerances.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div>
      <img
        src={kitchenImg}
        alt="Kitchen Team"
        className="w-full h-auto object-cover"
      />
    </div>

  </div>
</section>

{/* left Image ================================*/}



{/* =================Housekeeping Team ================= */}
<section className="w-full bg-[#efeee8] py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT IMAGE */}
    <div>
      <img
        src={houseImg}
        alt="Wellness & Spa Technicians"
        className="w-full h-auto object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="max-w-md">
      <h3 className="text-2xl md:text-4xl mb-5 text-[#2f3e34] font-serif">
       Housekeeping Team
      </h3>

      <p className="text-[#5a5f57] text-sm leading-relaxed">
       Our housekeeping staff at are dedicated to creating a pristine, serene environment for your retreat. 
       With attention to detail and a commitment to your comfort, they ensure every space is impeccably clean and inviting.
        Their warm, attentive service adds to the feeling of care throughout your stay,
        allowing you to relax completely and focus on your total rejuvenation.
      </p>

      {/* <p className="text-[#5a5f57] text-sm leading-relaxed mt-3">
        Our team of technicians are dedicated to ensuring that you experience
        deep levels of rest and relaxation during your treatments.
      </p> */}
    </div>

  </div>
</section>

{/* //==================== */}



{/* ================= Maintenance Team================= */}
<section className="w-full bg-[#efeee8] py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="max-w-md">
      <h3 className="text-2xl md:text-4xl mb-5 text-[#2f3e34] font-serif">
        Maintenance Team
      </h3>

      <p className="text-[#5a5f57] text-sm leading-relaxed">
        Our wonderful maintenance staff and gardeners take great care of our estate.
         You will no doubt notice the attention to detail they give to keeping the grounds, 
        and the surrounds of your private villa, beautifully maintained.
      </p>

      {/* <p className="text-[#5a5f57] text-sm leading-relaxed mt-3">
        They can also cater to all allergies and food intolerances.
      </p> */}
    </div>

    {/* RIGHT IMAGE */}
    <div>
      <img
        src={maintenanceImg}
        alt="Kitchen Team"
        className="w-full h-auto object-cover"
      />
    </div>

  </div>
</section>

{/* ======================================== */}


{/* left Image ================================*/}



{/* =================Security Team================= */}
<section className="w-full bg-[#efeee8] py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT IMAGE */}
    <div>
      <img
        src={securityImg}
        alt="Wellness & Spa Technicians"
        className="w-full h-auto object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="max-w-md">
      <h3 className="text-2xl md:text-4xl mb-5 text-[#2f3e34] font-serif">
       Security Team
      </h3>

      <p className="text-[#5a5f57] text-sm leading-relaxed">
       At Sukhavati, we have a team of dedicated security staff on the property at all times, 24/7. 
       If you have any queries or concerns during your time with us,
        you may call using the phone in your villa to connect to one of our security staff.
      </p>

      {/* <p className="text-[#5a5f57] text-sm leading-relaxed mt-3">
        Our team of technicians are dedicated to ensuring that you experience
        deep levels of rest and relaxation during your treatments.
      </p> */}
    </div>

  </div>
</section>



{/* ================= Driving TEAM ================= */}
<section className="w-full bg-[#efeee8] py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT CONTENT */}
    <div className="max-w-md">
      <h3 className="text-2xl md:text-4xl mb-5 text-[#2f3e34] font-serif">
        Driving Team
      </h3>

      <p className="text-[#5a5f57] text-sm leading-relaxed">
        Our wonderful driving team is led by Made Wardana. When you arrive in Bali,
         one of our drivers will greet you at the airport (or your hotel) to give you a smooth,
          comfortable journey to Sukhavati.
      </p>

      {/* <p className="text-[#5a5f57] text-sm leading-relaxed mt-3">
        They can also cater to all allergies and food intolerances.
      </p> */}
    </div>

    {/* RIGHT IMAGE */}
    <div>
      <img
        src={drivingImg}
        alt="Kitchen Team"
        className="w-full h-auto object-cover"
      />
    </div>

  </div>
</section>

    </>
  );
};

export default OurTeam;