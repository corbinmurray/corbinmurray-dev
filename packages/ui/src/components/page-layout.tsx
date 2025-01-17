import "../styles/globals.css";

export default function PageLayout({ children }: { children?: React.ReactNode }) {
	return <div className="bg-red w-full h-screen">{children}</div>;
}
