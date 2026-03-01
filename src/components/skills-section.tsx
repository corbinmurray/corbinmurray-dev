import { SectionHeader } from "@/components/section-header";
import type { SectionProps } from "@/components/section-props";
import { motion, type Variants } from "motion/react";

interface SkillsSectionProps extends SectionProps {}
export function SkillsSection({ sectionId }: SkillsSectionProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  return (
    <motion.section
      id={sectionId}
      className="relative max-w-7xl mx-auto py-24 md:py-32 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px", amount: 0.2 }}
    >
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        <SectionHeader index="02" label="TECH_STACK" title="Skills" />

        {/* Content Column */}
        <div className="w-full lg:w-3/4">
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              "React",
              "TypeScript",
              "Node.js",
              "Docker",
              "Next.js",
              "Go",
              "AWS",
              "SQL",
            ].map((skill) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  transition: { type: "spring", stiffness: 400, damping: 10 },
                }}
                className="flex items-center justify-center p-6 bg-zinc-50/50 dark:bg-zinc-900/80 rounded-2xl shadow-sm hover:shadow-md border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300/80 dark:hover:border-zinc-700/80 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 group relative overflow-hidden cursor-crosshair"
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-transparent group-hover:from-blue-500/5 dark:group-hover:from-blue-500/10 transition-colors duration-300" />
                <p className="font-semibold text-gray-800 dark:text-gray-200">
                  {skill}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default SkillsSection;
