"use client";

import { Accordion, Box, Flex, Text, Title } from "@mantine/core";

const WorkExperienceAccordion = ({
	experiences,
}: {
	experiences: { dateRange: string; companyName: string; positionTitle: string; descriptions: string[] }[];
}) => {
	return (
		<Accordion multiple defaultValue={[experiences[0].companyName]}>
			{experiences.map((experience, i) => {
				return (
					<Accordion.Item key={i} value={experience.companyName}>
						<Accordion.Control>
							<Flex justify="space-between" align="center" px="sm">
								<Text c="neutral" size="lg">
									{experience.companyName}
								</Text>
								<Text size="xs">
									<em>{experience.dateRange}</em>{" "}
								</Text>
							</Flex>
						</Accordion.Control>

						<Accordion.Panel>
							<Box px="sm">
								<Title order={5} mb="md">
									{experience.positionTitle}
								</Title>
								{experience.descriptions.map((description, ii) => {
									return (
										<Box key={ii}>
											<Text maw="65ch">{description}</Text>
											<br />
										</Box>
									);
								})}
							</Box>
						</Accordion.Panel>
					</Accordion.Item>
				);
			})}
		</Accordion>
	);
};

export default WorkExperienceAccordion;
