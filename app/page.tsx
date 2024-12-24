import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import RevealSection from "@/components/ui/reveal-section";
import SectionHeader from "@/components/ui/section-header";
import SocialLinks from "@/components/ui/social-links";
import projects from "@/lib/projects.json";
import { Github, SquareArrowOutUpRight } from "lucide-react";

export default async function Home() {
	return (
		<main>
			<RevealSection id="hero" className="relative min-h-[calc(100vh-12rem)] mb-[12rem] flex flex-col justify-center overflow-hidden">
				<h1 className="text-[clamp(14px,5vw,16px)] md:text-[clamp(14px,5vw,18px)] font-mono">Hi, my name is</h1>

				<h2 className="text-[clamp(40px,8vw,80px)] font-semibold border-none bg-clip-text text-transparent bg-gradient-to-tr from-primary to-secondary brightness-110 leading-tight">
					Corbin Murray
				</h2>

				<h3 className="text-[clamp(30px,6vw,48px)] font-semibold leading-none">Software Engineer</h3>

				<article className="my-5">
					<p>
						I lead projects focused on optimizing software processes and ensuring scalable solutions. My career spans developing complex integrations, building
						robust microservices, and mentoring teams to establish standards in fast-paced environments.
					</p>
				</article>

				<div className="mt-12 flex items-center gap-x-12">
					<SocialLinks orientation="horizontal" className="md:gap-12" />
				</div>
			</RevealSection>

			<RevealSection id="projects" className="mb-32 md:mb-64 scroll-mt-40 mt-32 md:mt-64">
				<SectionHeader sequence={3} title="Projects" />

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

			<RevealSection id="contact" className="mb-32 md:mb-64 scroll-mt-24 mt-32 md:mt-64">
				<SectionHeader sequence={4} title="Contact Me" />

				<article>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ab nulla nam corrupti fugiat inventore atque temporibus vero, ut unde ratione sequi
						sit architecto dicta dolorem, praesentium recusandae cumque? Ex!
					</p>
				</article>

				<SocialLinks orientation="horizontal" className="mt-16 md:gap-12" />
			</RevealSection>
		</main>
	);
}
