import type { SectionProps } from "@/components/section-props";

interface ExperienceSectionProps extends SectionProps {}
export function ExperienceSection({ sectionId }: ExperienceSectionProps) {
  return (
    <section id={sectionId} className="py-12 md:py-24">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <p>Content coming soon...</p>
    </section>
  );
}

export default ExperienceSection;
