import { cn } from "@repo/ui/lib/utils";

export default function LogoSvg({ className }: { className?: string }) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={cn("p-0 m-0", className)}>
			<text x="50%" y="50%" className={cn(className)} dominantBaseline="middle" textAnchor="middle" fill="currentColor">
				cm
			</text>
		</svg>
	);
}
