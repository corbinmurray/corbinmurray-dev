import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { sectionChildVariants, sectionContainerVariants } from "@/lib/animation-variants";
import experiences from "@/lib/experiences.json";
import projects from "@/lib/projects.json";
import * as motion from "motion/react-client";

export default async function Home() {
	return (
		<main>
			<motion.section
				id="hero"
				className="min-h-screen flex flex-col justify-center items-start mb-24 md:mb-48"
				initial="hiddenLeft"
				animate="visible"
				variants={sectionContainerVariants}>
				<motion.div className="-mt-48" variants={sectionChildVariants}>
					<motion.h1 className="text-[clamp(14px,5vw,16px)] md:text-[clamp(14px,5vw,18px)] opacity-80 font-mono">Hi, my name is</motion.h1>

					<motion.h2 className="text-[clamp(40px,8vw,80px)] font-semibold text-primary font-sans border-none">Corbin Murray.</motion.h2>

					<motion.h3 className="text-[clamp(30px,6vw,70px)] opacity-60 font-semibold leading-none font-sans">I build software.</motion.h3>

					<motion.article className="my-5">
						<p className="opacity-80">
							I lead projects focused on optimizing software processes and ensuring scalable solutions. My career spans developing complex integrations,
							building robust microservices, and mentoring teams to establish standards in fast-paced environments.
						</p>
					</motion.article>
				</motion.div>

				<motion.div className="w-full flex justify-center" variants={sectionChildVariants}>
					<Button asChild variant="outline" size="blockToWide">
						<a href="/Corbin Murray - Resume.pdf" target="_blank" className="capitalize mt-5">
							resume
						</a>
					</Button>
				</motion.div>
			</motion.section>

			<motion.section
				id="about"
				className="scroll-mt-28 mb-24 md:mb-48"
				initial="hiddenLeft"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				variants={sectionContainerVariants}>
				<SectionHeader>About Me</SectionHeader>

				{/* Introduction */}
				<motion.article variants={sectionChildVariants}>
					<p>Hello! My name is Corbin, and I enjoy solving tough technical problems and creating impactful software.</p>
					<p>
						I have a deep passion for bringing ideas to life through software development. Tackling challenges that require creativity and critical thinking
						excites me, and I find immense satisfaction in uncovering solutions that drive meaningful outcomes. The ever-evolving nature of technology keeps me
						motivated to continuously learn, improve, and push boundaries. Whether it's debugging intricate issues, architecting scalable systems, or exploring
						new technologies, I thrive on the growth and innovation each opportunity brings.
					</p>
				</motion.article>

				{/* Technologies */}
				<motion.article className="mt-8">
					<p>Here are a few technologies I have worked with recently:</p>
					<ul className="list-none p-0 md:p-0 grid grid-cols-2 gap-2 md:grid-cols-3">
						{RECENT_TECHNOLOGIES.map((tech, i) => (
							<li
								key={i}
								className="relative md:relative before:content-['>'] before:absolute before:left-0 before:text-accent ps-5 m-0 md:before:content-['>'] md:before:absolute md:before:left-0 md:before:text-accent md:ps-5 md:m-0">
								{tech}
							</li>
						))}
					</ul>
				</motion.article>
			</motion.section>

			<motion.section
				id="experience"
				className="scroll-mt-28 mb-24 md:mb-48"
				initial="hiddenLeft"
				whileInView="visible"
				viewport={{ once: true, amount: 0.1 }}
				variants={sectionContainerVariants}>
				<SectionHeader>Work Experience</SectionHeader>

				<motion.div variants={sectionChildVariants}>
					<Accordion type="multiple" defaultValue={[experiences[0].companyName]} orientation="horizontal" dir="ltr">
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
											<h4 className="text-center mb-4">{experience.positionTitle}</h4>
											{experience.descriptions.map((description, ii) => {
												return <p key={ii}>{description}</p>;
											})}
										</article>
									</AccordionContent>
								</AccordionItem>
							);
						})}
					</Accordion>
				</motion.div>
			</motion.section>

			<motion.section id="projects" className="scroll-mt-28 mb-24 md:mb-48">
				<SectionHeader>Projects</SectionHeader>

				<div className="space-y-8">
					{projects.map((project, i) => {
						return (
							<motion.div key={i}>
								<Card key={i}>
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
							</motion.div>
						);
					})}
				</div>
			</motion.section>
		</main>
	);
}

const SectionHeader = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="capitalize flex justify-center items-center md:justify-start mb-8 md:mb-16">
			<h1>{children}</h1>
		</div>
	);
};

const RECENT_TECHNOLOGIES = ["C#", "TypeScript", ".NET Core", "Docker", "MongoDB", "PostgreSQL", "Apache Kafka", "AWS", "Redis"];
