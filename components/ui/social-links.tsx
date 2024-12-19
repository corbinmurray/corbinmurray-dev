import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail } from "lucide-react";
import * as motion from "motion/react-client";

const SocialLinks = ({ orientation }: { orientation: "horizontal" | "vertical" }) => {
	return (
		<motion.ul
			className={cn("flex gap-8", {
				"flex-col": orientation === "vertical",
				"flex-row": orientation === "horizontal",
			})}>
			{SOCIALS.map((social, i) => {
				return (
					<motion.li key={i}>
						<a href={social.href}>{social.icon}</a>
					</motion.li>
				);
			})}
		</motion.ul>
	);
};

export default SocialLinks;

const SOCIALS = [
	{
		icon: <Github />,
		href: GITHUB_URL,
	},
	{
		icon: <Linkedin />,
		href: LINKEDIN_URL,
	},
	{
		icon: <Mail />,
		href: "MAILTO:" + EMAIL_ADDRESS,
	},
];
