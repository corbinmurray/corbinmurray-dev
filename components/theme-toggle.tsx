"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
	const { setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false); // Track if the component is mounted

	useEffect(() => {
		setMounted(true); // After the component is mounted, set the `mounted` state to true
	}, []);

	const THEMES = {
		light: "light",
		dark: "dark",
	};

	const toggleTheme = () => {
		const newTheme = resolvedTheme === THEMES.light ? THEMES.dark : THEMES.light;
		setTheme(newTheme);
	};

	if (!mounted) {
		return null;
	}

	// TODO: Match scaling transition to nav links
	if (resolvedTheme === THEMES.light) {
		return (
			<svg
				className="w-6 stroke-foreground hover:stroke-primary smooth-hover"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				onClick={toggleTheme}>
				<circle cx="12" cy="12" r="5" />
				<path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
			</svg>
		);
	}

	return (
		<svg
			className="w-6 stroke-foreground hover:stroke-primary smooth-hover"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			onClick={toggleTheme}>
			<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
		</svg>
	);
};

export default ThemeToggle;
