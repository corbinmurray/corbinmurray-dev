import { BriefcaseBusiness, FolderDot, Home, Send, User } from "lucide-react";

export const THEME_NAME = "sunfire";
export const LIGHT_THEME = THEME_NAME + "-light";
export const DARK_THEME = THEME_NAME + "-dark";

export const LINKS = {
	internal: [
		{
			name: "Home",
			href: "/",
			icon: <Home />,
		},
		{
			name: "About Me",
			href: "/about",
			icon: <User />,
		},
		{
			name: "Experience",
			href: "/experience",
			icon: <BriefcaseBusiness />,
		},
		{
			name: "Projects",
			href: "/projects",
			icon: <FolderDot />,
		},
		{
			name: "Contact",
			href: "/contact",
			icon: <Send />,
		},
	],
	external: {
		github: "https://github.com/corbinmurray",
		email: "corbin.murray63@gmail.com",
		linkedin: "www.linkedin.com/in/corbin-murray-16a485182",
	},
};
