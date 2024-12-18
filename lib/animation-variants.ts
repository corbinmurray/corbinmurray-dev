import { Variants } from "motion/react";

export const sectionContainerVariants: Variants = {
	hidden: { opacity: 0, y: 300 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			ease: "easeOut",
			duration: 0.6,
			staggerChildren: 0.2, // Stagger children animations
		},
	},
};

export const sectionChildVariants: Variants = {
	visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
	hidden: { opacity: 0, y: 300 },
};
