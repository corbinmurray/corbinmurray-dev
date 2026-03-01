import type { SectionProps } from "@/components/section-props";
import { motion } from "motion/react";

interface ExperienceSectionProps extends SectionProps {}
export function ExperienceSection({ sectionId }: ExperienceSectionProps) {
  return (
    <motion.section
      id={sectionId}
      className="relative max-w-7xl mx-auto py-24 md:py-32 w-full"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-12 tracking-tight">
        Experience
      </h2>

      <div className="border-l-2 border-blue-500/30 pl-8 ml-4 space-y-12">
        {/* Timeline Item */}
        <div className="relative">
          <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[41px] top-1.5 ring-4 ring-white dark:ring-gray-950" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Senior Software Engineer
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
            Company Name • 2023 - Present
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Architected and built highly scalable backend services leading to a
            40% reduction in latency.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default ExperienceSection;
