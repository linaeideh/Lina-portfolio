
import HomeSection from "../src/components/sections/HomeSection";
import AboutSection from "../src/components/sections/AboutSection";
import SkillsSection from "../src/components/sections/SkillsSection";
import ProjectsSection from "../src/components/sections/ProjectsSection";
import ContantSection from "../src/components/sections/ContantSection";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContantSection />
    </div>
  );
}
