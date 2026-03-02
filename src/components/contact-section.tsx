import { SectionHeader } from "@/components/section-header";
import type { SectionProps } from "@/components/section-props";
import { Mail, Terminal } from "lucide-react";
import { motion, type Variants } from "motion/react";

interface ContactSectionProps extends SectionProps {}
export function ContactSection({ sectionId }: ContactSectionProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.section
      id={sectionId}
      className="relative max-w-7xl mx-auto py-24 md:py-32 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px", amount: 0.1 }}
    >
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        <SectionHeader index="05" label="GET_IN_TOUCH" title="Contact" />

        {/* Content Column */}
        <div className="w-full lg:w-3/4">
          <motion.div
            variants={containerVariants}
            className="flex flex-col gap-12"
          >
            {/* The Pitch */}
            <div className="flex flex-col max-w-3xl">
              <motion.h3
                variants={itemVariants}
                className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight tracking-tight"
              >
                Let's build something{" "}
                <span className="text-blue-600 dark:text-blue-500">
                  exceptional
                </span>{" "}
                together.
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed"
              >
                Whether you're tackling complex system architecture, looking to
                scale an existing platform, or just want to talk shop about the
                modern web—my inbox is always open. I'm actively interested in
                challenging projects and teams that push boundaries.
              </motion.p>
            </div>

            {/* Action Area & Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4"
            >
              <motion.a
                href="mailto:corbinmurray63@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors duration-200 shadow-lg shadow-blue-500/30 w-full sm:w-auto shrink-0"
              >
                <Mail size={20} />
                Say Hello
              </motion.a>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 font-medium">
                <div className="flex items-center gap-2 bg-gray-50 dark:bg-zinc-800/50 px-4 py-2 rounded-full border border-gray-100 dark:border-zinc-800">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="tracking-wide uppercase text-xs">
                    Open to opportunities
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 dark:bg-zinc-800/50 px-4 py-2 rounded-full border border-gray-100 dark:border-zinc-800">
                  <Terminal size={14} className="text-purple-500" />
                  <span className="tracking-wide uppercase text-xs">
                    Technical Deep-Dives Welcome
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

export default ContactSection;
