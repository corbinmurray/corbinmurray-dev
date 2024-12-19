"use client";
import ThemeToggle from "@/components/ui/theme-toggle";
import { sectionContainerDownVariants } from "@/lib/animation-variants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
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

		console.log("direction ", diff > 0 ? "down" : "up", "atTop ", scrollY.get() === 0, "scrollY ", scrollY.get());
	});

	const navLinkContainerAnimationVariants = {
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				ease: "easeOut",
				staggerChildren: 0.1,
			},
		},
		hidden: {
			opacity: 0,
			x: "100vw",
			transition: {
				ease: "easeOut",
				duration: 0.3,
				// staggerChildren: 0.2,
				// staggerDirection: -1,
			},
		},
	};

	const navLinkChildrenAnimationVariants = {
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				ease: "easeOut",
			},
		},
		hidden: { x: 75, opacity: 0 },
	};

	return (
		<motion.nav
			className={cn("sticky top-0 w-full z-50 h-20 bg-background")}
			initial={{ y: 0 }}
			animate={{
				y: scrollState.direction === "down" ? "-100%" : 0,
				opacity: scrollState.direction === "down" ? 0 : 1,
			}}
			transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}>
			<motion.div
				className={cn(className, "container mx-auto flex items-center justify-between h-full")}
				initial="hidden"
				whileInView="visible"
				variants={sectionContainerDownVariants}
				viewport={{ once: true, amount: "some" }}>
				{/* Brand */}
				<motion.div className="text-xl font-bold text-primary">Brand</motion.div>

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
				<motion.div className="hidden md:flex space-x-8" variants={navLinkContainerAnimationVariants} initial="hidden" exit="hidden" animate="visible">
					<motion.div variants={navLinkChildrenAnimationVariants}>
						<Link href="#about" className="md:text-md lg:text-lg font-medium text-foreground hover:text-primary transition-colors">
							About
						</Link>
					</motion.div>

					<motion.div variants={navLinkChildrenAnimationVariants}>
						<Link href="#experience" className="md:text-md lg:text-lg font-medium text-foreground hover:text-primary transition-colors">
							Experience
						</Link>
					</motion.div>
					<motion.div variants={navLinkChildrenAnimationVariants}>
						<Link href="#projects" className="md:text-md lg:text-lg font-medium text-foreground hover:text-primary transition-colors">
							Projects
						</Link>
					</motion.div>

					<motion.div variants={navLinkChildrenAnimationVariants}>
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
							exit={{ opacity: 0 }}
							transition={{ ease: "easeOut", duration: 0.3 }}
						/>

						{/* Sliding Mobile Menu */}
						<motion.div
							className="fixed top-0 right-0 h-full w-64 bg-background shadow-lg z-50 p-6 flex flex-col space-y-8 items-start pt-20"
							variants={navLinkContainerAnimationVariants}
							initial="hidden"
							animate="visible"
							exit="hidden">
							{/* Brand */}
							<motion.div className="text-xl font-bold text-primary" variants={navLinkChildrenAnimationVariants}>
								Brand
							</motion.div>

							<motion.div className="text-xl font-bold text-primary" variants={navLinkChildrenAnimationVariants}>
								<Link href="#about" className="md:text-md lg:text-lg font-medium text-foreground hover:text-primary transition-colors" onClick={closeMenu}>
									About
								</Link>
							</motion.div>

							<motion.div className="text-xl font-bold text-primary" variants={navLinkChildrenAnimationVariants}>
								<Link href="#experience" className="md:text-md lg:text-lg font-medium text-foreground hover:text-primary transition-colors" onClick={closeMenu}>
									Experience
								</Link>
							</motion.div>

							<motion.div className="text-xl font-bold text-primary" variants={navLinkChildrenAnimationVariants}>
								<Link href="#projects" className="md:text-md lg:text-lg font-medium text-foreground hover:text-primary transition-colors" onClick={closeMenu}>
									Projects
								</Link>
							</motion.div>

							<motion.div className="text-xl font-bold text-primary" variants={navLinkChildrenAnimationVariants}>
								<ThemeToggle />
							</motion.div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}
