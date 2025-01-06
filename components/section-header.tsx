import * as motion from "motion/react-client";

const SectionHeader = ({ title, punctuation = "." }: { title: string; punctuation?: string }) => {
	return (
		<div className="relative my-12 md:my-24 pb-6 md:pb-12 overflow-hidden">
			<h1 className="relative leading-normal">
				{title} <span className="absolute text-accent">{punctuation}</span>
			</h1>
			<motion.div
				initial={{ x: "-100%" }}
				animate={{ x: 0 }}
				transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1] }}
				className="absolute h-1 bg-primary left-0 bottom-0 
        w-16 md:w-20 lg:w-24"
			/>
		</div>
	);
};

export default SectionHeader;
