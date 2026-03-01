import type { SectionProps } from "@/components/section-props";

interface ContactSectionProps extends SectionProps {}
export function ContactSection({ sectionId }: ContactSectionProps) {
  return (
    <section id={sectionId} className="py-12 md:py-24">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p>Content coming soon...</p>
    </section>
  );
}

export default ContactSection;
