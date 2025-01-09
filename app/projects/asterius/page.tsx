import MazeSvg from "@/components/maze-svg";
import RevealSection from "@/components/reveal-section";
import SectionHeader from "@/components/section-header";
import { Github } from "lucide-react";

export default function Page() {
	return (
		<>
			<RevealSection className="mt-12 md:mt-24">
				<SectionHeader title="Asterius" />

				<article>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dignissimos vitae ad praesentium, ullam, quam dicta veritatis voluptate, nihil est
						maiores consectetur perferendis minus omnis illo rem error voluptates molestiae?
					</p>
				</article>

				<Github />

				<div className="max-w-screen-sm mx-auto my-12 md:my-24">
					<MazeSvg className="mx-auto" />
				</div>
			</RevealSection>
		</>
	);
}
