import { SectionHeader } from "@/components/section-header";
import type { SectionProps } from "@/components/section-props";
import { ExternalLink, Github } from "lucide-react";
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

  const projects = [
    {
      title: "pico",
      description:
        "A blazingly fast markdown pastebin designed for the LLM era. Easily share context, code snippets, and system prompts with unique URLs without bloating your chat history.",
      url: "https://pico.corbinmurray.dev",
      github: "https://github.com/corbinmurray/pico",
      tags: ["Compression", "URL State", "Zero Backend"],
      accentFrom: "from-blue-500/20",
      accentTo: "to-purple-500/20",
    },
    {
      title: "asterius",
      description:
        "An interactive visualization of the A* pathfinding algorithm. Watch the algorithm solve complex mazes in real-time, adjusting nodes and checking heuristics on the fly.",
      url: "https://asterius.corbinmurray.dev",
      github: "https://github.com/corbinmurray/asterius",
      tags: ["Algorithms", "JavaScript", "Pathfinding"],
      accentFrom: "from-emerald-500/20",
      accentTo: "to-teal-500/20",
    },
    {
      title: "corbinmurray.dev",
      description:
        "The portfolio you're currently viewing. Built from the ground up to showcase my engineering process, featuring custom motion animations and a fully responsive Tailwind v4 architecture.",
      url: "https://corbinmurray.dev",
      github: "https://github.com/corbinmurray/corbinmurray-dev",
      tags: ["React", "Tailwind CSS", "motion"],
      accentFrom: "from-zinc-500/20",
      accentTo: "to-stone-500/20",
    },
  ];

  return (
    <motion.section
      id={sectionId}
      className="relative max-w-7xl mx-auto py-24 md:py-32 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px", amount: 0.1 }}
    >
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        <SectionHeader index="04" label="SHOWCASE" title="Projects" />

        {/* Content Column */}
        <div className="w-full lg:w-3/4">
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {projects
              .sort((a, b) => a.title.localeCompare(b.title))
              .map((project, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 400, damping: 25 },
                  }}
                  className="group bg-zinc-50/50 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800 shadow-sm hover:border-zinc-300/80 dark:hover:border-zinc-700/80 hover:bg-white dark:hover:bg-zinc-900 hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-blue-900/10 transition-all duration-300 flex flex-col"
                >
                  {/* Decorative Header Banner Instead of an Image */}
                  <div className="h-32 bg-gray-100 dark:bg-zinc-800 relative overflow-hidden shrink-0">
                    <div
                      className={`absolute inset-0 bg-linear-to-tr ${project.accentFrom} ${project.accentTo} group-hover:scale-110 transition-transform duration-700 ease-out`}
                    />
                    {/* Subtle terminal-like decor inside the banner */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-black/10 dark:bg-white/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-black/10 dark:bg-white/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-black/10 dark:bg-white/10" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <div className="flex gap-3 text-gray-400 dark:text-gray-500">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-blue-500 transition-colors"
                            aria-label="View Source Code"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-blue-500 transition-colors"
                            aria-label="View Live Project"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-white dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-700/50 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
