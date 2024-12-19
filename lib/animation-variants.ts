import { Variants } from "motion/react";

export const sectionContainerVariants: Variants = {
	hidden: { opacity: 0, y: 300 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], staggerChildren: 0.3 },
	},
};

export const sectionContainerDownVariants: Variants = {
	hidden: { opacity: 0, y: -75 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], staggerChildren: 0.3 },
	},
};

export const sectionChildVariants: Variants = {
	visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] } },
	hidden: { opacity: 0, y: 300 },
};
