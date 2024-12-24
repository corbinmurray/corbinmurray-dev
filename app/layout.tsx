import Navbar from "@/components/ui/navbar";
import RevealSection from "@/components/ui/reveal-section";
import SectionHeader from "@/components/ui/section-header";
import SocialLinks from "@/components/ui/social-links";
import projects from "@/lib/projects.json";
import { cn } from "@/lib/utils";
import { Copyright, Heart, SquareArrowOutUpRight } from "lucide-react";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { JetBrains_Mono, Raleway } from "next/font/google";
import Link from "next/link";
import "./globals.css";
const fontMono = JetBrains_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const fontSans = Raleway({
	variable: "--font-sans",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Corbin Murray | Hello 👋",
	description: "Portfolio website for Corbin Murray Software Engineer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// Inline script to prevent hydration mismatch
	const setThemeScript = `
	  (function() {
		const theme = localStorage.getItem('theme');
		if (theme) {
		  document.documentElement.className = theme;
		  document.documentElement.style.colorScheme = theme;
		} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		  document.documentElement.className = 'dark';
		  document.documentElement.style.colorScheme = 'dark';
		} else {
		  document.documentElement.className = 'light';
		  document.documentElement.style.colorScheme = 'light';
		}
	  })();
	`;

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<link rel="icon" href="/icon.svg" type="image/svg" sizes="any" />
				<link rel="apple-touch-icon" href="/apple-icon.png" type="image/png" sizes="any" />

				{/* Inject the theme initializer script */}
				<script dangerouslySetInnerHTML={{ __html: setThemeScript }} />
			</head>
			<body className={cn(fontMono.variable, fontSans.variable, "font-sans antialiased")}>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
					<Navbar />

					<div className="container">{children}</div>

					<footer  className="mt-20">
			
						<div className="w-full bg-secondary mt-20 py-4">
							<div className="container mt-5 text-secondary-foreground">
								<article className="prose-h3:text-secondary-foreground prose-a:text-secondary-foreground prose-a:no-underline">
									<h3>Projects</h3>
									<div className="flex gap-6 md:gap-8">
										{projects.map((project, i) => {
											return (
												<div key={i} className="relative flex flex-col overflow-x-hidden group max-w-fit">
													<Link
														href={project.liveSiteLink}
														className="lg:text-lg group-hover:cursor-pointer text-secondary-foreground smooth-hover font-medium flex gap-1">
														{project.title}
														<SquareArrowOutUpRight className="w-3" />
													</Link>

													<div className="w-full h-px bg-secondary-foreground absolute bottom-0 left-[-100%] transition-all duration-500 group-hover:left-0"></div>
												</div>
											);
										})}
									</div>
								</article>
							</div>

							<article className="md:prose md:text-secondary-foreground text-secondary-foreground text-center w-full mx-auto mt-16">
								<p>
									Developed and designed with <Heart className="inline-block w-4 fill-red-500 stroke-red-500" /> Corbin Murray
								</p>
								<p>
									Copyright <Copyright className="w-3 text-secondary-foreground inline-block" /> {new Date().getFullYear()} Corbin Murray
								</p>
							</article>
						</div>
					</footer>
				</ThemeProvider>
			</body>
		</html>
	);
}
