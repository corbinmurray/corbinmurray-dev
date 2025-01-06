import RevealSection from "@/components/reveal-section";
import SectionHeader from "@/components/section-header";

export default async function Page() {
	return (
		<RevealSection>
			<SectionHeader title="About me" />

			<article>
				<p>
					Time to dig into the good stuff -- as a software engineer passionate about creating innovative solutions and tackling complex challenges. My
					professional interests include backend development, event-driven architecture, and building systems that are both scalable and efficient. I thrive in
					collaborative environments where creativity meets purpose, and I love working with modern tech stacks to bring ideas to life.
				</p>
			</article>

			<article>
				<p>
					When I&apos;m not coding, you&apos;ll often find me spending time with my wife and our two dogs, Pretzel and Ink. I&apos;m also a huge fan of
					weightlifting, soccer, and the occasional DIY project. Whether it&apos;s exploring local coffee shops, getting lost in nature, or diving into a good
					video game, I try to find balance between my professional and personal passions.
				</p>
			</article>

			<article>
				<p>
					This site is a reflection of all those facets—my love for software development, my curiosity for learning, and the things that make life fun along the
					way.
				</p>
			</article>
		</RevealSection>
	);
}
