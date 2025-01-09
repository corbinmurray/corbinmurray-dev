import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ArrowUpRightFromSquare } from "lucide-react";
import NextLink from "next/link";

const linkVariants = cva(
	"inline-flex items-start gap-1 group-hover:text-secondary group-hover:cursor-pointer hover:text-secondary capitalize sm:text-sm md:text-base lg:text-lg underline-none",
	{
		variants: {
			variant: {
				internal: "font-medium",
				external: "font-semibold",
			},
		},
		defaultVariants: {
			variant: "internal",
		},
	}
);

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof linkVariants> {
	href: string;
}

const Link = ({ href, variant, children, className }: LinkProps) => {
	const isExternal = variant === "external";

	return isExternal ? (
		<a href={href} target="_blank" rel="noopener noreferrer" className={cn("relative flex overflow-x-hidden group", linkVariants({ variant, className }))}>
			{children}
			<ArrowUpRightFromSquare className="w-3 group-hover:text-secondary" />
			<span className="w-full h-px bg-secondary absolute bottom-0 left-[-100%] transition-all duration-500 group-hover:left-0 hover:left-0" />
		</a>
	) : (
		<NextLink href={href} className={cn("relative flex overflow-x-hidden group", linkVariants({ variant, className }))}>
			{children}

			<span className="w-full h-px bg-secondary absolute bottom-0 left-[-100%] transition-all duration-500 group-hover:left-0 hover:left-0" />
		</NextLink>
	);
};

export default Link;
