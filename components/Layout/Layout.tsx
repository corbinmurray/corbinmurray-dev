"use client";
import ColorThemeSwitch from "@/components/ColorThemeSwitch/ColorThemeSwitch";
import EmailSvg from "@/components/EmailSvg";
import GitHubSvg from "@/components/GitHubSvg";
import LinkedInSvg from "@/components/LinkedInSvg";
import LogoSvg from "@/components/LogoSvg/LogoSvg";
import { AppShell, Burger, Container, Flex, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import classes from "./Layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell
			header={{
				height: {
					base: 100,
				},
			}}
			navbar={{
				width: {
					base: 100,
					sm: 150,
					lg: 200,
				},
				breakpoint: "sm",
				collapsed: { mobile: !opened },
			}}
			padding="xl">
			<AppShell.Header p="xl" withBorder={false}>
				<Flex align="center" justify="space-between">
					<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="md" />
					<LogoSvg height={40} width={40} />
					<Group visibleFrom="sm">
						<Link href="#projects" className={clsx(classes["nav-link"])}>
							Projects
						</Link>
						<ColorThemeSwitch />
					</Group>
				</Flex>
			</AppShell.Header>

			<AppShell.Navbar p="xl" withBorder={false}>
				<Stack gap="lg" justify="center" align="flex-start" h="100%" visibleFrom="sm">
					<GitHubSvg className={classes["social-link"]} />
					<LinkedInSvg className={classes["social-link"]} />
					<EmailSvg className={classes["social-link"]} />
				</Stack>

				<Stack hiddenFrom="sm" align="center">
					<Link href="#about" className={clsx(classes["nav-link"])} onClick={toggle}>
						About Me
					</Link>
					<Link href="#experience" className={clsx(classes["nav-link"])} onClick={toggle}>
						Work Experience
					</Link>
					<Link href="#projects" className={clsx(classes["nav-link"])} onClick={toggle}>
						Projects
					</Link>
					<ColorThemeSwitch />
				</Stack>
			</AppShell.Navbar>

			<AppShell.Main>
				<Container p="0">{children}</Container>
			</AppShell.Main>
		</AppShell>
	);
}
