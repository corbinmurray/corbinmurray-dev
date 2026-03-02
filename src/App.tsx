import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import ExperienceSection from "@/components/experience-section";
import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import { AppLayout, Footer, Header } from "@corbinmurray/ui-components";
import { useEffect } from "react";

export function App() {
  const appName = "cm";

  // Handle hash routing: scroll to the target section when the hash changes
  useEffect(() => {
    const scrollToHash = (hash: string) => {
      if (!hash) return;
      // rAF ensures the DOM has painted before we attempt to scroll
      requestAnimationFrame(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      });
    };

    // Scroll on initial load if a hash is already present
    scrollToHash(window.location.hash);

    // Re-run when the hash changes while on the page
    const handleHashChange = () => scrollToHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const layoutHeader = (
    <Header
      appName={appName}
      navigationItems={[
        { label: "About Me", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ]}
    />
  );

  const layoutFooter = (
    <Footer githubUrl="https://github.com/corbinmurray/corbinmurray-dev" />
  );

  // AppLayout handles all the min-heights, flexbox math, and
  // compensating for the Header's exact fixed height so things don't hide!
  return (
    <AppLayout header={layoutHeader} footer={layoutFooter}>
      {/* Hero loads immediately */}
      <HeroSection sectionId="hero" />

      {/* Remaining sections rendered eagerly so whileInView observers */}
      {/* are set up before any hash-based scroll is attempted */}
      <AboutSection sectionId="about" />
      <SkillsSection sectionId="skills" />
      <ExperienceSection sectionId="experience" />
      <ProjectsSection sectionId="projects" />
      <ContactSection sectionId="contact" />
    </AppLayout>
  );
}

export default App;
