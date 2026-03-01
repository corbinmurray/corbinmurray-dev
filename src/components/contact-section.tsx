import type { SectionProps } from "@/components/section-props";
import { motion } from "motion/react";

interface ContactSectionProps extends SectionProps {}
export function ContactSection({ sectionId }: ContactSectionProps) {
  return (
    <motion.section
      id={sectionId}
      className="py-24 md:py-32 mb-20 relative overflow-hidden bg-blue-600 dark:bg-blue-900 rounded-[3rem] text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-500 dark:bg-blue-800 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-500 dark:bg-indigo-800 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Let's Work Together
        </h2>
        <p className="text-blue-100 text-lg md:text-xl mb-10">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, my inbox is open!
        </p>
        <motion.a
          href="mailto:hello@example.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-blue-600 bg-white hover:bg-gray-50 transition-colors duration-200 shadow-xl"
        >
          Say Hello
        </motion.a>
      </div>
    </motion.section>
  );
}

export default ContactSection;
