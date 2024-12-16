"use client";
import { Button } from "@/components/ui/button"; // Assuming you're using Shadcn's button component
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
	const [menuOpen, setMenuOpen] = useState(false);

	const closeMenu = () => setMenuOpen(false);

	return (
		<nav className="fixed top-0 w-full z-50 h-20 border-b">
			<div className="container mx-auto flex items-center justify-between p-4">
				{/* Brand */}
				<div className="text-xl font-bold text-primary">Brand</div>

				{/* Hamburger Menu (Mobile) */}
				<Button variant="ghost" size="icon" className="lg:hidden z-[100]" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
					</svg>
				</Button>

				{/* Links (Desktop) */}
				<div className="hidden lg:flex space-x-6">
					<Link href="/" className="text-sm font-medium text-foreground hover:text-primary">
						Home
					</Link>
					<Link href="/about" className="text-sm font-medium text-foreground hover:text-primary">
						About
					</Link>
					<Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary">
						Contact
					</Link>
				</div>
			</div>

			{/* Full-Screen Overlay for Mobile Menu */}
			<AnimatePresence>
				{menuOpen && (
					<>
						{/* Background Blur */}
						<motion.div key="blur" className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" exit={{ opacity: 0 }} onClick={closeMenu}></motion.div>

						{/* Sliding Mobile Menu */}
						<motion.div
							className="fixed top-0 right-0 h-full w-64 bg-background shadow-lg z-50 p-6"
							key="mobile-menu"
							initial={{ x: "100%", opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: "100%", opacity: 0 }}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 30,
							}}>
							<div className="flex flex-col p-6 space-y-4 mt-24 items-center">
								<Link href="/" className="text-sm font-medium text-foreground hover:text-primary" onClick={closeMenu}>
									Home
								</Link>
								<Link href="/about" className="text-sm font-medium text-foreground hover:text-primary" onClick={closeMenu}>
									About
								</Link>
								<Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary" onClick={closeMenu}>
									Contact
								</Link>
							</div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</nav>
	);
}
