import type { SectionProps } from "@/components/section-props";
import { motion } from "motion/react";

interface SkillsSectionProps extends SectionProps {}
export function SkillsSection({ sectionId }: SkillsSectionProps) {
  return (
    <motion.section
      id={sectionId}
      className="relative max-w-7xl mx-auto py-20 px-8 bg-gray-50 dark:bg-zinc-900/50 rounded-3xl my-12 w-full"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight text-center">
        Skills & Technologies
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {["React", "TypeScript", "Node.js", "Docker"].map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="p-4 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700/50"
          >
            <p className="font-semibold text-gray-800 dark:text-gray-200">
              {skill}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default SkillsSection;
