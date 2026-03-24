import React from "react";
import HeroSection from "../../components/Hero/HeroSection";
import MeditationPrograms from "./MeditationPrograms";
import MediaCarousel from "./MediaCarousel";

const Home = () => {
  return (
    <>
      <HeroSection />
      <MeditationPrograms />
      <MediaCarousel />
    </>
  );
};

export default Home;