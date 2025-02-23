import Link from "@/components/link";
import Maze from "@/components/maze";
import RevealSection from "@/components/reveal-section";
import SectionHeader from "@/components/section-header";

export default async function Page() {
	return (
		<>
			<RevealSection className="min-h-[50vh] flex flex-col justify-center">
				{/* Top Decorative Bar */}
				<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50" />

				<SectionHeader title="Asterius" />

				<div className="relative max-w-3xl mx-auto">
					{/* Decorative Elements */}
					<div className="absolute top-1/2 -translate-y-1/2 -left-16 w-32 h-32 bg-gradient-radial from-primary/5 via-primary/5 to-transparent dark:from-primary/10 dark:to-transparent rounded-full blur-2xl animate-pulse" />
					<div className="absolute top-1/2 -translate-y-1/2 -right-16 w-32 h-32 bg-gradient-radial from-secondary/5 via-secondary/5 to-transparent dark:from-secondary/10 dark:to-transparent rounded-full blur-2xl animate-pulse" />

					{/* Subtle Pattern */}
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent opacity-50" />

					<article className="relative text-lg md:text-xl leading-relaxed text-muted text-center">
						<p>
							Asterius is a project I built to bring the{" "}
							<Link href="https://en.wikipedia.org/wiki/A*_search_algorithm" variant="external">
								A* (A-star)
							</Link>{" "}
							pathfinding algorithm to life through visualization. As someone who has been captivated by video games since childhood, I&apos;ve always been
							intrigued by the mechanics of how characters and objects navigate their environments.
						</p>
					</article>
				</div>
			</RevealSection>

			<RevealSection>
				<div className="relative max-w-screen-sm mx-auto my-12 md:my-24">
					{/* Maze Border Gradient */}
					<div className="absolute -inset-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-xl blur-xl opacity-50" />
					<div className="relative">
						<Maze className="mx-auto rounded-lg overflow-hidden border border-primary/10" />
					</div>
				</div>
			</RevealSection>

			<RevealSection className="my-12 md:my-24">
				<div className="relative max-w-3xl mx-auto space-y-16">
					<article className="relative space-y-12">
						{/* Section Divider */}
						<div className="absolute left-0 h-full w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

						<div className="space-y-6 pl-8">
							<h3 className="text-2xl font-bold text-foreground relative inline-flex flex-col group">
								<div className="flex items-center gap-3">
									<span>Generating the Maze</span>
								</div>
							</h3>

							<div className="space-y-4 text-muted/80 leading-relaxed">
								<p className="relative">
									<span className="absolute -left-8 top-3 h-px w-6 bg-gradient-to-r from-transparent to-primary/50" />
									Generating a truly random and unbiased maze can be a complex task. Fortunately, there&apos;s an algorithm designed specifically for this
									challenge.
								</p>

								<p className="relative">
									<span className="absolute -left-8 top-3 h-px w-6 bg-gradient-to-r from-transparent to-primary/50" />
									Wilson&apos;s algorithm leverages{" "}
									<Link href="https://en.wikipedia.org/wiki/Loop-erased_random_walk" variant="external">
										Loop-erased random walks
									</Link>{" "}
									to construct a uniform spanning tree — an unbiased representation of all possible spanning trees. Unlike other common maze generation methods,
									such as Prim&apos;s algorithm, random traversal, or randomized depth-first traversal.
								</p>
							</div>
						</div>

						<div className="space-y-6 pl-8">
							<h3 className="text-2xl font-bold text-foreground relative inline-flex flex-col group">
								<div className="flex items-center gap-3">
									<span>Solving the Maze</span>
								</div>
							</h3>

							<div className="space-y-4 text-muted/80 leading-relaxed">
								<p className="relative">
									<span className="absolute -left-8 top-3 h-px w-6 bg-gradient-to-r from-transparent to-primary/50" />
									The{" "}
									<Link href="https://en.wikipedia.org/wiki/A*_search_algorithm" variant="external">
										A* (A-star)
									</Link>{" "}
									algorithm is a popular pathfinding and graph traversal method that efficiently finds the shortest path between two points on a grid, such as
									from the start to the goal in a maze. It combines the benefits of both{" "}
									<Link href="https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm" variant="external">
										Dijkstra&apos;s algorithm
									</Link>{" "}
									and greedy best-first search, using a cost function that takes into account both the distance from the starting point and an estimate of the
									distance to the goal.
								</p>

								<p className="relative">
									<span className="absolute -left-8 top-3 h-px w-6 bg-gradient-to-r from-transparent to-primary/50" />
									This function, known as the f-score, is the sum of two components: the g-score (the cost to reach the current node from the start) and the
									h-score (the estimated cost from the current node to the goal). A* uses this combined information to prioritize nodes, ensuring that it
									explores the most promising paths first.
								</p>

								<p className="relative">
									<span className="absolute -left-8 top-3 h-px w-6 bg-gradient-to-r from-transparent to-primary/50" />
									As the algorithm proceeds, it explores neighboring nodes, updating their f-scores and determining the optimal route by considering both the
									actual distance traveled and the predicted cost to the goal. Nodes are sorted based on their f-scores, with the algorithm always expanding the
									node with the lowest f-score. This allows A* to efficiently navigate complex mazes, guaranteeing an optimal solution while avoiding
									unnecessary exploration of less promising paths. The A* algorithm&apos;s{" "}
									<Link href="https://en.wikipedia.org/wiki/Heuristic" variant="external">
										heuristic
									</Link>{" "}
									approach makes it particularly effective in solving mazes with a balance of accuracy and performance, ensuring that the shortest path is found
									with minimal computational overhead.
								</p>
							</div>
						</div>
					</article>
				</div>
			</RevealSection>
		</>
	);
}
