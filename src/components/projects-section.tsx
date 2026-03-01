import type { SectionProps } from "@/components/section-props";
import { motion } from "motion/react";

interface ProjectsSectionProps extends SectionProps {}
export function ProjectsSection({ sectionId }: ProjectsSectionProps) {
  return (
    <motion.section
      id={sectionId}
      className="relative max-w-4xl py-24 md:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
    >
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-12 tracking-tight">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ y: -8 }}
          className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div className="aspect-video bg-gray-100 dark:bg-zinc-800 relative overflow-hidden">
            {/* Image placeholder */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Project Name
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A complete full-stack application built with modern tooling.    
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs font-medium dark:text-gray-300">
                React
              </span>
              <span className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 rounded-full text-xs font-medium dark:text-gray-300">
                Node
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
