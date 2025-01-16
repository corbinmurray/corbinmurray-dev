import projects from "@/lib/projects.json";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@repo/ui/components/card";
import RevealSection from "@repo/ui/components/reveal-section";
import SectionHeader from "@repo/ui/components/section-header";
import { Github, SquareArrowOutUpRight } from "lucide-react";

export default async function Home() {
	return (
		<>
			<RevealSection>
				<SectionHeader title="Projects I've worked on" />
			</RevealSection>

			<RevealSection id="projects" className="my-36 md:my-72 scroll-m-24">
				<SectionHeader title="Projects I've worked on" />

				<ul className="flex flex-col gap-8 xl:flex-row">
					{projects.map((project, i) => {
						return (
							<RevealSection key={i}>
								<li>
									<Card className="shadow max-w-md">
										<CardHeader>
											<CardTitle className="text-secondary">{project.title}</CardTitle>
										</CardHeader>
										<CardContent>
											<article>
												<p>{project.description}</p>
											</article>
										</CardContent>
										<CardFooter className="gap-6">
											<a href={project.githubLink}>
												<Github className="smooth-hover hover:text-secondary" />
											</a>
											<a href={project.liveSiteLink}>
												<SquareArrowOutUpRight className="smooth-hover hover:text-secondary" />
											</a>
										</CardFooter>
									</Card>
								</li>
							</RevealSection>
						);
					})}
				</ul>
			</RevealSection>
		</>
	);
}
