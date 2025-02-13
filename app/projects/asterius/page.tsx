import Link from "@/components/link";
import Maze from "@/components/maze";
import RevealSection from "@/components/reveal-section";
import SectionHeader from "@/components/section-header";

export default async function Page() {
	return (
		<>
			<RevealSection>
				<SectionHeader title="Asterius" />
			</RevealSection>

			<RevealSection>
				<article>
					<p>
						Asterius is a project I built to bring the{" "}
						<Link href="https://en.wikipedia.org/wiki/A*_search_algorithm" variant="external">
							A* (A-star)
						</Link>{" "}
						pathfinding algorithm to life through visualization. As someone who has been captivated by video games since childhood, I&apos;ve always been
						intrigued by the mechanics of how characters and objects navigate their environments.
					</p>
				</article>
			</RevealSection>

			<RevealSection>
				<div className="max-w-screen-sm mx-auto my-12 md:my-24">
					<Maze className="mx-auto" />
				</div>
			</RevealSection>

			<RevealSection>
				<article>
					<h2>Generating the Maze</h2>

					<p>
						Generating a truly random and unbiased maze can be a complex task. Fortunately, there&apos;s an algorithm designed specifically for this challenge.
					</p>

					<p>
						Wilson&apos;s algorithm leverages{" "}
						<Link href="https://en.wikipedia.org/wiki/Loop-erased_random_walk" variant="external">
							Loop-erased random walks
						</Link>{" "}
						to construct a uniform spanning tree — an unbiased representation of all possible spanning trees. Unlike other common maze generation methods, such
						as Prim&apos;s algorithm, random traversal, or randomized depth-first traversal.
					</p>

					<h2>Solving the Maze</h2>

					<p>
						The{" "}
						<Link href="https://en.wikipedia.org/wiki/A*_search_algorithm" variant="external">
							A* (A-star)
						</Link>{" "}
						algorithm is a popular pathfinding and graph traversal method that efficiently finds the shortest path between two points on a grid, such as from
						the start to the goal in a maze. It combines the benefits of both
						<Link href="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm" variant="external">
							Dijkstra&apos;s algorithm
						</Link>{" "}
						and greedy best-first search, using a cost function that takes into account both the distance from the starting point and an estimate of the
						distance to the goal. This function, known as the f-score, is the sum of two components: the g-score (the cost to reach the current node from the
						start) and the h-score (the estimated cost from the current node to the goal). A* uses this combined information to prioritize nodes, ensuring that
						it explores the most promising paths first.
					</p>

					<p>
						As the algorithm proceeds, it explores neighboring nodes, updating their f-scores and determining the optimal route by considering both the actual
						distance traveled and the predicted cost to the goal. Nodes are sorted based on their f-scores, with the algorithm always expanding the node with
						the lowest f-score. This allows A* to efficiently navigate complex mazes, guaranteeing an optimal solution while avoiding unnecessary exploration of
						less promising paths. The A* algorithm&apos;s{" "}
						<Link href="https://en.wikipedia.org/wiki/Heuristic" variant="external">
							heuristic
						</Link>{" "}
						approach makes it particularly effective in solving mazes with a balance of accuracy and performance, ensuring that the shortest path is found with
						minimal computational overhead.
					</p>
				</article>
			</RevealSection>
		</>
	);
}
