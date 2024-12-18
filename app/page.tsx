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
				initial="hidden"
				animate="visible"
				variants={sectionContainerVariants}>
				<motion.div className="-mt-48 space-y-2" variants={sectionChildVariants}>
					<motion.h1 className="text-[clamp(14px,5vw,16px)] md:text-[clamp(14px,5vw,18px)] font-mono">Hi, my name is</motion.h1>

					<motion.h2 className="text-[clamp(40px,8vw,80px)] font-semibold border-none bg-clip-text text-transparent bg-gradient-to-tr from-primary to-secondary">
						Corbin Murray.
					</motion.h2>

					<motion.h3 className="text-[clamp(30px,6vw,70px)] font-semibold">I build software.</motion.h3>

					<motion.article className="my-5">
						<p>
							I lead projects focused on optimizing software processes and ensuring scalable solutions. My career spans developing complex integrations,
							building robust microservices, and mentoring teams to establish standards in fast-paced environments.
						</p>
					</motion.article>
				</motion.div>

				<motion.div className="flex justify-center w-full md:w-auto" variants={sectionChildVariants}>
					<Button asChild variant="outline" size="blockToWide">
						<a href="/Corbin Murray - Resume.pdf" target="_blank" className="capitalize mt-5">
							resume
						</a>
					</Button>
				</motion.div>
			</motion.section>

			<section id="about" className="mb-24 md:mb-48 scroll-mt-24">
				<motion.div
					className="capitalize flex justify-center items-center md:justify-start mb-8 md:mb-16"
					initial={{ opacity: 0, y: 75, scale: 0 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					viewport={{ once: true, amount: "some" }}>
					<h1>About Me</h1>
				</motion.div>

				<article>
					<motion.p
						initial={{ opacity: 0, y: 75 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ ease: "easeOut", duration: 0.3, when: "beforeChildren" }}>
						Hello! My name is Corbin, and I enjoy solving tough technical problems and creating impactful software.
					</motion.p>

					<motion.p
						initial={{ opacity: 0, y: 75 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ ease: "easeOut", duration: 0.3, when: "beforeChildren" }}>
						I have a deep passion for bringing ideas to life through software development. Tackling challenges that require creativity and critical thinking
						excites me, and I find immense satisfaction in uncovering solutions that drive meaningful outcomes. The ever-evolving nature of technology keeps me
						motivated to continuously learn, improve, and push boundaries. Whether it's debugging intricate issues, architecting scalable systems, or exploring
						new technologies, I thrive on the growth and innovation each opportunity brings.
					</motion.p>

					<motion.p
						initial={{ opacity: 0, y: 75 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ ease: "easeOut", duration: 0.3, when: "beforeChildren" }}>
						Here are some technologies I have worked with recently:
					</motion.p>
					<ul className="list-none p-0 md:p-0 grid grid-cols-2 gap-2 md:grid-cols-3">
						{RECENT_TECHNOLOGIES.map((tech, i) => (
							<motion.li
								key={i}
								className="relative md:relative before:content-['>'] before:absolute before:left-0 before:text-accent ps-5 m-0 md:before:content-['>'] md:before:absolute md:before:left-0 md:before:text-accent md:ps-5 md:m-0"
								initial={{ opacity: 0, y: 75 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, amount: 0.4 }}
								transition={{ ease: "easeOut", duration: 0.3, when: "beforeChildren" }}>
								{tech}
							</motion.li>
						))}
					</ul>
				</article>
			</section>

			<section id="experience" className="mb-24 md:mb-48 scroll-mt-24">
				<motion.div
					className="capitalize flex justify-center items-center md:justify-start mb-8 md:mb-16"
					initial={{ opacity: 0, y: 75, scale: 0 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					viewport={{ once: true, amount: "some" }}>
					<h1>Work Experience</h1>
				</motion.div>

				<motion.div initial={{ opacity: 0, y: 75, scale: 0 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: "some" }}>
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
			</section>

			<section id="projects" className="mb-24 md:mb-48 scroll-mt-24">
				<motion.div
					className="capitalize flex justify-center items-center md:justify-start mb-8 md:mb-16"
					initial={{ opacity: 0, y: 75, scale: 0 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					viewport={{ once: true, amount: "some" }}>
					<h1>Projects</h1>
				</motion.div>

				<ul className="space-y-8">
					{projects.map((project, i) => {
						return (
							<motion.li
								key={i}
								variants={sectionChildVariants}
								initial={i % 2 === 0 ? "hidden" : "hidden"}
								whileInView="visible"
								viewport={{ once: true, amount: "some" }}>
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
							</motion.li>
						);
					})}
				</ul>
			</section>
		</main>
	);
}

const RECENT_TECHNOLOGIES = ["C#", "TypeScript", ".NET Core", "Docker", "MongoDB", "PostgreSQL", "Apache Kafka", "AWS", "Redis"];
