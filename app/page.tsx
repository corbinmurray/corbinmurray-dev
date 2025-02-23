import RevealSection from "@/components/reveal-section";
import SectionHeader from "@/components/section-header";
import SocialLinks from "@/components/social-links";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import experiences from "@/lib/experiences.json";
import projects from "@/lib/projects.json";
import {
	ArrowUpRightFromSquare,
	Blocks,
	Box,
	ChevronDown,
	Cloud,
	Code2,
	Cpu,
	Database,
	Github,
	Globe,
	Layers,
	LineChart,
	Server,
	Workflow,
	type LucideIcon,
} from "lucide-react";
import NextLink from "next/link";

// Skill to icon mapping
const getSkillIcon = (skill: string): LucideIcon => {
	const normalizedSkill = skill.toLowerCase();

	// Database technologies
	if (normalizedSkill.includes("sql") || normalizedSkill.includes("mongo") || normalizedSkill.includes("redis") || normalizedSkill.includes("database")) {
		return Database;
	}
	// Cloud & Infrastructure
	if (normalizedSkill.includes("aws") || normalizedSkill.includes("azure") || normalizedSkill.includes("cloud")) {
		return Cloud;
	}
	// Backend & Services
	if (normalizedSkill.includes(".net") || normalizedSkill.includes("node") || normalizedSkill.includes("express")) {
		return Server;
	}
	// Frontend & UI
	if (normalizedSkill.includes("react") || normalizedSkill.includes("angular") || normalizedSkill.includes("vue")) {
		return Blocks;
	}
	// Programming Languages
	if (
		normalizedSkill.includes("python") ||
		normalizedSkill.includes("javascript") ||
		normalizedSkill.includes("typescript") ||
		normalizedSkill.includes("c#")
	) {
		return Code2;
	}
	// Containers & DevOps
	if (normalizedSkill.includes("docker") || normalizedSkill.includes("kubernetes")) {
		return Box;
	}
	// Architecture & Patterns
	if (normalizedSkill.includes("microservice") || normalizedSkill.includes("architecture")) {
		return Cpu;
	}
	// APIs & Integration
	if (normalizedSkill.includes("api") || normalizedSkill.includes("rest") || normalizedSkill.includes("grpc")) {
		return Globe;
	}
	// Data & Analytics
	if (normalizedSkill.includes("bi") || normalizedSkill.includes("analytics") || normalizedSkill.includes("power")) {
		return LineChart;
	}
	// Message Queues & Events
	if (normalizedSkill.includes("kafka") || normalizedSkill.includes("rabbitmq") || normalizedSkill.includes("event")) {
		return Workflow;
	}
	// Default icon for other skills
	return Layers;
};

export default function Home() {
	return (
		<>
			<RevealSection className="min-h-[calc(100vh-10rem)] flex flex-col justify-center">
				<SectionHeader title="Welcome to my digital garden" punctuation="!" />

				<article className="space-y-6 relative">
					<p className="text-lg md:text-xl leading-relaxed">
						Hi, <span className="inline-block">👋</span> I&apos;m{" "}
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
							<article>
								<div className="flex items-center gap-3">
									<div className="h-8 w-1 bg-primary rounded-full" />
									<h3 className="font-semibold text-primary/80 m-0">Professional Journey</h3>
								</div>
							</article>

							<article>
								<p>
									As a software engineer I am passionate about creating innovative solutions and tackling complex challenges. My professional interests include
									backend development, event-driven architecture, and building systems that are both scalable and efficient.
								</p>
							</article>

							<article>
								<p>I thrive in collaborative environments where creativity meets purpose, and I love working with modern tech stacks to bring ideas to life.</p>
							</article>
						</RevealSection>

						{/* Personal Section */}
						<RevealSection className="space-y-6 p-6 hover:bg-secondary/5 transition-colors duration-300 bg-gradient-to-br from-secondary/5 via-transparent to-transparent h-full rounded-3xl">
							<article>
								<div className="flex items-center gap-3">
									<div className="h-8 w-1 bg-secondary rounded-full" />
									<h3 className="font-semibold text-secondary/80 m-0">Beyond the Code</h3>
								</div>
							</article>

							<article>
								<p>
									When I&apos;m not coding, you&apos;ll often find me spending time with my wife and our two dogs, Pretzel and Ink. If we are not taking walks,
									playing pickleball, or watching a good movie, then you&apos;ll find me playing soccer, at the gym, or working on DIY projects.
								</p>
							</article>

							<article>
								<p>
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
									<span className="text-lg font-semibold text-secondary/80">{experience.positionTitle}</span>
									<div className="h-0.5 w-16 bg-secondary/20 rounded-full" />
								</div>
							</CardHeader>
							<CardContent className="space-y-6">
								{/* Key Responsibilities & Achievements */}
								<div className="space-y-4">
									{experience.descriptions.map((description, ii) => (
										<div key={ii} className="group flex items-start gap-3 hover:bg-secondary/5 p-2 rounded-lg transition-colors duration-300">
											<div className="mt-1.5 h-2 w-2 rounded-full bg-secondary/40 group-hover:bg-secondary flex-shrink-0 transition-colors duration-300" />
											<div className="space-y-1">
												<p className="leading-relaxed text-muted">{description}</p>
												{/* Optional: Add impact metrics or highlights if available */}
												{experience.highlights?.[ii] && (
													<p className="text-sm text-primary/60 pl-2 border-l-2 border-primary/20">{experience.highlights[ii]}</p>
												)}
											</div>
										</div>
									))}
								</div>

								{/* Enhanced Skills Section with Icons */}
								<div className="pt-6 border-t border-primary/10">
									<div className="flex items-center gap-2 mb-4">
										<h4 className="text-sm md:text-base font-medium text-primary/80">Skills & Technologies</h4>
									</div>

									<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
										{experience.skills
											.sort((a, b) => (a.toLocaleLowerCase() > b.toLocaleLowerCase() ? 1 : -1))
											.map((skill, ii) => {
												const Icon = getSkillIcon(skill);
												return (
													<div key={ii} className="group flex items-center gap-2.5 transition-all duration-300 hover:translate-x-1">
														<Icon className="w-4 h-4 text-secondary/60 group-hover:text-secondary transition-colors duration-300" />
														<span className="text-sm text-muted group-hover:text-secondary transition-colors duration-300">{skill}</span>
													</div>
												);
											})}
									</div>
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
									<Card className="group relative h-[350px] overflow-hidden border border-primary/10 bg-gradient-to-br from-card/50 via-card/30 to-card/10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
										{/* Decorative Elements */}
										<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50" />
										<div className="absolute top-0 right-0 w-24 h-24 bg-gradient-radial from-primary/10 to-transparent rounded-full blur-2xl group-hover:from-primary/20 transition-all duration-500" />
										<div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-radial from-secondary/10 to-transparent rounded-full blur-2xl group-hover:from-secondary/20 transition-all duration-500" />

										{/* Content Layer */}
										<div className="relative h-full z-30 p-8 flex flex-col">
											{/* Project Type Indicator */}
											<div className="flex items-center gap-2 text-sm text-primary/60 mb-4">
												<Code2 className="w-4 h-4" />
												<span className="uppercase tracking-wider font-medium">Project</span>
											</div>

											{/* Project Name with Animated Underline */}
											<h3 className="text-2xl font-bold text-foreground relative inline-flex flex-col group/title">
												<span>{project.name}</span>
												<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent group-hover/title:w-full transition-all duration-500" />
											</h3>

											{/* Description - Slides up on hover */}
											<div className="mt-6 flex-1">
												<p className="text-muted-foreground leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
													{project.description}
												</p>
											</div>

											{/* Links - Fade in and slide up on hover */}
											<div className="flex items-center gap-4 pt-6 border-t border-primary/10 mt-auto">
												<NextLink
													href={project.liveSiteLink}
													className="flex items-center gap-2 text-sm font-medium text-primary/80 hover:text-primary transition-colors duration-300 group/link"
													target="_blank"
													rel="noopener noreferrer">
													<span>View Site</span>
													<ArrowUpRightFromSquare className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
												</NextLink>
												<NextLink
													href={project.githubHtmlUrl}
													className="flex items-center gap-2 text-sm font-medium text-primary/80 hover:text-primary transition-colors duration-300 group/link"
													target="_blank"
													rel="noopener noreferrer">
													<span>View Code</span>
													<Github className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
												</NextLink>
											</div>
										</div>
									</Card>
								</RevealSection>
							);
						})}
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
		</>
	);
}
