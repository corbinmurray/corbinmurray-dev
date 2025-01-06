import RevealSection from "@/components/reveal-section";
import SectionHeader from "@/components/section-header";

export default async function Home() {
	return (
		<RevealSection className="mt-12 md:mt-16">
			<SectionHeader title="Welcome to my digital garden" punctuation="exclamation mark" />


			<article>
				<p>
					Hi, 👋 my name is <span className="text-primary font-semibold text-lg">Corbin Murray</span>. I am a{" "}
					<span className="font-bold">software engineer</span> who loves to solve complex problems.
				</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium laudantium impedit distinctio eveniet neque. Architecto, recusandae consequatur
					quidem ex exercitationem, harum, ab nobis rem aliquid quibusdam sint dolorem veniam sapiente?
				</p>
			</article>
		</RevealSection>
	);
}
