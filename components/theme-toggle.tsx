"use client";

import { Moon, Sun } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const shouldReduceMotion = useReducedMotion();

	return (
		<motion.div
			className="relative size-8 rounded-full cursor-pointer flex items-center justify-center hover:text-secondary"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
			transition={{
				duration: 0.2,
				type: shouldReduceMotion ? "tween" : "spring",
				stiffness: 400,
				damping: 17,
			}}>
			<motion.div
				initial={false}
				animate={{
					rotate: theme === "dark" ? -90 : 0,
					scale: theme === "dark" ? 0 : 1,
				}}
				transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
				className="absolute inset-0 flex items-center justify-center motion-reduce:transition-none">
				<Sun className="size-5" />
			</motion.div>
			<motion.div
				initial={false}
				animate={{
					rotate: theme === "dark" ? 0 : 90,
					scale: theme === "dark" ? 1 : 0,
				}}
				transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
				className="absolute inset-0 flex items-center justify-center motion-reduce:transition-none">
				<Moon className="size-5" />
			</motion.div>
		</motion.div>
	);
}
