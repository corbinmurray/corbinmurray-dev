import { LINKS } from "@repo/ui/components/navbar";
import { cn } from "@repo/ui/lib/utils";
import { Github, Linkedin, Mail } from "lucide-react";
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
