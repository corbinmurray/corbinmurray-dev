import { Button, Stack, Text, Title } from "@mantine/core";
import clsx from "clsx";
import classes from "./page.module.css";
export default function HomePage() {
	return (
		<>
			<section id="hero" className={clsx(classes.hero)}>
				<Stack h="100%" justify="center">
					<Title order={3} size="clamp(14px,5vw,16px)" opacity={0.8} className={clsx(classes["font-mono"])}>
						Hi, my name is
					</Title>
					<Title order={1} size="clamp(40px,8vw,80px)" fw={600} textWrap="nowrap" className={clsx(classes["text-primary"], classes["font-sans"])}>
						Corbin Murray.
					</Title>
					<Title order={2} size="clamp(30px,6vw,70px)" opacity={0.6} fw={600} className={clsx(classes["font-sans"])}>
						I build software.
					</Title>
					<Text opacity={0.8} className={clsx(classes["font-sans"])}>
						I lead projects focused on optimizing software processes and ensuring scalable solutions. My career spans developing complex integrations, building
						robust microservices, and mentoring teams to establish standards in fast-paced environments.
					</Text>
					<Button component="a" href="/Corbin Murray - Resume.pdf" target="_blank" variant="outline" color="accent" mt="md">
						Resume
					</Button>
				</Stack>
			</section>
		</>
	);
}
