import { Button } from "@repo/ui/components/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleTheme = () => {
		if (isDarkMode) {
			localStorage.theme = "light";
			document.documentElement.classList.remove("dark");
			setIsDarkMode(false);
		} else {
			localStorage.theme = "dark";
			document.documentElement.classList.add("dark");
			setIsDarkMode(true);
		}
	};

	// Ensure the initial theme is applied on mount
	useEffect(() => {
		if (localStorage.theme === "dark") {
			setIsDarkMode(true);
			document.documentElement.classList.add("dark");
		} else {
			setIsDarkMode(false);
			document.documentElement.classList.remove("dark");
		}
	}, []);

	return (
		<Button variant="outline" size="icon" onClick={toggleTheme}>
			{isDarkMode ? <Moon className="hidden dark:inline" /> : <Sun className="inline dark:hidden" />}
		</Button>
	);
}
