import React from "react";
import HeroSection from "../../components/Hero/HeroSection";
import MeditationPrograms from "./MeditationPrograms";
import MediaCarousel from "./MediaCarousel";
import SudarshanKriya from "./SudarshanKriya";
import TestimonialCarousel from "./TestimonialCarousel";

const Home = () => {
  return (
    <>
      <HeroSection />
      <MeditationPrograms />
      <MediaCarousel />
      <SudarshanKriya />
      <TestimonialCarousel />
    </>
  );
};

export default Home;