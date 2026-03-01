import type { SectionProps } from "@/components/section-props";

interface ProjectsSectionProps extends SectionProps {}
export function ProjectsSection({ sectionId }: ProjectsSectionProps) {
  return (
    <section id={sectionId} className="py-12 md:py-24">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <p>Content coming soon...</p>
    </section>
  );
}

export default ProjectsSection;
