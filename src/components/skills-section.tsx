import type { SectionProps } from "@/components/section-props";

interface SkillsSectionProps extends SectionProps {}
export function SkillsSection({ sectionId }: SkillsSectionProps) {
  return (
    <section id={sectionId} className="py-12 md:py-24">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
      <p>Content coming soon...</p>
    </section>
  );
}

export default SkillsSection;
