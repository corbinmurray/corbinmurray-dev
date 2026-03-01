import HeroSection from "@/components/hero-section";
import {
  AppLayout,
  Footer,
  Header,
  Skeleton,
} from "@corbinmurray/ui-components";
import { Suspense, lazy } from "react";

// Lazy load sections that are below the viewport on initial load
const AboutSection = lazy(() => import("@/components/about-section"));
const SkillsSection = lazy(() => import("@/components/skills-section"));
const ExperienceSection = lazy(() => import("@/components/experience-section"));
const ProjectsSection = lazy(() => import("@/components/projects-section"));
const ContactSection = lazy(() => import("@/components/contact-section"));

export function App() {
  const appName = "cm";

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

      {/* Subsequent sections are lazy-loaded with Suspense */}
      <Suspense fallback={<Skeleton />}>
        <AboutSection sectionId="about" />
        <SkillsSection sectionId="skills" />
        <ExperienceSection sectionId="experience" />
        <ProjectsSection sectionId="projects" />
        <ContactSection sectionId="contact" />
      </Suspense>
    </AppLayout>
  );
}

export default App;
