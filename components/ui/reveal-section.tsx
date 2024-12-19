"use client";
import { HTMLMotionProps, motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function RevealSection({ children, ...props }: HTMLMotionProps<"section">) {
	const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["end start", "75%"],
	});

	const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

	return (
		<motion.section ref={sectionRef} style={{ opacity: opacity }} {...props}>
			{children}
		</motion.section>
	);
}

export default RevealSection;
