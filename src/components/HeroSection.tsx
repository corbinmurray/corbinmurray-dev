import { motion, type Transition, type Variants } from "motion/react";

// Fixed set of subtle particles to guarantee even spread and avoid hydration issues
const backgroundParticles = [
  { top: "15%", left: "10%", size: 4, delay: 0, duration: 20 },
  { top: "5%", left: "80%", size: 3, delay: 2, duration: 25 },
  { top: "60%", left: "5%", size: 5, delay: 1, duration: 18 },
  { top: "85%", left: "85%", size: 3, delay: 4, duration: 22 },
  { top: "40%", left: "90%", size: 4, delay: 3, duration: 19 },
  { top: "45%", left: "10%", size: 2, delay: 5, duration: 16 },
  { top: "25%", left: "50%", size: 3, delay: 2, duration: 24 },
  { top: "80%", left: "40%", size: 4, delay: 1, duration: 21 },
  { top: "15%", left: "45%", size: 2, delay: 4, duration: 17 },
  { top: "65%", left: "70%", size: 5, delay: 0, duration: 23 },
  { top: "90%", left: "15%", size: 3, delay: 3, duration: 20 },
  { top: "30%", left: "70%", size: 4, delay: 1, duration: 26 },
];

export function HeroSection() {
  const springTransition: Transition = {
    type: "spring",
    stiffness: 100,
    damping: 15,
    mass: 1,
  };

  // Vercel-style cinematic staggered text unblur
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
  };

  return (
    <section id="hero" className="relative max-w-4xl py-12 md:py-24">
      {/* 
       Subtle Particles Base
        These tiny dots float slowly in the background space, 
        adding depth and visual interest without overwhelming the screen.
      */}
      <div className="absolute inset-x-[-20%] inset-y-0 -z-10 pointer-events-none overflow-hidden">
        {backgroundParticles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/40 dark:bg-blue-400/30"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -30, 0, 30, 0],
              x: [0, 20, 0, -20, 0],
              opacity: [0.1, 0.7, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Subtle Tagline */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ ...springTransition }}
        className="text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase mb-4"
      >
        Portfolio & CV
      </motion.p>

      {/* 
        Cinematic Staggered Word Reveal
        Splitting the text into an array maps them to staggered spans 
      */}
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight flex flex-wrap gap-x-4 gap-y-2"
      >
        {["Hi,", "I'm", "Corbin."].map((word, i) => (
          <motion.span key={i} variants={wordVariants} className="block">
            {word}
          </motion.span>
        ))}
        <div className="basis-full h-0" /> {/* Line Break */}
        {["Software", "Engineer."].map((word, i) => (
          <motion.span
            key={`sub-${i}`}
            variants={wordVariants}
            className="block text-gray-500 dark:text-gray-400"
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      {/* Value Proposition */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springTransition, delay: 0.6 }}
        className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed"
      >
        I bridge the gap between big ideas and working systems. As a backend
        engineer, I focus on solving complex business problems and building the
        robust, scalable architecture that makes it all possible.
      </motion.p>

      {/* 
        Magnetic/Tactile Call to Actions
        Adding whileHover and whileTap gives serious weight and feedback to clicks
      */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springTransition, delay: 0.8 }}
        className="flex flex-wrap gap-4"
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05, translateY: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50 shadow-lg shadow-blue-500/30"
        >
          View My Work
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, translateY: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-lg text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-500/50"
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </section>
  );
}

export default HeroSection;
