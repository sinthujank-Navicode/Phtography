import Image from "next/image";
import Experience from "./components/Sections/Experience";
import ExpertiseSection from "./components/Sections/ExpertiseSection";
import Gallerry from "./components/Sections/Gallery";

export default function Home() {
  return (
    <div>
      <div className=" heros-section"></div>
      <div className="experience-section">
        <Experience />
      </div>
      <div className="explore-section">
        <ExpertiseSection/>
      </div>
      <div className="creativity-section">
        <Gallerry/>
      </div>
      <div className="vision-section"></div>
      <div className="gallery-section"></div>
      <div className="explore-section"></div>
    </div>
  );
}
