"use client";
import SocialLinks from "@/components/ui/social-links";
import ThemeToggle from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, Variants } from "motion/react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export default function Navbar({ className }: { className: string }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const closeMenu = useCallback(() => setMenuOpen(false), []);
	const { scrollY } = useScroll();
	const [scrollState, setScrollState] = useState({ direction: "up", atTop: true });

	// Prevent background scroll when the menu is open
	useEffect(() => {
		if (menuOpen) {
			document.body.classList.add("overflow-hidden");
		} else {
			document.body.classList.remove("overflow-hidden");
		}

		// Clean up on component unmount
		return () => {
			document.body.classList.remove("overflow-hidden");
		};
	}, [menuOpen]);

	useMotionValueEvent(scrollY, "change", (current) => {
		const diff = current - (scrollY.getPrevious() || 0);
		setScrollState({
			direction: diff > 0 ? "down" : "up",
			atTop: scrollY.get() === 0,
		});
	});

	return (
		<motion.nav
			className={cn("sticky top-0 w-full z-50 h-20 bg-background")}
			initial={{ y: 0 }}
			animate={{
				y: scrollState.direction === "down" ? "-100%" : 0,
				opacity: scrollState.direction === "down" ? 0 : 1,
			}}
			transition={{ duration: 0.2, ease: [0.33, 1, 0.68, 1] }}>
			<motion.div
				className={cn(className, "container mx-auto flex items-center justify-between h-full")}
				initial="hidden"
				whileInView="visible"
				variants={{
					hidden: {
						y: -75,
						opacity: 0,
					},
					visible: {
						y: 0,
						opacity: 1,
						transition: {
							duration: 0.75,
							ease: [0.33, 1, 0.68, 1],
							staggerChildren: 0.3,
						},
					},
				}}
				viewport={{ once: true, amount: "some" }}>
				{/* Brand */}
				<motion.div className="text-xl font-bold text-primary">
					<svg fill="currentColor" viewBox="0 0 40.029 40.029" className="text-primary w-8">
						<g>
							<g>
								<path
									d="M34.408,10.246L23.48,10.367l-5.359,9.527l5.572,9.402l10.928-0.123l5.359-9.525L34.408,10.246z M33.661,27.551
			l-9.043,0.104l-4.61-7.781l4.434-7.883l9.043-0.102l4.609,7.779L33.661,27.551z"></path>
								<path
									d="M16.549,18.932l5.357-9.527L16.334,0L5.406,0.125L0.049,9.65l5.57,9.402L16.549,18.932z M6.365,1.746l9.047-0.102
			l4.607,7.781l-4.432,7.883l-9.044,0.104L1.936,9.629L6.365,1.746z"></path>
								<path
									d="M5.644,21.098l-5.358,9.525l5.57,9.406l10.93-0.123l5.357-9.527l-5.571-9.406L5.644,21.098z M15.823,38.283l-9.044,0.104
			L2.17,30.602l4.433-7.881l9.046-0.105l4.607,7.783L15.823,38.283z"></path>
							</g>
							<g id="SvgjsG1031"></g>
						</g>
					</svg>
				</motion.div>

				{/* Hamburger Menu (Mobile) */}
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={2}
					stroke="currentColor"
					onClick={() => setMenuOpen(!menuOpen)}
					className="w-6 h-6 md:hidden z-[51] hover:cursor-pointer hover:scale-105"
					initial={false}
					animate={{ rotate: menuOpen ? 90 : 0 }} // Optionally animate rotation
					transition={{ duration: 0.3 }}>
					<motion.path
						strokeLinecap="round"
						strokeLinejoin="round"
						d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
						transition={{ duration: 0.3 }} // Smooth transition for path change
					/>
				</motion.svg>

				{/* Links (Desktop) */}
				<motion.div className="hidden md:flex space-x-8" variants={desktopNavMenuContainerAnimationVariants} initial="hidden" exit="hidden" animate="visible">
					<motion.div variants={desktopNavMenuChildrenAnimationVariants}>
						<Link href="#about" className="md:text-md lg:text-lg font-medium text-foreground hover:text-primary transition-colors">
							About
						</Link>
					</motion.div>

					<motion.div variants={desktopNavMenuChildrenAnimationVariants}>
						<Link href="#experience" className="md:text-md lg:text-lg font-medium text-foreground hover:text-primary transition-colors">
							Experience
						</Link>
					</motion.div>
					<motion.div variants={desktopNavMenuChildrenAnimationVariants}>
						<Link href="#projects" className="md:text-md lg:text-lg font-medium text-foreground hover:text-primary transition-colors">
							Projects
						</Link>
					</motion.div>
					<motion.div variants={desktopNavMenuChildrenAnimationVariants}>
						<Link href="#contact" className="md:text-md lg:text-lg font-medium text-foreground hover:text-primary transition-colors">
							Contact
						</Link>
					</motion.div>

					<motion.div variants={desktopNavMenuChildrenAnimationVariants}>
						<ThemeToggle />
					</motion.div>
				</motion.div>
			</motion.div>

			{/* Full-Screen Overlay for Mobile Menu */}
			<AnimatePresence>
				{menuOpen && (
					<>
						{/* Background Blur */}
						<motion.div
							key="blur"
							className="fixed inset-0 bg-black/50 backdrop-blur z-40"
							onClick={closeMenu}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
						/>

						{/* Sliding Mobile Menu */}
						<motion.div
							className="fixed top-0 right-0 h-full w-64 bg-background shadow-lg z-50 px-6 flex flex-col items-start pt-20"
							variants={mobileNavMenuContainerAnimationVariants}
							initial="hidden"
							animate="visible"
							exit="hidden">
							{/* Brand */}
							<motion.div className="text-xl font-bold text-primary mb-4" variants={mobileNavMenuChildrenAnimationVariants}>
								<svg fill="currentColor" viewBox="0 0 40.029 40.029" className="text-primary w-8">
									<g>
										<g>
											<path
												d="M34.408,10.246L23.48,10.367l-5.359,9.527l5.572,9.402l10.928-0.123l5.359-9.525L34.408,10.246z M33.661,27.551
			l-9.043,0.104l-4.61-7.781l4.434-7.883l9.043-0.102l4.609,7.779L33.661,27.551z"></path>
											<path
												d="M16.549,18.932l5.357-9.527L16.334,0L5.406,0.125L0.049,9.65l5.57,9.402L16.549,18.932z M6.365,1.746l9.047-0.102
			l4.607,7.781l-4.432,7.883l-9.044,0.104L1.936,9.629L6.365,1.746z"></path>
											<path
												d="M5.644,21.098l-5.358,9.525l5.57,9.406l10.93-0.123l5.357-9.527l-5.571-9.406L5.644,21.098z M15.823,38.283l-9.044,0.104
			L2.17,30.602l4.433-7.881l9.046-0.105l4.607,7.783L15.823,38.283z"></path>
										</g>
										<g id="SvgjsG1031"></g>
									</g>
								</svg>
							</motion.div>

							{navItems.map((navItem, i) => {
								return (
									<motion.div key={i} variants={mobileNavMenuChildrenAnimationVariants} whileHover={{ scale: 1.1 }} className="my-2">
										<Link href={navItem.href} className="md:text-lg lg:text-lg xl:text-xl font-medium hover:text-primary" onClick={closeMenu}>
											{navItem.name}
										</Link>
									</motion.div>
								);
							})}

							<motion.div className="text-xl font-bold text-primary mt-8" variants={mobileNavMenuChildrenAnimationVariants}>
								<ThemeToggle />
							</motion.div>

							<motion.div className="mt-8" variants={mobileNavMenuChildrenAnimationVariants}>
								<SocialLinks orientation="horizontal" />
							</motion.div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}

const mobileNavMenuContainerAnimationVariants: Variants = {
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], staggerChildren: 0.15 },
	},
	hidden: {
		x: "100%",
		opacity: 0,
		transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], staggerChildren: 0.15, delay: 0.15 },
	},
};

const mobileNavMenuChildrenAnimationVariants: Variants = {
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
	},
	hidden: { x: 150, opacity: 0, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } },
};

const desktopNavMenuContainerAnimationVariants: Variants = {
	visible: {
		y: 0,
		transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], staggerChildren: 0.2 },
	},
	hidden: {
		y: -15,
		transition: {
			ease: "easeOut",
		},
	},
};

const desktopNavMenuChildrenAnimationVariants: Variants = {
	visible: {
		y: 0,
		transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
	},
	hidden: { y: -15 },
};

const navItems = [
	{
		name: "About",
		href: "#about",
	},
	{
		name: "Experience",
		href: "#experience",
	},
	{
		name: "Projects",
		href: "#projects",
	},
	{
		name: "Contact",
		href: "#contact",
	},
];
