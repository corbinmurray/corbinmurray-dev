import { Variants } from "motion/react";

export const sectionContainerVariants: Variants = {
	hiddenLeft: { opacity: 0, x: "-100vw" },
	hiddenRight: { opacity: 0, x: "100vw" },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			ease: "easeOut",
			duration: 0.6,
			staggerChildren: 0.2, // Stagger children animations
		},
	},
};

export const sectionChildVariants: Variants = {
	hiddenLeft: { opacity: 0, x: "-100vw" },
	hiddenRight: { opacity: 0, x: "100vw" },
	visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};