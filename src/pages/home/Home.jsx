import React from "react";
import HeroSection from "../../components/Hero/HeroSection";
import MediaCarousel from "./MediaCarousel";
import SudarshanKriya from "./SudarshanKriya";
import TestimonialCarousel from "./TestimonialCarousel";
import GurudevSection from "./GurudevSection";
import FAQSection from "./FAQSection";
import ExperienceSection from "./ExperienceSection";
import LivingSocialImpact from "./LivingSocialImpact";
import TeachersSection from "./TeachersSection";
import  meditationData  from "./data/meditationData";
import  yogaData  from "./data/yogaData";
import  wisdomData  from "./data/wisdomData";
import ProgramSection from "./ProgramSection";
import WellnessSection from "./WellnessSection";
import Experience from "./Experience";
import TestimonialsPage from "./TestimonialsPage";
import RetreatPage from "./RetreatPage";
import RetreatIncludesPage from "./RetreatIncludesPage";
import LifeChangePage from "./LifeChangePage";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WellnessSection/>
      <Experience/>
      <TestimonialsPage/>
      <RetreatPage/>
      <RetreatIncludesPage/>
      <LifeChangePage/>
        {/* <ProgramSection data={meditationData} />
        <MediaCarousel />
      <ProgramSection data={yogaData} />    
      <SudarshanKriya />
      <TestimonialCarousel />
      <GurudevSection />
      <FAQSection />
      <ExperienceSection />
      <LivingSocialImpact/>
      <TeachersSection/>
      <ProgramSection data={wisdomData} /> */}
    </>
  );
};

export default Home;