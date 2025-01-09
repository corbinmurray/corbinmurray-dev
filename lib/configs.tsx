import { BriefcaseBusiness, FolderDot, Home, Send, User } from "lucide-react";

export const LINKS = {
	internal: [
		{
			name: "Home",
			href: "/#home",
			icon: <Home />,
		},
		{
			name: "About Me",
			href: "/#about",
			icon: <User />,
		},
		{
			name: "Experience",
			href: "/#experience",
			icon: <BriefcaseBusiness />,
		},
		{
			name: "Projects",
			href: "/#projects",
			icon: <FolderDot />,
		},
		{
			name: "Contact",
			href: "#contact",
			icon: <Send />,
		},
	],
	external: {
		github: "https://github.com/corbinmurray",
		email: "corbin.murray63@gmail.com",
		linkedin: "www.linkedin.com/in/corbin-murray-16a485182",
	},
};
