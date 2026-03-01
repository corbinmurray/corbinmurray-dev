import { motion } from "motion/react";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
}

export function SectionHeader({ index, label, title }: SectionHeaderProps) {
  return (
    <div className="w-full lg:w-1/4 shrink-0 lg:sticky top-32 z-10">
      <div className="flex flex-row lg:flex-col items-center lg:items-start w-full gap-4 lg:gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-sm font-mono font-medium text-blue-600 dark:text-blue-500 tracking-wider"
        >
          {`// ${index}. ${label}`}
        </motion.div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight whitespace-nowrap">
          {title}
        </h2>

        {/* Animated Laser Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "circOut", delay: 0.2 }}
          className="h-px lg:h-1 lg:w-16 bg-linear-to-r from-blue-500 to-transparent lg:from-blue-600 lg:to-blue-400 origin-left flex-1 lg:flex-none shadow-[0_0_12px_rgba(59,130,246,0.6)] rounded-full pt-0.5"
        />
      </div>
    </div>
  );
}
