import { SectionHeader } from "@/components/section-header";
import type { SectionProps } from "@/components/section-props";
import { Laptop, Rocket, Server } from "lucide-react";
import { motion, type Variants } from "motion/react";

interface AboutSectionProps extends SectionProps {}

export function AboutSection({ sectionId }: AboutSectionProps) {
  // Staggered list for values
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const coreValues = [
    {
      title: "System Architecture",
      description:
        "I design scalable, resilient backends that can handle high throughput without breaking a sweat.",
      icon: <Server className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Full-Stack Context",
      description:
        "While I thrive in the backend, I deeply understand complex UI requirements. I build APIs that frontends actually want to consume.",
      icon: <Laptop className="w-6 h-6 text-purple-500" />,
    },
    {
      title: "Business Impact",
      description:
        "Code shouldn't just exist to look pretty. I focus on delivering features that drive tangible business value and solve real problems.",
      icon: <Rocket className="w-6 h-6 text-green-500" />,
    },
  ];

  const proseVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const proseItemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, type: "spring" },
    },
  };

  return (
    <motion.section
      id={sectionId}
      className="relative w-full max-w-7xl mx-auto py-24 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px", amount: 0.1 }}
    >
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        <SectionHeader index="01" label="ABOUT_ME" title="Background" />

        {/* Content Column (Prose + Interactive Cards grid) */}
        <div className="w-full lg:w-3/4 flex flex-col xl:flex-row gap-16 xl:gap-20">
          {/* Main Prose */}
          <motion.div
            variants={proseVariants}
            className="flex-1 prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 max-w-none"
          >
            {/* <motion.p
              variants={proseItemVariants}
              className="lead font-medium text-gray-900 border-l-2 border-blue-500 pl-4 dark:text-gray-100 italic"
            >
              "I'm Corbin, a software engineer who bridges the gap between
              massive backend infrastructure and pixel-perfect user
              experiences."
            </motion.p> */}
            <motion.p variants={proseItemVariants}>
              I specialize in taking complex, tangled business logic and
              translating it into clean, maintainable systems. My philosophy is
              simple: technology should serve the user, not the other way
              around.
            </motion.p>
            <motion.p variants={proseItemVariants}>
              When I'm not architecting databases or tracking down elusive bugs,
              I'm usually experimenting with new frontend frameworks or studying
              system design patterns. I believe in writing code that the next
              developer (which might be me six months from now) will thank me
              for.
            </motion.p>
          </motion.div>

          {/* Interactive Value Proposition Cards */}
          <div className="relative flex-1">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/5 dark:to-purple-900/5 rounded-[2rem] -z-10 blur-xl md:blur-2xl opacity-70" />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col gap-5 lg:pl-10"
            >
              <h3 className="text-sm uppercase tracking-widest font-semibold text-gray-500 mb-2 pl-2">
                What I Bring to the Table
              </h3>

              {coreValues.map((value, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-zinc-50/50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-zinc-300/80 dark:hover:border-zinc-700/80 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 to-transparent group-hover:from-blue-500/5 dark:group-hover:from-blue-500/10 transition-colors duration-300" />

                  <div className="flex items-start gap-5">
                    <div className="p-3 bg-gray-50 dark:bg-zinc-800 rounded-xl shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                        {value.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutSection;
