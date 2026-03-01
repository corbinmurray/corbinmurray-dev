import type { SectionProps } from "@/components/section-props";

interface AboutSectionProps extends SectionProps {}
export function AboutSection({ sectionId }: AboutSectionProps) {
  return (
    <section id={sectionId} className="py-12 md:py-24">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p>Content coming soon...</p>
    </section>
  );
}

export default AboutSection;
