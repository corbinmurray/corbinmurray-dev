import PageLayout from "@repo/ui/components/page-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Corbin Murray | Software Engineer",
	description: "Corbin Murray's portfolio website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <PageLayout>{children}</PageLayout>;
}
