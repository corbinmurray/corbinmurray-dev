import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import RevealSection from "@/components/ui/reveal-section";
import experiences from "@/lib/experiences.json";
import projects from "@/lib/projects.json";

export default async function Home() {
	return (
		<main>
			<RevealSection id="hero" className="min-h-[calc(100vh-12rem)] mb-[6rem] flex flex-col justify-center">
				<h1 className="text-[clamp(14px,5vw,16px)] md:text-[clamp(14px,5vw,18px)] font-mono">Hi, my name is</h1>

				<h2 className="text-[clamp(40px,8vw,80px)] font-semibold border-none bg-clip-text text-transparent bg-gradient-to-tr from-primary to-secondary brightness-110 leading-tight">
					Corbin Murray.
				</h2>

				<h3 className="text-[clamp(30px,6vw,70px)] font-semibold">I build software.</h3>

				<article className="my-5">
					<p>
						I lead projects focused on optimizing software processes and ensuring scalable solutions. My career spans developing complex integrations, building
						robust microservices, and mentoring teams to establish standards in fast-paced environments.
					</p>
				</article>

				<div>
					<Button asChild variant="outline" size="blockToWide">
						<a href="/Corbin Murray - Resume.pdf" target="_blank" className="capitalize">
							resume
						</a>
					</Button>
				</div>
			</RevealSection>

			<RevealSection id="about" className="mb-24 md:mb-48 scroll-mt-24">
				<h1>About Me</h1>

				<article>
					<p>Hello! My name is Corbin, and I enjoy solving tough technical problems and creating impactful software.</p>
				</article>

				<article>
					<p>
						I have a deep passion for bringing ideas to life through software development. Tackling challenges that require creativity and critical thinking
						excites me, and I find immense satisfaction in uncovering solutions that drive meaningful outcomes. The ever-evolving nature of technology keeps me
						motivated to continuously learn, improve, and push boundaries. Whether it's debugging intricate issues, architecting scalable systems, or exploring
						new technologies, I thrive on the growth and innovation each opportunity brings.
					</p>
				</article>

				<article>
					<p>Here are some technologies I have worked with recently:</p>
					<ul className="list-none p-0 md:p-0 grid grid-cols-2 gap-2 md:grid-cols-3">
						{RECENT_TECHNOLOGIES.map((tech, i) => (
							<li
								key={i}
								className="relative md:relative before:content-['>'] before:absolute before:left-0 before:text-accent ps-5 m-0 md:before:content-['>'] md:before:absolute md:before:left-0 md:before:text-accent md:ps-5 md:m-0">
								{tech}
							</li>
						))}
					</ul>
				</article>
			</RevealSection>

			<RevealSection id="experience" className="mb-24 md:mb-48 scroll-mt-24 max-w-screen-md">
				<h1>Work Experience</h1>

				<Accordion type="multiple" defaultValue={[experiences[0].companyName]}>
					{experiences.map((experience, i) => {
						return (
							<AccordionItem key={i} value={experience.companyName}>
								<AccordionTrigger>
									<div className="w-full pe-3 flex justify-between items-end">
										<h3 className="text-secondary">{experience.companyName}</h3>
										<h4 className="text-sm italic">{experience.dateRange}</h4>
									</div>
								</AccordionTrigger>
								<AccordionContent>
									<article>
										<h4 className="mb-4">{experience.positionTitle}</h4>
										{experience.descriptions.map((description, ii) => {
											return <p key={ii}>{description}</p>;
										})}
									</article>
								</AccordionContent>
							</AccordionItem>
						);
					})}
				</Accordion>
			</RevealSection>

			<RevealSection id="projects" className="mb-24 md:mb-48 scroll-mt-24">
				<h1>Projects</h1>

				<ul className="space-y-8">
					{projects.map((project, i) => {
						return (
							<li key={i}>
								<Card key={i} className="shadow">
									<CardHeader>
										<CardTitle className="text-secondary">{project.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<article>
											<p>{project.description}</p>
										</article>
									</CardContent>
									<CardFooter>
										<a href={project.githubLink}>GitHub</a>
									</CardFooter>
								</Card>
							</li>
						);
					})}
				</ul>
			</RevealSection>
		</main>
	);
}

const RECENT_TECHNOLOGIES = ["C#", "TypeScript", ".NET Core", "Docker", "MongoDB", "PostgreSQL", "Apache Kafka", "AWS", "Redis"];
