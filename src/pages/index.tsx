import HeroSection from "../../components/sections/HeroSection";
import AboutSection from "../../components/AboutSection";
import ProjectsSection from "../../components/ProjectsSection";
import SkillsSection from "../../components/SkillsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <HeroSection />
      <AboutSection id="about" />
      <ProjectsSection id="projects" />
      <SkillsSection id="skills" />
    </div>
  );
}
