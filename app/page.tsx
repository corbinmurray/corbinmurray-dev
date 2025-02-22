import RevealSection from "@/components/reveal-section";
import SectionHeader from "@/components/section-header";
import SocialLinks from "@/components/social-links";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import experiences from "@/lib/experiences.json";
import projects from "@/lib/projects.json";
import { ArrowUpRightFromSquare, ChevronDown, Github } from "lucide-react";
import NextLink from "next/link";

export default function Home() {
	return (
		<>
			<RevealSection className="min-h-[calc(100vh-10rem)] flex flex-col justify-center">
				<SectionHeader title="Welcome to my digital garden" punctuation="!" />

				<article className="space-y-6 relative">
					<p className="text-lg md:text-xl leading-relaxed">
						Hi, <span className="animate-waving-hand inline-block">👋</span> I&apos;m{" "}
						<span className="text-primary font-semibold text-xl md:text-2xl bg-primary/10 px-2 py-1 rounded-md">Corbin Murray</span>. I am a{" "}
						<span className="font-bold relative inline-block after:content-[''] after:absolute after:-bottom-px after:left-0 after:w-full after:h-px after:bg-secondary after:rounded-full">
							software engineer
						</span>{" "}
						who loves turning big ideas into practical, working solutions.
					</p>
					<p className="text-lg md:text-xl leading-relaxed">
						Welcome to my small slice of the internet, where I share the projects I&apos;ve built, the things I&apos;ve learned, and the occasional wild
						experiment. Like any good garden, it&apos;s a work in progress — growing, evolving, and sometimes sprouting unexpected ideas. Take a look around,
						and maybe you&apos;ll find something inspiring — or at least worth chatting about!
					</p>
				</article>

				<ChevronDown className="mx-auto h-8 animate-bounce mt-20 lg:mt-40 text-primary/50" />
			</RevealSection>

			<RevealSection id="about" className="my-36 md:my-72 scroll-m-24">
				<SectionHeader title="About me" />

				<div className="relative">
					{/* Content Grid */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 relative">
						{/* Professional Section */}
						<RevealSection className="space-y-6 p-6 hover:bg-primary/5 transition-colors duration-300 bg-gradient-to-br from-primary/5 via-transparent to-transparent h-full rounded-3xl">
							<div className="flex items-center gap-3">
								<div className="h-8 w-1 bg-primary rounded-full" />
								<h3 className="text-2xl font-semibold text-primary/80">Professional Journey</h3>
							</div>
							<article>
								<p className="text-lg leading-relaxed">
									As a software engineer I am passionate about creating innovative solutions and tackling complex challenges. My professional interests include
									backend development, event-driven architecture, and building systems that are both scalable and efficient.
								</p>
							</article>

							<article>
								<p className="text-lg leading-relaxed">
									I thrive in collaborative environments where creativity meets purpose, and I love working with modern tech stacks to bring ideas to life.
								</p>
							</article>
						</RevealSection>

						{/* Personal Section */}
						<RevealSection className="space-y-6 p-6 hover:bg-secondary/5 transition-colors duration-300 bg-gradient-to-br from-secondary/5 via-transparent to-transparent h-full rounded-3xl">
							<div className="flex items-center gap-3">
								<div className="h-8 w-1 bg-secondary rounded-full" />
								<h3 className="text-2xl font-semibold text-secondary/80">Beyond the Code</h3>
							</div>

							<article>
								<p className="text-lg leading-relaxed">
									When I&apos;m not coding, you&apos;ll often find me spending time with my wife and our two dogs, Pretzel and Ink. If we are not taking walks,
									playing pickleball, or watching a good movie, then you&apos;ll find me playing soccer, at the gym, or working on DIY projects.
								</p>
							</article>

							<article>
								<p className="text-lg leading-relaxed">
									Whether it&apos;s getting lost in nature or diving into a good video game, I try to find balance between my professional and personal
									passions.
								</p>
							</article>
						</RevealSection>
					</div>

					{/* Quote Section */}
					<RevealSection>
						<article>
							<blockquote className="mt-6 md:mt-12 border-l-2 pl-6 italic">
								"This site is a reflection of all those facets — my love for software development, my curiosity for learning, and the things that make life fun
								along the way."
							</blockquote>
						</article>
					</RevealSection>
				</div>
			</RevealSection>

			<RevealSection id="experience" className="mt-36 md:mt-72 scroll-m-24">
				<SectionHeader title="My work experience" />
			</RevealSection>

			{experiences.map((experience, i) => {
				return (
					<RevealSection key={i} className="mb-3">
						<Card className="relative hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur border-primary/10">
							<div className="absolute left-0 top-0 w-1 h-full bg-accent rounded-l-xl" />
							<CardHeader className="space-y-4">
								<div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
									<CardTitle className="text-xl md:text-2xl font-bold">{experience.companyName}</CardTitle>
									<span className="text-sm text-muted font-medium">{experience.dateRange}</span>
								</div>
								<div className="flex flex-col gap-1">
									<span className="text-lg font-semibold text-primary">{experience.positionTitle}</span>
									<div className="h-0.5 w-16 bg-primary/20 rounded-full" />
								</div>
							</CardHeader>
							<CardContent className="space-y-4">
								{experience.descriptions.map((description, ii) => (
									<p key={ii} className="leading-relaxed text-muted">
										{description}
									</p>
								))}
								<div className="flex flex-wrap gap-2 pt-4">
									{experience.skills.map((skill, ii) => (
										<Badge key={ii} variant="secondary" className="text-sm bg-secondary/10 text-secondary">
											{skill}
										</Badge>
									))}
								</div>
							</CardContent>
						</Card>
					</RevealSection>
				);
			})}

			<RevealSection id="projects" className="my-36 md:my-72 scroll-m-24">
				<SectionHeader title="Projects I've worked on" />

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
					{projects
						.sort((a, b) => (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1))
						.map((project, i) => {
							return (
								<RevealSection key={i}>
									<Card className="group relative h-[300px] overflow-hidden border-0">
										{/* Background Image */}
										{project.image && (
											<div
												className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-100 transition-transform duration-500"
												style={{ backgroundImage: `url(${project.image})` }}
											/>
										)}

										{/* Background Layer */}
										<div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80 backdrop-blur-sm z-10" />
										<div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 z-20" />

										{/* Optional: Placeholder gradient if no image */}
										{!project.image && <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />}

										{/* Content Layer */}
										<div className="relative h-full z-30 p-6 flex flex-col">
											<div className="flex-1">
												<h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-primary transition-colors duration-300">{project.name}</h3>

												{/* Description - slides up on hover */}
												<div className="mt-4 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
													<p className="text-white/80 line-clamp-4">{project.description}</p>
												</div>
											</div>

											{/* Links - fade in on hover */}
											<div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
												<NextLink
													href={project.liveSiteLink}
													className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-primary/20 text-white hover:text-primary transition-colors duration-300"
													target="_blank"
													rel="noopener noreferrer">
													<span className="text-sm font-medium">View Site</span>
													<ArrowUpRightFromSquare className="w-4 h-4" />
												</NextLink>
												<a
													href={project.githubHtmlUrl}
													className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-primary/20 text-white hover:text-primary transition-colors duration-300"
													target="_blank"
													rel="noopener noreferrer">
													<span className="text-sm font-medium">Code</span>
													<Github className="w-4 h-4" />
												</a>
											</div>
										</div>
									</Card>
								</RevealSection>
							);
						})}
				</div>
			</RevealSection>

			<RevealSection id="skills" className="my-36 md:my-72 scroll-m-24">
				<SectionHeader title="Technical Skills" />

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<Card className="hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur">
						<CardHeader>
							<CardTitle className="text-xl text-primary">Programming Languages</CardTitle>
						</CardHeader>
						<CardContent className="space-y-2">
							<Badge variant="outline" className="me-2">
								C#
							</Badge>
							<Badge variant="outline" className="me-2">
								Python
							</Badge>
							<Badge variant="outline" className="me-2">
								TypeScript
							</Badge>
							<Badge variant="outline" className="me-2">
								JavaScript
							</Badge>
						</CardContent>
					</Card>

					<Card className="hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur">
						<CardHeader>
							<CardTitle className="text-xl text-primary">Frameworks & Tools</CardTitle>
						</CardHeader>
						<CardContent className="space-y-2">
							<Badge variant="outline" className="me-2">
								.NET Core
							</Badge>
							<Badge variant="outline" className="me-2">
								React
							</Badge>
							<Badge variant="outline" className="me-2">
								Redux
							</Badge>
							<Badge variant="outline" className="me-2">
								Docker
							</Badge>
							<Badge variant="outline" className="me-2">
								AWS
							</Badge>
							<Badge variant="outline" className="me-2">
								gRPC
							</Badge>
						</CardContent>
					</Card>

					<Card className="hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur">
						<CardHeader>
							<CardTitle className="text-xl text-primary">Databases</CardTitle>
						</CardHeader>
						<CardContent className="space-y-2">
							<Badge variant="outline" className="me-2">
								MongoDB
							</Badge>
							<Badge variant="outline" className="me-2">
								PostgreSQL
							</Badge>
							<Badge variant="outline" className="me-2">
								SQL Server
							</Badge>
							<Badge variant="outline" className="me-2">
								Redis
							</Badge>
						</CardContent>
					</Card>

					<Card className="hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur">
						<CardHeader>
							<CardTitle className="text-xl text-primary">Other Technologies</CardTitle>
						</CardHeader>
						<CardContent className="space-y-2">
							<Badge variant="outline" className="me-2">
								RESTful APIs
							</Badge>
							<Badge variant="outline" className="me-2">
								Apache Kafka
							</Badge>
							<Badge variant="outline" className="me-2">
								OpenAPI
							</Badge>
							<Badge variant="outline" className="me-2">
								Power BI
							</Badge>
						</CardContent>
					</Card>
				</div>
			</RevealSection>

			<RevealSection id="contact" className="my-36 md:my-72 scroll-m-24">
				<SectionHeader title="Contact Me" />

				<Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur">
					<CardContent className="p-8 text-center space-y-8">
						<p className="text-lg leading-relaxed">
							I&apos;d love to hear from you! Whether you want to collaborate on a project, discuss software development, or just say hello, feel free to reach
							out using one of the options below.
						</p>

						<SocialLinks linksToDisplay={["LinkedIn", "Email"]} orientation="horizontal" className="justify-center md:gap-12" />
					</CardContent>
				</Card>
			</RevealSection>

			<RevealSection id="blog" className="my-36 md:my-72 scroll-m-24">
				<SectionHeader title="Blog" />

				<Card className="hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur">
					<CardContent className="p-8 text-center">
						<p className="text-lg leading-relaxed">
							Welcome to my blog! Here, I share my thoughts on technology, software development, and the latest trends in the industry. Stay tuned for
							insightful articles and discussions.
						</p>
					</CardContent>
				</Card>
			</RevealSection>
		</>
	);
}
