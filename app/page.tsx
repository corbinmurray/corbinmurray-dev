import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import RevealSection from "@/components/ui/reveal-section";
import SectionHeader from "@/components/ui/section-header";
import SocialLinks from "@/components/ui/social-links";
import experiences from "@/lib/experiences.json";
import projects from "@/lib/projects.json";
import { Github } from "lucide-react";

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

			<RevealSection id="about" className="relative mb-32 md:mb-64 scroll-mt-40">
				<SectionHeader sequence={1} title="About Me" />

				<article>
					<p>Hello! My name is Corbin, and I enjoy solving tough technical problems and creating impactful software.</p>
				</article>

				<article>
					<p>
						I have a deep passion for bringing ideas to life through software development. Tackling challenges that require creativity and critical thinking
						excites me, and I find immense satisfaction in uncovering solutions that drive meaningful outcomes. The ever-evolving nature of technology keeps me
						motivated to continuously learn, improve, and push boundaries. Whether it&apos;s debugging intricate issues, architecting scalable systems, or
						exploring new technologies, I thrive on the growth and innovation each opportunity brings.
					</p>
				</article>

				<article>
					<p>
						When I&apos;m not working, I love spending time with my wife, our two dogs Pretzel and Ink, and hanging out with friends and family. I&apos;m
						passionate about staying active, whether it&apos;s playing soccer, hitting the gym, or enjoying outdoor activities like fishing. When it&apos;s time
						to relax, you&apos;ll often find me playing video games, reading, or exploring new hobbies.
					</p>
				</article>
			</RevealSection>

			<RevealSection id="experience" className="scroll-mt-40">
				<SectionHeader sequence={2} title="Experience" />
			</RevealSection>

			{experiences.map((experience, i) => {
				return (
					<RevealSection key={i}>
						<article className="flex flex-col gap-y-3 mb-16 border-b">
							<div className="flex justify-start items-baseline">
								<h3 className="m-0">{experience.companyName}</h3>
								<h3 className="italic text-sm ms-10">{experience.dateRange}</h3>
							</div>

							<div>
								<span className="text-primary font-semibold text-md">{experience.positionTitle}</span>
							</div>

							{experience.descriptions.map((description, ii) => {
								return (
									<p key={ii} className="mb-0">
										{description}
									</p>
								);
							})}

							<ul className="list-none p-0 m-0 flex flex-row flex-wrap">
								{experience.skills.map((skill, ii) => {
									return (
										<li key={ii} className="text-nowrap">
											<Badge variant="accent">{skill}</Badge>
										</li>
									);
								})}
							</ul>
						</article>
					</RevealSection>
				);
			})}

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
										<CardFooter>
											<a href={project.githubLink}>
												<Github className="smooth-hover hover:text-primary" />
											</a>
										</CardFooter>
									</Card>
								</li>
							</RevealSection>
						);
					})}
				</ul>
			</RevealSection>
		</main>
	);
}
