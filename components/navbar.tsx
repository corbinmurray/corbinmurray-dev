"use client";
import SocialLinks from "@/components/social-links";
import ThemeToggle from "@/components/theme-toggle";
import { LINKS } from "@/lib/configs";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, Variants } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEventHandler, useCallback, useEffect, useState } from "react";

export default function Navbar({ className }: { className?: string }) {
	const [menuOpen, setMenuOpen] = useState(false);
	const closeMenu = useCallback(() => setMenuOpen(false), []);
	const { scrollY } = useScroll();
	const [scrollState, setScrollState] = useState({ direction: "up", atTop: true });
	const pathname = usePathname();

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
		const newScrollState = {
			direction: diff > 0 ? "down" : "up",
			atTop: scrollY.get() === 0,
		};

		if (scrollState.atTop === newScrollState.atTop && scrollState.direction === newScrollState.direction) {
			// Avoid queueing a re-render if state hasn't changed
			return;
		}

		setScrollState(newScrollState);
	});

	return (
		<motion.nav
			className={cn("sticky top-0 w-full z-50 h-20 bg-background")}
			initial={{ y: 0 }}
			animate={{
				y: scrollState.direction === "down" ? "-100%" : 0,
				opacity: scrollState.direction === "down" ? 0 : 1,
			}}
			transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}>
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
				<motion.div
					className="hidden md:flex space-x-8 items-center"
					variants={desktopNavMenuContainerAnimationVariants}
					initial="hidden"
					exit="hidden"
					animate="visible">
					{/* Nav links */}
					<NavLinks pathname={pathname} orientation="horizontal" />

					<motion.div variants={desktopNavMenuChildrenAnimationVariants}>
						<motion.div
							initial={{ scale: 1 }}
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.1, ease: [0.33, 1, 0.68, 1] }}
							className="hover:text-primary">
							<ThemeToggle />
						</motion.div>
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
							className="fixed top-0 right-0 h-full w-full bg-background shadow-lg z-50 px-6 flex flex-col items-start pt-20"
							variants={mobileNavMenuContainerAnimationVariants}
							initial="hidden"
							animate="visible"
							exit="hidden">
							{/* Brand */}
							{/* <div className="text-xl font-bold text-primary mb-4">
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
							</div> */}

							<div className="flex flex-col items-start gap-16 w-full">
								{/* Nav links */}
								<div className="flex justify-center w-full">
									<NavLinks pathname={pathname} onClick={closeMenu} orientation="vertical" className="mt-8 gap-8 items-center text-lg" />
								</div>

								{/* Theme toggle */}
								<div className="flex justify-center w-full">
									<ThemeToggle />
								</div>

								{/* Social links */}
								<div className="flex justify-center w-full">
									<SocialLinks orientation="horizontal" />
								</div>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}

const NavLinks = ({
	onClick,
	pathname,
	orientation,
	className,
}: {
	onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
	pathname: string;
	orientation: "horizontal" | "vertical";
	className?: string;
}) => {
	return (
		<ul
			className={cn(
				"flex gap-4 md:gap-8",
				{
					"flex-col": orientation === "vertical",
					"flex-row": orientation === "horizontal",
				},
				className
			)}>
			{LINKS.internal.map((link, i) => {
				return (
					<li key={i} className="relative flex overflow-x-hidden group">
						<Link
							href={link.href}
							className={cn(
								"lg:text-lg group-hover:text-secondary group-hover:cursor-pointer font-medium capitalize flex flex-row gap-2 justify-start items-stretch",
								{ "text-secondary": pathname === link.href }
							)}
							onClick={onClick}>
							{link.name}
						</Link>

						<div className="w-full h-px bg-secondary absolute bottom-0 left-[-100%] transition-all duration-500 group-hover:left-0"></div>
					</li>
				);
			})}
		</ul>
	);
};

const mobileNavMenuContainerAnimationVariants: Variants = {
	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], staggerChildren: 0.15 },
	},
	hidden: {
		x: "100%",
		opacity: 0,
		transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
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
		y: -100,
		transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
	},
};

const desktopNavMenuChildrenAnimationVariants: Variants = {
	visible: {
		y: 0,
		transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
	},
	hidden: { y: -100 },
};
