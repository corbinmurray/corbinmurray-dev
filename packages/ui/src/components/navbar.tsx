import Link from "@repo/ui/components/link";
import SocialLinks from "@repo/ui/components/social-links";
import ThemeToggle from "@repo/ui/components/theme-toggle";
import { LINKS } from "@repo/ui/lib/configs";
import { cn } from "@repo/ui/lib/utils";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, type Variants } from "motion/react";
import { type MouseEventHandler, useCallback, useEffect, useState } from "react";

export default function Navbar({ className }: { className?: string }) {
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
					<Logo />
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
					<NavLinks orientation="horizontal" />

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
							className="fixed inset-0 bg-background shadow-lg z-50 px-6 flex flex-col items-start"
							variants={mobileNavMenuContainerAnimationVariants}
							initial="hidden"
							animate="visible"
							exit="hidden">
							<div className="flex flex-col items-start w-full mt-20">
								{/* Brand */}
								<div className="flex justify-center w-full">
									<Logo />
								</div>

								{/* Nav links */}
								<div className="flex justify-center w-full">
									<NavLinks onClick={closeMenu} orientation="vertical" className="mt-8 gap-8 items-center text-lg" />
								</div>

								{/* Theme toggle */}
								<div className="flex justify-center w-full mt-16">
									<ThemeToggle />
								</div>

								{/* Social links */}
								<div className="flex justify-center w-full mt-16">
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

const Logo = () => {
	return (
		<a href="/" className="hover:cursor-pointer">
			<span className="font-sans text-primary font-semibold text-xl md:text-2xl lg:text-3xl">cm</span>
		</a>
	);
};

const NavLinks = ({
	onClick,
	orientation,
	className,
}: {
	onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
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
					<li key={i}>
						<Link href={link.href} onClick={onClick}>
							{link.name}
						</Link>
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
