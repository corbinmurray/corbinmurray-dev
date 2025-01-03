import RevealSection from "@/components/reveal-section";

export default async function Home() {
	return (
		<RevealSection className="mt-12 md:mt-16">
			<h1 className="text-[clamp(14px,5vw,16px)] md:text-[clamp(14px,5vw,18px)] font-mono">Hi, my name is</h1>

			<h2 className="text-[clamp(40px,8vw,60px)] font-semibold border-none leading-tight text-primary py-3">Corbin Murray</h2>

			<article className="prose-p:m-0">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ratione sit, optio recusandae cupiditate minus odio distinctio unde quisquam adipisci
					molestiae? Non quam atque dolore sunt! Modi odit accusantium minus?
				</p>
			</article>
		</RevealSection>
	);
}
