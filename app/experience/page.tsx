import RevealSection from "@/components/reveal-section";
import SectionHeader from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import experiences from "@/lib/experiences.json";

export default async function Page() {
	return (
		<>
			<RevealSection id="experience" className="scroll-mt-40">
				<SectionHeader sequence={2} title="Experience" />
			</RevealSection>

			{experiences.map((experience, i) => {
				return (
					<RevealSection key={i}>
						<article className="flex flex-col gap-y-3 mb-16 border-b">
							<div className="flex justify-start items-baseline">
								<h3 className="m-0">{experience.companyName}</h3>
								<h3 className="italic text-sm ms-10">{experience.dateRange}</h3>
							</div>

							<div>
								<span className="text-primary font-semibold text-md">{experience.positionTitle}</span>
							</div>

							{experience.descriptions.map((description, ii) => {
								return (
									<p key={ii} className="mb-0">
										{description}
									</p>
								);
							})}

							<ul className="list-none p-0 m-0 flex flex-row flex-wrap">
								{experience.skills.map((skill, ii) => {
									return (
										<li key={ii} className="text-nowrap">
											<Badge variant="accent">{skill}</Badge>
										</li>
									);
								})}
							</ul>
						</article>
					</RevealSection>
				);
			})}
		</>
	);
}
