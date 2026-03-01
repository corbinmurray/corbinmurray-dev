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

  const experiences = [
    {
      role: "Software Engineer",
      company: "Flint Hills Resources",
      duration: "May 2025 - Present",
      description:
        "Leading the architectural modernization of 50+ legacy applications by transitioning them to a cohesive .NET ecosystem. Recently designed and delivered a scalable API solution that allowed international business operations to scale 10x, directly driving new monthly revenue.",
      technologies: [
        ".NET Ecosystem",
        "System Architecture",
        "API Design",
        "SOLID Principles",
      ],
    },
    {
      role: "Senior Software Engineer - Platform",
      company: "KBX Logistics",
      duration: "Apr 2023 - May 2025",
      description:
        "Engineered a full-stack low/no-code integration platform, enabling business teams to deploy APIs 30% faster without dev bottlenecks. Mentored junior engineers and led the standardization of core services, reducing redundant code across the enterprise by 40%.",
      technologies: ["React", ".NET", "MongoDB", "Redis", "Docker", "AWS"],
    },
    {
      role: "Software Engineering Team Lead",
      company: "KBX Logistics",
      duration: "Oct 2022 - Apr 2023",
      description:
        "Managed a team of 6 developers while architecting mission-critical backend systems. Developed a centralized TypeScript/.NET service hub that reduced customer go-live timeframes by 25% and significantly improved fault tolerance.",
      technologies: ["TypeScript", ".NET Core", "PostgreSQL", "Microservices"],
    },
    {
      role: "Software Engineer",
      company: "KeyCentrix",
      duration: "May 2021 - Dec 2021",
      description:
        "Developed backend solutions and optimized APIs for a complete pharmaceutical management system. Additionally built a full-stack QA testing portal using React and GraphQL that reduced technical screening time by 33%.",
      technologies: ["React", "GraphQL", ".NET Framework", "SQL Server"],
    },
  ];

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
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative group"
              >
                <motion.div
                  variants={dotVariants}
                  className={`absolute w-4 h-4 rounded-full -left-[41px] md:-left-[49px] top-1.5 ring-4 ring-white dark:ring-gray-950 group-hover:scale-125 transition-all duration-300 ${
                    idx === 0
                      ? "bg-blue-500 group-hover:bg-blue-400"
                      : "bg-gray-400 dark:bg-gray-600 group-hover:bg-gray-300 dark:group-hover:bg-gray-500"
                  }`}
                />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {exp.role}
                </h3>
                <p
                  className={`font-mono text-sm mb-4 tracking-tight ${
                    idx === 0
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {exp.company} // {exp.duration}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                  {exp.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-700/50 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default ExperienceSection;
