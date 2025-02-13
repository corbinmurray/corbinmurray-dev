import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => {
		if (isDarkMode) {
			localStorage.setItem("theme", "light");
			document.documentElement.classList.remove("dark");
			document.documentElement.style.colorScheme = "light";
			setIsDarkMode(false);
		} else {
			localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark");
			document.documentElement.style.colorScheme = "dark";
			setIsDarkMode(true);
		}
	};

	useEffect(() => {
		// Sync state with the theme set by the layout script
		const theme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
		setIsDarkMode(theme === "dark");
	}, []);

	return (
		<Button variant="outline" size="icon" onClick={toggleTheme}>
			{isDarkMode ? <Moon className="hidden dark:inline" /> : <Sun className="inline dark:hidden" />}
		</Button>
	);
}
