import { SectionHeader } from "@/components/section-header";
import type { SectionProps } from "@/components/section-props";
import {
  AppWindow,
  Braces,
  Cloud,
  Code2,
  Database,
  FileJson,
  Github,
  LineChart,
  Network,
  Package,
  Server,
  Settings2,
  TableProperties,
  TerminalSquare,
  Workflow,
  Wrench,
} from "lucide-react";
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

  const skillCategories = [
    {
      title: "Backend & Systems",
      icon: <Server className="size-5 text-blue-500" />,
      skills: [
        {
          name: ".NET",
          level: "Expert",
          icon: <Braces className="size-3.5" />,
        },
        {
          name: "Node.js",
          level: "Expert",
          icon: <TerminalSquare className="size-3.5" />,
        },
        {
          name: "Java",
          level: "Proficient",
          icon: <Code2 className="size-3.5" />,
        },
        {
          name: "Python",
          level: "Proficient",
          icon: <FileJson className="size-3.5" />,
        },
        {
          name: "Microservices",
          level: "Architecture",
          icon: <Network className="size-3.5" />,
        },
        {
          name: "Event-Driven",
          level: "Architecture",
          icon: <Workflow className="size-3.5" />,
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="size-5 text-indigo-500" />,
      skills: [
        {
          name: "AWS Infrastructure",
          level: "Lambda / ECS / EC2",
          icon: <Cloud className="size-3.5" />,
        },
        {
          name: "Docker & K8s",
          level: "Containers",
          icon: <Package className="size-3.5" />,
        },
        {
          name: "CI / CD",
          level: "Pipelines",
          icon: <Github className="size-3.5" />,
        },
        {
          name: "Kafka / SQS / SNS",
          level: "Messaging",
          icon: <Network className="size-3.5" />,
        },
        {
          name: "Datadog & CloudWatch",
          level: "Observability",
          icon: <LineChart className="size-3.5" />,
        },
      ],
    },
    {
      title: "Data & Storage",
      icon: <Database className="size-5 text-emerald-500" />,
      skills: [
        {
          name: "PostgreSQL",
          level: "RDBMS",
          icon: <TableProperties className="size-3.5" />,
        },
        {
          name: "MongoDB",
          level: "NoSQL",
          icon: <Database className="size-3.5" />,
        },
        {
          name: "Redis",
          level: "In-Memory",
          icon: <Settings2 className="size-3.5" />,
        },
        {
          name: "DynamoDB",
          level: "Current/Latest",
          icon: <Server className="size-3.5" />,
        },
      ],
    },
    {
      title: "Frontend & UI",
      icon: <AppWindow className="size-5 text-pink-500" />,
      skills: [
        {
          name: "React",
          level: "Framework",
          icon: <AppWindow className="size-3.5" />,
        },
        {
          name: "TypeScript",
          level: "Language",
          icon: <FileJson className="size-3.5" />,
        },
        {
          name: "Tailwind CSS",
          level: "Styling",
          icon: <Wrench className="size-3.5" />,
        },
      ],
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
        <SectionHeader index="02" label="TECH_STACK" title="Skills" />

        {/* Content Column */}
        <div className="w-full lg:w-3/4">
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-zinc-50/50 dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-zinc-800/80 rounded-3xl p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-white dark:bg-zinc-800 rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-700">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -2, scale: 1.02 }}
                      className="group flex items-center gap-3 px-4 py-2 bg-white dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-700/50 rounded-xl hover:border-blue-500/30 dark:hover:border-blue-400/30 hover:shadow-md transition-all"
                    >
                      <div className="text-gray-400 dark:text-gray-500 group-hover:text-blue-500 transition-colors">
                        {skill.icon}
                      </div>
                      <div className="flex flex-col justify-center">
                        <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                          {skill.name}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-mono mt-0.5 group-hover:text-blue-500/70 dark:group-hover:text-blue-400/70 transition-colors">
                          {skill.level}
                        </span>
                      </div>
                    </motion.div>
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

export default SkillsSection;
