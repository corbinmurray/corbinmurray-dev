import PageLayout from "@repo/ui/components/page-layout";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <PageLayout>{children}</PageLayout>;
}
