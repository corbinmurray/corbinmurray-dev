import RevealSection from "@/components/reveal-section";
import SectionHeader from "@/components/section-header";

export default async function Home() {
	return (
		<RevealSection className="mt-12 md:mt-16">
			<SectionHeader title="Welcome to my digital garden" punctuation="!" />

			<article>
				<p>
					Hi, 👋 my name is <span className="text-primary font-semibold text-lg">Corbin Murray</span>. I am a{" "}
					<span className="font-bold">software engineer</span> who loves to solve complex problems.
				</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium laudantium impedit distinctio eveniet neque. Architecto, recusandae consequatur
					quidem ex exercitationem, harum, ab nobis rem aliquid quibusdam sint dolorem veniam sapiente?
				</p>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quidem quod officia qui molestias? Nesciunt unde maiores autem amet sapiente
					tempore cumque, culpa error quisquam veritatis ex, quod expedita eveniet!
				</p>
			</article>
		</RevealSection>
	);
}
