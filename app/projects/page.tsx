import RevealSection from "@/components/reveal-section";
import SectionHeader from "@/components/section-header";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import projects from "@/lib/projects.json";
import { Github, SquareArrowOutUpRight } from "lucide-react";

export default async function Page() {
	return (
		<RevealSection id="projects" className="">
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
											<Github className="smooth-hover hover:text-primary" />
										</a>
										<a href={project.liveSiteLink}>
											<SquareArrowOutUpRight className="smooth-hover hover:text-primary" />
										</a>
									</CardFooter>
								</Card>
							</li>
						</RevealSection>
					);
				})}
			</ul>
		</RevealSection>
	);
}
