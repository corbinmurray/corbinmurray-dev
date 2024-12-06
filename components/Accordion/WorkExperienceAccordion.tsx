"use client";

import { Accordion, Box, Flex, Text, Title } from "@mantine/core";

const WorkExperienceAccordion = ({
	experiences,
}: {
	experiences: { dateRange: string; companyName: string; positionTitle: string; descriptions: string[] }[];
}) => {
	return (
		<Accordion>
			{experiences.map((experience, i) => {
				return (
					<Accordion.Item key={i} value={experience.companyName}>
						<Accordion.Control>
							<Flex justify="space-between" align="center" px="sm">
								<Title order={4}>{experience.companyName}</Title>
								<Text size="xs">
									<em>{experience.dateRange}</em>{" "}
								</Text>
							</Flex>
						</Accordion.Control>

						<Accordion.Panel>
							<Box px="sm">
								<Title order={5} mb="md">{experience.positionTitle}</Title>
								{experience.descriptions.map((description, ii) => {
									return (
										<Box key={ii}>
											<Text>{description}</Text>
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
