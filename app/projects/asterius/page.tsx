import Link from "@/components/link";
import MazeSvg from "@/components/maze-svg";
import RevealSection from "@/components/reveal-section";
import SectionHeader from "@/components/section-header";

export default function Page() {
	return (
		<>
			<RevealSection className="mt-12 md:mt-24">
				<SectionHeader title="Asterius" />

				<article>
					<p>
						Asterius is a project I built to bring the{" "}
						<Link href="https://en.wikipedia.org/wiki/A*_search_algorithm" variant="external">
							A*
						</Link>{" "}
						pathfinding algorithm to life through visualization. As someone who has been captivated by video games since childhood, I&apos;ve always been
						intrigued by the mechanics of how characters and objects navigate their environments. This project combines my passion for gaming with my interest
						in solving practical computational problems.
					</p>
				</article>

				<div className="max-w-screen-sm mx-auto my-12 md:my-24">
					<MazeSvg className="mx-auto" />
				</div>
			</RevealSection>
		</>
	);
}
