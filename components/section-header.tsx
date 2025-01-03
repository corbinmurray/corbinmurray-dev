const SectionHeader = ({ sequence, title }: { sequence: number; title: string }) => {
	return (
		<div className="relative flex justify-start gap-2 items-end my-6">
			{/* <h3 className="font-mono flex">
				0 <span className="text-accent">{sequence}</span>.
			</h3> */}

			<h1 className="text-nowrap inline-block">{title}</h1>
		</div>
	);
};

export default SectionHeader;
