import RevealSection from "@/components/reveal-section";
import SectionHeader from "@/components/section-header";

export default async function Home() {
	return (
		<RevealSection className="mt-12 md:mt-16">
			<SectionHeader title="Welcome to my digital garden" punctuation="!" />

			<article>
				<p>
					Hi, <span className="animate-waving-hand">👋</span> I&apos;m <span className="text-primary font-semibold text-lg md:text-xl">Corbin Murray</span>. I
					am a <span className="font-bold">software engineer</span> who loves turning big ideas into practical, working solutions.
				</p>
				<p>
					Welcome to my small slice of the internet, where I share the projects I&apos;ve built, the things I&apos;ve learned, and the occasional wild
					experiment. Like any good garden, it&apos;s a work in progress — growing, evolving, and sometimes sprouting unexpected ideas. Take a look around, and
					maybe you&apos;ll find something inspiring — or at least worth chatting about!
				</p>
				{/* <p>
					I&apos;ve always been fascinated by the art and logic of software development. There&apos;s something incredibly rewarding about reigning in the chaos and crafting something meaningful, whether it&apos;s a tool to solve a tricky problem or a seamless experience for users. This space is my way of
					combining that passion with a little creativity and curiosity. 
				</p> */}
			</article>
		</RevealSection>
	);
}
