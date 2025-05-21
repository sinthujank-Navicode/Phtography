import Image from "next/image";
import Hero from "./components/Sections/Hero";
import CreativitySection from "./components/Sections/CreativitySection";

import ExpertiseSection from "./components/Sections/ExpertiseSection";
import StudioLayout from "./components/Sections/StudioLayout";
import GalleryPage from "./components/Sections/Gallery";
import HeroSection from "./components/Sections/Experience";
import Expertise from "./components/Sections/expect";
import MakeupSection from "./components/Sections/MakeupSection";
import VideoSection from "./components/Sections/VideoSection";
import Wedding from "./components/Sections/wedding";
export default function Home() {
  return (
    <div>
      <div className=" heros-section">
        <Hero />
      </div>
      <div className="experience-section">
        <HeroSection />
      </div>
      <div className="explore-section">
        <Expertise />
      </div>
      <div className="makeup-section">
        <MakeupSection />
      </div>
      <div className="carRent-section"></div>
      <div className="creativity-section">
        <CreativitySection />
      </div>
      <div className="vision-section">
        <ExpertiseSection />
      </div>
      <div className="gallery-section">
        <GalleryPage />
      </div>
      <div className="video-section ">
        <VideoSection />
      </div>

      <div className="explore-section">
        <StudioLayout />
      </div>
    </div>
  );
}
