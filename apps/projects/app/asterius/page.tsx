import Link from "@repo/ui/components/link";
import MazeSvg from "@/components/maze-svg";
import RevealSection from "@repo/ui/components/reveal-section";
import SectionHeader from "@repo/ui/components/section-header";

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

				<article className="mt-12 md:mt-24">
					<h2 className="max-w-fit">Coming Up!</h2>
				</article>

				<article>
					<p>
						The Asterius project has an exciting future, with plans to expand its capabilities and make it even more engaging for users. A key focus is on
						adding more maze-solving algorithms, giving users the ability to explore and compare how different techniques approach the same problem. Improved
						animations are also in the works, aiming to create smoother, more dynamic visualizations that make the underlying mechanics of the algorithms easier
						to understand.
					</p>
				</article>

				<article>
					<p>
						Looking ahead, there’s also a plan to introduce a built-in code editor, giving users the opportunity to experiment with algorithms directly in the
						app. By tweaking the code and seeing the results in real-time, users can gain a deeper understanding of how their changes affect the algorithm’s
						performance and behavior.
					</p>
				</article>

				<article>
					<p>Planned features include:</p>
					<ul>
						<li>
							<strong>Additional maze-solving algorithms:</strong> Broaden the range of techniques to explore and compare.
						</li>
						<li>
							<strong>Enhanced animations:</strong> Create smoother and more intuitive visualizations for better understanding.
						</li>
						<li>
							<strong> Built-in code editor:</strong> Allow users to modify algorithms and visualize their changes instantly.
						</li>
					</ul>
					<p>
						These additions aim to make Asterius an invaluable tool for learning, experimentation, and discovery in the field of maze-solving and pathfinding.
					</p>
				</article>
			</RevealSection>
		</>
	);
}