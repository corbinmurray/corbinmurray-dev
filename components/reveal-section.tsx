"use client";

import { type HTMLMotionProps, motion, useScroll, useTransform, type Variants } from "motion/react";
import { useRef } from "react";

interface RevealSectionProps extends HTMLMotionProps<"section"> {
	fillHeight?: boolean;
}

function RevealSection({ children, className, fillHeight = false, ...props }: RevealSectionProps) {
	const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["end start", "80%"],
	});

	const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

	return (
		<motion.section
			ref={sectionRef}
			initial="hidden"
			whileInView="visible"
			exit="hidden"
			variants={animationContainerUpVariants}
			viewport={{ once: true, amount: "some" }}
			style={{ opacity: opacity }}
			className={className}
			{...props}>
			{Array.isArray(children) ? (
				children.map((child, index) => (
					<motion.div key={index} variants={animationChildUpVariants} className={fillHeight ? "h-full" : undefined}>
						{child}
					</motion.div>
				))
			) : (
				<motion.div variants={animationChildUpVariants} className={fillHeight ? "h-full" : undefined}>
					{children}
				</motion.div>
			)}
		</motion.section>
	);
}

export default RevealSection;

const animationContainerUpVariants: Variants = {
	hidden: {
		opacity: 0,
		y: 75,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], staggerChildren: 0.3 },
	},
};

const animationChildUpVariants: Variants = {
	hidden: { opacity: 0, y: 75 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
	},
};
