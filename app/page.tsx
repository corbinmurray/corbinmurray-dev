import RevealSection from "@/components/reveal-section";
import SectionHeader from "@/components/section-header";
import SocialLinks from "@/components/social-links";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import experiences from "@/lib/experiences.json";
import projects from "@/lib/projects.json";
import { Github, SquareArrowOutUpRight } from "lucide-react";

export default async function Home() {
	return (
		<>
			<RevealSection id="home" className="mt-12 md:mt-16">
				<SectionHeader title="Welcome to my digital garden" punctuation="!" />

				<article>
					<p>
						Hi, <span className="animate-waving-hand">👋</span> I&apos;m <span className="text-primary font-semibold text-lg md:text-xl">Corbin Murray</span>. I
						am a <span className="font-bold">software engineer</span> who loves turning big ideas into practical, working solutions.
					</p>
					<p>
						Welcome to my small slice of the internet, where I share the projects I&apos;ve built, the things I&apos;ve learned, and the occasional wild
						experiment. Like any good garden, it&apos;s a work in progress — growing, evolving, and sometimes sprouting unexpected ideas. Take a look around,
						and maybe you&apos;ll find something inspiring — or at least worth chatting about!
					</p>
					{/* <p>
					I&apos;ve always been fascinated by the art and logic of software development. There&apos;s something incredibly rewarding about reigning in the chaos and crafting something meaningful, whether it&apos;s a tool to solve a tricky problem or a seamless experience for users. This space is my way of
					combining that passion with a little creativity and curiosity. 
				</p> */}
				</article>
			</RevealSection>

			<RevealSection id="about" className="mt-12 md:mt-16">
				<SectionHeader title="About me" />

				<article>
					<p>
						Time to dig into the good stuff — as a software engineer passionate about creating innovative solutions and tackling complex challenges. My
						professional interests include backend development, event-driven architecture, and building systems that are both scalable and efficient. I thrive
						in collaborative environments where creativity meets purpose, and I love working with modern tech stacks to bring ideas to life.
					</p>
				</article>

				<article>
					<p>
						When I&apos;m not coding, you&apos;ll often find me spending time with my wife and our two dogs, Pretzel and Ink. I&apos;m also a huge fan of
						weightlifting, soccer, and the occasional DIY project. Whether it&apos;s exploring local coffee shops, getting lost in nature, or diving into a good
						video game, I try to find balance between my professional and personal passions.
					</p>
				</article>

				<article>
					<p>
						This site is a reflection of all those facets — my love for software development, my curiosity for learning, and the things that make life fun along
						the way.
					</p>
				</article>
			</RevealSection>

			<RevealSection id="experience">
				<SectionHeader title="My work experience" />
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
									<p key={ii} className="m-0">
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

			<RevealSection id="contact">
				<SectionHeader title="Contact Me" />

				<article>
					<p>
						I&apos;d love to hear from you! Whether you want to collaborate on a project, discuss software development, or just say hello, feel free to reach
						out using one of the options below.
					</p>
				</article>

				<SocialLinks orientation="horizontal" className="mt-16 md:gap-12" />
			</RevealSection>
		</>
	);
}
