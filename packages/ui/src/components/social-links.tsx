import { cn } from "@repo/ui/lib/utils";
import { BriefcaseBusiness, FolderDot, Github, Home, Linkedin, Mail, Send, User } from "lucide-react";
import * as motion from "motion/react-client";

const SocialLinks = ({ orientation, className }: { orientation: "horizontal" | "vertical"; className?: string }) => {
	return (
		<ul
			className={cn(
				"flex gap-8",
				{
					"flex-col": orientation === "vertical",
					"flex-row": orientation === "horizontal",
				},
				className
			)}>
			{SOCIALS.map((social, i) => {
				return (
					<motion.li
						key={i}
						initial={{ scale: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.1, ease: [0.33, 1, 0.68, 1] }}
						className="hover:text-primary">
						<a href={social.href}>{social.icon}</a>
					</motion.li>
				);
			})}
		</ul>
	);
};

export default SocialLinks;

export const LINKS = {
	internal: [
		{
			name: "Home",
			href: "/",
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
			href: "/projects",
			icon: <FolderDot />,
		},
		{
			name: "Contact",
			href: "/#contact",
			icon: <Send />,
		},
	],
	external: {
		github: "https://github.com/corbinmurray",
		email: "corbin.murray63@gmail.com",
		linkedin: "www.linkedin.com/in/corbin-murray-16a485182",
	},
};

const SOCIALS = [
	{
		icon: <Github />,
		href: LINKS.external.github,
	},
	{
		icon: <Linkedin />,
		href: LINKS.external.linkedin,
	},
	{
		icon: <Mail />,
		href: "mailto:" + LINKS.external.email,
	},
];
