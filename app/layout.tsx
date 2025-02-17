import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Copyright, Heart } from "lucide-react";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fontMono = JetBrains_Mono({
	variable: "--font-mono",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const fontSans = Inter({
	variable: "--font-sans",
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Corbin Murray | Software Engineer",
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
				
				{/* If you're a file inspector and reading this, no worries this is a completely private analytics alternative that allows me to see a simple page count for this website :) */}
				<script defer src="https://umami.corbinmurray.dev/script.js" data-website-id="bbf88294-76ec-4a43-958c-eea82893445e"></script>
			</head>
			<body className={cn(fontMono.variable, fontSans.variable, "font-sans antialiased")}>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem>
					<Navbar />

					{/* 5rem comes from the navbar's height of h-20 */}
					<main className="container min-h-[calc(100vh-5rem)] py-12 md:py-24">{children}</main>

					<footer className="w-full bg-secondary mt-12 md:mt-16">
						<article className="prose-p:text-secondary-foreground prose-p:text-sm text-center mx-auto py-1">
							<p>
								Developed and designed with <Heart className="inline-block w-4 fill-red-500 stroke-red-500" /> Corbin Murray
							</p>
							<p>
								Copyright <Copyright className="w-3 text-secondary-foreground inline-block" /> {new Date().getFullYear()} Corbin Murray
							</p>
						</article>
					</footer>
				</ThemeProvider>
			</body>
		</html>
	);
}
