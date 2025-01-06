const SectionHeader = ({ title, punctuation }: { title: string; punctuation?: "period" | "question mark" | "exclamation mark" }) => {
	return (
		<div className="relative my-12 md:my-24 pb-6 md:pb-12">
			<h1 className="relative">
				{title} <span className="absolute text-accent">{getPunctuation(punctuation)}</span>
			</h1>
			<div className="absolute h-1 bg-primary left-0 bottom-0 w-16 md:w-20 lg:w-24"></div>
		</div>
	);
};

export default SectionHeader;

function getPunctuation(punctuation?: string): string {
	switch (punctuation) {
		case "period":
			return ".";
		case "question mark":
			return "?";
		case "exclamation mark":
			return "!";
		default:
			return ".";
	}
}
