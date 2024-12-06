import WorkExperienceAccordion from "@/components/Accordion/WorkExperienceAccordion";
import experiences from "@/lib/experiences.json";
import { Button, Center, Stack, Text, Title } from "@mantine/core";
import clsx from "clsx";
import classes from "./page.module.css";

export default function HomePage() {
	return (
		<>
			<section id="hero" className={clsx(classes.hero)}>
				<Stack h="100%" justify="center" align="flex-start">
					<Title order={3} size="clamp(14px,5vw,16px)" opacity={0.8} className={clsx(classes["font-mono"])}>
						Hi, my name is
					</Title>
					<Title
						order={1}
						size="clamp(40px,8vw,80px)"
						fw={600}
						textWrap="nowrap"
						className={clsx(classes["text-primary"], classes["font-sans"], classes["leading-relaxed"])}>
						Corbin Murray.
					</Title>
					<Title order={2} size="clamp(30px,6vw,70px)" opacity={0.6} fw={600} className={clsx(classes["font-sans"], classes["leading-tight"])}>
						I build software.
					</Title>
					<Text opacity={0.8} className={clsx(classes["font-sans"])} mt="sm" mb="sm">
						I lead projects focused on optimizing software processes and ensuring scalable solutions. My career spans developing complex integrations, building
						robust microservices, and mentoring teams to establish standards in fast-paced environments.
					</Text>
					<Button component="a" href="/Corbin Murray - Resume.pdf" target="_blank" variant="outline" color="neutral" mt="md" w="100%">
						Resume
					</Button>
				</Stack>
			</section>

			<section id="about" className={clsx(classes["about-me"])}>
				<Center>
					<Title order={1} size="clamp(26px,5vw,32px)" mb="xl" textWrap="nowrap">
						About Me
					</Title>
				</Center>

				<Text>Hello! My name is Corbin, and I enjoy solving tough technical problems and creating impactful software.</Text>

				<br></br>

				<Text>
					I have a deep passion for bringing ideas to life through software development. Tackling challenges that require creativity and critical thinking
					excites me, and I find immense satisfaction in uncovering solutions that drive meaningful outcomes. The ever-evolving nature of technology keeps me
					motivated to continuously learn, improve, and push boundaries. Whether it&apos;s debugging intricate issues, architecting scalable systems, or
					exploring new technologies, I thrive on the growth and innovation each opportunity brings.
				</Text>

				<br />

				<Text>Here are a few technologies I have worked with recently:</Text>

				<br />

				<ul className={clsx(classes.skills)}>
					{["C#", "TypeScript", ".NET Core", "Docker", "MongoDB", "PostgreSQL", "Apache Kafka", "AWS", "Redis"].map((tech, i) => (
						<li key={i}>{tech}</li>
					))}
				</ul>
			</section>

			<section id="experience" className={clsx(classes.experience)}>
				<Center>
					<Title order={1} size="clamp(26px,5vw,32px)" mb="xl" textWrap="nowrap">
						Work Experience
					</Title>
				</Center>

				<WorkExperienceAccordion experiences={experiences} />

				{/* <Accordion>
					{experiences.map((experience, i) => {
						return (
							<Accordion.Item key={i} value={experience.companyName}>
								<Accordion.Control>{experience.companyName}</Accordion.Control>
								<Accordion.Panel>{experience.descriptions}</Accordion.Panel>
							</Accordion.Item>
						);
					})}
				</Accordion> */}
			</section>
		</>
	);
}
