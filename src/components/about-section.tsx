import type { SectionProps } from "@/components/section-props";
import { Laptop, Rocket, Server } from "lucide-react";
import { motion } from "motion/react";

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

  const itemVariants = {
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

  return (
    <motion.section
      id={sectionId}
      className="relative w-full max-w-7xl mx-auto py-24 md:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Column: The Narrative (Prose) */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight flex items-center gap-3">
            <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
            About Me
          </h2>

          <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 max-w-none">
            <p className="lead font-medium text-gray-900 dark:text-gray-100">
              I'm Corbin, a software engineer who bridges the gap between
              massive backend infrastructure and pixel-perfect user experiences.
            </p>
            <p>
              I specialize in taking complex, tangled business logic and
              translating it into clean, maintainable systems. My philosophy is
              simple: technology should serve the user, not the other way
              around.
            </p>
            <p>
              When I'm not architecting databases or tracking down elusive bugs,
              I'm usually experimenting with new frontend frameworks or studying
              system design patterns. I believe in writing code that the next
              developer (which might be me six months from now) will thank me
              for.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Value Proposition Cards */}
        <div className="relative">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/5 dark:to-purple-900/5 rounded-[2rem] -z-10 blur-xl md:blur-2xl opacity-70" />

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
                className="bg-white dark:bg-zinc-900/80 border border-gray-100 dark:border-zinc-800 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-500/5 dark:hover:shadow-blue-900/20 transition-all cursor-crosshair group relative overflow-hidden"
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-transparent group-hover:from-blue-500/5 dark:group-hover:from-blue-500/10 transition-colors duration-300" />

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
    </motion.section>
  );
}

export default AboutSection;
