import Image from "next/image";
import Hero from "./components/Sections/Hero";
import CreativitySection from "./components/Sections/CreativitySection";
import Grid from "./components/Sections/Grid";
import ExpertiseSection from "./components/Sections/ExpertiseSection";
import StudioLayout from "./components/Sections/StudioLayout";
import GalleryPage from "./components/Sections/Gallery";
export default function Home() {
  return (
    <div>
      <div className=" heros-section">
        <Hero />
      </div>
      <div className="experience-section"></div>
      <div className="explore-section"></div>
      <div className="creativity-section">
        <CreativitySection />
      </div>
      <div className="vision-section">
        {/* <Grid /> */}
        <ExpertiseSection />{" "}
      </div>
      <div className="gallery-section">
        <GalleryPage />
      </div>
      <div className="explore-section">
        <StudioLayout />
      </div>
    </div>
  );
}
