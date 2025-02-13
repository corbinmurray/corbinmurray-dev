import { LINKS } from "@/lib/configs";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail } from "lucide-react";
import * as motion from "motion/react-client";

type Socials = "GitHub" | "LinkedIn" | "Email";

const SocialLinks = ({
	orientation,
	className,
	linksToDisplay = ["GitHub", "LinkedIn", "Email"],
}: {
	orientation: "horizontal" | "vertical";
	className?: string;
	linksToDisplay?: Socials[];
}) => {
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
			{SOCIALS.filter((x) => linksToDisplay.includes(x.name as Socials)).map((social, i) => {
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
		name: "GitHub",
	},
	{
		icon: <Linkedin />,
		href: LINKS.external.linkedin,
		name: "LinkedIn",
	},
	{
		icon: <Mail />,
		href: "mailto:" + LINKS.external.email,
		name: "Email",
	},
];
