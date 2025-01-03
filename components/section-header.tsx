const SectionHeader = ({ title }: { title: string }) => {
	return (
		<div className="relative flex justify-start gap-2 items-end my-6 pb-5">
			<h1 className="text-nowrap inline-block relative">
				{title} <span className="absolute text-primary">.</span>
			</h1>
			<div className="absolute h-[2px] bg-primary left-0 bottom-0 w-12 border-r-0"></div>
		</div>
	);
};

export default SectionHeader;
