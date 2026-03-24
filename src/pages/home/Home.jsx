import React from "react";
import HeroSection from "../../components/Hero/HeroSection";
import MeditationPrograms from "./MeditationPrograms";
import MediaCarousel from "./MediaCarousel";
import SudarshanKriya from "./SudarshanKriya";
import TestimonialCarousel from "./TestimonialCarousel";
import GurudevSection from "./GurudevSection";
import FAQSection from "./FAQSection";
import ExperienceSection from "./ExperienceSection";
import LivingSocialImpact from "./LivingSocialImpact";
import TeachersSection from "./TeachersSection";
import WisdomSection from "./WisdomSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <MeditationPrograms />
      <MediaCarousel />
      <SudarshanKriya />
      <TestimonialCarousel />
      <GurudevSection />
      <FAQSection />
      <ExperienceSection />
      <LivingSocialImpact/>
      <TeachersSection/>
      <WisdomSection/>
    </>
  );
};

export default Home;