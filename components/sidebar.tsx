"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useState } from "react";

const Sidebar = () => {
	const [sidebarOpen, setSidebarOpen] = useState(true);

	return (
		<motion.div
			initial={{ x: -200 }}
			animate={{ x: 0 }}
			transition={{ type: "spring", stiffness: 50 }}
			className={cn("bg-background text-foreground p-4 fixed h-screen", {
				"w-[20vw]": sidebarOpen,
				"hidden w-0": !sidebarOpen,
			})}>
			<h2 className="text-xl font-bold">Sidebar</h2>
			<ul className="mt-4 space-y-2">
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</ul>
		</motion.div>
	);
};

export default Sidebar;
