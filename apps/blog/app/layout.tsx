import BasePageLayout from "@repo/ui/components/page-layout";
import "@repo/ui/globals.css";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <BasePageLayout>{children}</BasePageLayout>;
}
