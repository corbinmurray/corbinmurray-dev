export default function PageLayout({ children }: { children?: React.ReactNode }) {
	return <div className="bg-primary w-full h-screen">{children}</div>;
}
