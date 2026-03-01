import { SectionHeader } from "@/components/section-header";
import type { SectionProps } from "@/components/section-props";
import { motion, type Variants } from "motion/react";

interface ProjectsSectionProps extends SectionProps {}
export function ProjectsSection({ sectionId }: ProjectsSectionProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, type: "spring", bounce: 0.4 },
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
        <SectionHeader index="04" label="SHOWCASE" title="Projects" />

        {/* Content Column */}
        <div className="w-full lg:w-3/4">
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Project 1 */}
            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
              className="group bg-zinc-50/50 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:border-zinc-300/80 dark:hover:border-zinc-700/80 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-blue-900/10 transition-all duration-300"
            >
              <div className="aspect-video bg-gray-100 dark:bg-zinc-800 relative overflow-hidden">
                {/* Image placeholder */}
                <div className="absolute inset-0 bg-linear-to-tr from-blue-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-700 ease-out" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Project Name
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A complete full-stack application built with modern tooling.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700/50 rounded-full text-xs font-medium dark:text-gray-300">
                    React
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700/50 rounded-full text-xs font-medium dark:text-gray-300">
                    Node
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Project 2 (mocked 2nd item so staggering is obvious) */}
            <motion.div
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
              className="group bg-zinc-50/50 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:border-zinc-300/80 dark:hover:border-zinc-700/80 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-blue-900/10 transition-all duration-300"
            >
              <div className="aspect-video bg-gray-100 dark:bg-zinc-800 relative overflow-hidden">
                {/* Image placeholder */}
                <div className="absolute inset-0 bg-linear-to-tr from-emerald-500/20 to-teal-500/20 group-hover:scale-110 transition-transform duration-700 ease-out" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  CLI Tooling
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  A lightning fast CLI tool built specifically for developer
                  productivity.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700/50 rounded-full text-xs font-medium dark:text-gray-300">
                    Go
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700/50 rounded-full text-xs font-medium dark:text-gray-300">
                    Cobra
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
