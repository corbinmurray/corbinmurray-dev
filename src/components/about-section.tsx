import type { SectionProps } from "@/components/section-props";
import { motion } from "motion/react";

interface AboutSectionProps extends SectionProps {}
export function AboutSection({ sectionId }: AboutSectionProps) {
  return (
    <motion.section
      id={sectionId}
      className="py-24 md:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight">
          About Me
        </h2>
        <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 max-w-none">
          <p>
            I'm a software engineer passionate about building scalable, backend
            systems and bridges between complex data and elegant user
            experiences.
          </p>
          <p className="mt-4">
            (This section will gracefully slide up and fade into view right
            before it hits the center of your screen!)
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutSection;
