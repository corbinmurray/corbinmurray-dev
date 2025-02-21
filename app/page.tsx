import Link from "@/components/link";
import RevealSection from "@/components/reveal-section";
import SectionHeader from "@/components/section-header";
import SocialLinks from "@/components/social-links";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import experiences from "@/lib/experiences.json";
import projects from "@/lib/projects.json";
import { ArrowUpRightFromSquare, ChevronDown, Github } from "lucide-react";
import NextLink from "next/link";

export default function Home() {
	return (
		<>
			<RevealSection className="min-h-[calc(100vh-10rem)]">
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
				</article>

				<ChevronDown className="mx-auto h-8 animate-bounce mt-20 lg:mt-40" />
			</RevealSection>

			<RevealSection id="about" className="my-36 md:my-72 scroll-m-24">
				<SectionHeader title="About me" />

				<article>
					<p>
						Time to dig into the good stuff — as a software engineer I am passionate about creating innovative solutions and tackling complex challenges. My
						professional interests include backend development, event-driven architecture, and building systems that are both scalable and efficient. I thrive
						in collaborative environments where creativity meets purpose, and I love working with modern tech stacks to bring ideas to life.
					</p>
				</article>

				<article>
					<p>
						When I&apos;m not coding, you&apos;ll often find me spending time with my wife and our two dogs, Pretzel and Ink. If we are not taking walks,
						playing pickleball, or watching a good movie, then you&apos;ll find me playing soccer, at the gym, or working on DIY projects. Whether it&apos;s
						getting lost in nature or diving into a good video game, I try to find balance between my professional and personal passions.
					</p>
				</article>

				<article>
					<p>
						This site is a reflection of all those facets — my love for software development, my curiosity for learning, and the things that make life fun along
						the way.
					</p>
				</article>
			</RevealSection>

			<RevealSection id="experience" className="mt-36 md:mt-72 scroll-m-24">
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
											<Badge variant="secondary">{skill}</Badge>
										</li>
									);
								})}
							</ul>
						</article>
					</RevealSection>
				);
			})}

			<RevealSection id="projects" className="my-36 md:my-72 scroll-m-24">
				<SectionHeader title="Projects I've worked on" />

				<ul className="flex flex-col gap-8 xl:flex-row">
					{projects
						.sort((a, b) => (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1))
						.map((project, i) => {
							return (
								<RevealSection key={i}>
									<li>
										<Card className="shadow max-w-prose">
											<CardHeader>
												<CardTitle>
													<Link href={project.liveSiteLink} variant="internal" className="text-lg md:text-xl lg:text-2xl">
														{project.name}
													</Link>
												</CardTitle>
											</CardHeader>
											<CardContent>
												<article>
													<p>{project.description}</p>
												</article>
											</CardContent>
											<CardFooter className="gap-6">
												<NextLink href={project.liveSiteLink} className="hover:text-secondary">
													<ArrowUpRightFromSquare />
												</NextLink>
												<a href={project.githubHtmlUrl}>
													<Github className="hover:text-secondary hover:cursor-pointer" />
												</a>
											</CardFooter>
										</Card>
									</li>
								</RevealSection>
							);
						})}
				</ul>
			</RevealSection>

			<RevealSection id="skills" className="my-36 md:my-72 scroll-m-24">
				<SectionHeader title="Technical Skills" />

				<article>
					<ul className="list-disc pl-5">
						<li>
							<strong>Programming Languages:</strong> C#, Python, TypeScript/JavaScript
						</li>
						<li>
							<strong>Frameworks/Tools:</strong> .NET Core, React, Redux, Docker, AWS, gRPC
						</li>
						<li>
							<strong>Databases:</strong> MongoDB, PostgreSQL, SQL Server, Redis
						</li>
						<li>
							<strong>Other:</strong> RESTful APIs, Apache Kafka, OpenAPI, Power BI
						</li>
					</ul>
				</article>
			</RevealSection>

			<RevealSection id="contact" className="my-36 md:my-72 scroll-m-24">
				<SectionHeader title="Contact Me" />

				<article>
					<p>
						I&apos;d love to hear from you! Whether you want to collaborate on a project, discuss software development, or just say hello, feel free to reach
						out using one of the options below.
					</p>
				</article>

				<SocialLinks linksToDisplay={["LinkedIn", "Email"]} orientation="horizontal" className="mt-12 md:gap-12" />
			</RevealSection>

			<RevealSection id="blog" className="my-36 md:my-72 scroll-m-24">
				<SectionHeader title="Blog" />

				<article>
					<p>
						Welcome to my blog! Here, I share my thoughts on technology, software development, and the latest trends in the industry. Stay tuned for insightful
						articles and discussions.
					</p>
				</article>
			</RevealSection>
		</>
	);
}
