import RevealSection from "@/components/reveal-section";
import SectionHeader from "@/components/section-header";

export default async function Page() {
	return (
		<RevealSection>
			<SectionHeader title="About me" />

			<article>
				<p>Hello! My name is Corbin, and I enjoy solving tough technical problems and creating impactful software.</p>
			</article>

			<article>
				<p>
					I have a deep passion for bringing ideas to life through software development. Tackling challenges that require creativity and critical thinking
					excites me, and I find immense satisfaction in uncovering solutions that drive meaningful outcomes. The ever-evolving nature of technology keeps me
					motivated to continuously learn, improve, and push boundaries. Whether it&apos;s debugging intricate issues, architecting scalable systems, or
					exploring new technologies, I thrive on the growth and innovation each opportunity brings.
				</p>
			</article>

			<article>
				<p>
					When I&apos;m not working, I love spending time with my wife, our two dogs Pretzel and Ink, and hanging out with friends and family. I&apos;m
					passionate about staying active, whether it&apos;s playing soccer, hitting the gym, or enjoying outdoor activities like fishing. When it&apos;s time
					to relax, you&apos;ll often find me playing video games, reading, or exploring new hobbies.
				</p>
			</article>
		</RevealSection>
	);
}
