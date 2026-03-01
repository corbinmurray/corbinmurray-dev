import { SectionHeader } from "@/components/section-header";
import type { SectionProps } from "@/components/section-props";
import { motion, type Variants } from "motion/react";

interface ExperienceSectionProps extends SectionProps {}

export function ExperienceSection({ sectionId }: ExperienceSectionProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, type: "spring", bounce: 0.3 },
    },
  };

  const dotVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", bounce: 0.6, duration: 0.6, delay: 0.2 },
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
        <SectionHeader index="03" label="WORK_HISTORY" title="Experience" />

        {/* Content Column */}
        <div className="w-full lg:w-3/4">
          <motion.div
            variants={containerVariants}
            className="border-l-2 border-blue-500/30 pl-8 ml-4 md:ml-0 md:pl-10 space-y-16"
          >
            {/* Timeline Item 1 */}
            <motion.div variants={itemVariants} className="relative group">
              <motion.div
                variants={dotVariants}
                className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[41px] md:-left-[49px] top-1.5 ring-4 ring-white dark:ring-gray-950 group-hover:scale-125 group-hover:bg-blue-400 transition-all duration-300"
              />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                Senior Software Engineer
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-mono text-sm mb-4 tracking-tight">
                Company Name // 2023 - Present
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Architected and built highly scalable backend services leading
                to a 40% reduction in latency. Led a team of 4 engineers
                transitioning our legacy monolith to microservices.
              </p>
            </motion.div>

            {/* Timeline Item 2 */}
            <motion.div variants={itemVariants} className="relative group">
              <motion.div
                variants={dotVariants}
                className="absolute w-4 h-4 bg-gray-400 dark:bg-gray-600 rounded-full -left-[41px] md:-left-[49px] top-1.5 ring-4 ring-white dark:ring-gray-950 group-hover:scale-125 group-hover:bg-gray-300 transition-all duration-300"
              />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                Software Engineer
              </h3>
              <p className="text-gray-500 dark:text-gray-400 font-mono text-sm mb-4 tracking-tight">
                Previous Company // 2020 - 2023
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Developed and maintained multiple React single-page
                applications. Improved core Web Vitals score by 35% through
                aggressive bundle splitting and memoization.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default ExperienceSection;
